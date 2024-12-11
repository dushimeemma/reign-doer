"use client";

import Link from "next/link";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { navLinks } from "@/app/helpers/stub-data/nav-links";
import SideDrawer from "./Drawer";
import Logo from "./Logo";
import Button from "@/app/components/reusable/Button";

export default function Header() {
  return (
    <header className="m-6 flex items-center justify-between">
      <Logo />
      <nav className="hidden lg:flex">
        <ul className="flex gap-4 flex-row capitalize">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="bg-white hover:bg-gray-100 p-3 hover:rounded-md"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:flex flex-row items-center gap-3">
        <Link href="/auth">
          <span className="text-primary mr-6">Login</span>
        </Link>
        <Link href="#home">
          <Button className="rounded-[1.875rem]">Get Started</Button>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <SideDrawer
          buttonChildren={
            <MenuOutlinedIcon
              fontSize="large"
              className="m-3 hover:bg-gray-100  hover:rounded-md"
            />
          }
        />
      </div>
    </header>
  );
}
