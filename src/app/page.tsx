"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://02b2a01kbl.ufs.sh/f/FNQnzF3mg2Kr1q64BnswV6MaQcxCkp3HhlmrX48ofdNbvngK");
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  useEffect(() => {
    if (started) {
      document.title = "Those who know ☠️💀";
    }
  }, [started, router]);

  useEffect(() => {
    if (started && audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    }
  }, [started, audioRef.current?.paused]);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl">
      {!started ? (
        <div 
          onClick={handleStart}
          className="cursor-pointer flex flex-col items-center justify-center h-full w-full"
        >
          <p className="text-xl font-semibold">Click anywhere to enter 😱</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <BlurFade>
            <p className="text-2xl mb-8">Those who know ☠️💀</p>
          </BlurFade>
          <div className="flex flex-row items-center justify-center gap-2">
            {Array.from({length: 6}).map((_, i) => (
              <AnimatePresence key={i}>
                <motion.div
                  initial="initial"
                  animate={"skibidiRizz"}
                  variants={{
                    initial: {
                      y: -20,
                      opacity: 0,
                    },
                    skibidiRizz: {
                      y: 0,
                      opacity: 1,
                    }
                  }}
                  transition={{
                    delay: (i / 2) + 0.15,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  🥭
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}