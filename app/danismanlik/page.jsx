import Image from "next/image";
import React from "react";

const data = [
  {
    title: "İş Süreçleri Yönetimi",
    image: "/işsüreçleriyönetimi.webp",
    desc: "İş Süreçleri Yönetimi, operasyonel mükemmelliği kolaylaştırmak için bir organizasyonun nasıl çalıştığına dair görünürlük oluşturan bir yönetim yeteneğidir. Bu, iş süreçlerini manuel olarak veya veri analizi yoluyla modelleyerek ve ardından bu bilgileri işbirliği ve iyileştirme için bir temel olarak kullanarak elde edilir. Dijital çağımızda, bir kuruluşun süreçleri kritik bir varlıktır. Diğer kritik varlıklarda olduğu gibi, kuruluşlar da süreçlerden değer elde etmeye adanmış bir dahili yeteneğe sahip olmalıdır. Süreçleri yönetmek için bir BPM disiplini gerekir. İyi bir süreç yönetimi şunları içermelidir;",
    bulletPoints: [
      "Süreç Yönetimi gibi disiplinli bir yaklaşım.",
      "Optimum alanlara odaklanmayı sağlamak için operasyonel mükemmellik girişimleri ile kurumsal strateji arasında uyum.",
      "Ölçülebilir iş sonuçlarına odaklanma.",
      "Kapsamlı bir süreç bilgisi tabanı.",
      "Net roller, iletişim kanalları ve raporlama hatları dahil olmak üzere titiz BPM yönetişim mekanizmaları.",
      "BPM yeteneklerinin izlenmesi ve yönetimi.",
      "Süreç odaklı bir kültür oluşturmak için yetenek geliştirme.",
      "Bir bilgi havuzu aracı ve iş analizi yazılımı dahil olmak üzere teknoloji desteği.",
    ],
  },
  {
    title: "Süreç İyileştirme ve Dijital Dönüşüm",
    image: "/süreçiyileştirme.webp",
    desc: "Süreç iyileştirme, performansı artırmak için iş operasyonlarını iyileştirir. Başarılı bir süreç iyileştirme girişimi, gelişmiş kalite, verimlilik ve yenilikçilik faydaları sağlayabilir. Başarılı iyileştirme, mevcut uygulamaların görünürlüğünü oluşturarak, performansı analiz ederek ve yeni bir çalışma biçimini tanımlamak için işbirliği yaparak sağlanır. Süreç İyileştirme metodolojimiz, değer yaratmayı en üst düzeye çıkarmak için strateji odaklı, uçtan uca iyileştirmeler oluşturur. İyi bir süreç iyileştirme ve dijital dönüşüm şu faydaları sağlar;",
    bulletPoints: [
      "Uçtan uca süreçleri şeffaf hale getirir ve stratejik önceliklerin yukarıdan aşağıya bir görünümünü sunar.",
      "İyileştirme için ideal hedefler olan yüksek etkili, düşük olgunluktaki iş süreçlerini bulur.",
      "Uzun vadeli bir stratejik yol haritasıyla uyumlu somut sonuçlarla hızlı kazanımlar sağlar.",
      "BPM araçları ile şeffaflık ve izlenebilirlik sağlar.",
      "Süreç madenciliği olarak bilinen bir konseptte operasyonel araçlardan süreç verilerini toplayarak yeni iç görüler üretir.",
      "Stratejik önceliklerinizi destekleyen uygulama planları oluşturur.",
    ],
  },
  {
    title: "Akıllı Otomasyon",
    image: "/akıllıotomasyon.webp",
    desc: "Akıllı otomasyon, iş akışlarını kolaylaştırmak ve üretkenliği artırmak için teknolojiyi kullanır. Teknoloji referans modellerimiz, Robotik Proses Otomasyonu da dahil olmak üzere alanlarda en iyi uygulamaları uygular. Robotik Süreç Otomasyonu, düşük kod geliştirme ve iş akışı otomasyonu, müşterilerimiz için somut iş sonuçları sunar.Akıllı otomasyon danışmanlarımız;",
    bulletPoints: [
      "Otomasyon yolculuğunuzu desteklemek için iş stratejinizi ve hedeflerinizi uyumlu hale getirilir.",
      "Otomasyon fırsatlarını bulmak için mevcut iş süreçlerinizi analiz edilir.",
      "İşlemlerinizi iyileştiren ve kolaylaştıran akıllı otomasyon çözümleri tasarlanır.",
      "Bu otomatikleştirilmiş çözümleri BT altyapınızla entegre edilir.",
      "Çalışan farkındalığını artırmak için akıllı otomasyonun faydalarının tanıtılmasına ve izlenmesine yardımcı olunur.",
      "Akıllı otomasyon çözümlerinizi zaman içinde kontrol edilir ve optimize edilir.",
    ],
  },
  {
    title: "PaperWork Uygulaması",
    image: "/paperwork-yazilim.webp",
    desc: "Akıllı dijital dönüşüm ve Yapay Zeka Destekli Düşük Kodlu Dijital Süreç Platformu. Süreçlerinizi ve belgelerinizi yöneterek şirketinizin dijital dönüşüm hedeflerine ulaşmanıza yardımcı olacak tek, akıllı süreç otomasyon platformudur. PaperWork BPM özellikleri size tüm iş süreçleri ve görevlerinde görünürlük sağlayacaktır. Gerçek zamanlı öngörüler elde etmek için gelişmiş analitik ve raporlama ile süreç performansını izleyebilir ve kontrol edebilirsiniz.",
    bulletPoints: [
      "Akıllı Elektronik Formlar; Verileri yakalamak ve işlemek için herhangi bir akıllı cihazda çalışan çok dilli duyarlı elektronik formlar. Kağıt formlarınızı ve Excel dosyalarınızı iş akışı uygulamalarına dönüştürün.",
      "Gelişmiş İş Akışı; Süreç sahiplerine BT ekiplerini dahil etmeden iş akışlarının kontrolünü vererek ve darboğazları ortadan kaldırırken görünürlüğü ve izlemeyi iyileştirerek güçlendirin.",
      "Doküman yönetimi; Kuruluşunuz genelinde belgeleri yakalamak, yönetmek, paylaşmak ve arşivlemek için yapay zeka destekli, sağlam, ölçeklenebilir, güvenli ve yüksek performanslı içerik deposu.",
      "Raporlama ve Analitik; Karar verme sürecini hızlandırın ve işletme yöneticilerinin işleri hakkında bilgiye dayalı kararlar almalarına yardımcı olun.",
      "SAP Hizmetleri; Kullanıma hazır PaperWork BPM SAP konnektörlerini kullanarak SAP süreçlerini genişletin ve iyileştirin, geliştirme ve işletim maliyetlerini azaltın.",
      "Düşük Kod Geliştirme; Gelişen iş ihtiyaçlarını teknolojinin hızında benimseyin, daha kısa sürede daha fazla süreç ve uygulama geliştirin ve rekabette öne çıkın.",
    ],
  },
  {
    title: "CX Excellence",
    image: "/cxexcellence.webp",
    desc: "CX (müşteri deneyimi) mükemmelliği, müşteriniz ister bir alıcı, ister tedarikçi veya iç paydaş olsun, istisnai etkileşimler sağlamaya yönelik kurumsal bir taahhüttür. Bunu, operasyonları müşteri deneyimi stratejileriyle uyumlu hale getirerek ve işletme genelinde müşteri odaklı bir zihniyet sağlayarak başarıyoruz. Müşteri deneyimi mükemmelliği şunları içerir;",
    bulletPoints: [
      "CX stratejiniz ve bunu gerçekleştirmede farklı ekiplerin rolü hakkında kuruluş genelinde farkındalık.",
      "Müşteri yolculuğu modelleri ve temas noktası şemaları gibi araçları kullanarak müşteri etkileşimlerinin tam görünürlüğü.",
      "Müşteri temas noktaları ve altta yatan operasyonel süreçler arasında net bağlantılar ile müşteriyle yüz yüze olan ve arka ofis ekipleri arasında uyum.",
      "Müşteri Deneyimi stratejiniz için değerlerine göre eylemleri önceliklendiren müşteri odaklı bir iyileştirme yol haritası.",
      "Müşteri memnuniyeti puanları da dahil olmak üzere özel, müşteri odaklı metriklerle performans takibi.",
    ],
  },
];

