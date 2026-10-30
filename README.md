# Révision HERMES — Pneumologie adulte (ERS)

Plateforme de préparation à l'examen **HERMES Adult Respiratory Medicine** (European Respiratory Society).

## Structure conforme à l'examen officiel

- **Syllabus** : les **20 modules officiels** du syllabus ERS (Tabin N, et al. *Breathe* 2018; 14: 19–28 — 136 items)
- **Questions aux formats officiels** :
  - **Type A** : 5 options, 1 seule correcte → **1 point**
  - **K-prime** : 4 options, 0 à 4 correctes, notation (+/−) → **4 correctes = 1 pt, 3 correctes = 0,5 pt**
  - **Pas de pénalité négative** ; question sans réponse = 0 point
- **Examen réel** : 90 QCM / 3 h — le mode examen simule ce format
- **Corrections détaillées** en français, avec **lien vers la recommandation la plus récente** (catalogue ERS : channel.ersnet.org/channel-25-guidelines)

## Fonctionnalités

- **Comptes utilisateurs** : chaque utilisateur suit sa propre progression (login/mot de passe, stockage local par navigateur)
- **Entraînement par module** (20 modules) avec correction immédiate et source
- **Mode examen** : 10 à 90 questions, chrono jusqu'à 3 h, correction à la fin avec détail par module
- **Questions aléatoires** : 10 questions, en privilégiant celles jamais réussies
- **Fiches de cours** : récapitulatif des recommandations par module (chiffres, seuils, arbres de décision)
- **Statistiques** : couverture et réussite par module

## Contenu

| Fichier | Contenu |
|---|---|
| `data/syllabus.js` | 20 modules officiels (Breathe 2018) + sources ERS avec liens |
| `data/questions-v2.js` | Banque de questions (formats A et K-prime), corrections détaillées + liens recos |
| `data/fiches-v2.js` | Fiches récap des recommandations par module |

## Lancer le site

```bash
cd hermes-revision
python3 -m http.server 8080
# ouvrir http://localhost:8080
```

Hébergé sur GitHub Pages : https://adrienott37.github.io/hermes-revision/

## Ajouter des questions

```js
{
  id: "q-mXX-YY", module: "m07", format: "A" /* ou "K" */, sousTheme: "BPCO et emphysème", difficulte: 2,
  enonce: "Vignette clinique...",
  options: ["A", "B", "C", "D", "E"],     // 5 pour Type A, 4 pour K-prime
  reponse: 1,                              // Type A : index 0-4 ; K-prime : [true, true, false, false]
  correction: "Explication détaillée...",
  source: { t: "GOLD 2025", l: "https://goldcopd.org" }
}
```

## Sources

- Syllabus : ERS international Adult Respiratory Medicine syllabus (Breathe 2018)
- Recommandations : catalogue officiel ERS — https://channel.ersnet.org/channel-25-guidelines (toujours la version la plus récente)
- Examen : structure et scoring selon les HERMES Online Examination Terms & Conditions 2026

## Avertissement

Outil pédagogique **indépendant et non endossé par l'ERS**. Les questions sont originales, rédigées à partir
des recommandations publiques. Ne remplace pas les ressources officielles de préparation
(ERS Handbook of Respiratory Medicine, Academy of adult respiratory medicine, self-assessment course).
