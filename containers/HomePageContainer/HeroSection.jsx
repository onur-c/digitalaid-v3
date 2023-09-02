import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className={cn(
        "w-full h-fit flex flex-col items-center  dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-orange-700/40 dark:via-stone-950/20 dark:to-background bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-300 via-background to-background"
      )}
    >
      <h1
        className={cn(
          "text-5xl md:text-8xl font-extrabold mt-32 w-3/4 text-center"
        )}
      >
        Süreç Yönetim <br /> <span className="font-light">ve</span> <br />{" "}
        Dijital Dönüşüm <br /> <span className="font-light">ile</span> <br />{" "}
        Yüksek Performanslı Süreçler
      </h1>
      <p className={cn("text-xl md:text-2xl mt-12 opacity-70 text-center")}>
        Başarılı bir Dijital Dönüşüm sağlayan İş Süreç Yönetimini kurma ve
        uygulama konusunda uzmanız.
      </p>
      <div className={cn("flex gap-4")}>
        <Button size="lg" className={cn("mt-8 tracking-widest")}>
          Bize Ulaşın
        </Button>
        <Button
          size="lg"
          variant="outline"
          className={cn("mt-8 tracking-widest")}
        >
          Hizmetlerimize Göz Atın
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
