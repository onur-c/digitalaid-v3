import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/digitalaid-logo.webp";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { MyNavigationMenu } from "./MyNavigationMenu.jsx";
import MobileSheetMenu from "./MobileSheetMenu";

const Header = () => {
  return (
    <header
      className={cn(
        "flex items-center  justify-normal w-full px-12 lg:px-32 py-4 border-b"
      )}
    >
      <Link href="/" className={cn("relative w-24 h-20 mr-2 ")}>
        <Image
          src={Logo}
          fill
          alt="Digitalaid Logo"
          className={cn("bg-foreground/90 p-2 rounded-sm dark:bg-background")}
        />
      </Link>
      <nav className={cn("hidden md:block")}>
        <MyNavigationMenu />
      </nav>
      <div className="flex items-center gap-2 ml-auto w-fit">
        <DarkModeToggle />
        <nav className="block md:hidden">
          <span className="sr-only">Toggle Menu</span>
          <MobileSheetMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className={cn("hidden text-xl md:flex md:gap-8 w-fit")}>
        {routes.map((route) => (
          <Link href={route.href}>{route.title}</Link>
        ))}
      </div>

      <div className="flex items-center gap-2 ml-auto w-fit">
        <DarkModeToggle />
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div> */
}
