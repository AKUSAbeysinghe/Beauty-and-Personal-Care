import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost/food_and_restaurant/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Signup successful!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setMessage("Something went wrong! Make sure PHP server is running.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans">
      <div className="w-full max-w-md px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          {/* Logo / Brand */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <span className="text-white text-4xl font-bold">L</span>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center tracking-tight mb-2">Create Account</h2>
          <p className="text-center text-gray-500 mb-10">Join Lunaria Admin</p>

          <div className="space-y-6">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-all text-gray-900 placeholder-gray-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-all text-gray-900 placeholder-gray-400"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-all text-gray-900 placeholder-gray-400"
              required
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-200"
            >
              Create Account
            </button>
          </div>

          {message && (
            <p
              className={`text-center mt-6 text-sm font-medium ${
                message === "Signup successful!" ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-center mt-8 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-black hover:underline font-medium">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;