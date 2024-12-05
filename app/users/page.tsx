"use client";

import Link from "next/link";
import { useFetchData } from "../hooks/useFetchData";

const UserList = () => {
  const { data: users, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="grid grid-cols-1 gap-4">
        {users.map((user: any) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <Link
              href={`/users/${user.id}`}
              className="text-blue-500 underline mt-2 block"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UserList;
