// Banque HERMES v2 — questions en français, formats A et K-prime
// Chaque question : correction détaillée + lien vers la recommandation la plus récente
const QUESTIONS_V2 = [
  // ============ M01 ============
  {
    id: "q-m01-01", module: "m01", format: "A", sousTheme: "Immunologie et mécanismes de défense", difficulte: 2,
    enonce: "Un patient de 34 ans consulte pour des sinusites et pneumonies à germes encapsulés (pneumocoque, Haemophilus) récidivantes depuis 2 ans. Quel bilan étiologique oriente le mieux vers un déficit immunitaire humoral ?",
    options: [
      "Dosage pondéral des immunoglobulines G, A et M",
      "Numération des lymphocytes T CD4",
      "Dosage du complément C3-C4 seul",
      "Test de provocation bronchique à la méthacholine",
      "Dosage de l'alpha-1-antitrypsine"
    ],
    reponse: 0,
    correction: "Les infections récidivantes à germes encapsulés (pneumocoque, Haemophilus influenzae) orientent vers un déficit humoral : le premier bilan est le dosage pondéral des IgG, IgA et IgM (à compléter par la réponse vaccinale et les sous-classes d'IgG). Un déficit commun variable (déficit en IgG) est la cause la plus fréquente de déficit immunitaire primitif symptomatique de l'adulte. Les lymphocytes T orientent vers les infections opportunistes (Pneumocystis, CMV), le complément vers les infections à Neisseria.",
    source: { t: "ERS Handbook — Immunodeficiency and respiratory infections", l: "https://publications.ersnet.org/content/book/handbook/978-1-84984-2037" }
  },
  {
    id: "q-m01-02", module: "m01", format: "K", sousTheme: "Immunologie et mécanismes de défense", difficulte: 2,
    enonce: "Concernant les mécanismes de défense pulmonaire, quelles propositions sont vraies ?",
    options: [
      "L'escalator mucociliaire est le principal mécanisme de clairance des voies aériennes proximales",
      "Les macrophages alvéolaires assurent la clairance des particules déposées au niveau alvéolaire",
      "Le déficit isolé en IgA est la cause la plus fréquente d'infections pulmonaires sévères récidivantes",
      "La toux est le mécanisme de défense le plus important au niveau alvéolaire"
    ],
    reponse: [true, true, false, false],
    correction: "A et B vraies. L'escalator mucociliaire (voies aériennes conductrices) et les macrophages alvéolaires (zone alvéolaire, non ciliée) sont les deux piliers de la clairance mucosaire. C faux : le déficit isolé en IgA est fréquent (1/500) mais le plus souvent pauci-symptomatique ; c'est le déficit en IgG qui expose aux infections pulmonaires récidivantes. D faux : la toux protège les voies aériennes proximales ; l'alvéole n'est pas accessible au courant aérien de la toux.",
    source: { t: "ERS Handbook — Lung defence mechanisms", l: "https://publications.ersnet.org/content/book/handbook/978-1-84984-2037" }
  },
  // ============ M02 ============
  {
    id: "q-m02-01", module: "m02", format: "A", sousTheme: "Gaz du sang et équilibre acide-base (diagnostic)", difficulte: 2,
    enonce: "Un patient de 68 ans, BPCO sévère, présente en état stable les gaz du sang suivants : pH 7,37 ; PaCO2 58 mmHg ; HCO3- 32 mmol/L. Quelle est l'interprétation correcte ?",
    options: [
      "Acidose respiratoire aiguë",
      "Acidose respiratoire chronique compensée",
      "Alcalose métabolique isolée",
      "Acidose mixte",
      "Gaz normaux pour l'âge"
    ],
    reponse: 1,
    correction: "pH normal/légèrement bas + PaCO2 élevée = acidose respiratoire. Le HCO3- nettement élevé (32 mmol/L) traduit la compensation rénale, qui nécessite 3 à 5 jours : c'est une acidose respiratoire chronique compensée — le profil gazométrique classique de la BPCO en insuffisance respiratoire chronique. Règles de compensation : en aigu +1 mmol/L de HCO3- par +10 mmHg de PaCO2 ; en chronique +3 à 4 mmol/L par +10 mmHg. Ici PaCO2 +18 mmHg au-dessus de 40 -> +5 à 7 mmol attendus en aigu (on en a 8-9 : cohérent avec une compensation chronique).",
    source: { t: "ERS/ATS 2022 update — Standardisation des EFR", l: "https://doi.org/10.1183/13993003.01008-2022" }
  },
  {
    id: "q-m02-02", module: "m02", format: "K", sousTheme: "Interprétation des EFR", difficulte: 2,
    enonce: "Concernant l'interprétation des explorations fonctionnelles respiratoires, quelles propositions sont vraies ?",
    options: [
      "Une restriction est définie par une capacité pulmonaire totale (CPT) abaissée, pas par une CVF isolée",
      "Un trouble obstructif est défini par un rapport VEMS/CVF abaissé sous la limite inférieure de la normale",
      "Une DLCO abaissée avec volumes préservés oriente vers une atteinte vasculaire pulmonaire",
      "La pléthysmographie sous-estime la CPT chez un patient emphysémateux avec bulles"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies. La restriction se juge sur la CPT (< limite inférieure de normale) — la CVF seule peut baisser par obstruction ou par inspiration limitée. L'obstruction = VEMS/CVF < LIN (z-score, standard ERS/ATS 2022). Une DLCO abaissée avec CPT préservée signe une atteinte du lit capillaire : HTAP, maladie thromboembolique. D faux : c'est l'inverse — la méthode de dilution (hélium/azote) sous-estime la CPT en cas de bulles (air non communicant non mesuré), tandis que la pléthysmographie mesure tout le volume gazeux thoracique (loi de Boyle) : c'est la méthode de référence en cas de trapping/bulles.",
    source: { t: "ERS/ATS 2022 update — Standardisation des EFR", l: "https://doi.org/10.1183/13993003.01008-2022" }
  },
  // ============ M03 ============
  {
    id: "q-m03-01", module: "m03", format: "A", sousTheme: "Symptômes", difficulte: 1,
    enonce: "Selon la guideline ERS sur la toux chronique, à partir de quelle durée une toux est-elle définie comme chronique chez l'adulte ?",
    options: [
      "Plus de 2 semaines",
      "Plus de 3 semaines",
      "Plus de 4 semaines",
      "Plus de 8 semaines",
      "Plus de 3 mois"
    ],
    reponse: 3,
    correction: "La toux chronique de l'adulte est définie par une durée supérieure à 8 semaines (guideline ERS 2020). La démarche recommandée est par étapes : rechercher d'abord un traitement par IEC, une exposition tabagique et une anomalie radiographique, puis explorer les causes les plus fréquentes : toux d'origine ORL/rhinite, asthme (dont toux-variant), RGO. En cas d'échec des traitements d'épreuve : toux réfractaire -> gabapentinoïdes et rééducation comportementale.",
    source: { t: "ERS guidelines on chronic cough (2020)", l: "https://doi.org/10.1183/13993003.0186-2019" }
  },
  {
    id: "q-m03-02", module: "m03", format: "K", sousTheme: "Symptômes", difficulte: 3,
    enonce: "Concernant la démarche diagnostique de la toux chronique chez l'adulte (guideline ERS 2020), quelles propositions sont vraies ?",
    options: [
      "Les traitements d'épreuve séquentiels ciblant les causes les plus fréquentes sont recommandés en première intention",
      "La toux réfractaire peut bénéficier de gabapentinoïdes",
      "La rééducation comportementale de la toux est recommandée en cas de toux réfractaire",
      "Un scanner thoracique normal élimine formellement toute cause respiratoire de la toux"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies (recommandations de la guideline ERS 2020 sur la toux) : démarche par étapes avec traitements d'épreuve ciblés (rhinite/upper airway, asthme, RGO) ; en cas de toux réfractaire (hypersensibilité du réflexe tussigène), les gabapentinoïdes (gabapentine, prégabaline) et la rééducation comportementale (physiothérapie de la toux) sont les deux traitements recommandés. D faux : un scanner normal n'élimine pas un asthme (toujours possible avec imagerie normale), un RGO ou une toux d'origine ORL — il élimine en revanche les lésions structurales majeures (tumeur, fibrose).",
    source: { t: "ERS guidelines on chronic cough (2020)", l: "https://doi.org/10.1183/13993003.0186-2019" }
  },
  // ============ M04 ============
  {
    id: "q-m04-01", module: "m04", format: "A", sousTheme: "EBUS et échographie œsophagienne (EUS)", difficulte: 2,
    enonce: "Dans le staging d'un cancer bronchique non à petites cellules, une adénopathie médiastinale suspecte est visible. Selon la guideline ERS/ESGE/ESTS, quelle est la technique de référence pour ponctionner cette adénopathie ?",
    options: [
      "Médiastinoscopie chirurgicale systématique",
      "Échographie endobronchique avec ponction à l'aiguille (EBUS-TBNA)",
      "Biopsie transparenchymateuse au scanner",
      "Thoracentèse",
      "Biopsie ganglionnaire périphérique systématique"
    ],
    reponse: 1,
    correction: "L'EBUS-TBNA (échographie endobronchique avec ponction à l'aiguille fine) est la technique de référence du staging médiastinal invasif : elle permet de ponctionner les stations 2R/2L, 4R/4L, 7 et 10-11 sous contrôle échographique en temps réel, en ambulatoire, avec un rendement diagnostique élevé. La médiastinoscopie chirurgicale est réservée aux cas où l'EBUS est non contributive ou non disponible. L'ERS/ESGE/ESTS publie en 2026 une mise à jour de la guideline endosonographie.",
    source: { t: "ERS/ESGE/ESTS guideline on endosonography (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" }
  },
  {
    id: "q-m04-02", module: "m04", format: "K", sousTheme: "Échographie thoracique", difficulte: 2,
    enonce: "Concernant l'échographie thoracique (échographie pleuro-pulmonaire), quelles propositions sont vraies ?",
    options: [
      "Elle détecte l'épanchement pleural avec une sensibilité supérieure à la radiographie de thorax",
      "Le signe du poumon glissant (lung sliding) normal élimine un pneumothorax du côté exploré",
      "Des lignes B bilatérales diffuses orientent vers un œdème pulmonaire cardiogénique",
      "Elle permet de guider la thoracentèse en temps réel"
    ],
    reponse: [true, true, true, true],
    correction: "Les 4 propositions sont vraies. A : l'échographie détecte les épanchements de faible abondance (sensibilité > 90 %) bien mieux que la radiographie. B : la présence du lung sliding (glissement pleural) élimine un pneumothorax côté exploré ; son abolition + lignes A = pneumothorax probable. C : les lignes B (au moins 3 par champ, bilatérales, diffuses) = syndrome interstitiel, typique de l'œdème pulmonaire cardiogénique ; focales = atélectasie/pneumopathie. D : le repérage échographique du point de ponction est la pratique recommandée pour la thoracentèse (statement ERS 2026 sur les interventions échoguidées).",
    source: { t: "ERS statement on percutaneous ultrasound-guided interventions (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" }
  },
  // ============ M05 ============
  {
    id: "q-m05-01", module: "m05", format: "A", sousTheme: "Soins palliatifs", difficulte: 2,
    enonce: "Un patient en insuffisance respiratoire terminale (PID fibrosante) présente une dyspnée majeure au moindre effort, réfractaire à l'oxygène. Selon les guidelines ERS sur la prise en charge des symptômes et les soins palliatifs, quelle mesure est recommandée pour soulager la dyspnée ?",
    options: [
      "Ventilation non invasive en pression support",
      "Approche multimodale incluant le ventilateur à main (fan therapy), les techniques de respiration et la morphine à faible dose",
      "Corticothérapie orale à forte dose",
      "Antibiothérapie probabiliste",
      "Oxygène à haut débit en continu"
    ],
    reponse: 1,
    correction: "La guideline ERS sur la prise en charge des symptômes de l'insuffisance respiratoire grave (2024) et la guideline ERS soins palliatifs BPCO/PID (2023) recommandent une approche multimodale de la dyspnée réfractaire : fan therapy (ventilateur à main — efficace sur la dyspnée), techniques de respiration (pursed-lip breathing, positions), et opioïdes à faible dose (morphine orale 2,5-5 mg) pour la dyspnée réfractaire dans les maladies avancées. L'oxygène n'est utile que si hypoxémie documentée. La VNI a une place dans la dyspnée de décompensation, pas en première intention palliative.",
    source: { t: "ERS symptom management for serious respiratory illness (2024)", l: "https://doi.org/10.1183/13993003.00143-2024" }
  },
  {
    id: "q-m05-02", module: "m05", format: "K", sousTheme: "Réhabilitation pulmonaire", difficulte: 2,
    enonce: "Concernant la réhabilitation pulmonaire, quelles propositions sont vraies ?",
    options: [
      "Elle est fortement recommandée chez tout patient BPCO symptomatique (mMRC >= 2) malgré un traitement inhalé optimal",
      "Elle est recommandée dans les bronchiectasies avec dyspnée et/ou capacité d'exercice réduite",
      "Le programme inclut réentraînement à l'effort, éducation thérapeutique et soutien psychosocial",
      "Elle est contre-indiquée chez les patients sous oxygénothérapie de longue durée"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies. A : la réhabilitation pulmonaire est une intervention à fort niveau de preuve dans la BPCO (amélioration de la dyspnée, de la qualité de vie et de la capacité d'exercice ; réduction des réhospitalisations). B : la guideline ERS bronchiectasies 2025 la recommande fortement en cas de dyspnée et/ou capacité d'exercice réduite. C : programme multimodal : réentraînement aérobie et renforcement musculaire + éducation + prise en charge nutritionnelle/psychosociale. D faux : l'oxygénothérapie n'est pas une contre-indication — l'adaptation de l'entraînement (débit d'O2 ajusté) fait partie de la pratique standard des programmes de réhabilitation.",
    source: { t: "ERS bronchiectasis guideline (2025)", l: "https://doi.org/10.1183/13993003.01126-2025" }
  },
  // ============ M06 ============
  {
    id: "q-m06-01", module: "m06", format: "A", sousTheme: "Gestes de prise en charge immédiats", difficulte: 2,
    enonce: "Un patient de 58 ans présente en urgence une dyspnée aiguë avec hypoxémie (PaO2/FiO2 < 200), fièvre à 39°C et infiltrats bilatéraux. Quelle est la première étape de la prise en charge ?",
    options: [
      "Attendre les résultats des prélèvements microbiologiques",
      "Évaluation clinique rapide (score de gravité, gaz du sang) avec oxygénothérapie à cible adaptée et antibiothérapie probabiliste précoce si suspicion d'infection",
      "Intubation immédiate systématique",
      "Corticothérapie à forte dose d'emblée",
      "TDM thoracique avant tout traitement"
    ],
    reponse: 1,
    correction: "En urgence respiratoire : évaluation rapide de la gravité (constantes, gaz du sang, score CURB-65 si pneumonie) + oxygénothérapie adaptée (cible SpO2 88-92 % si risque d'hypercapnie ; 94-98 % sinon) + antibiothérapie probabiliste précoce (dans l'heure si choc septique — Surviving Sepsis) sans attendre les prélèvements. L'intubation se décide selon la défaillance (épuisement, acidose réfractaire, trouble de conscience). La TDM est un examen de seconde intention, jamais un préalable au traitement urgent.",
    source: { t: "ERS/ESICM/ESCMID/ALAT severe CAP guidelines (2023)", l: "https://doi.org/10.1183/13993003.00755-2023" }
  },
  {
    id: "q-m06-02", module: "m06", format: "K", sousTheme: "Situations spécifiques", difficulte: 3,
    enonce: "Dans l'embolie pulmonaire grave avec instabilité hémodynamique (choc), quelles propositions sont vraies selon les recommandations ESC 2019 ?",
    options: [
      "L'anticoagulation curative doit être débutée immédiatement sans attendre l'imagerie",
      "La thrombolyse systémique est indiquée en cas de haut risque avec choc persistant",
      "Le soutien hémodynamique inclut le remplissage prudent et les catécholamines",
      "L'échocardiographie au lit du patient peut confirmer une dysfonction ventriculaire droite aiguë"
    ],
    reponse: [true, true, true, true],
    correction: "Les 4 propositions sont vraies (ESC 2019, EP à haut risque). A : suspicion forte + instabilité -> anticoagulation immédiate (HBPM/HNF) sans attendre la TDM ; l'imagerie (TDM angio) se fait après stabilisation initiale. B : la thrombolyse systémique (altéplase) est indiquée en cas d'EP avec choc persistant (haut risque) ; contre-indications absolues à vérifier ; alternative : thrombectomie percutanée dans les centres experts. C : remplissage prudent (500 mL max, l'oreillette droite est déjà dilatée) + noradrénaline. D : l'échocardiographie de choc (dilatation VD, septum paradoxal, signe de McConnell) oriente le diagnostic au lit du patient.",
    source: { t: "ESC 2019 — Acute pulmonary embolism", l: "https://doi.org/10.1093/eurheartj/ehz405" }
  },
  // ============ M07 ============
  {
    id: "q-m07-01", module: "m07", format: "A", sousTheme: "BPCO et emphysème", difficulte: 2,
    enonce: "Patient 68 ans, BPCO, mMRC 2, deux exacerbations modérées l'an dernier, éosinophiles 120/mm3, VEMS 52 %. Selon GOLD 2025, quel traitement de fond initial est recommandé ?",
    options: [
      "CSI/LABA",
      "Bithérapie bronchodilatatrice LABA/LAMA",
      "CSI/LABA/LAMA (triple thérapie)",
      "Théophylline",
      "SABA à la demande seul"
    ],
    reponse: 1,
    correction: "Groupe E selon GOLD (au moins 2 exacerbations modérées ou au moins 1 hospitalisation) : la bithérapie LABA/LAMA est le traitement initial recommandé. Les CSI ne s'ajoutent qu'en cas d'exacerbations persistantes sous double bronchodilatation, de préférence si éosinophiles >= 300/mm3 (ou >= 100 avec exacerbations sévères/hospitalisations) — ici 120/mm3, donc pas d'CSI d'emblée. La triple thérapie est une escalade, pas un traitement initial.",
    source: { t: "GOLD 2025 — Global Strategy for COPD", l: "https://goldcopd.org" }
  },
  {
    id: "q-m07-02", module: "m07", format: "K", sousTheme: "Bronchiectasies", difficulte: 2,
    enonce: "Selon la guideline ERS 2025 sur les bronchiectasies de l'adulte, quelles propositions sont vraies ?",
    options: [
      "Les corticoïdes inhalés au long cours ne sont pas recommandés en l'absence d'asthme ou de BPCO associés",
      "La réhabilitation pulmonaire est recommandée en cas de dyspnée et/ou capacité d'exercice réduite",
      "Les techniques de désencombrement (airway clearance) doivent être enseignées par un kinésithérapeute respiratoire",
      "Un traitement antibiotique au long cours doit être systématiquement prescrit à tous les patients"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies — recommandations fortes de la guideline ERS 2025. A : pas de CSI au long cours sans asthme/BPCO associés (risque de pneumonies et de mycobactérioses ; à réévaluer formellement si inefficaces). B : réhabilitation pulmonaire fortement recommandée (dyspnée et/ou réduction de la capacité d'exercice). C : les techniques de désencombrement personnalisées, enseignées par un kinésithérapeute respiratoire, sont le socle de la prise en charge. D faux : l'antibiothérapie au long cours n'est pas systématique : elle se discute pour les patients avec exacerbations fréquentes malgré un traitement optimal (macrolides au long cours — surveillance de la résistance et de la QT) ou en éradication de Pseudomonas.",
    source: { t: "ERS bronchiectasis guideline (2025)", l: "https://doi.org/10.1183/13993003.01126-2025" }
  },
  // ============ M08 ============
  {
    id: "q-m08-01", module: "m08", format: "A", sousTheme: "Infections respiratoires basses", difficulte: 2,
    enonce: "Patient 75 ans, PAC sévère hospitalisée en réanimation (choc septique). Quelle antibiothérapie probabiliste initiale est recommandée par la guideline ERS/ESICM/ESCMID/ALAT 2023 ?",
    options: [
      "Amoxicilline seule IV",
      "Bêtalactamine IV à large spectre (ex. C3G) associée à un macrolide IV ou une fluoroquinolone antipneumococcique",
      "Gentamicine seule",
      "Cotrimoxazole IV seul",
      "Antifongique probabiliste d'emblée"
    ],
    reponse: 1,
    correction: "PAC sévère en réanimation : bithérapie associant une bêtalactamine active sur le pneumocoque (ceftriaxone ou autre C3G, adaptée aux résistances locales) et un macrolide IV (ou une fluoroquinolone antipneumococcique en alternative) — couverture des atypiques (Legionella, Mycoplasma) et bénéfice démontré en survie. Désescalade dès la documentation microbiologique. La guideline ERS/ESICM/ESCMID/ALAT 2023 détaillent les modalités.",
    source: { t: "ERS/ESICM/ESCMID/ALAT severe CAP guidelines (2023)", l: "https://doi.org/10.1183/13993003.00755-2023" }
  },
  {
    id: "q-m08-02", module: "m08", format: "K", sousTheme: "Grippe, pandémies et SARS", difficulte: 2,
    enonce: "Concernant la grippe chez les patients à risque de complications, quelles propositions sont vraies ?",
    options: [
      "Les inhibiteurs de la neuraminidase (oseltamivir) réduisent la durée des symptômes et les complications s'ils sont débutés précocement",
      "La vaccination annuelle est la mesure de prévention la plus importante",
      "Les antibiotiques sont indiqués d'emblée dans toute grippe",
      "La grippe peut se compliquer de pneumonie virale primitive ou de surinfection bactérienne"
    ],
    reponse: [true, true, false, true],
    correction: "A, B et D vraies. A : oseltamivir dans les 48 h du début chez les patients à risque (âge > 65, comorbidités respiratoires/cardiaques, grossesse, immunodépression). B : la vaccination annuelle reste la mesure de prévention essentielle (OMS). D : complications classiques : pneumonie virale primitive, surinfection à pneumocoque/S. aureus, décompensation de maladie chronique. C faux : les antibiotiques ne sont pas systématiques — uniquement en cas de surinfection bactérienne documentée ou fortement suspectée (purulence, CRP élevée, pneumonie).",
    source: { t: "WHO — Influenza guidelines", l: "https://www.who.int/teams/influenza" }
  },
  // ============ M09 ============
  {
    id: "q-m09-01", module: "m09", format: "A", sousTheme: "Tuberculose pulmonaire (dont MDR/XDR)", difficulte: 1,
    enonce: "Le traitement standard d'une tuberculose pulmonaire sensible de l'adulte comporte en phase d'attaque :",
    options: [
      "Isoniazide + rifampicine pendant 2 mois",
      "Isoniazide + rifampicine + pyrazinamide + éthambutol pendant 2 mois",
      "Isoniazide seul pendant 6 mois",
      "Rifampicine + éthambutol pendant 9 mois",
      "Quinolone + macrolide pendant 3 mois"
    ],
    reponse: 1,
    correction: "Phase d'attaque : quadrithérapie RHZE (isoniazide, rifampicine, pyrazinamide, éthambutol) pendant 2 mois, puis phase d'entretien RH (isoniazide + rifampicine) pendant 4 mois — durée totale 6 mois pour une tuberculose sensible sans facteur de risque de rechute. L'OMS recommande un test moléculaire rapide (Xpert MTB/RIF) pour détecter M. tuberculosis et la résistance à la rifampicine sur tout prélèvement BAAR+.",
    source: { t: "WHO TB treatment guidelines", l: "https://www.who.int/publications/i/item/9789240061507" }
  },
  {
    id: "q-m09-02", module: "m09", format: "K", sousTheme: "Mycobactérioses non tuberculeuses", difficulte: 3,
    enonce: "Concernant les infections à mycobactéries non tuberculeuses (MNT), quelles propositions sont vraies ?",
    options: [
      "Le diagnostic requiert des critères cliniques, radiologiques et microbiologiques",
      "Une simple culture positive d'expectoration suffit à affirmer l'infection et à débuter le traitement",
      "Le traitement du complexe M. avium dure au moins 12 mois après négativation des cultures",
      "Les patients avec bronchiectasies et nodules arborisants (tree-in-bud) constituent un tableau radioclinique typique"
    ],
    reponse: [true, false, true, true],
    correction: "A, C et D vraies (critères ATS/ERS, guideline BTS 2017). A : diagnostic = triade clinique (symptômes, exclusion des autres causes) + radiologique (TDM : nodules, arborisation, cavitations) + microbiologique (au moins 2 cultures positives d'expectorations, ou 1 LBA/biopsie positive). C : traitement MAC : clarithromycine/azithromycine + rifampicine + éthambutol, au moins 12 mois après négativation des cultures. D : bronchiectasies + tree-in-bud = présentation classique de l'infection à MNT chez la femme âgée. B faux : la colonisation est fréquente dans les bronchiectasies — une seule culture positive ne suffit jamais à affirmer l'infection (d'où les critères microbiologiques répétés).",
    source: { t: "BTS guideline NTM (2017)", l: "https://doi.org/10.1183/13993003.00794-2017" }
  },
  // ============ M10 ============
  {
    id: "q-m10-01", module: "m10", format: "A", sousTheme: "Cancer bronchique (syndromes paranéoplasiques inclus)", difficulte: 2,
    enonce: "Femme de 58 ans, non-fumeuse, adénocarcinome pulmonaire métastatique avec mutation activatrice de l'EGFR (délétion exon 19). Quel traitement de première ligne est le standard ?",
    options: [
      "Chimiothérapie platine-pemetrexed",
      "Inhibiteur de tyrosine kinase de l'EGFR de 3e génération (osimertinib)",
      "Immunothérapie anti-PD-1 en monothérapie",
      "Radiothérapie thoracique",
      "Chirurgie d'exérèse"
    ],
    reponse: 1,
    correction: "En cas de mutation activatrice de l'EGFR (exon 19 ou L858R), un TKI de 3e génération (osimertinib) est le standard de 1re ligne (essai FLAURA : survie sans progression supérieure à la chimiothérapie et aux TKI de 1re génération, avec bonne pénétration cérébrale). L'immunothérapie seule est peu efficace sur les tumeurs EGFR-mutées. La recherche des drivers oncogéniques (EGFR, ALK, ROS1...) est systématique devant un adénocarcinome, surtout chez les non-fumeurs et sujets jeunes.",
    source: { t: "ESMO guidelines NSCLC", l: "https://doi.org/10.1016/j.annonc.2023.10.008" }
  },
  {
    id: "q-m10-02", module: "m10", format: "K", sousTheme: "Cancer bronchique", difficulte: 3,
    enonce: "Concernant la surveillance sous immunothérapie anti-PD-1/PD-L1, quelles propositions sont vraies ?",
    options: [
      "Une pneumopathie inflammatoire (pneumonitis) immuno-induite peut survenir à tout moment du traitement",
      "Une dyspnée ou une toux nouvelle sous immunothérapie doit faire évoquer une pneumopathie immuno-induite",
      "Le traitement de référence d'une pneumopathie immuno-induite de grade >= 2 est la corticothérapie systémique",
      "La pneumopathie immuno-induite est toujours d'évolution favorable sans traitement"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies — effets indésirables liés à l'immunité (irAEs). A : la pneumonitis peut survenir à tout moment, y compris des mois après l'arrêt. B : toute nouvelle dyspnée/toux doit faire évoquer le diagnostic (TDM, LBA si besoin) — diagnostic différentiel avec progression, infection, embolie. C : grade >= 2 : arrêt de l'immunothérapie + corticoïdes systémiques (1-2 mg/kg équivalent prednisone) ; grades 3-4 : hospitalisation, infliximab/mycophénolate si réfractaire. D faux : les pneumopathies immuno-induites de grade 3-4 sont potentiellement mortelles — le traitement ne doit jamais être différé.",
    source: { t: "ESMO irAEs guidelines", l: "https://doi.org/10.1093/annonc/mdy062" }
  },
  // ============ M11 ============
  {
    id: "q-m11-01", module: "m11", format: "A", sousTheme: "Syndrome d'apnées obstructives du sommeil", difficulte: 1,
    enonce: "Quel est le traitement de première intention du SAOS modéré à sévère symptomatique chez l'adulte ?",
    options: [
      "Orthèse d'avancée mandibulaire",
      "Pression positive continue (PPC)",
      "Chirurgie uvulo-pharyngopalatique",
      "Stimulant éveillant",
      "Perte de poids isolée"
    ],
    reponse: 1,
    correction: "La PPC est le traitement de référence du SAOS modéré à sévère symptomatique : elle supprime les événements respiratoires, réduit la somnolence diurne et améliore la pression artérielle. La guideline ERS/ESRS 2026 sur la PPC du SAOS adulte actualise les indications et le suivi (observance cible >= 4 h/nuit, suivi structuré, télésuivi). Les orthèses d'avancée mandibulaire sont une alternative (SAOS léger/modéré ou intolérance à la PPC) ; la chirurgie est réservée à des cas sélectionnés ; les mesures de mode de vie (perte de poids, position) restent toujours associées.",
    source: { t: "ERS/ESRS guideline CPAP in adult OSA (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" }
  },
  {
    id: "q-m11-02", module: "m11", format: "K", sousTheme: "Syndromes d'hypoventilation", difficulte: 3,
    enonce: "Concernant le syndrome d'obésité-hypoventilation (OHS), quelles propositions sont vraies ?",
    options: [
      "Il est défini par une hypercapnie diurne (PaCO2 >= 45 mmHg) chez un patient avec IMC >= 30 kg/m2",
      "La VNI nocturne est le traitement de référence",
      "Un SAOS est associé dans la majorité des cas",
      "L'oxygénothérapie seule est un traitement adapté en première intention"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies. A : OHS = IMC >= 30 + PaCO2 diurne >= 45 mmHg (après exclusion des autres causes d'hypoventilation). B : la VNI nocturne (pression support + EPAP adaptée) corrige l'hypercapnie, améliore la somnolence et réduit les hospitalisations (essai Pickwick). C : un SAOS est associé dans 80-90 % des cas d'OHS. D faux : l'oxygène seul aggrave l'hypercapnie chez l'hypoventilateur chronique (perte du stimulus hypoxique + effet Haldane) — l'O2 ne se discute qu'en plus de la VNI si hypoxémie résiduelle.",
    source: { t: "ERS statement on OHS (2017)", l: "https://doi.org/10.1183/13993003.00777-2017" }
  },
  // ============ M12 ============
  {
    id: "q-m12-01", module: "m12", format: "A", sousTheme: "Insuffisance respiratoire aiguë", difficulte: 2,
    enonce: "Patient 66 ans, exacerbation de BPCO avec pH 7,28 et PaCO2 70 mmHg malgré une oxygénothérapie bien conduite. Quelle est la prise en charge indiquée ?",
    options: [
      "Intubation immédiate",
      "Ventilation non invasive (VNI)",
      "Oxygénothérapie à haut débit",
      "Corticoïdes seuls",
      "Encourager la ventilation spontanée"
    ],
    reponse: 1,
    correction: "L'exacerbation de BPCO avec acidose respiratoire (pH < 7,35) est l'indication princeps de la VNI : niveau de preuve élevé (réduction de l'intubation et de la mortalité). Cible d'oxygénation SpO2 88-92 % (risque d'aggravation de l'hypercapnie au-delà). L'intubation est réservée aux échecs de VNI (acidose persistante, épuisement, troubles de conscience, encombrement).",
    source: { t: "GOLD 2025 + ERS/TSANZ acute NIV", l: "https://goldcopd.org" }
  },
  {
    id: "q-m12-02", module: "m12", format: "K", sousTheme: "Insuffisance respiratoire chronique", difficulte: 2,
    enonce: "Concernant l'oxygénothérapie de longue durée (OLD) dans la BPCO, quelles propositions sont vraies ?",
    options: [
      "Elle est indiquée si PaO2 <= 55 mmHg au repos en état stable",
      "Elle est indiquée si PaO2 56-59 mmHg avec polyglobulie, HTP ou œdèmes",
      "Elle doit être portée au moins 15 heures par jour",
      "Une désaturation isolée à l'effort justifie une OLD au long cours"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies (critères repris par GOLD). A : PaO2 repos <= 55 mmHg (ou SaO2 <= 88 %) -> OLD. B : PaO2 56-59 mmHg avec signes d'hypoxémie chronique (polyglobulie, HTP, œdèmes) -> OLD. C : au moins 15 h/jour — c'est cette observance qui a démontré le bénéfice en survie (essais NOTT/MRC). D faux : la désaturation isolée à l'effort n'est pas une indication d'OLD (pas de bénéfice démontré) — on adapte le débit d'O2 à l'effort chez les patients déjà sous OLD, ou on privilégie la réhabilitation.",
    source: { t: "GOLD 2025 — Oxygen therapy", l: "https://goldcopd.org" }
  },
  // ============ M13 ============
  {
    id: "q-m13-01", module: "m13", format: "A", sousTheme: "Pneumopathies interstitielles idiopathiques", difficulte: 2,
    enonce: "Quel est le pattern TDM typique de la fibrose pulmonaire idiopathique (FPI) ?",
    options: [
      "Verre dépoli diffus isolé",
      "Pattern UIP : fibrose basale et sous-pleurale, rayon de miel, bronchiolectasies de traction",
      "Micronodules centro-lobulaires diffus",
      "Épanchement pleural bilatéral",
      "Adénopathies médiastinales isolées"
    ],
    reponse: 1,
    correction: "La FPI correspond au pattern UIP (usual interstitial pneumonia) : prédominance basale et sous-pleurale, rayon de miel (honeycombing), bronchiolectasies de traction, sans signe d'autre étiologie. Un pattern UIP typique au TDM suffit au diagnostic de FPI (discussion multidisciplinaire) — pas de biopsie systématique. Traitement : antifibrotiques (nintédanib ou pirfénidone) qui ralentissent le déclin de la CVF ; les corticoïdes + azathioprine sont délétères (essai PANTHER).",
    source: { t: "ERS/ATS/JRS/ALAT IPF guideline", l: "https://doi.org/10.1183/13993003.00929-2023" }
  },
  {
    id: "q-m13-02", module: "m13", format: "K", sousTheme: "Sarcoïdose", difficulte: 2,
    enonce: "Concernant la sarcoïdose thoracique, quelles propositions sont vraies ?",
    options: [
      "Le stade II de Scadding associe adénopathies hilaires et atteinte parenchymateuse",
      "Le syndrome de Löfgren (adénopathies hilaires + érythème noueux + arthralgies) est de bon pronostic",
      "Le traitement corticoïde est systématique dès le diagnostic",
      "Les atteintes cardiaque, neurologique ou oculaire nécessitent un traitement urgent"
    ],
    reponse: [true, true, false, true],
    correction: "A, B et D vraies. A : Scadding II = ADP hilaires + atteinte parenchymateuse (I = ADP seules ; III = parenchyme seul ; IV = fibrose). B : le syndrome de Löfgren guérit spontanément dans plus de 80 % des cas — abstention et surveillance. D : les atteintes d'organes menaçantes (cœur, système nerveux, œil avec risque visuel, hypercalcémie) sont des indications urgentes de corticothérapie. C faux : le traitement n'est pas systématique — il dépend du retentissement (abstention dans les formes peu symptomatiques ; corticoïdes ; immunosuppresseurs en 2e ligne : méthotrexate).",
    source: { t: "ERS statement on sarcoidosis (2014)", l: "https://doi.org/10.1183/13993003.00179-2014" }
  },
  // ============ M14 ============
  {
    id: "q-m14-01", module: "m14", format: "A", sousTheme: "Hypertension pulmonaire", difficulte: 2,
    enonce: "Selon la classification ESC/ERS (2022), quelle est la définition hémodynamique d'une hypertension pulmonaire pré-capillaire ?",
    options: [
      "PAPm >= 25 mmHg et PAPO <= 15 mmHg",
      "PAPm > 20 mmHg, PAPO <= 15 mmHg et RVP >= 3 unités Wood",
      "PAPm >= 20 mmHg et PAPO >= 15 mmHg",
      "PAPO >= 20 mmHg isolé",
      "PAPm > 15 mmHg avec débit cardiaque élevé"
    ],
    reponse: 1,
    correction: "ESC/ERS 2022 : HTP = PAPm > 20 mmHg au cathétérisme droit. Pré-capillaire : PAPO <= 15 mmHg et RVP >= 3 unités Wood (l'ajout des RVP distingue les formes à débit élevé). Post-capillaire : PAPO > 15 mmHg (isolée si RVP < 3, combinée si >= 3). L'abaissement du seuil de 25 à 20 mmHg a permis d'identifier les formes précoces. L'update ERS 2026 du traitement de l'HTAP actualise les recommandations thérapeutiques.",
    source: { t: "ESC/ERS PH guidelines 2022 + ERS PAH update 2026", l: "https://doi.org/10.1183/13993003.00879-2022" }
  },
  {
    id: "q-m14-02", module: "m14", format: "K", sousTheme: "Maladie thromboembolique", difficulte: 2,
    enonce: "Patient avec suspicion d'embolie pulmonaire. Selon l'ESC 2019, quelles propositions sont vraies ?",
    options: [
      "Une probabilité clinique faible justifie de doser d'abord les D-dimères",
      "Un dosage de D-dimères négatif avec test de haute sensibilité élimine l'EP chez un patient à faible probabilité",
      "Le score de Wells aide à stratifier la probabilité clinique",
      "La TDM angio-thoracique est l'examen de référence en cas de probabilité clinique forte ou de D-dimères positifs"
    ],
    reponse: [true, true, true, true],
    correction: "Les 4 propositions sont vraies — stratégie diagnostique ESC 2019. A/B : probabilité clinique faible (Wells ou Genève révisé) -> D-dimères en premier ; négativité avec un test à haute sensibilité = EP exclue sans imagerie. C : le score de Wells stratifie la probabilité clinique a priori. D : probabilité forte ou D-dimères positifs -> TDM angio-thoracique (examen de référence). Chez la femme enceinte ou en cas d'insuffisance rénale : scintigraphie V/Q en alternative.",
    source: { t: "ESC 2019 — Acute pulmonary embolism", l: "https://doi.org/10.1093/eurheartj/ehz405" }
  },
  // ============ M15 ============
  {
    id: "q-m15-01", module: "m15", format: "A", sousTheme: "Pathologies diaphragmatiques", difficulte: 2,
    enonce: "Après une chirurgie cardiaque, un patient présente une ascension isolée de la coupole diaphragmatique droite à la radiographie. Quel test confirme une paralysie phrénique ?",
    options: [
      "Radiographie en expiration seule",
      "Test de reniflement (sniff test) en radioscopie ou échographie diaphragmatique",
      "TDM thoracique injectée",
      "Échocardiographie",
      "Spirométrie seule"
    ],
    reponse: 1,
    correction: "Le sniff test (radioscopie du diaphragme pendant un reniflement) : l'abolition ou le mouvement paradoxal (ascension lors du sniff) de la coupole signe la paralysie. L'échographie du diaphragme (épaisseur, excursion) est l'alternative non irradiante devenue standard. Contexte typique post-chirurgie cardiaque (lésion du nerf phrénique par la glace) : surveillance 6-12 mois avant d'envisager des options (plicature) car la récupération est fréquente.",
    source: { t: "ERS statement on respiratory muscle testing (2019)", l: "https://doi.org/10.1183/13993003.00352-2019" }
  },
  {
    id: "q-m15-02", module: "m15", format: "K", sousTheme: "Maladies neuromusculaires", difficulte: 2,
    enonce: "Chez un patient atteint de sclérose latérale amyotrophique (SLA), quelles propositions sont vraies ?",
    options: [
      "La VNI nocturne est initiée dès les signes d'hypoventilation nocturne ou une CV abaissée",
      "Les céphalées matinales et une fatigue diurne sont des signes d'hypoventilation nocturne",
      "L'oxygène seul est le traitement de l'insuffisance respiratoire hypercapnique de la SLA",
      "Une CV < 50 % du théorique est un critère d'initiation de la VNI"
    ],
    reponse: [true, true, false, true],
    correction: "A, B et D vraies. A/D : dans les maladies neuromusculaires, la VNI nocturne se débute dès les symptômes d'hypoventilation nocturne ou une CV < 50 % (statement ERS sur la ventilation à domicile) : elle améliore survie et qualité de vie. B : céphalées matinales, fatigue, somnolence = signes classiques d'hypoventilation nocturne (hypercapnie du matin à vérifier). C faux : l'oxygène seul est contre-indiqué dans l'hypoventilation hypercapnique neuromusculaire (aggrave l'hypercapnie) — la VNI est le traitement ; l'O2 ne s'ajoute qu'en cas d'hypoxémie résiduelle sous VNI.",
    source: { t: "ERS statement on home mechanical ventilation (2019)", l: "https://doi.org/10.1183/13993003.00131-2019" }
  },
  // ============ M16 ============
  {
    id: "q-m16-01", module: "m16", format: "A", sousTheme: "Épanchement pleural", difficulte: 1,
    enonce: "Selon les critères de Light, un épanchement pleural est un exsudat si :",
    options: [
      "Protéines pleurales/protéines sériques > 0,5 ou LDH pleurales/LDH sériques > 0,6",
      "Protéines pleurales < 25 g/L",
      "Glucose pleural < 3,3 mmol/L",
      "pH pleural < 7,20",
      "LDH pleurales < 200 UI/L"
    ],
    reponse: 0,
    correction: "Critères de Light : ratio protéines pleurales/sériques > 0,5, ou ratio LDH pleurales/sériques > 0,6, ou LDH pleurales > 2/3 de la limite supérieure normale sérique. Un seul critère suffit pour classer en exsudat. Sensibilité ~99 % mais spécificité moindre : chez l'insuffisant cardiaque sous diurétiques, un transsudat peut se concentrer et remplir les critères — les critères alternatifs (gradient protéiques sérum-pleure > 31 g/L, gradient d'albumine > 12 g/L) aident alors à reclasser en transsudat (guideline BTS 2023).",
    source: { t: "BTS pleural disease guideline (2023)", l: "https://doi.org/10.1183/13993003.00612-2023" }
  },
  {
    id: "q-m16-02", module: "m16", format: "K", sousTheme: "Pneumothorax", difficulte: 2,
    enonce: "Jeune homme de 22 ans, premier épisode de pneumothorax spontané primaire, décollement < 2 cm, peu symptomatique. Selon la guideline BTS, quelles propositions sont vraies ?",
    options: [
      "Une surveillance clinique avec oxygène est une option recommandée pour les petits pneumothorax peu symptomatiques",
      "L'exsufflation à l'aiguille ou le drainage sont indiqués si le décollement est étendu ou mal toléré",
      "La chirurgie (VATS avec symphyse) est systématique au premier épisode",
      "Les professions à risque particulier (aviation, plongée) modifient la stratégie thérapeutique"
    ],
    reponse: [true, true, false, true],
    correction: "A, B et D vraies (guideline BTS 2023). A : petit pneumothorax (< 2 cm) peu symptomatique : surveillance ± oxygène (l'oxygène accélère la résorption). B : décollement étendu ou symptômes -> exsufflation (1re intention) ou drainage. D : aviation/plongée = situations qui imposent une résorption complète vérifiée et peuvent faire discuter la chirurgie. C faux : la chirurgie n'est pas systématique au premier épisode — indications : récidive, bullage persistant (> 3-5 jours), professions à risque, pneumothorax bilatéral.",
    source: { t: "BTS pleural disease guideline (2023)", l: "https://doi.org/10.1183/13993003.00612-2023" }
  },
  // ============ M17 ============
  {
    id: "q-m17-01", module: "m17", format: "A", sousTheme: "Connectivites", difficulte: 3,
    enonce: "Patiente de 45 ans : phénomène de Raynaud, sclérodactylie, reflux gastro-œsophagien, capillaroscopie anormale, TDM : fibrose basale NSIP-like. Quel bilan est prioritaire dans la prise en charge ?",
    options: [
      "Test de provocation bronchique à la méthacholine",
      "Anticorps anticentromère/anti-Scl70 et dépistage de l'HTP (échocardiographie, DLCO)",
      "Anticorps anti-Jo1 seul",
      "Biopsie pulmonaire chirurgicale systématique",
      "Quantiféron"
    ],
    reponse: 1,
    correction: "Tableau de sclérodermie systémique (anticentromère ou anti-Scl70). Deux priorités : (1) confirmer l'auto-immunité (anticorps spécifiques) ; (2) dépister l'HTP — complication majeure de la sclérodermie, dépistage par échocardiographie et indices fonctionnels (DLCO isolément abaissée = signal d'alerte d'atteinte vasculaire). Le traitement de fond de la PID sclérodermique : mycophénolate mofétil. La biopsie n'est pas systématique.",
    source: { t: "ERS statement CTD-ILD", l: "https://doi.org/10.1183/13993003.00955-2019" }
  },
  {
    id: "q-m17-02", module: "m17", format: "K", sousTheme: "Déficits immunitaires primitifs", difficulte: 2,
    enonce: "Concernant les conséquences respiratoires des déficits immunitaires primitifs de l'adulte, quelles propositions sont vraies ?",
    options: [
      "Les bronchiectasies sont une complication classique des déficits humoraux non traités",
      "Un dosage des immunoglobulines fait partie du bilan étiologique des bronchiectasies",
      "Les infections à Pneumocystis jirovecii orientent vers un déficit cellulaire T",
      "Les déficits humoraux exposent surtout aux infections virales chroniques"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies. A : déficit en IgG non substitué -> infections pulmonaires récidivantes -> bronchiectasies (cause traitable à ne pas manquer). B : le dosage pondéral des Ig fait partie du bilan étiologique standard des bronchiectasies (guideline BTS/ERS). C : Pneumocystis = infection opportuniste des déficits cellulaires T (VIH, corticothérapie, immunosuppresseurs). D faux : les déficits humoraux (IgG) exposent aux infections bactériennes à germes encapsulés (pneumocoque, Haemophilus) et à Giardia ; les infections virales chroniques orientent vers d'autres déficits (ex. déficits T).",
    source: { t: "ERS Handbook — Immunodeficiency", l: "https://publications.ersnet.org/content/book/handbook/978-1-84984-2037" }
  },
  // ============ M18 ============
  {
    id: "q-m18-01", module: "m18", format: "A", sousTheme: "Déficit en alpha-1-antitrypsine", difficulte: 2,
    enonce: "Un patient de 38 ans, non-fumeur, présente un emphysème panlobulaire des bases. Quel diagnostic génétique évoquer en premier ?",
    options: [
      "Mucoviscidose",
      "Déficit en alpha-1-antitrypsine",
      "Dyskinésie ciliaire primitive",
      "Syndrome de Birt-Hogg-Dubé",
      "Syndrome de Marfan"
    ],
    reponse: 1,
    correction: "Emphysème panlobulaire, des bases, chez un sujet jeune/non-fumeur = signature classique du déficit en alpha-1-antitrypsine (variant ZZ surtout). Le dosage d'AAT fait partie du bilan de tout emphysème précoce (recommandation ERS/ATS 2017 : dépistage systématique). Trait : arrêt du tabac (facteur aggravant majeur), substitution par AAT IV pour les formes déficitaires avec emphysème, et surveillance hépatique (risque de cirrhose).",
    source: { t: "ERS/ATS statement on AATD (2017)", l: "https://doi.org/10.1183/13993003.00164-2017" }
  },
  {
    id: "q-m18-02", module: "m18", format: "K", sousTheme: "Dyskinésie ciliaire primitive", difficulte: 3,
    enonce: "Concernant la dyskinésie ciliaire primitive (DCP), quelles propositions sont vraies ?",
    options: [
      "Elle associe typiquement bronchectasies, sinusites chroniques et situs inversus (syndrome de Kartagener)",
      "Le diagnostic repose sur des tests spécialisés : mesure du NO nasal (abaissé) et vidéomicroscopie ciliaire",
      "L'infertilité masculine est une manifestation possible",
      "La guideline ERS/ATS 2025 simplifie le diagnostic par la vidéomicroscopie seule"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies. A : triade de Kartagener : bronchectasies + sinusites chroniques + situs inversus (50 % des DCP). B : le NO nasal est effondré dans la DCP ; la vidéomicroscopie ciliaire (battements) et la microscopie électronique (ultrastructure) complètent. C : les spermatozoïdes sont ciliaires/flagellaires -> infertilité masculine fréquente. D faux : la guideline ERS/ATS 2025 propose un algorithme combiné (NO nasal + vidéomicroscopie + génétique) — aucun test isolé ne suffit au diagnostic (la microscopie électronique reste parfois nécessaire).",
    source: { t: "ERS/ATS guideline PCD diagnosis (2025)", l: "https://channel.ersnet.org/channel-25-guidelines" }
  },
  // ============ M19 ============
  {
    id: "q-m19-01", module: "m19", format: "A", sousTheme: "Asthme lié au travail", difficulte: 2,
    enonce: "Un boulanger de 30 ans présente un asthme apparu depuis 3 ans, s'aggravant en semaine et s'améliorant le week-end et en congés. Quel diagnostic évoquer ?",
    options: [
      "Asthme allergique classique sans lien professionnel",
      "Asthme professionnel (par allergie à la farine)",
      "BPCO",
      "Pneumopathie d'hypersensibilité",
      "Dyskinésie ciliaire"
    ],
    reponse: 1,
    correction: "L'amélioration les week-ends/congés et l'aggravation au travail sont la signature de l'asthme professionnel (ici : allergie aux farines, très classique chez le boulanger). Démarche : questionnaire standardisé, spirométrie, tests de provocation bronchique spécifique, et mesure du débit de pointe en série sur période travail/repos. Prise en charge : réduction de l'exposition (aspiration, masque), traitement de l'asthme, et déclaration de maladie professionnelle. Le diagnostic précoce avant l'installation d'un asthme fixé conditionne le pronostic.",
    source: { t: "ERS statement on work-related asthma", l: "https://doi.org/10.1183/13993003.00185-2012" }
  },
  {
    id: "q-m19-02", module: "m19", format: "K", sousTheme: "Pathologies liées à l'amiante", difficulte: 2,
    enonce: "Concernant les pathologies liées à l'exposition à l'amiante, quelles propositions sont vraies ?",
    options: [
      "Les plaques pleurales sont les lésions bénignes les plus fréquentes",
      "L'asbestose est une fibrose pulmonaire interstitielle",
      "Toute exposition amiantique expose à un risque accru de mésothéliome",
      "Un épanchement pleural bénin de l'amiante survient plus de 40 ans après l'exposition comme le mésothéliome"
    ],
    reponse: [true, true, true, false],
    correction: "A, B et C vraies. A : les plaques pleurales (pariétales, souvent bilatérales) = marqueur d'exposition le plus fréquent ; elles sont bénignes mais attestent de l'exposition. B : l'asbestose = fibrose interstitielle liée aux fortes expositions ; elle expose à un risque accru de cancer bronchique (synergie avec le tabac). C : le mésothéliome peut survenir même après des expositions faibles/brèves. D faux : l'épanchement pleural bénin de l'amiante est une manifestation précoce (généralement < 20 ans après le début de l'exposition), alors que le mésothéliome survient typiquement > 30-40 ans après — la latence diffère entre les deux (cf. exemple de question K-prime officielle de l'ERS sur l'épanchement bénin de l'amiante).",
    source: { t: "ERS Handbook — Asbestos-related diseases", l: "https://publications.ersnet.org/content/book/handbook/978-1-84984-2037" }
  },
  // ============ M20 ============
  {
    id: "q-m20-01", module: "m20", format: "A", sousTheme: "Pollution extérieure", difficulte: 2,
    enonce: "Selon les lignes directrices de l'OMS sur la qualité de l'air (2021), quelle valeur guide annuelle recommandée pour les particules fines PM2.5 est correcte ?",
    options: [
      "25 µg/m3",
      "15 µg/m3",
      "10 µg/m3",
      "5 µg/m3",
      "35 µg/m3"
    ],
    reponse: 3,
    correction: "L'OMS 2021 a abaissé ses valeurs guides : PM2.5 annuelle = 5 µg/m3 (contre 10 auparavant) et PM10 annuelle = 15 µg/m3 ; PM2.5 24 h = 15 µg/m3. Ces seuils traduisent les preuves croissantes que la pollution particulaire augmente mortalité cardiovasculaire, événements respiratoires aigus et infections. La pollution de l'air (extérieure et intérieure) est un déterminant majeur de santé respiratoire — un item du module 20 du syllabus.",
    source: { t: "WHO Global Air Quality Guidelines (2021)", l: "https://www.who.int/publications/i/item/9789240034221" }
  },
  {
    id: "q-m20-02", module: "m20", format: "K", sousTheme: "Mode de vie (tabac, e-cigarettes, nutrition, activité)", difficulte: 2,
    enonce: "Concernant les e-cigarettes et la santé respiratoire, quelles propositions sont vraies ?",
    options: [
      "Les e-cigarettes émettent des particules ultrafines et des composés volatils irritants pour les voies aériennes",
      "Chez le fumeur incapable d'arrêter, le passage complet à la e-cigarette expose probablement à moins de substances toxiques que le tabac combustible",
      "L'usage de la e-cigarette chez le non-fumeur est dénué de risque de dépendance nicotinique",
      "L'aérosol de e-cigarette contient de la vapeur d'eau uniquement"
    ],
    reponse: [true, true, false, false],
    correction: "A et B vraies. A : l'aérosol contient des particules ultrafines, des composés carbonylés irritants (formaldéhyde, acroléine selon la puissance/température), des métaux et des arômes dont la sécurité inhalatoire à long terme est inconnue. B : chez le fumeur qui substitue complètement, l'exposition aux toxiques du tabac combustible (goudrons, CO) diminue — position de réduction des risques, mais l'arrêt complet de toute nicotine reste l'objectif optimal. C faux : la nicotine des e-cigarettes crée une dépendance réelle, particulièrement chez les jeunes (porte d'entrée vers le tabac). D faux : l'aérosol n'est pas de la vapeur d'eau — c'est un aérosol de propylène glycol/glycérol + nicotine + arômes + produits de dégradation thermique.",
    source: { t: "ERS statement on e-cigarettes (2019)", l: "https://doi.org/10.1183/13993003.01054-2019" }
  }
];
