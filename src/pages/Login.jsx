import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !email || !password;

 const handleLogin = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    toast.error("You are not registered to this website");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {

    localStorage.setItem("isLoggedIn", true);

    toast.success("Login successful!");

    navigate("/profile");

  } else {
    toast.error("Invalid credentials");
  }
};

  return (
    <div className="h-full flex flex-col p-6">

      <div className="mb-8">

        <h1 className="text-2xl font-bold text-gray-800">
          Sign in to your PopX account
        </h1>

        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-5">

        <div>

          <label className="text-sm font-medium text-purple-600">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

        </div>

        <div>

          <label className="text-sm font-medium text-purple-600">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full py-3 rounded-lg font-semibold text-white transition
            ${isDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
            }`}
        >
          Login
        </button>

      </form>

    </div>
  );
}