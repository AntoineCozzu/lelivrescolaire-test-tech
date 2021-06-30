# Application test pour lelivrescolaire.fr

## Notes

* L'application utilise les Hooks de React plutôt que les classes pour coller au style de développement du livrescolaire

* Pour simuler l'appel aux services web, les méthodes de CRUD ont été mockées avec un simple Promise.resolve, qui renvoie les données chargées depuis une fixture en JSON

* L'application a été découpée en plusieurs composants pour plus de modularité et de lisibilité du code. Il eut été possible de découper plus finement (ex: un composant pour un élément de liste des élèves) dans un contexte réel.

* Le style de l'application a été fait en utilisant des modules CSS, car selon la documentation de React, il n'y a pas de contre indication à utiliser cette méthode plutôt que le CSS in JS. Dans un projet plus complet, avec notamment une gestion des thèmes, l'utilisation d'un Contexte avec Hooks de style aurait peût être été préférable.

* L'application a été conçue pour être responsive, même si des améliorations sont possibles pour optimiser l'affichage dans certains formats. Le responsive design a été effectué à l'aide des media-queries.

* Pour faciliter le design, la palette de couleur a été déclarée sous forme de variable dans le fichier index.css.

* Les images sont chargées depuis le dossier public, pour simuler un backend servant les fichiers statiques. Normalement, le dossier public ne serait pas ajouté au repository, puisqu'il sert uniquement au développement.

* Quelques modules externes ont été inclus pour faciliter le développement 

    * react-router-dom
    * react-helmet
    * react-datepicker
    * formik
    * moment
    * react-tiny-popover

* L'application présente des vulnérabilités lors du lancement de npm audit. Elles proviennent de react-scripts inclus à la création en utilisant create-react-app. Etant donné que j'ai utilisé la dernière version de cet outil, recommandé par la documentation officielle react, je n'ai pas tenu compte de ces vulnérabilités. Dans un contexte réel, il faudrait impérativement s'occuper de ces vulnérabilités, en se séparant par exemple, de la dépendance react-scripts, qui n'est à ma connaissance plus nécessaire une fois l'application construite. 

* Un warning est présent au lancement de l'application, concernant le module react-helmet (permettant de modifier le header de l'application). N'étant pas encore à l'aise avec l'environnement React, je n'ai pas tenté de le corriger, mais il semble qu'il soit du à l'utilisation de la méthode componentWillMount en strict mode, qui devrait être remplacée dans un hook pour correspondre au fonctionnemnt des dernières versions de React.

