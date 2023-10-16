import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ServicesSection = () => {
  return (
    <section id="hizmetlerimiz" className="py-12">
      <div className="w-1 h-48 mx-auto my-12 bg-gradient-to-t from-transparent via-foreground/60 via-0% to-transparent" />
      <h2
        className={cn(
          "text-3xl font-mono tracking-[0.2em] dark:opacity-60 text-center "
        )}
      >
        Hizmetlerimiz
      </h2>
      <div
        className={cn(
          "w-full flex  flex-wrap pt-24 px-12 justify-center items-center gap-24"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center w-[400px] gap-4 border p-6  rounded-sm"
          )}
        >
          <h3 className="text-3xl font-semibold">Danışmanlık</h3>
          <p className="w-3/4 text-center dark:opacity-60">
            Değer Odaklı Süreç Yönetimi ve Dijital Dönüşüm
          </p>
          <Link href="/danismanlik" className={buttonVariants()}>
            İncele
          </Link>
        </div>
        <div
          className={cn(
            "flex flex-col items-center gap-4 border p-6  rounded-sm w-[400px] "
          )}
        >
          <h3 className="text-3xl font-semibold">Eğitim</h3>
          <p className="w-3/4 text-center dark:opacity-60">
            Yöneticiler ve Uygulayıcılar için Süreç Yönetimi ve Uygulaması
          </p>
          <Link href="/egitim" className={buttonVariants()}>
            İncele
          </Link>
        </div>
        <div
          className={cn(
            "flex flex-col items-center w-[400px] gap-4 border p-6  rounded-sm"
          )}
        >
          <h3 className="text-3xl font-semibold">Yazılım</h3>
          <p className="w-3/4 text-center dark:opacity-60">
            Dijital Dönüşüm, Süreçleri Stratejiyle Uyumlu Hale Getirir
          </p>
          <Link href="/yazilim" className={buttonVariants()}>
            İncele
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
