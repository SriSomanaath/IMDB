"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { usePathname } from "next/navigation";

// icons
import { GoHome, GoHomeFill } from "react-icons/go";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { IoFilmOutline } from "react-icons/io5";
import { IoFilm } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { BsFillBellFill, BsBell } from "react-icons/bs";
import { TbMailFilled, TbMail } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { PiNotepadFill, PiNotepad } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";

type Props = {};

interface SideNavItemType {
  icon?: {
    icon: React.ReactNode;
    fillIcon: React.ReactNode;
  };
  label: string;
  href: string;
}

const sidebarItmes: SideNavItemType[] = [
  {
    icon: {
      icon: <GoHome />,
      fillIcon: <GoHomeFill />
    },
    label: "Home",
    href: "/"
  },
  {
    icon: {
      icon: <CiSearch />,
      fillIcon: <FiSearch />
    },
    label: "Explore",
    href: "/search"
  },
  {
    icon: {
      icon: <IoFilmOutline  />,
      fillIcon: <IoFilm />
    },
    label: "Top10",
    href: "/topfav"
  },
  {
    icon: {
      icon: <CiStar  />,
      fillIcon: <FaStar  />
    },
    label: "Favourites",
    href: "/favourites"
  },

  {
    icon: {
      icon: <HiOutlineUsers />,
      fillIcon: <HiUsers />
    },
    label: "Communities",
    href: "/communities"
  },

  {
    icon: {
      icon: <BiUser />,
      fillIcon: <BiSolidUser />
    },
    label: "Profile ",
    href: "/profile"
  }
];
export default function Sidebar({}: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={cn(
        "min-h-screen max-h-screen overflow-y-auto w-fit md:pr-8 pr-3 pt-2 flex flex-col gap-3 border-r-[1px] pl-[50px]",
        isSidebarOpen && "md:w-[300px]"
      )}
    >
      <HoverContainer>
      <Link href={"/"}>
        <BiSolidCameraMovie className="text-5xl" />
        {isSidebarOpen ? <h1 className="text-2xl font-bold">IMDB</h1> : null}
      </Link>
      </HoverContainer>

      {/* sidenavitems */}

      {sidebarItmes.map((d, i) => (
        <HoverContainer key={i}>
          <SideNavItem
            icon={d.icon}
            href={d.href}
            isSidebarOpen={isSidebarOpen}
            label={d.label}
          />
        </HoverContainer>
      ))}

      {/* toggle button  */}
      <section
        className={cn(
          "hidden md:flex w-ful  justify-end",
          !isSidebarOpen && "justify-start"
        )}
      >
        <HoverContainer>
          <RiArrowLeftDoubleFill
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={cn(
              "text-gray-400 transition-all text-4xl",
              !isSidebarOpen && "rotate-180"
            )}
          />
        </HoverContainer>
      </section>
    </div>
  );
}

function SideNavItem({
  href,
  isSidebarOpen,
  icon,
  label
}: SideNavItemType & { isSidebarOpen: boolean }) {
  const [animationParent] = useAutoAnimate();
  const pathname = usePathname();
  const isActivePage = pathname == href;
  return (
    <Link
      ref={animationParent}
      href={href}
      className="flex gap-2 items-center cursor-pointer"
    >
      <div className="w-[35px] h-[35px] text-3xl">
        {isActivePage ? icon?.fillIcon : icon?.icon}
      </div>
      {isSidebarOpen && (
        <p
          className={cn(
            "text-xl hidden md:block pr-4  transition-all ",
            isActivePage && "font-bold"
          )}
        >
          {label}
        </p>
      )}
    </Link>
  );
}

function HoverContainer({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="p-3 transition-all rounded-full cursor-pointer hover:bg-gray-200 w-fit dark:hover:bg-zinc-900 group-hover:dark:bg-zinc-900 group-hover:bg-gray-200 ">
      {children}
    </div>
  );
}