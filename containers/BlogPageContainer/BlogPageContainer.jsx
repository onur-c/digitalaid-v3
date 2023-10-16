import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import YoutubeEmbed from "@/components/YoutubeEmbed";

const BlogPageContainer = () => {
  return (
    <main className="px-2 py-4 space-y-4 md:px-8 xl:px-36 ">
      <article className="flex flex-col items-center justify-center p-4 border rounded-sm shadow-md xl:flex-row">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>
              <p>Biz Kimiz?</p>
            </CardTitle>

            <CardDescription>
              #digitalaid #paperwork #dijitaldönüşüm #bpm #süreçyönetimi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="opacity-80">
              Şirketimiz bilişim alanında kamu kurum ve kuruluşları ile özel
              sektöre İş Süreçleri Yönetimi ve Dijital Dönüşüm başta olmak üzere
              alanında deneyimli ve yenilikçi kadrosu İş Süreçleri Yönetimi,
              Süreç İyileştirme, Dijital Dönüşüm, Akıllı Otomasyon, Yönetim
              Danışmanlığı, CX Excellence ve PaperWork Uygulama Danışmanlığı
              hizmetleri vermektedir.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <YoutubeEmbed embedId={"jSk_UJZo85o"} />
      </article>
      <article className="flex flex-col items-center justify-center p-4 border rounded-sm shadow-md xl:flex-row">
        <YoutubeEmbed embedId={"6IGEkK8bPQA"} />

        <Card className="border-none">
          <CardHeader>
            <CardTitle>
              <p>Bi' Kahve Molasında Dijital Dönüşüm</p>
            </CardTitle>

            <CardDescription>
              #digitalaid #paperwork #dijitaldönüşüm #bpm #süreçyönetimi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="opacity-80">
              DigitalAid' den yepyeni bir video serisi! Kahveleri hazırlayın.
              DigitalAid olarak "Bi' Kahve Molasında Dijital Dönüşüm Serisi" çok
              yakında başlatıyoruz. Her ay farklı süreç ve konular sizleri
              bekliyor olacak. Mesut Gürbüz'ün anlatımıyla uçtan uca süreç,
              arayüz, rapor tasarımları yapılacak ve test edilip canlıya
              alınacak. Tüm bunlar sadece Bi' Kahve Molasında yani "15" dakikada
              tamamlanacak. Çok yakında Bi' Kahve Molasında görüşmek üzere!
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </article>
      <article className="flex flex-col items-center justify-center p-4 border rounded-sm shadow-md xl:flex-row">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>
              <p>Bi' Kahve Molasında Dijital Dönüşüm - İşe Alım Uygulaması</p>
            </CardTitle>

            <CardDescription>
              #digitalaid #paperwork #dijitaldönüşüm #bpm #süreçyönetimi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="opacity-80">
              DigitalAid & PaperWork işbirliğiyle hazırladığımız, Bi' Kahve
              Molasında Dijital Dönüşüm Video Serimizin ilk uygulaması
              yayında... 15 dakika içerisinde "İşe Alım Uygulaması" tasarladık,
              test ettik ve raporladık.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <YoutubeEmbed embedId={"qBUArleGUoM"} />
      </article>
    </main>
  );
};

export default BlogPageContainer;
