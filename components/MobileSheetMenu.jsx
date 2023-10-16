"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import React from "react";
import MyMobileNavMenu from "./MyMobileNavMenu";

const MobileSheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} strokeWidth={1} />
      </SheetTrigger>
      <SheetContent>
        <MyMobileNavMenu />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSheetMenu;
