import React from "react";
export default function logInForm (){
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Đăng Nhập</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleLogin}
          >
            Đăng Nhập
          </button>
        </div>
      </form>
    </div>
  );

}

  



