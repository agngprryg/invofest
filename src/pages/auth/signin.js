import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.ok) {
      router.push("/");
    } else {
      console.error("Login failed", res.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="flex flex-col">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 border border-black rounded"
        />
      </div>
      <div className="mt-2 flex flex-col">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 border border-black rounded"
        />
      </div>
      <button
        type="submit"
        className="mt-4 border border-black w-[200px] rounded"
      >
        Sign In
      </button>
    </form>
  );
}
