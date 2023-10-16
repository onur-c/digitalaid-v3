import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const EgitimPage = () => {
  return (
    <main className="flex flex-col items-center justify-center max-w-6xl gap-8 pt-12 mx-auto">
      <h2 className="text-3xl font-bold opacity-80 ">Eğitim</h2>
      <div className="self-start px-4">
        <h3 className="font-bold ">Kimler katılabilir?</h3>
        <p className="opacity-70">
          Proje Yöneticileri, İş Analistleri, Departman Yöneticileri, Kalite
          Yöneticiler, Anahtar Kullanıcılar, Uygulayıcılar ve Yazılım Geliştirme
          Ekipleri katılabilir.
        </p>
      </div>
      <div className="self-start px-4">
        <h3 className="font-bold ">Platformunuz nedir?</h3>
        <p className="opacity-70">PaperWork BPM&ECM.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12">
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 6 Saat - 2 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center ">
            Fatura Onay Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Fatura Geliş Senaryoları (E-Arşiv, E-Fatura, Basılı vb.), Akış
              Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/faturaonaysüreci.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 8 Saat - 1 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            İnsan Kaynakları İşe Alım Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Akış Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/iksüreci.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 8 Saat - 1 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            İnsan Kaynakları İşten Çıkış Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Akış Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/iksüreci2.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 8 Saat - 1 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            Personel Değerlendirme Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Akış Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/değerlendirmesüreci.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 8 Saat - 1 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            Görev Atama Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Akış Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/görevatamasüreci.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 6 Saat - 3 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            Satın Alma Süreçleri
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Akış Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/satınalmasüreci.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 6 Saat - 3 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            Satın Alma Süreçleri
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Akış Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/ittalepsüreci.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 8 Saat - 1 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            IT Talep Yönetim Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Akış Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/kargotakipsüreci.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 6 Saat - 3 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            İdari İşler Araç Talep&Kargo Takip Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Akış Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/izintalepsüreci.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 6 Saat - 2 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            İdari İşler Araç Talep&Kargo Takip Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Fatura Geliş Senaryoları (E-Arşiv, E-Fatura, Basılı vb.), Akış
              Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/dökyönsistemi.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
        <div className="relative w-[320px] h-96 border rounded-sm shadow-md flex flex-col items-center overflow-hidden">
          <p className="absolute flex items-center flex-shrink-0 gap-1 p-2 text-sm border rounded-sm bottom-2 bg-background right-2">
            <Clock height={20} /> 6 Saat - 2 Gün
          </p>
          <h4 className="p-2 text-xl font-bold text-center min-h-[80px] flex items-center justify-center">
            İdari İşler Araç Talep&Kargo Takip Süreci
          </h4>
          <hr className="w-full" />
          <div className="flex flex-col items-center gap-4 px-6 py-2">
            <p>Eğitim İçeriği</p>
            <p className="text-sm leading-6 opacity-70">
              Fatura Geliş Senaryoları (E-Arşiv, E-Fatura, Basılı vb.), Akış
              Tasarımı, Form Tasarımı, Arşiv Tasarımı, Rapor ve DashBoard
              Tasarımları.
            </p>
          </div>
          <Image
            alt=""
            src="/talepsikayetyönetimi.webp"
            width={320}
            height={100}
            className="aspect-[2] object-cover  mt-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default EgitimPage;
