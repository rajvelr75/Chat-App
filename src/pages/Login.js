import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-yellow-300">Chat App</h2>
        </div>
        <form className="mt-8 space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h5 className="font-bold text-center text-xl text-gray-300">Login</h5>
          <div className="rounded-md shadow-sm space-y-6">
            <div className="mt-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" placeholder="Enter Email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-300 bg-gray-700 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"/>
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" placeholder="Enter Password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-300 rounded-b-md bg-gray-700 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"/>
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center">
          <h5 className="text-gray-400">Don't have an Account? <a href="/login" className="text-yellow-400 hover:text-yellow-500">Register</a></h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
