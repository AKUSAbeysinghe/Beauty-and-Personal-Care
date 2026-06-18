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
          navigate("/admin");
        }, 2000);
      } else {
        setMessage(data.message || "Login failed. Please try again.");
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

          <h2 className="text-4xl font-bold text-center tracking-tight mb-2">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-10">Sign in to Lunaria Admin</p>

          <div className="space-y-6">
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
              Sign In
            </button>
          </div>

          {message && (
            <p
              className={`text-center mt-6 text-sm font-medium ${
                message === "Login successful!" ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-black hover:underline font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;