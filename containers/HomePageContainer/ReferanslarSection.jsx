import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import akfen from "/public/akfen-ref.webp";
import akfen2 from "/public/akfen-ref-2.webp";
import estart from "/public/estart-ref.webp";
import paperwork from "/public/paperwork-ref.webp";
import tüyap from "/public/tüyap-ref.webp";
import Link from "next/link";

const ReferanslarSection = () => {
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
    <section
      id="referanslar"
      className={cn("flex flex-col items-center justify-center pt-40 gap-8 ")}
    >
      <div>
        <h2
          className={cn("text-3xl font-mono tracking-[0.2em] dark:opacity-60")}
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
  );
};

export default ReferanslarSection;
