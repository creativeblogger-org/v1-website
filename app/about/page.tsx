import React from "react";
import AboutCard from "../../components/AboutCard";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-coco">Qui Sommes Nous ?</h1>
      <br />
      <div className="flex justify-center mx-auto prose">
        <h3>
          Au début, j'étais seul... puis une idée naquit dans mon esprit "
          Pourquoi ne pas créer un blog où tout le monde pourrait poster ses
          posts, se faire connaître et percer dans le milieu ?" Et oui l'idée
          est partie de là ! Il y a eu ensuite beaucoup de travail surtout au
          niveau du code ( et beaucoup d'agacement ) mais voilà où le projet en
          est actuellement ! Je vous accorde on est pas encore beaucoup mais ça
          ne saurait tarder ! Le projet se fera connaître et notre but est de
          devenir LA plateforme de blog de référence. Mais pour cela bien sûr il
          reste du travail à faire surtout au niveau marketing. Si vous voulez
          nous aider à nous développez, n'hésitez pas à partager le lien du site
          à vos amis et rejoignez notre discord !
        </h3>
      </div>
      <br />
      <h1 className="text-center text-2xl">Notre équipe</h1>
      <br />
      <AboutCard
        img="/mael.png"
        alt="Photo de profil de Maël C."
        name="Maël C."
        bio="Administrateur et fondateur du projet. Développeur front-end depuis 2 ans et back-end depuis 1 an et demi"
      />
    </div>
  );
};

export default AboutPage;
