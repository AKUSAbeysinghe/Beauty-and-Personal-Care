// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("services");
//   const [showForm, setShowForm] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [services, setServices] = useState([]);
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [galleryFilter, setGalleryFilter] = useState("all");
//   const [imageData, setImageData] = useState({ image: null, category: "all" });
//   const [formData, setFormData] = useState([
//     {
//       category_id: "",
//       sub_category_id: "",
//       name: "",
//       price: "",
//       description: "",
//       image: null,
//       type: "standard",
//     },
//   ]);

//   const [admin, setAdmin] = useState({
//     name: "Loading...",
//     email: "Loading...",
//     profilePic: "https://i.pravatar.cc/100?img=25",
//   });
//   const [adminLoading, setAdminLoading] = useState(true);

//   const navigate = useNavigate();

//   // Predefined service categories and sub-services
//   const predefinedCategories = [
//     { id: 1, name: "Salons & Spas", description: "Beauty and relaxation services", priority: 1 },
//     { id: 2, name: "Cosmetics Retail", description: "Retail for beauty products", priority: 2 },
//     { id: 3, name: "Barber & Grooming", description: "Men's grooming and barber services", priority: 3 },
//   ];

//   const predefinedSubCategories = {
//     1: [
//       { id: 1, category_id: 1, name: "Beauty Salons", description: "Hair and beauty treatments", priority: 1 },
//       { id: 2, category_id: 1, name: "Spas", description: "Relaxation and wellness spas", priority: 2 },
//       { id: 3, category_id: 1, name: "Facials & Skincare", description: "Skincare treatments and facials", priority: 3 },
//       { id: 4, category_id: 1, name: "Massage Therapy", description: "Therapeutic massage services", priority: 4 },
//     ],
//     2: [
//       { id: 5, category_id: 2, name: "Cosmetics Retail", description: "General cosmetics retail", priority: 1 },
//       { id: 6, category_id: 2, name: "Sephora Brands", description: "Sephora-branded products", priority: 2 },
//       { id: 7, category_id: 2, name: "Ulta Beauty Products", description: "Ulta Beauty product lines", priority: 3 },
//       { id: 8, category_id: 2, name: "Makeup & Skincare", description: "Makeup and skincare products", priority: 4 },
//     ],
//     3: [
//       { id: 9, category_id: 3, name: "Barbershops", description: "Traditional barbershop services", priority: 1 },
//       { id: 10, category_id: 3, name: "Grooming Services", description: "Men's grooming services", priority: 2 },
//       { id: 11, category_id: 3, name: "Haircuts & Styling", description: "Haircuts and styling for men", priority: 3 },
//       { id: 12, category_id: 3, name: "Beard Grooming", description: "Beard trimming and grooming", priority: 4 },
//     ],
//   };

//   // Predefined services for Services tab
//   const predefinedServices = [
//     {
//       id: 1,
//       category_id: 1,
//       category_name: "Salons & Spas",
//       sub_category_id: 1,
//       sub_category_name: "Beauty Salons",
//       name: "Scalp Treatment",
//       price: 1500,
//       description: "Nourishing treatment to promote healthy scalp and hair growth",
//       image_url: "https://via.placeholder.com/150?text=Scalp+Treatment",
//       type: "standard",
//     },
//     {
//       id: 2,
//       category_id: 1,
//       category_name: "Salons & Spas",
//       sub_category_id: 2,
//       sub_category_name: "Spas",
//       name: "Detox Body Wrap",
//       price: 3000,
//       description: "Cleansing body wrap to detoxify and rejuvenate skin, prices may vary",
//       image_url: "https://via.placeholder.com/150?text=Detox+Body+Wrap",
//       type: "standard",
//     },
//     {
//       id: 3,
//       category_id: 1,
//       category_name: "Salons & Spas",
//       sub_category_id: 3,
//       sub_category_name: "Facials & Skincare",
//       name: "Acne-Clearing Facial",
//       price: 2500,
//       description: "Targeted facial to reduce acne and improve skin clarity",
//       image_url: "https://via.placeholder.com/150?text=Acne-Clearing+Facial",
//       type: "standard",
//     },
//     {
//       id: 4,
//       category_id: 1,
//       category_name: "Salons & Spas",
//       sub_category_id: 4,
//       sub_category_name: "Massage Therapy",
//       name: "Swedish Massage",
//       price: 3500,
//       description: "Relaxing full-body massage to ease tension and promote relaxation",
//       image_url: "https://via.placeholder.com/150?text=Swedish+Massage",
//       type: "standard",
//     },
//     {
//       id: 5,
//       category_id: 1,
//       category_name: "Salons & Spas",
//       sub_category_id: 1,
//       sub_category_name: "Beauty Salons",
//       name: "Nail Art Design",
//       price: 2000,
//       description: "Custom nail art designs with premium polish, prices may vary based on complexity",
//       image_url: "https://via.placeholder.com/150?text=Nail+Art+Design",
//       type: "standard",
//     },
//   ];

//   // Gallery categories
//   const galleryCategories = [
//     { value: "all", label: "All Photos" },
//     { value: "signature_services", label: "Signature Services" },
//     { value: "salon", label: "Salon" },
//     { value: "retail", label: "Retail" },
//     { value: "events", label: "Events" },
//   ];

