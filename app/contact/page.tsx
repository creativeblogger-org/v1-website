import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">Comment nous contacter ?</h1>
      <br />
      <div className="flex justify-center">
        <iframe
          src="https://discord.com/widget?id=1097558278780747898&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <br />
      <a
        href="https://discord.gg/85shPmXHEB"
        className="flex justify-center text-yellow-500 underline text-xl"
      >
        Rejoignez le serveur discord !
      </a>
      <br />
      <a
        href="mailto:eragon941@outlook.fr"
        className="flex justify-center text-yellow-500 underline text-xl"
      >
        Ou par mail
      </a>
    </div>
  );
};

export default ContactPage;
