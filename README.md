# Révision HERMES — Pneumologie adulte (ERS)

Site web statique de révision pour l'examen HERMES de pneumologie adulte (European Respiratory Society).

## Lancer le site

Aucune installation nécessaire. Ouvrir simplement `index.html` dans un navigateur,
ou servir le dossier pour un rendu identique à un hébergement :

```bash
cd hermes-revision
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Fonctionnalités

- **Accueil** : les 10 modules du syllabus HERMES, avec pourcentage de réussite par module.
- **Entraînement par module** : sous-thèmes officiels + références recommandées, quiz avec correction immédiate (explication + source).
- **Mode examen** : nombre de questions, périmètre (tous modules ou un seul) et durée paramétrables (jusqu'à 90 QCM / 3 h comme le vrai examen).
- **QCM aléatoire** : 10 questions, en privilégiant celles jamais vues ou ratées.
- **Statistiques** : couverture et réussite par module, sauvegardées dans le `localStorage` du navigateur.

## Structure

```
hermes-revision/
├── index.html            # page unique (SPA minimaliste)
├── css/style.css         # styles
├── js/app.js             # logique d'application (routes, quiz, stats)
└── data/
    ├── syllabus.js       # arborescence officielle HERMES (modules, sous-thèmes, références)
    └── questions.js      # banque de QCM (50 questions, taguées module/sous-thème/difficulté)
```

## Ajouter des questions

Chaque question suit ce format dans `data/questions.js` :

```js
{
  id: "xx-99",                          // identifiant unique
  module: "voies-aeriennes",             // id d'un module du syllabus
  sousTheme: "BPCO : traitement de fond et exacerbations",
  difficulte: 2,                         // 1 = facile, 2 = intermédiaire, 3 = difficile
  enonce: "Énoncé de la question...",
  options: ["Option A", "Option B", "Option C", "Option D", "Option E"],
  reponse: 2,                            // index (0-4) de la bonne réponse
  explication: "Pourquoi cette réponse...",
  source: "Guideline ERS/ATS ..., année"
}
```

## Avertissement

Contenu pédagogique rédigé à partir des recommandations publiques (ERS, GOLD, ESC, WHO...).
Les QCM sont originaux et paraphrasent les recommandations ; les sources citées renvoient
vers les publications officielles. Ne remplace pas les ressources officielles de préparation
(ERS Handbook, modules de préparation HERMES).