const DanismanlikPage = () => {
  return (
    <main className="flex flex-col items-center justify-center max-w-6xl gap-8 pt-12 mx-auto space-y-4 ">
      <h2 className="text-3xl font-bold opacity-80 ">Danışmanlık</h2>
      {data.map((dt, idx) => {
        return (
          <>
            <div className="flex flex-col items-center gap-8">
              <Image
                src={dt.image}
                width={600}
                height={400}
                className="rounded-[2px] dark:bg-foreground"
                alt=""
              />
              <div className="flex flex-col items-start w-4/5 gap-4 tracking-wider sm:w-1/2">
                <h3 className="text-2xl font-light ">{dt.title}</h3>
                <p className="text-sm leading-7 ">
                  <span className="float-left h-8 pr-2 font-mono text-6xl">
                    {idx === 4 ? dt.desc.slice(0, 2) : dt.desc.slice(0, 1)}
                  </span>
                  {idx === 4
                    ? dt.desc.slice(2, dt.desc.length)
                    : dt.desc.slice(1, dt.desc.length)}
                </p>
                <ol className="text-sm leading-7 list-disc list-inside ">
                  {dt.bulletPoints.map((point) => {
                    return (
                      <>
                        <li>{point}</li>
                      </>
                    );
                  })}
                </ol>
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
};

export default DanismanlikPage;
