import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className={cn(
        "transition-all w-full h-fit flex flex-col items-center  dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-orange-700/40 dark:via-stone-950/20 dark:to-background bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-300 via-background to-background"
      )}
    >
      <h1
        className={cn(
          "text-5xl md:text-8xl font-extrabold mt-32  text-center not-sr-only "
        )}
      >
        Süreç Yönetim <br /> <span className="font-light">ve</span> <br />{" "}
        Dijital Dönüşüm <br /> <span className="font-light">ile</span> <br />{" "}
        Yüksek Performanslı Süreçler
      </h1>
      <h1 className="sr-only">
        Süreç Yönetim ve Dijital Dönüşüm ile Yüksek Performanslı Süreçler
      </h1>
      <p
        className={cn("text-xl md:text-2xl mt-12 opacity-70 text-center px-4")}
      >
        Başarılı bir Dijital Dönüşüm sağlayan İş Süreç Yönetimini kurma ve
        uygulama konusunda uzmanız.
      </p>
      <div className={cn("flex flex-wrap items-center justify-center gap-4")}>
        <Link
          href="/iletisim"
          className={buttonVariants({
            size: "lg",
            className: "mt-8 tracking-widest",
          })}
        >
          Bize Ulaşın
        </Link>
        <Link
          href="#hizmetlerimiz"
          className={buttonVariants({
            size: "lg",
            variant: "outline",
            className: "mt-8 tracking-widest",
          })}
        >
          Hizmetlerimize Göz Atın
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
