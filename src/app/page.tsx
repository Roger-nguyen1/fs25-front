"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { handlerCookie } from "./lib/setCookie";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [accessCode, setAccessCode] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleValidate = useCallback(async () => {
    setIsloading(true);
    try {
      if (!accessCode) {
        setMessage("Entrez le code d'accès");
        
      } else if (accessCode !== process.env.NEXT_PUBLIC_ACCESS_CODE) {
        setMessage("Mauvais code d'accès");
        
      } else if (accessCode === process.env.NEXT_PUBLIC_ACCESS_CODE) {
        setMessage("");
        handlerCookie(accessCode);
        console.log('Redirection vers /farms');
        setTimeout(() => {
        router.replace("/farms");
        router.refresh(); // Revalidez les composants serveur
        }, 900);
        
      }
    } catch (error) {
      console.error('Erreur lors de la validation :', error);
      setMessage('Erreur inattendue');
      
    } finally {
      setTimeout(() => {
        setIsloading(false);
        }, 950);
      
    }
  }, [accessCode, router, setMessage, setIsloading]);

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
          {isLoading && (
            <div
              className="inline-block h-8 w-8 mt-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-lime-600 motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          )}
          {message && <p className="mt-1 text-xl text-red-700">{message}</p>}
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
