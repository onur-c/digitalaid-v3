import React from "react";
import { HelpCircle, Goal, Eye, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section
      className=" mt-40 body-font bg-[radial-gradient(ellipse_75%_50%_at_50%_50%,rgba(10,19,108,0.3),transparent)]"
      id="hakkimizda"
    >
      <div className="w-1 h-48 mx-auto my-12 bg-gradient-to-b from-foreground/5 via-foreground to-foreground/5 " />
      <h2
        className={cn(
          "text-3xl font-mono tracking-[0.2em] dark:opacity-60 text-center "
        )}
      >
        HAKKIMIZDA
      </h2>
      <div className="container flex flex-wrap px-5 py-24 mx-auto">
        <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full pointer-events-none bg-foreground"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm rounded-full font-xl text-background bg-foreground sm:mt-0 title-font">
            1
          </div>
          <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-accent">
              <HelpCircle />
            </div>
            <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 className="mb-1 text-2xl font-medium title-font">
                Biz Kimiz?
              </h2>
              <p className="leading-relaxed dark:opacity-60">
                Şirketimiz bilişim alanında kamu kurum ve kuruluşları ile özel
                sektöre İş Süreç Yönetimi ve Dijital Dönüşüm başta olmak üzere
                alanında deneyimli ve yenilikçi kadrosu İş Süreçleri Yönetimi,
                Süreç İyileştirme, Dijital Dönüşüm, Akıllı Otomasyon, Yönetim
                Danışmanlığı, CX Excellence, PaperWork ve BT Danışmanlık
                hizmetleri vermektedir.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full pointer-events-none bg-foreground"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium rounded-full text-background bg-foreground sm:mt-0 title-font">
            2
          </div>
          <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-accent">
              <Goal />
            </div>
            <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 className="mb-1 text-2xl font-medium title-font">Misyon</h2>
              <p className="leading-relaxed dark:opacity-60">
                Uzman danışmanlarımız ile müşterilerimizin süreçlerini sürekli
                ölçerek ve iyileştirerek çevik yönetilen bir şirket olmalarına
                yardımcı olmak.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full pointer-events-none bg-foreground"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium rounded-full text-background bg-foreground sm:mt-0 title-font">
            3
          </div>
          <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-accent">
              <Eye />
            </div>
            <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 className="mb-1 text-2xl font-medium title-font">Vizyon</h2>
              <p className="leading-relaxed dark:opacity-60">
                Yeni nesil dijital işletmeye giden yolculuğu sağlamada lider
                olmak.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex pb-10 mx-auto sm:items-center md:w-2/3">
          <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full pointer-events-none bg-foreground"></div>
          </div>
          <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium rounded-full text-background bg-foreground sm:mt-0 title-font">
            4
          </div>
          <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full bg-accent">
              <HeartHandshake />
            </div>
            <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 className="mb-1 text-2xl font-medium title-font">
                Değerlerimiz
              </h2>
              <p className="leading-relaxed dark:opacity-60">
                Etik değerlere bağlı, sürdürülebilirliğe katkı sağlayan, yüksek
                müşteri memnuniyeti yaratan ve mutlu bir çalışanın mutlu bir
                müşteri sağlayacağına inanan bir şirketiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
