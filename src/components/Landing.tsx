"use client";
import { TypeAnimation } from "react-type-animation";

export default function Landing() {
  return (
    <div className="relative h-screen">
      <div className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2">
        <div className="w-full font-mono text-xl font-semibold text-white">
          <h1 className="text-2xl uppercase leading-loose xl:text-4xl">
            Hi, my name is{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent motion-safe:animate-pulse lg:text-4xl xl:text-5xl">
              Nate
            </span>
            .{" "}
            <TypeAnimation
              sequence={[
                "I like to develop software.",
                2000,
                "I like to ",
                500,
                "I like to .",
                500,
                "I like to ..",
                500,
                "I like to ...",
                500,
                "I like to build apps.",
                2000,
                "I like to ",
                500,
                "I like to .",
                500,
                "I like to ..",
                500,
                "I like to ...",
                500,
                "I like to code.",
                2000,
                "I like to ",
                500,
                "I like to .",
                500,
                "I like to ..",
                500,
                "I like to ...",
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
