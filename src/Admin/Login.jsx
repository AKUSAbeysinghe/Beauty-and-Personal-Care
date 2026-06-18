
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const res = await fetch("http://localhost/food_and_restaurant/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Login successful!");
        setTimeout(() => {
          navigate("/admin"); // ✅ FIX: match the route defined in App.jsx
        }, 2000);
      } else {
        setMessage(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setMessage("Something went wrong! Make sure PHP server is running.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">Log In</h2>

        <div className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors text-gray-900 placeholder-gray-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 transition-colors text-gray-900 placeholder-gray-400"
            required
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            Log In
          </button>
        </div>

        {message && (
          <p
            className={`text-center mt-5 text-sm font-medium ${
              message === "Login successful!" ? "text-gray-700" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center mt-5 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-gray-900 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;




