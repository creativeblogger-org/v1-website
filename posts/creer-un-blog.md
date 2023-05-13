---
title: "Comment créer un blog"
subtitle: "Pour créer un blog, rien de plus simple que..."
date: "2023-05-08"
author: "Maël C."
---

Bonjour à tous ! Nous sommes très content de vous retrouvez pour ce 1ier article de **creative blogger**. Nous allons aborder un gros sujet : comment créer votre propre blog ?

Rappel : si vous êtes blogger, Creative Blogger peut vous aider, rejoignez le [serveur discord](https://discord.gg/uT8zVVn6rQ) et postulez pour devenir _rédacteur_.

## 1 : Créer un blog, sans compétances ?

Chez Creative Blogger, nous pensons que tout le monde peut créer son propre blog et le mettre en ligne. Cependant, vous l'avez sûrement vu si vous avez fait des recherches, créer son blog n'est pas chose aisée. En effet, il faut créer un site. Rien que cette étape peut faire partir certains **mais restez** ! Chez Creative Blogger nous avons LA solution pour vous faciliter la tâche ! Et oui, nous avons mis en ligne le code même de Creative Blogger **pour vous**. Et vous pouvez le réutiliser ! N'est-ce pas merveilleux ? Cependant, lisez le reste de l'article car si vous débutez complètement vous en aurez besoin.

_Ps : Si vous avez déjà NodeJS d'installé et un IDE vous pouvez vous rendre à l'étape 3_

## 2 : Débuter avec le template

Donc nous avons mis en ligne notre code pour vous. Cependant vous vous doutez bien que pour l'utiliser il faut des prérequis que nous allons voir ici. Notre template ( modèle de code ) est fait avec JavaScript ( ça vous rappele peut être vos années de lycée ) avec le framework ( outil de travail ) ReactJS & NextJS. ReactJS permet de créer de sublimes interfaces utilisateurs et NextJS est la colonne vértébrale du site qui permet de faire fonctionner le système lui-même de blog, mais nous verrons cela plus tard. Pour commencer il va falloir installer NodeJS qui est l'outil qui vous permettra de faire tourner votre site sur votre ordinateur. Pour cela rendez vous sur le site [de nodejs](https://nodejs.org/fr) et installer la version LTS.

Puis, si vous êtes sur windows ou macOs, vous pouvez ouvrir le fichier téléchargé et suivre les étapes d'installations. Si vous êtes sous linux, entrez ces commandes dans votre terminal :

```
sudo apt update
sudo apt upgrade

sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt install -y nodejs
```

Et voilà ! Vous avez normalement nodeJS et npm d'installé. Pour en être sûr ouvrez l'application `terminal` et rentrez ces commandes :

```
node -v
npm -v
```

Normalement il devrait vous renvoyez la version pour chacun. Si oui alors vous êtes prêts à suivre le tutoriel, si non, alors rendez-vous en bas de l'article dans la catégorie `question fréquentes`.

Nous allons maintenant installer un éditeur de code, pour qu'il soit plus confortable pour vous d'écrire du code. Dans ce tuto nous utiliserons Visual Studio Code qui est gratuit et conçus par Microsoft. Rendez vous sur [ce site](https://code.visualstudio.com/) et installer Visual Studio Code, cette partie est beaucoup plus simple vous avez juste à ouvrir le fichier téléchargé et suivre les étapes.

Maintenant nous sommes opérationnels pour la prochaine étape.

## 3 : Télécharger le code

Nous passons à la partie la plus importante ! Le téléchargement du code de Creative Blogger. Pour cela, c'est très simple, rendez vous [ici](https://github.com/MaelDevFr/creative-blogger) et cliquez sur le bouton vert "Code" puis "Download ZIP". Dézippez le fichier téléchargé et ouvrez le dossier avec VsCode.

Pour installer toutes les dépendances utiles ouvrez le terminal avec `Ctrl + J` ou `Cmd + J` chez Apple et rentrez la commande `npm install`. Ceci fait vous allez pouvoir créer un fichier en le nommer `.env` ce fichier est relativement important car il contiendra le mot de passe de votre adresse mail pour le formulaire de contact. Rentrez dans ce fichier la ligne :

```
EMAIL_PASSWORD=votre_mot_de_passe
```

Exactement comme ça en remplaçant le `votre_mot_de_passe` par votre réel mot de passe d'adressre mail. Rendez vous ensuite dans le dossier pages/api et ouvrez les 2 fichiers upload.ts et contact.ts et modifier votre adresse mail et l'hébergeur SMTP ( que vous pouvez trouver dans les paramètres de votre boîte mail ). Par exemple :

```
const transporter = nodemailer.createTransport({
    host: "mon_client_smtp",
    port: 465,
    secure: true,
    auth: {
      user: "bonjour@votreAdresseMail.fr",
      pass: process.env.EMAIL_PASSWORD,
    },
  });
```

Si le port diffère, changer-le aussi par celui que vous indique votre service mail.

Vous y êtes presque ! Rentrez maintenant la commande suivante dans votre terminal :

```
npm run build
```

Puis une fois que c'est finis :

```
npm start
```

Normalement, ça devrair se lancer. Vous pouvez aller sur votre naviguateur web et rentrez l'adresse : `localhost:3000` et le site devrait s'afficher. Si c'est le cas, bien jouer ! Sinon rendez-vous à la fin de l'article dans la catégorie questions fréquentes.

Ps : pour rajouter des articles vous pouvez créer un fichier avec l'extension `.md` dans le dossier `posts` comme par exemple `hello.md` et rentrer dans ce fichier :

```
---
title: "Bonjour ceci est le titre"
subtitle: "Bonjour ceci est la description de l'article"
date: "2023-05-08"
author: "Maël C."
---

Votre contenu...
```

Pour qu'il s'affiche, stoppez votre terminal puis refaites la commande `npm run build` et la commande `npm start` et voilà ! Votre article est visible !

## 4 : Mise en ligne du site

Maintenant que votre superbe site est prêt vous pouvez le mettre en ligne. Avant tout veuillez me permettre de vous faire un rappel sur la license. Vous pouvez utiliser ce modèle pour n'importe quelle utilisation la seule contrepartie est de citer l'auteur ( donc Creative Blogger ) et d'utiliser la même license, merci !

Bien, vu que l'application est faite en nodeJS vous ne pouvez pas prendre n'importe quel hébergeur. Seulement certains le peuvent. Vous pouvez prendre un VPS ( serveur privé ) et un nom de domaine, cela reviendra plus chère mais vous aurez l'accès total à votre machine ou alors prendre un hébergement web qui supporte le nodeJs comme celui d'[o2switch](https://www.o2switch.fr/) ou [planethoster](https://www.planethoster.com/fr/Hebergements-World). Nous n'allons pas vous expliquer en détail comment faire pour le mettre en ligne, plusieurs tuto existent mais soyez simplement attentif à si votre hébergeur prend en compte nodeJS.

## 5 : Aller plus loin

Pour aller plus loin avec notre template, nous vous conseillons vivement d'apprendre javascript, puis reactjs puis nextjs. Vous aurez alors la main mise sur le code et pourrez le modifier sans problèmes. Mais si vous ne voulez pas apprendre tout cela ( on vous connait ) voici 2 - 3 petits trucs

1. La page /upload sert pour les autres bloggers à uploader des articles qui seront mis dans un dossier spécial et cela vous enverra un mail pour vous dire qu'il faut aller vérifier car un nouvel article a été mis en ligne. Cette page est utile si vous êtes plusieurs sur le même blog.
2. Vous pouvez modifier le nom et la description du site en modifiant le fichier config.js dans le dossier config du site.

## 6 Questions fréquentes :

**Questions :** Je n'arrive pas à installer nodeJs sur mon ordinateur.

_Réponse :_ Suivez un tuto détaillé ( vidéo sur ytb )

**Questions :** Lorsque je fais `npm run build` j'ai une erreur du type MODULE_NOT_FOUND

_Réponse :_ Faites `npm install <le module>` et relancer `npm run build`

## 7 : Conclusion

Et voilà ! Vous avez votre propre blog maintenant merci qui ?

N'oubliez pas que Creative Blogger cherche des rédacteurs motivés pour contribuer au projet, si c'est votre cas rendez-vous sur le [serveur discord](https://discord.gg/uT8zVVn6rQ) ou par mail à l'adresse : contact@creativeblogger.org

A la prochaine !
