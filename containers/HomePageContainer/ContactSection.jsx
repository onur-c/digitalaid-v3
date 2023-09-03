import ContactForm from "@/components/ContactForm";
import { cn } from "@/lib/utils";
import React from "react";
import { MapPin, Phone, Printer, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className={cn("mt-24 space-y-3")}>
      <h2
        className={cn(
          "text-xl font-mono tracking-[0.2em] dark:opacity-60 text-center "
        )}
      >
        BİZE ULAŞIN
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 font-light text-center dark:opacity-60">
        <div className="flex justify-center w-3/4 gap-4">
          <MapPin />
          <p>
            Yeşilköy Mah. Atatürk Cad. EGS Business Park B2 Blok No:12 Kat:Zemin
            D.No:1 PK:34149 Bakırköy/İstanbul/Türkiye
          </p>
        </div>
        <div className="flex justify-center w-3/4 gap-4">
          <Phone />
          <a
            rel=""
            role="link"
            aria-haspopup="false"
            data-ux="Link"
            data-aid="CONTACT_INFO_PHONE_REND"
            href="tel:+908503096635"
            data-typography="LinkAlpha"
          >
            +90 850 309 66 35
          </a>
          |
          <a
            rel=""
            role="link"
            aria-haspopup="false"
            data-ux="Link"
            data-aid="CONTACT_INFO_PHONE_REND"
            href="tel:+905324739164"
            data-typography="LinkAlpha"
          >
            +90 532 473 91 64
          </a>
        </div>
        <div className="flex justify-center w-3/4 gap-4">
          <Printer />
          <a
            rel=""
            role="link"
            aria-haspopup="false"
            data-ux="Link"
            data-aid="CONTACT_INFO_PHONE_REND"
            href="tel:+908505223403"
            data-typography="LinkAlpha"
          >
            +90 850 522 34 03
          </a>
        </div>
        <div className="flex justify-center w-3/4 gap-4">
          <Mail />
          <a
            rel=""
            role="link"
            aria-haspopup="false"
            data-ux="Link"
            data-aid="CONTACT_INFO_EMAIL_REND"
            href="mailto:digitalaid@digitalaid.io"
            data-typography="LinkAlpha"
          >
            digitalaid@digitalaid.io
          </a>
        </div>
      </div>
      <div className="relative flex flex-wrap w-full gap-6 py-12">
        <ContactForm />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.5972971245255!2d28.83139726308256!3d40.98623831337777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3feca109815%3A0xbbab8f6abfc174ba!2sEGS%20Business%20Park!5e0!3m2!1str!2str!4v1693771948630!5m2!1str!2str"
          style={{
            width: "100%",
            height: "550px",
            border: "none",
            allowFullScreen: "none",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
