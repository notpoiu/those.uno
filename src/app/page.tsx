"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("https://github.com/notpoiu");
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl">
      <p>Those who know ☠️💀</p>
      <p>Mangos mangos mangos mangos mangos 🥭🥭🥭</p>
    </div>
  );
}
