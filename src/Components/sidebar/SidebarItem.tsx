'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebatItemProps {
  path: string;
  name: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({ path, name, icon }: SidebatItemProps) => {
  const pathName = usePathname();
  return (
    <li>
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
      <Link
        href={path}
        className={`
        px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
        hover:text-white hover:bg-gradient-to-r hover:bg-sky-600
        ${
          pathName === path
            ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : ""
        }`}
      >
        <div>{icon} </div>
        <span className="-mr-1 font-medium">{name}</span>
      </Link>
    </li>
  );
};
