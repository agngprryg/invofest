import { useState } from "react";

import React from "react";

const SingUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("berhasil");
      window.location.href = "/";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="flex flex-col">
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-black"
          />
        </label>
        <label className="flex flex-col">
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border border-black"
          />
        </label>
        <label className="flex flex-col">
          Password:
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="border border-black"
          />
        </label>
        <button type="submit" className="mt-2 w-[200px] border border-black">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SingUp;
