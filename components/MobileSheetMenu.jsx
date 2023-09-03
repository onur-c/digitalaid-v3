"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
  {
    title: "Hakkimizda",
    href: "/#hakkimizda",
  },
  { title: "Hizmetler", href: "/#hizmetler" },
  { title: "Blog", href: "/#blog" },
  { title: "Referanslar", href: "/#referanslar" },
  { title: "İletişim", href: "/#iletisim" },
];

import { Menu } from "lucide-react";
import Link from "next/link";

import React from "react";

const MobileSheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={42} strokeWidth={1} />
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        {routes.map((route) => (
          <SheetTitle key={route.title}>
            <Link href={route.href}>{route.title}</Link>
          </SheetTitle>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileSheetMenu;
