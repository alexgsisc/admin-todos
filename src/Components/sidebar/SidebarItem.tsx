import Link from "next/link";
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

interface SidebatItemProps {
  path: string;
  name: string;
  icon: JSX.Element;
}

export const SidebarItem = ({ path, name, icon }: SidebatItemProps) => {
  return (
    <>
      <Link
        href={path}
        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
      >
        <div>{icon} </div>
        <span className="-mr-1 font-medium">{name}</span>
      </Link>
    </>
  );
};
