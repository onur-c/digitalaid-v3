import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const ServicesSection = () => {
  return (
    <section id="hizmetlerimiz" className="py-12">
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
          <Button>İncele →</Button>
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
          <Button>İncele →</Button>
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
          <Button>İncele →</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
