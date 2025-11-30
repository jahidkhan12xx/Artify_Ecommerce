"use client";
import Link from "next/link";
import "../app/globals.css";
import error from "@/public/error.json";
import Lottie from "lottie-react";
import Logo from "@/components/Logo";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Logo />
      <Lottie animationData={error} loop={true} />
      <p className="text-xl font-semibold my-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="px-6 py-2 bg-shop_dark_green text-white rounded-lg hover:bg-shop_light_green hoverEffect font-bold"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
