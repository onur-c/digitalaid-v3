import React from "react";

const CommentsSection = () => {
  return (
    <section className="dark:text-gray-400 bg-accent body-font grid-bg">
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
  );
};

export default CommentsSection;
