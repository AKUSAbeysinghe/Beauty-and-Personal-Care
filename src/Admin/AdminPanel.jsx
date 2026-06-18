import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    category_id: "",
    sub_category_id: "",
    name: "",
    price: "",
    description: "",
    image: null,
    popular: false,
    stock: 0,
  });

  const [admin] = useState({
    name: "Lunaria Admin",
    email: "admin@lunaria.lk",
    profilePic: "https://i.pravatar.cc/100?img=25",
  });

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost/skincare_db/api/get_categories.php");
      const data = await res.json();

      if (data.success && data.data) {
        setCategories(data.data);
        if (data.data.length > 0) {
          const firstCatId = data.data[0].id;
          setFormData(prev => ({ ...prev, category_id: firstCatId }));
          fetchSubCategories(firstCatId);
        }
      }
    } catch (err) {
      setError("Cannot connect to server.");
    }
  };

  // Fetch Subcategories
  const fetchSubCategories = async (categoryId) => {
    if (!categoryId) return;
    try {
      const res = await fetch(
        `http://localhost/skincare_db/api/get_subcategories.php?category_id=${categoryId}`
      );
      const data = await res.json();
      if (data.success) {
        setSubCategories(data.data || []);
        if (data.data?.length > 0) {
          setFormData(prev => ({ ...prev, sub_category_id: data.data[0].id }));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost/skincare_db/api/get_products.php");
      const data = await res.json();
      if (data.success) setProducts(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked
            : type === "file" ? files[0]
            : name === "price" || name === "stock" ? Number(value) || 0
            : value,
    }));

    if (name === "category_id") {
      setFormData((prev) => ({ ...prev, sub_category_id: "" }));
      fetchSubCategories(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    if (!formData.name || !formData.price || !formData.category_id || !formData.sub_category_id) {
      setError("⚠️ Name, Price, Category, and Subcategory are required.");
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== undefined) {
        formDataToSend.append(key, formData[key]);
      }
    });

    if (isEditing) formDataToSend.append("id", editId);

    try {
      const url = isEditing
        ? "http://localhost/skincare_db/api/update_product.php"
        : "http://localhost/skincare_db/api/add_product.php";

      const res = await fetch(url, { method: "POST", body: formDataToSend });
      const result = await res.json();

      if (result.success) {
        setMessage(isEditing ? "✅ Updated successfully!" : "✅ Service added successfully!");
        setShowForm(false);
        resetForm();
        fetchProducts();
      } else {
        setError(result.message || "Failed to save");
      }
    } catch (err) {
      setError("Server error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      category_id: categories.length > 0 ? categories[0].id : "",
      sub_category_id: "",
      name: "",
      price: "",
      description: "",
      image: null,
      popular: false,
      stock: 0,
    });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (product) => {
    setFormData({
      category_id: product.category_id,
      sub_category_id: product.sub_category_id,
      name: product.name,
      price: product.price,
      description: product.description || "",
      image: null,
      popular: Boolean(product.popular),
      stock: product.stock || 0,
    });
    fetchSubCategories(product.category_id);
    setIsEditing(true);
    setEditId(product.id);
    setShowForm(true);
  };

  const confirmDelete = (id) => {
    setItemToDelete(id);
    setShowConfirmModal(true);
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch("http://localhost/skincare_db/api/delete_product.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${itemToDelete}`,
      });
      const result = await res.json();
      if (result.success) {
        setMessage("✅ Deleted successfully!");
        setProducts(prev => prev.filter(p => p.id !== itemToDelete));
      }
    } catch (err) {
      setError("Delete failed");
    } finally {
      setShowConfirmModal(false);
      setItemToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white text-3xl font-bold">L</div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Lunaria</h1>
              <p className="text-gray-500">Admin Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img 
              src={admin.profilePic} 
              alt="admin" 
              className="w-12 h-12 rounded-full border-2 border-gray-300" 
            />
            <div className="text-right">
              <p className="font-semibold">{admin.name}</p>
              <p className="text-sm text-gray-500">{admin.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Messages */}
        {message && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-2xl font-medium">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-2xl font-medium">
            {error}
          </div>
        )}

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold tracking-tight">Services & Products</h2>
          <button
            onClick={() => { resetForm(); setShowForm(true); }}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3.5 rounded-2xl font-semibold flex items-center gap-2 transition"
          >
            + Add New Service
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-3xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-5 text-left">Image</th>
                  <th className="p-5 text-left">Service Name</th>
                  <th className="p-5 text-left">Category</th>
                  <th className="p-5 text-left">Subcategory</th>
                  <th className="p-5 text-left">Price</th>
                  <th className="p-5 text-left">Stock</th>
                  <th className="p-5 text-left">Popular</th>
                  <th className="p-5 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="p-20 text-center text-gray-400">
                      No services added yet
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                      <td className="p-5">
                        <img
                          src={
                            product.image_url
                              ? `http://localhost/skincare_db/${product.image_url}`
                              : "https://via.placeholder.com/80x80?text=Lunaria"
                          }
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-2xl"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/80x80?text=No+Image"; }}
                        />
                      </td>
                      <td className="p-5 font-semibold">{product.name}</td>
                      <td className="p-5 text-gray-600">{product.category_name || "—"}</td>
                      <td className="p-5 text-gray-600">{product.sub_category_name || "—"}</td>
                      <td className="p-5 font-semibold text-lg">Rs. {Number(product.price).toLocaleString()}</td>
                      <td className="p-5">{product.stock}</td>
                      <td className="p-5">
                        <span className={`px-3 py-1 rounded-full text-sm ${product.popular ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                          {product.popular ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="p-5 space-x-3">
                        <button 
                          onClick={() => handleEdit(product)} 
                          className="bg-black text-white px-5 py-2 rounded-2xl text-sm hover:bg-gray-800 transition"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => confirmDelete(product.id)} 
                          className="bg-red-600 text-white px-5 py-2 rounded-2xl text-sm hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ==================== IMPROVED RESPONSIVE POPUP FORM ==================== */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <form 
            onSubmit={handleSubmit} 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[95vh] overflow-y-auto my-4"
          >
            <div className="p-6 sm:p-8">
              <h3 className="text-3xl font-bold mb-8 text-center">
                {isEditing ? "Edit Service" : "Add New Service"}
              </h3>

              <select name="category_id" value={formData.category_id} onChange={handleChange} className="w-full p-4 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black" required>
                <option value="">Select Category</option>
                {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </select>

              <select name="sub_category_id" value={formData.sub_category_id} onChange={handleChange} className="w-full p-4 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black" required>
                <option value="">Select Subcategory</option>
                {subCategories.map(sub => <option key={sub.id} value={sub.id}>{sub.name}</option>)}
              </select>

              <input type="text" name="name" placeholder="Service Name" value={formData.name} onChange={handleChange} className="w-full p-4 mb-4 border border-gray-300 rounded-2xl" required />

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Price (Rs.)</label>
                  <input type="number" name="price" step="0.01" value={formData.price} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-2xl" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Stock</label>
                  <input type="number" name="stock" value={formData.stock} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-2xl" />
                </div>
              </div>

              <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-4 mb-4 border border-gray-300 rounded-2xl h-28" />

              <div className="flex items-center gap-3 mb-6">
                <input type="checkbox" name="popular" checked={formData.popular} onChange={handleChange} className="w-5 h-5" />
                <label className="font-medium">Mark as Popular Service</label>
              </div>

              <div className="mb-8">
                <label className="block mb-2 font-medium">Service Image</label>
                <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full" />
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t">
                <button type="button" onClick={() => setShowForm(false)} className="px-8 py-3 border border-gray-300 rounded-2xl font-medium hover:bg-gray-100">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-black text-white rounded-2xl font-semibold hover:bg-gray-800 disabled:opacity-70">
                  {isSubmitting ? "Saving..." : isEditing ? "Update Service" : "Add Service"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold mb-4">Confirm Delete</h3>
            <p className="mb-8 text-gray-600">This action cannot be undone.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setShowConfirmModal(false)} className="px-8 py-3 border border-gray-300 rounded-2xl">Cancel</button>
              <button onClick={handleDelete} className="px-8 py-3 bg-red-600 text-white rounded-2xl">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;