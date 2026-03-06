import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({
      ...formData,
      [name]: value
    });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {

    if (password.length < 6) {
      setPasswordStrength("Weak");
    } 
    else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      setPasswordStrength("Strong");
    } 
    else {
      setPasswordStrength("Medium");
    }
  };

  const validateForm = () => {

    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.phone || formData.phone.length !== 10)
      newErrors.phone = "Enter valid 10 digit phone number";

    if (!formData.email) newErrors.email = "Email is required";

    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) {
    toast.error("Please fill all required fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify(formData));

  toast.success("Account created successfully!");

  navigate("/login");
};

  const getStrengthWidth = () => {
    if (passwordStrength === "Weak") return "33%";
    if (passwordStrength === "Medium") return "66%";
    if (passwordStrength === "Strong") return "100%";
    return "0%";
  };

  const getStrengthColor = () => {
    if (passwordStrength === "Weak") return "bg-red-500";
    if (passwordStrength === "Medium") return "bg-yellow-500";
    if (passwordStrength === "Strong") return "bg-green-500";
    return "";
  };

  return (
    <div className="h-full flex flex-col p-6 overflow-y-auto">

      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create your PopX account
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div>
          <label className="text-sm text-purple-600 font-medium">
            Full Name*
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full mt-1 border rounded-lg p-3 outline-none
            ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-purple-600 font-medium">
            Phone number*
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter 10 digit phone number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full mt-1 border rounded-lg p-3 outline-none
            ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-purple-600 font-medium">
            Email address*
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mt-1 border rounded-lg p-3 outline-none
            ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-purple-600 font-medium">
            Password*
          </label>

          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full mt-1 border rounded-lg p-3 outline-none
            ${errors.password ? "border-red-500" : "border-gray-300"}`}
          />

          {formData.password && (
            <div className="w-full h-2 bg-gray-200 rounded mt-2">
              <div
                className={`h-2 rounded ${getStrengthColor()}`}
                style={{ width: getStrengthWidth() }}
              ></div>
            </div>
          )}

          {formData.password && (
            <p className="text-xs mt-1">
              Password Strength: {passwordStrength}
            </p>
          )}

          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="text-sm text-purple-600 font-medium">
            Company name
          </label>

          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            value={formData.company}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 rounded-lg p-3 outline-none"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">
            Are you an Agency?*
          </p>

          <div className="flex gap-6 mt-2">

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
                className="accent-purple-600"
              />
              Yes
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
                className="accent-purple-600"
              />
              No
            </label>

          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all active:scale-95"
        >
          Create Account
        </button>

      </form>

    </div>
  );
}