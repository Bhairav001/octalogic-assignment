import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
//   const history = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://reqres.in/api/login", admin)
      .then((res) => {
        localStorage.setItem("isAdminLogin", "true");
        // Use history.push to navigate instead of navigate from react-router-dom
        // history.push("/dashboard");
      })
      .catch(() => {
        // Handle login error
        console.error("Login error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
      <div className="max-w-lg py-12 px-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4 text-center">
            <h1 className="text-4xl font-semibold">Sign in to Admin account</h1>
            <p className="text-lg text-gray-600">
              to enjoy all of our cool{" "}
              <span className="text-blue-400">features</span> ✌️
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={admin.email}
                onChange={handleOnChange}
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={admin.password}
                  onChange={handleOnChange}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2 focus:outline-none"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7.286 7.293a4 4 0 005.428 5.414"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.293 4.293a1 1 0 00-1.414 0L12 10.586l-5.293-5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 000-1.414z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign in"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
