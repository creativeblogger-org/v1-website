import React from "react";

const ModssPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">Guide Des Modérateurs</h1>
      <br />
      <p>
        Les modérateurs ont le rôle d'assister les administrateurs de Creative
        Blogger dans la vérification des articles ainsi que dans le maintien de
        l'ordre et des règles sur les réseaux tels que Discord. Ils ont donc des
        permissions que ni les utilisateurs ni les rédacteurs ont.
        <br />
        <br />
        <ul>
          <li>
            Il peut refuser l'article écrit par un rédacteur, dans ce cas, le
            rédacteur peut contester le refus du modérateur et l'article passera
            au conseil des administrateurs qui donneront leurs avis final qui ne
            pourra être contesté par le rédacteur.
          </li>
          <li>
            Ils peuvent infliger des sanctions aux utilisateurs ne respectant
            pas le règlement. Toutes sanctions peut être contesté par mail et
            les administrateurs donneront leurs avis final qui ne pourra être
            contesté par l'utilisateur.
          </li>
        </ul>
        <br />
        En cas d'abus de pouvoir de la part du modérateur, l'affaire passera
        devant les administrateurs qui décideront de la sanction infligé. Les
        cas d'abus de pouvoir sont :
        <br />
        <br />
        <ul>
          <li>
            L'utilisation de sanctions non proportionnelles à la gravité de
            l'affaire
          </li>
          <li>
            Le refus d'un article écrit par un rédacteur pour ses propres
            intêrets
          </li>
        </ul>
        <br />
        Chaque utilisateur peut devenir modérateur. Pour cela il faudra se
        rendre sur le serveur discord de Creative Blogger et ouvrir un ticket de
        recrutement. Il y fera sa candidature puis passera un entretien avec les
        administrateurs qui décideront après 24 à 48h de réflexion.
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

export default ModssPage;
