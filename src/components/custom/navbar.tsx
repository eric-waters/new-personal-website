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
import { BadgeCheck, Code, Terminal } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between w-full">
      <Link
        href="/"
        className="font-bold text-xl flex items-center cursor-pointer gap-3"
      >
        {/* <Avatar className="mr-2">
          <AvatarImage src="eric-blue.jpg" alt="Eric Waters" />
          <AvatarFallback className="text-sm">EW</AvatarFallback>
        </Avatar> */}
        <span>Eric Waters</span>
        <BadgeCheck className="text-blue-500 h-6 w-6" />
      </Link>
      <div className="flex">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle() + " bg-transparent"}
                >
                  <Link href={item.href}>{item.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Drawer>
          <DrawerTrigger asChild className="lg:hidden">
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
        <div className="pl-5">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
