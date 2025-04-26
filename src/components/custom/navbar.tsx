"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { div } from "motion/react-client";
import { ModeToggle } from "../next/mode-toggle";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/experience" },
  { name: "Skills", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between py-4 md:py-10 max-w-7xl mx-auto">
      <div className="text-base font-bold md:text-2xl">Eric Waters</div>
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
