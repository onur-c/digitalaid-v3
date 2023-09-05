"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    mesaj: "",
    subject: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        mesaj: "",
        subject: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: `https://formspree.io/${process.env.NEXT_PUBLIC_FORM_ID}`,
      data: {
        email: inputs.email,
        mesaj: inputs.mesaj,
        subject: "Digitalaid.io" + "-" + inputs.subject,
      },
    })
      .then((response) => {
        handleServerResponse(true, "Teşekkürler, mesajınız gönderildi.");
      })
      .catch((error) => {
        handleServerResponse(
          false,
          "Bir hata oluştu. Lütfen daha sonra tekrar deneyin."
        );
      });
  };
  return (
    <main className="lg:absolute p-8  rounded-sm top-24 left-12 mx-auto h-fit w-[500px] bg-accent m-4 ">
      <h3 className="text-xl">Bize Yazın!</h3>
      <p className="pb-2 text-sm border-b border-foreground opacity-60">
        Sizin için buradayız. Nasıl yardımcı olabiliriz?{" "}
      </p>
      <form onSubmit={handleOnSubmit} className="flex flex-col pt-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          className="w-full p-2 border rounded-sm bg-background/50 text-foreground"
        />
        <label htmlFor="subject">Konu</label>
        <input
          id="subject"
          type="text"
          name="_subject"
          onChange={handleOnChange}
          required
          value={inputs.subject}
          className="w-full p-2 border rounded-sm bg-background/50 text-foreground"
        />

        <label htmlFor="mesaj">Mesaj</label>
        <textarea
          id="mesaj"
          name="mesaj"
          onChange={handleOnChange}
          required
          value={inputs.mesaj}
          className="w-full p-2 mb-2 border rounded-sm h-28 bg-background/50 text-foreground"
        />
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Gönder"
              : "Gönderildi"
            : "Gönderiliyor..."}
        </Button>
      </form>
      {status.info.error && (
        <div className="error">Hata: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};
export default ContactForm;