//   // Input change handler for multiple services
//   const handleChange = (e, index, isImage = false) => {
//     const { name, value, files } = e.target;
//     if (isImage) {
//       setImageData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
//     } else {
//       const updatedFormData = [...formData];
//       updatedFormData[index] = {
//         ...updatedFormData[index],
//         [name]: files ? files[0] : value,
//       };
//       if (name === "category_id") {
//         setSubCategories(predefinedSubCategories[value] || []);
//         updatedFormData[index].sub_category_id = "";
//       }
//       setFormData(updatedFormData);
//     }
//   };

//   // Add new service entry to form
//   const addServiceEntry = () => {
//     setFormData((prev) => [
//       ...prev,
//       {
//         category_id: categories.length > 0 ? categories[0].id : "",
//         sub_category_id: "",
//         name: "",
//         price: "",
//         description: "",
//         image: null,
//         type: "standard",
//       },
//     ]);
//   };

//   // Remove service entry from form
//   const removeServiceEntry = (index) => {
//     setFormData((prev) => prev.filter((_, i) => i !== index));
//   };

//   // Fetch Admin Details
//   const fetchAdmin = async () => {
//     setAdminLoading(true);
//     try {
//       let adminId = localStorage.getItem("adminId") || 1;
//       const res = await fetch(`http://localhost/food_and_restaurant/get_admin.php?id=${adminId}`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       if (data.success && data.admin) {
//         setAdmin({
//           name: data.admin.username || "Temporary Admin",
//           email: data.admin.email || "No email provided",
//           profilePic: "https://i.pravatar.cc/100?img=25",
//         });
//       } else {
//         setAdmin({
//           name: "Temporary Admin",
//           email: "No email provided",
//           profilePic: "https://i.pravatar.cc/100?img=25",
//         });
//       }
//     } catch (e) {
//       setAdmin({
//         name: "Temporary Admin",
//         email: "No email provided",
//         profilePic: "https://i.pravatar.cc/100?img=25",
//       });
//     } finally {
//       setAdminLoading(false);
//     }
//   };

//   // Fetch Categories
//   const fetchCategories = async () => {
//     try {
//       const res = await fetch("http://localhost/food_and_restaurant/get_categories.php", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await res.json();
//       if (data.success && Array.isArray(data.data)) {
//         setCategories(data.data);
//         if (data.data.length > 0) {
//           setFormData((prev) =>
//             prev.map((service) => ({ ...service, category_id: data.data[0].id }))
//           );
//           setSubCategories(predefinedSubCategories[data.data[0].id] || []);
//         }
//       } else {
//         setCategories(predefinedCategories);
//         setSubCategories(predefinedSubCategories[predefinedCategories[0].id] || []);
//         setError("⚠️ Using predefined categories.");
//       }
//     } catch (e) {
//       setCategories(predefinedCategories);
//       setSubCategories(predefinedSubCategories[predefinedCategories[0].id] || []);
//       setError("⚠️ Could not fetch categories: " + e.message);
//     }
//   };

//   // Fetch Services
//   const fetchServices = async () => {
//     try {
//       const res = await fetch("http://localhost/food_and_restaurant/get_services.php");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       if (data.success === false) {
//         setError(data.message || "⚠️ Could not fetch services. Using predefined services.");
//         setServices(predefinedServices.filter((s) => s.type === "standard"));
//       } else {
//         setServices(Array.isArray(data.data) ? data.data.filter((s) => s.type === "standard") : predefinedServices.filter((s) => s.type === "standard"));
//       }
//     } catch (e) {
//       setError("⚠️ Could not fetch services: " + e.message + ". Using predefined services.");
//       setServices(predefinedServices.filter((s) => s.type === "standard"));
//     }
//   };

//   // Fetch Gallery Images
//   const fetchGalleryImages = async () => {
//     try {
//       const res = await fetch("http://localhost/food_and_restaurant/get_gallery_images.php");
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       setGalleryImages(Array.isArray(data) ? data : []);
//     } catch (e) {
//       setError("⚠️ Could not fetch gallery images.");
//     }
//   };

//   useEffect(() => {
//     fetchAdmin();
//     fetchCategories();
//     fetchServices();
//     fetchGalleryImages();
//   }, []);

//   // Save / Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setIsSubmitting(true);

//     const isGallery = activeTab === "gallery";

//     if (isGallery && !imageData.image && !isEditing) {
//       setError("⚠️ Please select an image.");
//       setIsSubmitting(false);
//       return;
//     }

//     if (!isGallery) {
//       for (let service of formData) {
//         if (!service.name || !service.price || !service.category_id || service.price < 0) {
//           setError("⚠️ Name, price, and category are required for all services, and price must be non-negative.");
//           setIsSubmitting(false);
//           return;
//         }
//       }
//     }

//     try {
//       if (isGallery) {
//         const data = new FormData();
//         Object.keys(imageData).forEach((k) => data.append(k, imageData[k]));
//         if (isEditing) data.append("id", editId);

//         const url = isEditing
//           ? "http://localhost/food_and_restaurant/update_gallery_image.php"
//           : "http://localhost/food_and_restaurant/add_gallery_image.php";

//         const res = await fetch(url, { method: "POST", body: data });
//         const result = await res.json();

