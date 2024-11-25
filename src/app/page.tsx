"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [accessCode, setAccessCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleValidate = () => {
    if (accessCode === process.env.NEXT_PUBLIC_ACCESS_CODE) {
      setMessage("");
      router.push("/farms");
    } else {
      setMessage("Mauvais code d'accès");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/images/fs25-1.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-0 animate-fade-in">
      <main className="flex flex-col items-center justify-center sm:items-start">
        <div className="flex flex-col items-center justify-center p-6 border-2 bg-slate-300 bg-opacity-60">
          <h1 className="text-6xl font-bold">FARMING SIMULATOR 25 SERVER</h1>
          <input
            className="mt-11 p-3"
            type="password"
            placeholder="Code d'accès"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            required
          />
          {message && <p className="mt-3 text-xl text-red-700">{message}</p>}
          <button
            onClick={handleValidate}
            className="mt-6 py-3 px-7 bg-lime-600 bg-opacity-85 hover:bg-lime-400 hover:bg-opacity-100 rounded-md text-xl"
          >
            Valider
          </button>
        </div>
      </main>
    </div>
  );
}
