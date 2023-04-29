import React from "react";

const UsersPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">Guide Des Utilisateurs</h1>
      <br />
      <p>
        Les utilisateurs de la plateforme Creative Blogger sont tenus par
        certains codes imposées par cette dernière notamment sur les réseaux
        autres comme Discord tels que le respect de tous. En voici une liste non
        exhaustive :
        <br />
        <br />
        <ul>
          <li>
            Le respect de toutes les opinions ( que ce soit religieux, politique
            ou encore morale )
          </li>
          <li>Les insultes ne sont pas tolérées</li>
          <li>
            Vous pouvez vous exprimer en toute liberté en respectant les codes
            de la laïcité
          </li>
          <li>etc...</li>
        </ul>
        <br />
        Le contenu présent sur Creative Blogger vous est offert gratuitement
        sans aucun engagement de votre part. Vous ne pouvez donc pas réclamer
        plus de contenu de manière trop insistante encore moins payer, menacer,
        insulter des rédacteurs pour qu'ils produisent du contenu. Ces mêmes
        rédacteurs sont tenus au guide des rédacteurs et n'ont de comptes à
        rendre qu'aux administrateurs de Creative Blogger.
        <br />
        <br />
        Vous pouvez porter des réclamations, suggestions ou signalement aux
        modérateurs de Creative Blogger et eux-seules jugeront dans un cas de
        signalement vis-à-vis d'un autre utilisateur de la sanction qui lui sera
        infligé. N'oubliez pas que ces personnes sont présentes pour entretenir
        le maintien de Creative Blogger, toutes insultes ou autres propos sortis
        du contexte d'une suggestion, réclamations ou signalement seront punis
        d'une sanction. Ces mêmes modérateurs sont tenus au guide des
        modérateurs et n'ont de compte à rendre qu'aux administrateurs de
        Creative Blogger. <br />
        Si cependant, vous observez un comportement d'un modérateur déplacé,
        informez alors les administrateurs par message privé Discord ou mail en
        y joignant des captures d'écrans ou enregistrement audio des propos du /
        des modérateur(s) visé(s).
        <br />
        <br />
        En tant qu'utilisateurs, vous vous devez de respecter les opinions de
        tous. Vous pouvez lire dans certains articles l'opinion des rédacteurs.
        Nous ne sommes pas des journalistes et nous ne nous considérons pas
        comme nous pouvons nous exprimer sur nos opinions cependant nous
        essayons de le faire le moins possible. Notez également que les blagues
        sont toutes à prendre au second degré et sur le ton de l'humour, elles
        ne sont pas forcément resprésentatives de l'opinion du rédacteur.
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
        <br />
        <a className="text-yellow-500 underline" href="/redacteurs">
          Guide des rédacteurs
        </a>
        <br />
        <a className="text-yellow-500 underline" href="/mods">
          Guide des modérateurs
        </a>
      </p>
    </div>
  );
};

export default UsersPage;
