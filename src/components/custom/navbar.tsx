"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../next/mode-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 md:px-0 py-4 md:py-10 w-full">
      <Link
        href="/"
        className="font-bold text-xl flex items-center cursor-pointer"
      >
        <Avatar className="mr-2">
          <AvatarImage src="eric-color.jpg" alt="Eric Waters" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        Eric Waters
      </Link>
      <div className="flex">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle() + " bg-transparent"}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Drawer>
          <DrawerTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="cursor-pointer">
              <IconMenu2></IconMenu2>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="hidden">Menu</DrawerTitle>
              {menuItems.map((item) => (
                <div key={item.name} className="text-xl px-2 py-2">
                  <DrawerClose asChild>
                    <Link href={item.href} className="">
                      {item.name}
                    </Link>
                  </DrawerClose>
                </div>
              ))}
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
        <div className="pl-3">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
