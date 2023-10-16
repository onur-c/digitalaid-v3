import Image from "next/image";
import React from "react";

const YazilimPage = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-8 pt-12">
      <Image
        alt=""
        src="/paperwork-yazilim.webp"
        width={600}
        height={200}
        className="rounded dark:bg-foreground/90"
      />
      <h2 className="text-3xl font-bold opacity-90 ">PaperWork BPM & ECM</h2>
      <p className="w-2/3 leading-8 text-center dark:opacity-50">
        Dijital dönüşümde kontrolü ele alın ve değer sunun Yapay Zeka Destekli
        Düşük Kodlu Dijital Süreç Platformu Süreçlerinizi ve belgelerinizi
        yöneterek şirketinizin dijital dönüşüm hedeflerine ulaşmanıza yardımcı
        olacak tek, akıllı süreç otomasyon platformu. PaperWork BPM özellikleri
        size tüm iş süreçleri ve görevlerinde görünürlük sağlayacaktır. Gerçek
        zamanlı öngörüler elde etmek için gelişmiş analitik ve raporlama ile
        süreç performansını izleyebilir ve kontrol edebilirsiniz.
      </p>
      <ul className="flex flex-col w-1/2 gap-4">
        <li className="flex flex-col gap-2 overflow-hidden border shadow-md rounded-xl md:flex-row">
          <h3 className="flex items-center justify-center flex-1 p-2 font-bold text-center border bg-secondary ">
            Akıllı elektronik formlar
          </h3>
          <p className="flex-[4] text-sm opacity-80 p-6 text-start ">
            Verileri yakalamak ve işlemek için herhangi bir akıllı cihazda
            çalışan çok dilli duyarlı elektronik formlar. Kağıt formlarınızı ve
            Excel dosyalarınızı iş akışı uygulamalarına dönüştürün.
          </p>
        </li>
        <li className="flex flex-col gap-2 overflow-hidden border shadow-md rounded-xl md:flex-row">
          <p className="text-sm opacity-80 p-6 text-start flex-[4]">
            Süreç sahiplerine BT ekiplerini dahil etmeden iş akışlarının
            kontrolünü vererek ve darboğazları ortadan kaldırırken görünürlüğü
            ve izlemeyi iyileştirerek güçlendirin.
          </p>
          <h3 className="flex items-center justify-center flex-1 p-2 font-bold text-center border bg-secondary ">
            Gelişmiş İş Akışı
          </h3>
        </li>
        <li className="flex flex-col gap-2 overflow-hidden border shadow-md rounded-xl md:flex-row">
          <h3 className="flex items-center justify-center flex-1 p-2 font-bold text-center border bg-secondary ">
            Doküman yönetimi
          </h3>
          <p className="text-sm opacity-80 p-6 text-start flex-[4]">
            Kuruluşunuz genelinde belgeleri yakalamak, yönetmek, paylaşmak ve
            arşivlemek için yapay zeka destekli, sağlam, ölçeklenebilir, güvenli
            ve yüksek performanslı içerik deposu.
          </p>
        </li>
        <li className="flex flex-col gap-2 overflow-hidden border shadow-md rounded-xl md:flex-row">
          <p className="text-sm opacity-80 p-6 text-start flex-[4]">
            Karar verme sürecini hızlandırın ve işletme yöneticilerinin işleri
            hakkında bilgiye dayalı kararlar almalarına yardımcı olun.
          </p>
          <h3 className="flex items-center justify-center flex-1 p-2 font-bold text-center border bg-secondary ">
            Raporlama ve Analitik
          </h3>
        </li>
        <li className="flex flex-col gap-2 overflow-hidden border shadow-md rounded-xl md:flex-row">
          <h3 className="flex items-center justify-center flex-1 p-2 font-bold text-center border bg-secondary ">
            SAP Hizmetleri
          </h3>
          <p className="text-sm opacity-80 p-6 text-start flex-[4]">
            Kullanıma hazır PaperWork BPM SAP konnektörlerini kullanarak SAP
            süreçlerini genişletin ve iyileştirin, geliştirme ve işletim
            maliyetlerini azaltın.
          </p>
        </li>
        <li className="flex flex-col gap-2 overflow-hidden border shadow-md rounded-xl md:flex-row">
          <p className="text-sm opacity-80 p-6 text-start flex-[4]">
            Gelişen iş ihtiyaçlarını teknolojinin hızında benimseyin, daha kısa
            sürede daha fazla süreç ve uygulama geliştirin ve rekabette öne
            çıkın.
          </p>
          <h3 className="flex items-center justify-center flex-1 p-2 font-bold text-center border bg-secondary ">
            Düşük Kod Geliştirme
          </h3>
        </li>
      </ul>
    </main>
  );
};

export default YazilimPage;
