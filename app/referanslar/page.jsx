import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import akfen from "@/public/akfen-ref.webp";
import akfen2 from "@/public/akfen-ref-2.webp";
import estart from "@/public/estart-ref.webp";
import paperwork from "@/public/paperwork-ref.webp";
import tüyap from "@/public/tüyap-ref.webp";
import Link from "next/link";

const ReferanslarPage = () => {
  const referanslar = [
    {
      alt: "Akfen",
      src: akfen,
      url: "https://www.akfen.com.tr/",
    },
    {
      alt: "Akfen Yenilenebilir Enerji",
      src: akfen2,
      url: "https://akfenren.com.tr/",
    },
    {
      alt: "Estart",
      src: estart,
      url: "https://estarthealthgroup.com/tr/",
    },
    {
      alt: "Paperwork",
      src: paperwork,
      url: "https://www.paperwork.com.tr/",
    },
    {
      alt: "Tüyap",
      src: tüyap,
      url: "https://tuyap.com.tr/",
    },
  ];
  return (
    <>
      <section
        id="referanslar"
        className={cn("flex flex-col items-center justify-center pt-40 gap-8 ")}
      >
        <div>
          <h2
            className={cn(
              "text-3xl text-center font-mono tracking-[0.2em] dark:opacity-60"
            )}
          >
            İŞ ORTAKLARIMIZ
          </h2>
          <Link href="https://www.paperwork.com.tr/" target="_blank">
            <Image
              src={paperwork}
              alt="Paperwork"
              width={200}
              height={100}
              className="object-contain m-auto mt-24 opacity-70 hover:opacity-100"
            />
          </Link>
        </div>
        <h2
          className={cn(
            "text-3xl font-mono tracking-[0.2em] dark:opacity-60 mt-24"
          )}
        >
          REFERANSLAR
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-24">
          {referanslar.map((referans) => (
            <Link href={referans.url} target="_blank" key={referans.alt}>
              <Image
                key={referans.alt}
                src={referans.src}
                alt={referans.alt}
                width={200}
                height={100}
                className="object-contain opacity-70 hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-12 dark:text-gray-400 bg-accent body-font grid-bg">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 m-auto mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <h3 className="mb-6 text-xl italic font-bold">Eğitici</h3>
                <p className="leading-relaxed">Eğitimden çok memnun kaldık.</p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-orange-500 rounded"></span>
                <h2 className="text-sm font-medium tracking-wider title-font">
                  M.... G....
                </h2>
                <p className="text-gray-500">17.12.2022</p>
              </div>
            </div>
            <div className="p-4 m-auto mb-6 lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <h3 className="text-xl italic font-bold">Başarılı</h3>
                <p className="leading-relaxed">
                  Danışmanlık hizmeti çok başarılıydı. Çok hızlı sürede süreçler
                  dijitale aktarıldı. Çok deneyimliler.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-orange-500 rounded"></span>
                <h2 className="text-sm font-medium tracking-wider title-font">
                  S.... A....
                </h2>
                <p className="text-gray-500">04.12.2022</p>
              </div>
            </div>
            <div className="p-4 m-auto lg:w-1/3 lg:mb-0">
              <div className="h-full text-center">
                <h3 className="text-xl italic font-bold">İyi</h3>
                <p className="leading-relaxed">
                  Eğitim genel anlamda çok başarılıydı. Süreleri uzun
                  tutulabilirdi.
                </p>
                <span className="inline-block w-10 h-1 mt-6 mb-4 bg-orange-500 rounded"></span>
                <h2 className="text-sm font-medium tracking-wider title-font">
                  G.... G....
                </h2>
                <p className="text-gray-500">17.11.2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReferanslarPage;
