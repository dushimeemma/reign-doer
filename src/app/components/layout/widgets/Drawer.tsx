"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { navLinks } from "@/app/helpers/stub-data/nav-links";
import Link from "next/link";
import Logo from "./Logo";
import Button from "@/app/components/reusable/Button";
import { SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

interface Props {
  buttonChildren: React.ReactNode;
}

export default function SideDrawer({ buttonChildren }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="pr-6">
        <Logo className="m-6 ml-3 bg-white" />
      </div>

      <Divider />
      <List>
        {navLinks.map((link) => (
          <ListItem
            key={link.name}
            className="bg-white hover:bg-gray-100 p-3 hover:rounded-md capitalize"
            disablePadding
          >
            <Link href={link.href}>
              <ListItemText>{link.name}</ListItemText>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <SignedIn>
            <div className="hidden lg:flex flex-row items-center gap-3">
              <Link href={isDashboard ? "/" : "/"}>
                <Button className="rounded-[1.875rem]">
                  {isDashboard ? "Home" : "Dashboard"}
                </Button>
              </Link>
              <UserButton />
            </div>
          </SignedIn>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton className="flex items-center capitalize">
            <Link href="#home">
              <span className="text-primary mr-6">
                <SignInButton mode="modal" />
              </span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="flex items-center capitalize">
            <Link href="#home">
              <Button className="rounded-[1.875rem]">Get Started</Button>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button className="lg:hidden" onClick={toggleDrawer(true)}>
        {buttonChildren}
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
