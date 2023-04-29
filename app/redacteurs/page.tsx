import React from "react";

const RedacteursPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">Guide Des Rédacteurs</h1>
      <br />
      <p>
        Les rédacteurs de Creative Blogger sont la partie essentielle du bon
        fonctionnement de la plateforme. Ils ont la permission de poster des
        articles sur le site, permission que eux-seuls possèdent.
        <br />
        <br />
        Chaque utilisateur peut devenir un rédacteur, il lui suffira d'aller sur
        le serveur discord de Creative Blogger, d'ouvrir un ticket et de poser
        sa candidature. Il passera ensuite un entretien oral et les
        administrateurs décideront dans un délai de 24 à 48h. Le refus d'un
        administrateur ne peut être contesté par un candidat. Si un candidat a
        postulé et s'est vu refuser le poste, il pourra re-postuler seulement 2
        semaines plus tard.
        <br />
        <br />
        Pour poster leurs articles, les rédacteurs devront se rendre sur la page
        spécifique ( toutes les informations vous seront données durant votre
        entretien oral ) et uploader sur le site leur fichier avec l'extension{" "}
        <div className="font-bold">.md</div>
        {""} et en respectant les règles de markdown. L'article sera ensuite
        vérifié par les administrateurs et modérateurs qui donneront leur avis
        final et ( s'il est positif ) metteront en ligne l'article dans les 12h
        qui suivent. <br /> Attention ! Le contenu mis en ligne par le rédacteur
        est SA propriété, mais en soumettant son contenu à la plateforme, il
        s'engage à ce que le contenu vienne de lui et non d'une plateforme
        concurrente. Creative Blogger et ses administrateurs ne pourront pas
        être tenus responsable si le contenu publié est le même que celui d'une
        autre plateforme, seul le rédacteur qui a posté ce contenu peut être
        tenu responsable de cet acte. <br />
        Le contenu de Creative Blogger est proposé sous license Creative
        Commons, chacun peut donc utiliser le contenu de la plateforme comme il
        le veut en créditant seulement les auteurs. Un rédacteur de Creative
        Blogger ne peut donc en aucun cas demander des droits d'auteurs sur son
        contenu.
        <br />
        <br />
        <h2 className="text-2xl font-bold">Liens utils :</h2>
        <br />
        <a
          className="text-yellow-500 underline"
          href="https://discord.gg/85shPmXHEB"
        >
          Serveur discord de Creative Blogger
        </a>
      </p>
    </div>
  );
};

export default RedacteursPage;