//         if (!res.ok || !result.success) {
//           setError(result.message || "❌ Save failed");
//         } else {
//           setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
//           setShowForm(false);
//           setImageData({ image: null, category: "all" });
//           await fetchGalleryImages();
//           setIsEditing(false);
//           setEditId(null);
//         }
//       } else {
//         // Handle multiple services
//         let successCount = 0;
//         for (let service of formData) {
//           const data = new FormData();
//           Object.keys(service).forEach((k) => data.append(k, service[k]));
//           if (isEditing && editId) data.append("id", editId);

//           const url = isEditing && editId
//             ? "http://localhost/food_and_restaurant/update_service.php"
//             : "http://localhost/food_and_restaurant/add_service.php";

//           const res = await fetch(url, { method: "POST", body: data });
//           const result = await res.json();

//           if (!res.ok || !result.success) {
//             setError(result.message || "❌ Failed to save one or more services");
//             setIsSubmitting(false);
//             return;
//           }
//           successCount++;
//         }

//         if (successCount === formData.length) {
//           setMessage(isEditing ? "✅ Updated!" : `✅ ${successCount} service(s) saved successfully!`);
//           setShowForm(false);
//           setFormData([
//             {
//               category_id: categories.length > 0 ? categories[0].id : "",
//               sub_category_id: "",
//               name: "",
//               price: "",
//               description: "",
//               image: null,
//               type: "standard",
//             },
//           ]);
//           await fetchServices();
//           setIsEditing(false);
//           setEditId(null);
//         }
//       }
//     } catch (err) {
//       setError("⚠️ Server error while saving");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Delete Confirmation
//   const confirmDelete = (id) => {
//     setItemToDelete(id);
//     setShowConfirmModal(true);
//   };

//   // Delete
//   const handleDelete = async () => {
//     if (!itemToDelete) return;
//     setShowConfirmModal(false);
//     setMessage("");
//     setError("");

//     try {
//       const url = activeTab === "gallery"
//         ? "http://localhost/food_and_restaurant/delete_gallery_image.php"
//         : "http://localhost/food_and_restaurant/delete_service.php";

//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `id=${itemToDelete}`,
//       });

//       const result = await res.json();
//       if (result.success) {
//         if (activeTab === "gallery") {
//           setGalleryImages(galleryImages.filter((img) => img.id !== itemToDelete));
//         } else {
//           setServices(services.filter((item) => item.id !== itemToDelete));
//         }
//         setMessage("✅ Deleted!");
//       } else {
//         setError(result.message || "❌ Delete failed");
//       }
//     } catch (err) {
//       setError("⚠️ Server error while deleting");
//     } finally {
//       setItemToDelete(null);
//     }
//   };

//   // Edit
//   const handleEdit = (item) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setEditId(item.id);

//     if (activeTab === "gallery") {
//       setImageData({ image: null, category: item.category || "all" });
//     } else {
//       setFormData([
//         {
//           category_id: item.category_id || (categories.length > 0 ? categories[0].id : ""),
//           sub_category_id: item.sub_category_id || "",
//           name: item.name || "",
//           price: item.price || "",
//           description: item.description || "",
//           image: null,
//           type: "standard",
//         },
//       ]);
//       setSubCategories(predefinedSubCategories[item.category_id] || []);
//     }
//   };

//   // Filter gallery images based on selected category
//   const filteredGalleryImages = galleryFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === galleryFilter);

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
//       {/* Admin Panel Header */}
//       <div className="flex items-center justify-between mb-8 bg-white rounded-xl shadow-lg p-6 border-b-2 border-gray-200">
//         <div className="flex items-center gap-6">
//           <div className="relative">
//             <img
//               src={admin.profilePic}
//               alt="admin"
//               className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
//               onError={(e) => {
//                 e.target.src = "https://via.placeholder.com/100?text=No+Image";
//               }}
//             />
//             <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
//           </div>
//           <div>
//             <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{admin.name}</h1>
//             <p className="text-md text-gray-600 mt-1">{admin.email}</p>
//             <p className="text-sm font-semibold text-green-600 mt-1 tracking-wide">Admin Panel</p>
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <button
//             className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
//               activeTab === "services" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//             onClick={() => setActiveTab("services")}
//           >
//             Services
//           </button>
//           <button
//             className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
//               activeTab === "gallery" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//             onClick={() => setActiveTab("gallery")}
//           >
//             Gallery
//           </button>
//         </div>
//       </div>

//       {/* Alerts & Messages */}
//       {message && (
//         <div className="mb-6 p-4 rounded-lg bg-green-200 text-green-800 border-2 border-green-400 font-medium transition-all duration-300">
//           {message}
//         </div>
//       )}
//       {error && (
//         <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium transition-all duration-300">
//           {error}
//         </div>
//       )}

//       {/* Action Button */}
//       <div className="mb-6">
//         <button
//           className="bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
//           onClick={() => {
//             setShowForm(true);
//             setIsEditing(false);
//             setEditId(null);
//             setImageData({ image: null, category: "all" });
//             setFormData([
//               {
//                 category_id: categories.length > 0 ? categories[0].id : "",
//                 sub_category_id: "",
//                 name: "",
//                 price: "",
//                 description: "",
//                 image: null,
//                 type: "standard",
//               },
//             ]);
//             setSubCategories(predefinedSubCategories[categories[0]?.id] || []);
//           }}
//         >
//           <span className="font-semibold">+ Add {activeTab === "gallery" ? "Image" : "Service"}</span>
//         </button>
//       </div>

