import Image from "next/image";
import React from "react";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import {
  IoCalendarOutline,
  IoCarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SidebarItem } from "./SidebarItem";
import { LogoutButton } from "..";

const menuItems = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <IoCalendarOutline />,
  },
  {
    path: "/dashboard/rest-todos",
    name: "Rest",
    icon: <IoCheckboxOutline />,
  },
  {
    path: "/dashboard/server-todos",
    name: "Server Action",
    icon: <IoListOutline />,
  },
  {
    path: "/dashboard/cookies",
    name: "Cookies",
    icon: <IoCodeWorkingOutline />,
  },
  {
    path: "/dashboard/products",
    name: "Products",
    icon: <IoCarOutline />,
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
    icon: <IoPeopleOutline />,
  }
];

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  const nameUser = session?.user?.name ?? "Not name";
  const imageUser = (session?.user?.image) ? session?.user?.image : "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp";
  const userRole = session?.user?.roles

  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            {/* TODO: Next/Link hacia dashboard */}
            <Link href="/dashboard" title="home">
              <Image
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                width={32}
                height={32}
                alt="tailus logo"
              />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Image
              src={imageUser}
              alt=""
              width={100}
              height={100}
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              {nameUser}
            </h5>
            <span className="hidden text-gray-400 lg:block">
              { userRole?.join(', ') }
            </span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {menuItems.map((item) => (
              <SidebarItem key={item.name} {...item} />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <LogoutButton />
        </div>
      </aside>
    </>
  );
};
