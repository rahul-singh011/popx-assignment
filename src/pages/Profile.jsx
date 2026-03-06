import React from "react";

export default function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="flex items-center justify-center h-full">
        <h2 className="text-red-500 font-semibold">
          No user found
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">

     
      <div className="bg-white px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">
          Account Settings
        </h2>
      </div>

  
      <div className="p-6">

        <div className="flex items-center gap-4">

          <div className="relative">

            <img
              src="https://i.pravatar.cc/150"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="absolute bottom-0 right-0 bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
              ✎
            </div>

          </div>

          <div>

            <h3 className="font-semibold text-gray-900">
              {user.name}
            </h3>

            <p className="text-sm text-gray-500">
              {user.email}
            </p>

            <p className="text-sm text-gray-500">
              {user.phone}
            </p>

          </div>

        </div>

   
        <p className="text-sm text-gray-600 mt-6 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam.
        </p>

      </div>

    </div>
  );
}