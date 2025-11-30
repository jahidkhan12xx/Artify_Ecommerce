"use client";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useAppContext } from "@/context/AppContext";

const MobileMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden cursor-pointer " />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
