# Workshop

## Faire un site de A à Z : Partie 2 | Front-End

L'objectif de ce workshop est de vous apprendre à créer une application en React.js.
Nous corrigerons les exercices au fur et à mesure. Afin de s'assurer que vous compreniez bien, vous devrez effectuer les **bonnes** recherches afin de trouver les solutions appropriés.

# I. Setup

## Installation

Afin de réaliser ce workshop, vous aurez besoin de quelques outils :

 - **node.js** Framework javascript
 - **npm**  Outil permettant d'installer des paquets / lancer des scripts
 
## Initialisation
Vous pouvez, soit cloner notre début de projet ici : [https://github.com/Sorakie/SiteA-Z-front](https://github.com/Sorakie/SiteA-Z-front)
Pour gagner du temps, nous vous conseillons fortement de cloner notre repo.

Sinon, vous pouvez l'initialiser vous même avec les instructions suivantes:

    npx create-react-app <nom>
    cd <nom>/src
    mkdir Components
    cd Components
    touch Home.jsx
    touch Log.jsx

**npx create-react-app** va nous permettre d'initialiser un projet React.
Nous allons maintenant installer les différentes librairies que nous allons utiliser, pour ce faire, nous utilisons **npm install**
Si vous avez cloné notre repo, faite juste `npm install` dans le dossier.
Sinon, faites les commandes suivantes :

    npm install history
    npm install react-router-dom
    npm install axios

Pour lancer votre projet, rendez vous à la racine de votre application et utilisez la commande suivante:

    npm install
    npm start

# II.Exercice

## 1. Inscription et connexion

Pour cet exercice, vous allez créer un formulaire d'inscription et un formulaire de connexion dans le fichier **Log.jsx**.

### Partie 1: L'inscription
Le formulaire d'inscription que vous allez créer doit permettre d'entrer les informations suivantes:

 - Email
 - Mot De Passe
 - Prénom
 - Nom
 - Age

Une fois que vous avez créé votre formulaire, lorsque vous le soumettez, il faut demander au serveur de créer votre compte.
Pour cela, nous allons utiliser Axios, qui nous permet de faire des requêtes http.
Voici les paramètres à envoyer avec votre requête:

	URL: <BASIC URL> + '/api/signup'
	Method: POST
	Params: {
	    email: <email>
	    password: <mot de passe>
	    firstname: <prénom>
	    lastname: <nom>
	    age: <age>
	}

Si votre requête réussi, vous recevrez en réponse un code **200**.
Pour gérer les réponses des requêtes, nous vous conseillons de vous renseigner sur **then** et **catch**.

### Partie 2: La connexion
Créez le second formulaire, en dessous du premier, qui servira cette fois a vous connecter.
Cette fois nous voulons les informations suivantes:

 - Email
 - Mot de passe

Comme pour la première partie vous devez utiliser Axios pour faire votre requête.

	URL: <BASIC URL> + '/api/login'
	Method: POST
	Params: {
	    email: <email>
	    password: <mot de passe>
	}
Si votre requête réussi, vous recevrez en réponse un code 200, mais également un token.
Ce token, vous devez l'enregistrer dans votre stockage local , nous vous laissons chercher la solution. Il vous servira à chaque requête concernant **votre compte**.
En cas de réussite, redirigez votre page sur l'endpoint `/Home`, en utilisant `history.push()`, ce qui vous mènera à la page principale.

### Partie 3: L'affichage conditionnel
Pour plus de clarté, nous voulons afficher un seul formulaire à la fois, pour cela, vous allez créer un affichage conditionnel.

## 2. La page principale
Pour cet exercice, vous allez utiliser le fichier **Home.jsx**.
Le but est d'afficher les informations de l'utilisateur.

### Partie 1: Récupérer les informations
vous devez récupérer les informations de l'utilisateur, pour cela, utilisez Axios.
Comme il s'agit d'une requête qui vous permet d'accéder à des informations utilisateur, vous aurez besoin d'envoyer le token que vous avez réussi à obtenir précédemment.

	URL: <BASIC URL> + '/api/authme'
	Method: GET
	Authorization: Bearer <TOKEN>
Si votre requête est un succès, vous recevrez vos informations, vous devez maintenant les afficher.

### Partie 2: Vérifier la connexion
La requête précédente peut également être utilisé pour savoir si on est connecté.
Si le token qui à été utilisé dans la requête n'est pas bon vous recevrez une erreur.
Dans ce cas, redirigez votre page vers l'endpoint `/`.


`En utilisant la même requête dans le fichier "Log.jsx", vous pouvez savoir si vous êtes déjà connecté. Si c'est le cas, redirigez directement votre page sur l'endpoint '/Home'. `

### Partie 3: Déconnexion
Maintenant que nous avons vu comment savoir si nous sommes connecté, créez un bouton qui vous permet de vous déconnecter et de rediriger votre page sur l'endpoint `/`.

## 3. Modifier le compte
Toujours dans le fichier **Home.jsx**, le but de cet exercice est de voir comment nous pouvons modifier notre compte.

### Partie 1: Modifier les informations
Ajoutez un bouton qui permet d'afficher ou de cacher un formulaire.
Ce formulaire permet d'afficher et de modifier les informations suivantes :

  - Prénom
 - Nom
 - Age
 
 Bien évidement, pour que les changements soient pris en compte par le serveur, vous devez utiliser Axios avec les paramètres suivant.

	URL: <BASIC URL> + '/api/update'
	Method: POST
	Params: {
	    firstname: <prénom>
	    lastname: <nom>
	    age: <age>
	}
	Authorization: Bearer <token>

### Partie 2: Supprimer votre compte
Ajoutez un bouton, qui vous permet de supprimer votre compte.
Pour ne pas changer, utilisez Axios pour demander au serveur la suppression du compte.

	URL: <BASIC URL> + '/api/delete'
	Method: POST
	Params: {
	    firstname: <prénom>
	    lastname: <nom>
	}
	Authorization: Bearer <token>

Pour ne pas supprimer votre compte par mégarde, je vous propose d'ajouter une sécurité à votre bouton.
Pour cela, ajoutez une vérification, avec une pop-up.

## 4. Amusons nous avec du CSS
Maintenant qu'on à crée tous ça, nous vous proposons de rendre le tout un peu plus joli en ajoutant du Css.

Le Css vous permet de styliser vos pages comme vous le souhaitez.

A présent, à vous de créer un design qui vous convient.


## Merci d'avoir participé à notre WorkShop
