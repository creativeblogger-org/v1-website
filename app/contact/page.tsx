"use client";

import React, { useState } from "react";
import Button from "../../components/Button";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const named = "";

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      emailUser,
      message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Your message has been sent!");
      setName("");
      setEmail("");
      setEmailUser("");
      setMessage("");
    } else {
      setResult("Erreur ! Vérifiez que vous avez bien remplis tous les champs");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-solid p-11 border-slate-800 rounded-md"
    >
      <label className="text-center" htmlFor="name">
        Name :
      </label>
      <input
        className="w-full p-4 border-2 border-solid rounded-md"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="text-center" htmlFor="emailUser">
        Email :
      </label>
      <input
        className="w-full p-4 border-2 border-solid rounded-md"
        type="email"
        name="emailUser"
        id="emailUser"
        value={emailUser}
        onChange={(e) => setEmailUser(e.target.value)}
      />
      <label className="text-center" htmlFor="message">
        Message :
      </label>
      <textarea
        className="w-full p-4 border-2 border-solid rounded-md"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <label className="text-center" htmlFor="email">
        Captcha ( enter : contact@creativeblogger.org ) :
      </label>
      <input
        className="w-full p-4 border-2 border-solid rounded-md"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <Button type="submit" title="Send" />
      <h2 className="text-center text-red-600 text-3xl">{result}</h2>
    </form>
  );
};

export default ContactPage;
