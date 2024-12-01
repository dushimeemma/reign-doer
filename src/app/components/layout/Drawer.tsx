"use client";

import { useState } from "react";
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
import Button from "../reusable/Button";

interface Props {
  buttonChildren: React.ReactNode;
}

export default function SideDrawer({ buttonChildren }: Props) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Logo className="m-6 ml-3 bg-white" />
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
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton className="flex items-center capitalize">
            <Link href="/auth">
              <span className="text-primary ml-1">Login</span>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="flex items-center capitalize">
            <Link href="#home">
              <Button>Get Started</Button>
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