//       {/* Services Table */}
//       {activeTab === "services" && (
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Services</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto border-collapse">
//               <thead className="bg-gray-200 text-gray-700">
//                 <tr className="border-b-2 border-gray-300">
//                   <th className="p-4 text-left">ID</th>
//                   <th className="p-4 text-left">Image</th>
//                   <th className="p-4 text-left">Name</th>
//                   <th className="p-4 text-left">Category</th>
//                   <th className="p-4 text-left">Sub-Category</th>
//                   <th className="p-4 text-left">Price</th>
//                   <th className="p-4 text-left">Description</th>
//                   <th className="p-4 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {services.length === 0 ? (
//                   <tr>
//                     <td colSpan="8" className="p-6 text-center text-gray-400">
//                       No services available
//                     </td>
//                   </tr>
//                 ) : (
//                   services.map((item) => (
//                     <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
//                       <td className="p-4">{item.id}</td>
//                       <td className="p-4">
//                         {item.image_url ? (
//                           <img
//                             src={item.image_url}
//                             alt={item.name}
//                             className="w-14 h-14 object-cover rounded-md shadow-sm"
//                             onError={(e) => {
//                               e.target.src = "https://via.placeholder.com/150?text=No+Image";
//                               console.error(`Failed to load image: ${item.image_url}`);
//                             }}
//                           />
//                         ) : (
//                           "No Image"
//                         )}
//                       </td>
//                       <td className="p-4 font-medium">{item.name}</td>
//                       <td className="p-4">{item.category_name || "Unknown"}</td>
//                       <td className="p-4">{item.sub_category_name || "None"}</td>
//                       <td className="p-4 text-gray-600">Rs.{Number(item.price).toFixed(2)}</td>
//                       <td className="p-4">{item.description || "N/A"}</td>
//                       <td className="p-4 space-x-2">
//                         <button
//                           onClick={() => handleEdit(item)}
//                           className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => confirmDelete(item.id)}
//                           className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Gallery Table */}
//       {activeTab === "gallery" && (
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Gallery</h2>
//           <div className="mb-4 flex gap-2 flex-wrap">
//             {galleryCategories.map((cat) => (
//               <button
//                 key={cat.value}
//                 className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
//                   galleryFilter === cat.value ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//                 onClick={() => setGalleryFilter(cat.value)}
//               >
//                 {cat.label}
//               </button>
//             ))}
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto border-collapse">
//               <thead className="bg-gray-200 text-gray-700">
//                 <tr className="border-b-2 border-gray-300">
//                   <th className="p-4 text-left">ID</th>
//                   <th className="p-4 text-left">Image</th>
//                   <th className="p-4 text-left">Category</th>
//                   <th className="p-4 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredGalleryImages.length === 0 ? (
//                   <tr>
//                     <td colSpan="4" className="p-6 text-center text-gray-400">
//                       No images available
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredGalleryImages.map((img) => (
//                     <tr key={img.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
//                       <td className="p-4">{img.id}</td>
//                       <td className="p-4">
//                         <img
//                           src={img.image_url}
//                           alt={`Image ${img.id}`}
//                           className="w-14 h-14 object-cover rounded-md shadow-sm"
//                           onError={(e) => {
//                             e.target.src = "https://via.placeholder.com/150?text=No+Image";
//                             console.error(`Failed to load image: ${img.image_url}`);
//                           }}
//                         />
//                       </td>
//                       <td className="p-4">{galleryCategories.find((cat) => cat.value === img.category)?.label || img.category}</td>
//                       <td className="p-4 space-x-2">
//                         <button
//                           onClick={() => handleEdit(img)}
//                           className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => confirmDelete(img.id)}
//                           className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* Popup Form */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-2xl transform scale-100 transition-all duration-300 max-h-[80vh] overflow-y-auto"
//           >
//             <h3 className="text-2xl font-bold mb-6 text-center">
//               {isEditing ? `Edit ${activeTab === "gallery" ? "Image" : "Service"}` : `Add New ${activeTab === "gallery" ? "Image" : "Service"}`}
//             </h3>

//             {activeTab === "services" ? (
//               <>
//                 {formData.map((service, index) => (
//                   <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg relative">
//                     <h4 className="text-lg font-semibold mb-4">Service {index + 1}</h4>
//                     {formData.length > 1 && !isEditing && (
//                       <button
//                         type="button"
//                         onClick={() => removeServiceEntry(index)}
//                         className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-semibold"
//                       >
//                         Remove
//                       </button>
//                     )}
//                     <select
//                       name="category_id"
//                       value={service.category_id}
//                       onChange={(e) => handleChange(e, index)}
//                       className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                       required
//                     >
//                       <option value="">Select Category</option>
//                       {categories.map((cat) => (
//                         <option key={cat.id} value={cat.id}>
//                           {cat.name}
//                         </option>
//                       ))}
//                     </select>
//                     <select
//                       name="sub_category_id"
//                       value={service.sub_category_id}
//                       onChange={(e) => handleChange(e, index)}
//                       className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                     >
//                       <option value="">Select Sub-Category (Optional)</option>
//                       {subCategories.map((sub) => (
//                         <option key={sub.id} value={sub.id}>
//                           {sub.name}
//                         </option>
//                       ))}
//                     </select>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Service Name"
//                       value={service.name}
//                       onChange={(e) => handleChange(e, index)}
//                       className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                       required
//                     />
//                     <div className="relative mb-4">
//                       <label className="block text-sm font-semibold mb-2">Price (Rs.)</label>
//                       <div className="flex items-center">
//                         <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">Rs.</span>
//                         <input
//                           type="number"
//                           name="price"
//                           placeholder="0.00"
//                           value={service.price}
//                           onChange={(e) => handleChange(e, index)}
//                           className="w-full p-3 pl-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                           step="0.01"
//                           min="0"
//                           required
//                         />
//                       </div>
//                     </div>
//                     <textarea
//                       name="description"
//                       placeholder="Description (Optional)"
//                       value={service.description}
//                       onChange={(e) => handleChange(e, index)}
//                       className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                     />
//                     <div className="mb-4">
//                       <label className="block text-sm font-semibold mb-2">Image (Optional)</label>
//                       <input
//                         type="file"
//                         name="image"
//                         accept="image/*"
//                         onChange={(e) => handleChange(e, index)}
//                         className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//                       />
//                     </div>
//                   </div>
//                 ))}
//                 {!isEditing && (
//                   <button
//                     type="button"
//                     onClick={addServiceEntry}
//                     className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors"
//                   >
//                     + Add Another Service
//                   </button>
//                 )}
//               </>
//             ) : (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-sm font-semibold mb-2">Image</label>
//                   <input
//                     type="file"
//                     name="image"
//                     accept="image/*"
//                     onChange={(e) => handleChange(e, false, true)}
//                     className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//                     required={!isEditing}
//                   />
//                 </div>
//                 <select
//                   name="category"
//                   value={imageData.category}
//                   onChange={(e) => handleChange(e, false, true)}
//                   className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   required
//                 >
//                   {galleryCategories.map((cat) => (
//                     <option key={cat.value} value={cat.value}>
//                       {cat.label}
//                     </option>
//                   ))}
//                 </select>
//               </>
//             )}

//             <div className="flex justify-between mt-6">
//               <button
//                 type="button"
//                 className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
//                 onClick={() => {
//                   setShowForm(false);
//                   setIsEditing(false);
//                 }}
//                 disabled={isSubmitting}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-gray-900 rounded-full font-semibold text-white hover:bg-gray-700 transition-colors disabled:opacity-50"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Confirmation Modal */}
//       {showConfirmModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
//           <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
//             <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to delete this item? This action cannot be undone.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <button
//                 onClick={() => setShowConfirmModal(false)}
//                 className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-6 py-2 bg-red-600 rounded-full font-semibold text-white hover:bg-red-700 transition-colors"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("services");
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
  const [services, setServices] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [imageData, setImageData] = useState({ image: null, category: "all" });
  const [formData, setFormData] = useState([]);
  const [currentService, setCurrentService] = useState({
    category_id: "",
    sub_category_id: "",
    name: "",
    type: "standard",
  });
  const [sharedFields, setSharedFields] = useState({
    price: "",
    description: "",
    image: null,
  });

  const [admin, setAdmin] = useState({
    name: "Loading...",
    email: "Loading...",
    profilePic: "https://i.pravatar.cc/100?img=25",
  });
  const [adminLoading, setAdminLoading] = useState(true);

  const navigate = useNavigate();

  // Predefined categories, sub-categories, services, and gallery categories
  const predefinedCategories = [
    { id: 1, name: "Salons & Spas", description: "Beauty and relaxation services", priority: 1, to: "/salons-spas" },
    { id: 2, name: "Cosmetics Retail", description: "Retail for beauty products", priority: 2, to: "/cosmetics-retail" },
    { id: 3, name: "Barber & Grooming", description: "Men's grooming and barber services", priority: 3, to: "/barber-grooming" },
  ];

  const predefinedSubCategories = {
    1: [
      { id: 1, category_id: 1, name: "Beauty Salons", description: "Hair and beauty treatments", priority: 1 },
      { id: 2, category_id: 1, name: "Spas", description: "Relaxation and wellness spas", priority: 2 },
      { id: 3, category_id: 1, name: "Facials & Skincare", description: "Skincare treatments and facials", priority: 3 },
      { id: 4, category_id: 1, name: "Massage Therapy", description: "Therapeutic massage services", priority: 4 },
    ],
    2: [
      { id: 5, category_id: 2, name: "Cosmetics Retail", description: "General cosmetics retail", priority: 1 },
      { id: 6, category_id: 2, name: "Sephora Brands", description: "Sephora-branded products", priority: 2 },
      { id: 7, category_id: 2, name: "Ulta Beauty Products", description: "Ulta Beauty product lines", priority: 3 },
      { id: 8, category_id: 2, name: "Makeup & Skincare", description: "Makeup and skincare products", priority: 4 },
    ],
    3: [
      { id: 9, category_id: 3, name: "Barbershops", description: "Traditional barbershop services", priority: 1 },
      { id: 10, category_id: 3, name: "Grooming Services", description: "Men's grooming services", priority: 2 },
      { id: 11, category_id: 3, name: "Haircuts & Styling", description: "Haircuts and styling for men", priority: 3 },
      { id: 12, category_id: 3, name: "Beard Grooming", description: "Beard trimming and grooming", priority: 4 },
    ],
  };

  const predefinedServices = [
    {
      id: 1,
      category_id: 1,
      category_name: "Salons & Spas",
      sub_category_id: 1,
      sub_category_name: "Beauty Salons",
      name: "Scalp Treatment",
      price: 1500,
      description: "Nourishing treatment to promote healthy scalp and hair growth",
      image_url: "https://via.placeholder.com/150?text=Scalp+Treatment",
      type: "standard",
    },
    {
      id: 2,
      category_id: 1,
      category_name: "Salons & Spas",
      sub_category_id: 2,
      sub_category_name: "Spas",
      name: "Detox Body Wrap",
      price: 3000,
      description: "Cleansing body wrap to detoxify and rejuvenate skin, prices may vary",
      image_url: "https://via.placeholder.com/150?text=Detox+Body+Wrap",
      type: "standard",
    },
    {
      id: 3,
      category_id: 1,
      category_name: "Salons & Spas",
      sub_category_id: 3,
      sub_category_name: "Facials & Skincare",
      name: "Acne-Clearing Facial",
      price: 2500,
      description: "Targeted facial to reduce acne and improve skin clarity",
      image_url: "https://via.placeholder.com/150?text=Acne-Clearing+Facial",
      type: "standard",
    },
    {
      id: 4,
      category_id: 1,
      category_name: "Salons & Spas",
      sub_category_id: 4,
      sub_category_name: "Massage Therapy",
      name: "Swedish Massage",
      price: 3500,
      description: "Relaxing full-body massage to ease tension and promote relaxation",
      image_url: "https://via.placeholder.com/150?text=Swedish+Massage",
      type: "standard",
    },
    {
      id: 5,
      category_id: 1,
      category_name: "Salons & Spas",
      sub_category_id: 1,
      sub_category_name: "Beauty Salons",
      name: "Nail Art Design",
      price: 2000,
      description: "Custom nail art designs with premium polish, prices may vary based on complexity",
      image_url: "https://via.placeholder.com/150?text=Nail+Art+Design",
      type: "standard",
    },
  ];

  const galleryCategories = [
    { value: "all", label: "All Photos" },
    { value: "signature_services", label: "Signature Services" },
    { value: "salon", label: "Salon" },
    { value: "retail", label: "Retail" },
    { value: "events", label: "Events" },
  ];

  // Input change handler
  const handleChange = (e, isShared = false) => {
    const { name, value, files } = e.target;
    if (isShared) {
      setSharedFields((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    } else if (activeTab === "gallery") {
      setImageData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
    } else {
      setCurrentService((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (name === "category_id") {
        setSubCategories(predefinedSubCategories[value] || []);
        setCurrentService((prev) => ({ ...prev, sub_category_id: "" }));
      }
    }
  };

  // Add service to formData
  const addServiceEntry = () => {
    if (!currentService.name || !currentService.category_id) {
      setError("⚠️ Service Name and Category are required.");
      return;
    }
    setFormData((prev) => [
      ...prev,
      { ...currentService, type: "standard" },
    ]);
    setMessage(`✅ Service "${currentService.name}" added to list!`);
    // Retain currentService and sharedFields to pre-fill form
  };

  // Fetch Admin Details
  const fetchAdmin = async () => {
    setAdminLoading(true);
    try {
      let adminId = localStorage.getItem("adminId") || 1;
      const res = await fetch(`http://localhost/skincare_db/get_admin.php?id=${adminId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success && data.admin) {
        setAdmin({
          name: data.admin.username || "Temporary Admin",
          email: data.admin.email || "No email provided",
          profilePic: "https://i.pravatar.cc/100?img=25",
        });
      } else {
        setAdmin({
          name: "Temporary Admin",
          email: "No email provided",
          profilePic: "https://i.pravatar.cc/100?img=25",
        });
      }
    } catch (e) {
      setAdmin({
        name: "Temporary Admin",
        email: "No email provided",
        profilePic: "https://i.pravatar.cc/100?img=25",
      });
    } finally {
      setAdminLoading(false);
    }
  };

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost/skincare_db/get_categories.php", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setCategories(data.data);
        const initialCategoryId = currentService.category_id || data.data[0]?.id || predefinedCategories[0].id;
        setSubCategories(predefinedSubCategories[initialCategoryId] || []);
      } else {
        setCategories(predefinedCategories);
        setSubCategories(predefinedSubCategories[predefinedCategories[0].id] || []);
        setError("⚠️ Using predefined categories.");
      }
    } catch (e) {
      setCategories(predefinedCategories);
      setSubCategories(predefinedSubCategories[predefinedCategories[0].id] || []);
      setError("⚠️ Could not fetch categories: " + e.message);
    }
  };

  // Fetch Services
  const fetchServices = async () => {
    try {
      const res = await fetch("http://localhost/skincare_db/get_services.php");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      if (data.success === false) {
        setError(data.message || "⚠️ Could not fetch services. Using predefined services.");
        setServices(predefinedServices.filter((s) => s.type === "standard"));
      } else {
        setServices(Array.isArray(data.data) ? data.data.filter((s) => s.type === "standard") : predefinedServices.filter((s) => s.type === "standard"));
      }
    } catch (e) {
      setError("⚠️ Could not fetch services: " + e.message + ". Using predefined services.");
      setServices(predefinedServices.filter((s) => s.type === "standard"));
    }
  };

  // Fetch Gallery Images
  const fetchGalleryImages = async () => {
    try {
      const res = await fetch("http://localhost/skincare_db/get_gallery_images.php");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setGalleryImages(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("⚠️ Could not fetch gallery images.");
    }
  };

  useEffect(() => {
    fetchAdmin();
    fetchCategories();
    fetchServices();
    fetchGalleryImages();
  }, []);

  // Save / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    const isGallery = activeTab === "gallery";

    if (isGallery && !imageData.image && !isEditing) {
      setError("⚠️ Please select an image.");
      setIsSubmitting(false);
      return;
    }

    if (!isGallery) {
      if (formData.length === 0 && !isEditing) {
        setError("⚠️ Please add at least one service.");
        setIsSubmitting(false);
        return;
      }
      if (!sharedFields.price || sharedFields.price < 0) {
        setError("⚠️ Price is required and must be non-negative.");
        setIsSubmitting(false);
        return;
      }
    }

    try {
      if (isGallery) {
        const data = new FormData();
        Object.keys(imageData).forEach((k) => data.append(k, imageData[k]));
        if (isEditing) data.append("id", editId);

        const url = isEditing
          ? "http://localhost/skincare_db/update_gallery_image.php"
          : "http://localhost/skincare_db/add_gallery_image.php";

        const res = await fetch(url, { method: "POST", body: data });
        const result = await res.json();

        if (!res.ok || !result.success) {
          setError(result.message || "❌ Save failed");
        } else {
          setMessage(isEditing ? "✅ Updated!" : "✅ Saved successfully!");
          setShowForm(false);
          setImageData({ image: null, category: "all" });
          await fetchGalleryImages();
          setIsEditing(false);
          setEditId(null);
        }
      } else {
        let successCount = 0;
        const servicesToSubmit = isEditing ? [{
          category_id: currentService.category_id,
          sub_category_id: currentService.sub_category_id,
          name: currentService.name,
          description: sharedFields.description,
          type: "standard",
        }] : formData;

        for (let service of servicesToSubmit) {
          const data = new FormData();
          data.append("category_id", service.category_id);
          data.append("sub_category_id", service.sub_category_id || "");
          data.append("name", service.name);
          data.append("price", sharedFields.price);
          data.append("description", sharedFields.description || "");
          if (sharedFields.image) data.append("image", sharedFields.image);
          data.append("type", "standard");
          if (isEditing && editId) data.append("id", editId);

          const url = isEditing && editId
            ? "http://localhost/skincare_db/update_service.php"
            : "http://localhost/skincare_db/add_service.php";

          const res = await fetch(url, { method: "POST", body: data });
          const result = await res.json();

          if (!res.ok || !result.success) {
            setError(result.message || "❌ Failed to save one or more services");
            setIsSubmitting(false);
            return;
          }
          successCount++;
        }

        if (successCount === servicesToSubmit.length) {
          setMessage(isEditing ? "✅ Updated!" : `✅ ${successCount} service(s) saved successfully!`);
          setShowForm(false);
          setFormData([]);
          await fetchServices();
          setIsEditing(false);
          setEditId(null);
        }
      }
    } catch (err) {
      setError("⚠️ Server error while saving");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Confirmation
  const confirmDelete = (id) => {
    setItemToDelete(id);
    setShowConfirmModal(true);
  };

  // Delete
  const handleDelete = async () => {
    if (!itemToDelete) return;
    setShowConfirmModal(false);
    setMessage("");
    setError("");

    try {
      const url = activeTab === "gallery"
        ? "http://localhost/skincare_db/delete_gallery_image.php"
        : "http://localhost/skincare_db/delete_service.php";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${itemToDelete}`,
      });

      const result = await res.json();
      if (result.success) {
        if (activeTab === "gallery") {
          setGalleryImages(galleryImages.filter((img) => img.id !== itemToDelete));
        } else {
          setServices(services.filter((item) => item.id !== itemToDelete));
        }
        setMessage("✅ Deleted!");
      } else {
        setError(result.message || "❌ Delete failed");
      }
    } catch (err) {
      setError("⚠️ Server error while deleting");
    } finally {
      setItemToDelete(null);
    }
  };

  // Edit
  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setEditId(item.id);

    if (activeTab === "gallery") {
      setImageData({ image: null, category: item.category || "all" });
    } else {
      setFormData([]);
      setCurrentService({
        category_id: item.category_id || "",
        sub_category_id: item.sub_category_id || "",
        name: item.name || "",
        type: "standard",
      });
      setSharedFields({
        price: item.price || "",
        description: item.description || "",
        image: null,
      });
      setSubCategories(predefinedSubCategories[item.category_id] || []);
    }
  };

  // Filter gallery images
  const filteredGalleryImages = galleryFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === galleryFilter);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
      {/* Admin Panel Header */}
      <div className="flex items-center justify-between mb-8 bg-white rounded-xl shadow-lg p-6 border-b-2 border-gray-200">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={admin.profilePic}
              alt="admin"
              className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100?text=No+Image";
              }}
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{admin.name}</h1>
            <p className="text-md text-gray-600 mt-1">{admin.email}</p>
            <p className="text-sm font-semibold text-green-600 mt-1 tracking-wide">Admin Panel</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === "services" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("services")}
          >
            Services
          </button>
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === "gallery" ? "bg-gray-900 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>
      </div>

      {/* Alerts & Messages */}
      {message && (
        <div className="mb-6 p-4 rounded-lg bg-green-200 text-green-800 border-2 border-green-400 font-medium transition-all duration-300">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium transition-all duration-300">
          {error}
        </div>
      )}

      {/* Action Button */}
      <div className="mb-6">
        <button
          className="bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          onClick={() => {
            setShowForm(true);
            setIsEditing(false);
            setEditId(null);
            setFormData([]);
            setSubCategories(predefinedSubCategories[currentService.category_id] || predefinedSubCategories[predefinedCategories[0].id] || []);
          }}
        >
          <span className="font-semibold">+ Add {activeTab === "gallery" ? "Image" : "Service"}</span>
        </button>
      </div>

      {/* Services Table */}
      {activeTab === "services" && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Sub-Category</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="p-6 text-center text-gray-400">
                      No services available
                    </td>
                  </tr>
                ) : (
                  services.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">{item.id}</td>
                      <td className="p-4">
                        {item.image_url ? (
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-14 h-14 object-cover rounded-md shadow-sm"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150?text=No+Image";
                              console.error(`Failed to load image: ${item.image_url}`);
                            }}
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td className="p-4 font-medium">{item.name}</td>
                      <td className="p-4">{item.category_name || "Unknown"}</td>
                      <td className="p-4">{item.sub_category_name || "None"}</td>
                      <td className="p-4 text-gray-600">Rs.{Number(item.price).toFixed(2)}</td>
                      <td className="p-4">{item.description || "N/A"}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => confirmDelete(item.id)}
                          className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
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
      )}

      {/* Gallery Table */}
      {activeTab === "gallery" && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Gallery</h2>
          <div className="mb-4 flex gap-2 flex-wrap">
            {galleryCategories.map((cat) => (
              <button
                key={cat.value}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  galleryFilter === cat.value ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setGalleryFilter(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr className="border-b-2 border-gray-300">
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredGalleryImages.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-6 text-center text-gray-400">
                      No images available
                    </td>
                  </tr>
                ) : (
                  filteredGalleryImages.map((img) => (
                    <tr key={img.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                      <td className="p-4">{img.id}</td>
                      <td className="p-4">
                        <img
                          src={img.image_url}
                          alt={`Image ${img.id}`}
                          className="w-14 h-14 object-cover rounded-md shadow-sm"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150?text=No+Image";
                            console.error(`Failed to load image: ${img.image_url}`);
                          }}
                        />
                      </td>
                      <td className="p-4">{galleryCategories.find((cat) => cat.value === img.category)?.label || img.category}</td>
                      <td className="p-4 space-x-2">
                        <button
                          onClick={() => handleEdit(img)}
                          className="bg-blue-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => confirmDelete(img.id)}
                          className="bg-red-600 px-4 py-2 rounded-full text-white font-semibold hover:bg-red-700 transition-colors"
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
      )}

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-2xl transform scale-100 transition-all duration-300 max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {isEditing ? `Edit ${activeTab === "gallery" ? "Image" : "Service"}` : `Add New ${activeTab === "gallery" ? "Image" : "Service"}`}
            </h3>

            {activeTab === "services" ? (
              <>
                <div className="mb-6 p-4 border border-gray-300 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Service 1</h4>
                  <select
                    name="category_id"
                    value={currentService.category_id}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <select
                    name="sub_category_id"
                    value={currentService.sub_category_id}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <option value="">Select Sub-Category (Optional)</option>
                    {subCategories.map((sub) => (
                      <option key={sub.id} value={sub.id}>
                        {sub.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="name"
                    placeholder="Service Name"
                    value={currentService.name}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                </div>
                {!isEditing && (
                  <button
                    type="button"
                    onClick={addServiceEntry}
                    className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors"
                  >
                    + Add Service to List
                  </button>
                )}
                <div className="mb-6 p-4 border border-gray-300 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Shared Fields</h4>
                  <div className="relative mb-4">
                    <label className="block text-sm font-semibold mb-2">Price (Rs.)</label>
                    <div className="flex items-center">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">Rs.</span>
                      <input
                        type="number"
                        name="price"
                        placeholder="0.00"
                        value={sharedFields.price}
                        onChange={(e) => handleChange(e, true)}
                        className="w-full p-3 pl-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        step="0.01"
                        min="0"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Description (Optional)</label>
                    <textarea
                      name="description"
                      placeholder="Description"
                      value={sharedFields.description}
                      onChange={(e) => handleChange(e, true)}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Image (Optional)</label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e) => handleChange(e, true)}
                      className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    />
                  </div>
                </div>
                {formData.length > 0 && !isEditing && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Added Services</h4>
                    <ul className="list-disc pl-5">
                      {formData.map((service, index) => (
                        <li key={index} className="text-gray-600">
                          {service.name} (Category: {categories.find((cat) => cat.id === service.category_id)?.name || "None"}, Sub-Category: {subCategories.find((sub) => sub.id === service.sub_category_id)?.name || "None"}, Description: {sharedFields.description || "None"})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Image</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => handleChange(e, false)}
                    className="w-full text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    required={!isEditing}
                  />
                </div>
                <select
                  name="category"
                  value={imageData.category}
                  onChange={(e) => handleChange(e, false)}
                  className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  required
                >
                  {galleryCategories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </>
            )}

            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
                onClick={() => {
                  setShowForm(false);
                  setIsEditing(false);
                }}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gray-900 rounded-full font-semibold text-white hover:bg-gray-700 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : isEditing ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-6 py-2 bg-gray-300 rounded-full font-medium text-gray-800 hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2 bg-red-600 rounded-full font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;