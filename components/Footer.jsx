import { cn } from "@/lib/utils";
import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={cn("px-12 py-12 border-t mt-2 ")}>
      <div className={cn("flex flex-col h-24 items-center justify-between")}>
        <p className={cn("dark:opacity-70")}>
          DigitalAid © Tüm Hakları Saklıdır.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/digitalaid_io"
            target="_blank"
            className="hover:opacity-60"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.linkedin.com/company/digitalaid-io"
            target="_blank"
            className="hover:opacity-60"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
