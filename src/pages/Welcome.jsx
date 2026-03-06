import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <button
        onClick={() => navigate("/register")}
        className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 mb-3"
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        className="w-full py-3 rounded-lg font-semibold bg-purple-200 text-gray-800"
      >
        Already Registered? Login
      </button>
    </div>
  );
}