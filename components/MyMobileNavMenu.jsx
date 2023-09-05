import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const links = [
  {
    title: "Danışmanlık",
    href: "/danismanlik",
    description:
      "İş Süreçleri Yönetimi, Süreç İyileştirme ve Dijital Dönüşüm, Akıllı Otomasyon,PaperWork Uygulaması, CX Excellence.",
  },
  {
    title: "Eğitim",
    href: "/egitim",
    description:
      "Fatura Onay Süreci, İnsan Kaynakları İşe Alım Süreci, İnsan Kaynakları İşten Çıkış Süreci, Personel Değerlendirme Süreci ve daha fazlası.",
  },
  {
    title: "Yazılım",
    href: "/yazilim",
    description:
      "PaperWork BPM & ECM: Akıllı Elektronik Formlar, Gelişmiş İş Akışı, Doküman yönetimi ve daha fazlası.",
  },
];
const MyMobileNavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn("flex flex-col items-start")}>
        <NavigationMenuItem>
          <Link href="/#hakkimizda" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className={cn("text-md")}>Hakkımızda</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className={cn("text-md")}>Hizmetler</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-min">
              {links.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className={cn("text-md")}>Blog</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#referanslar" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className={cn("text-md")}>Referanslar</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/#iletisim" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className={cn("text-md")}>İletişim</p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default MyMobileNavMenu;
