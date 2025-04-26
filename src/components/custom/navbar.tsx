"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { div } from "motion/react-client";
import { ModeToggle } from "../next/ModeToggle";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 py-4 md:py-10 max-w-7xl mx-auto">
      <h1 className="text-base font-bold md:text-2xl">Eric Waters</h1>
      <NavigationMenu>
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
          <div className="pl-3">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
