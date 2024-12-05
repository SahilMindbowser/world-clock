"use client";

import { useFetchData } from "../../hooks/useFetchData";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const UserDetails = () => {

    const params = useParams()
    const userId = params?.id

  const { data: user, loading, error } = useFetchData(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const router = useRouter();

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <button
        onClick={() => router.push("/users")}
        className="text-blue-500 underline mb-4"
      >
        Back to User List
      </button>
      {user && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> {`${user.address.street}, ${user.address.city}`}
          </p>
        </div>
      )}
    </main>
  );
};

export default UserDetails;
