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
import { IconCode, IconMenu2, IconMoodSmileBeam } from "@tabler/icons-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/experience" },
  { name: "Skills", href: "/experience" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 md:px-0 py-4 md:py-10 max-w-7xl mx-auto">
      <div className="text-base font-bold text-xl flex items-center">
        <IconCode className="mr-2" /> Eric Waters
      </div>
      <div className="flex">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  href={item.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Drawer>
          <DrawerTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <IconMenu2></IconMenu2>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="hidden">Menu</DrawerTitle>
              {menuItems.map((item) => (
                <div key={item.name} className="text-xl px-2 py-2">
                  <DrawerClose asChild>
                    <a href={item.href} className="">
                      {item.name}
                    </a>
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
