// Banque de questions — volet 2 (cas cliniques, ~10 par module)
// Chargé après questions.js ; les questions sont ajoutées à la banque.
const QUESTIONS_EXTRA = [
  // ============ SCIENCES DE BASE ============
  {
    id: "sb-06", module: "sciences-basiques", sousTheme: "Échanges gazeux et transport de l'oxygène", difficulte: 2,
    enonce: "Patient de 70 ans, Hb 8 g/dL (anémie), SpO2 98 %. Que peut-on dire de sa livraison tissulaire en O2 (DO2) ?",
    options: [
      "Normale car la SpO2 est normale",
      "Diminuée car le contenu artériel en O2 (CaO2) est réduit malgré une saturation normale",
      "Augmentée car l'anémie stimule la ventilation",
      "Impossible à estimer sans gaz du sang",
      "Uniquement dépendante de la PaO2"
    ],
    reponse: 1,
    explication: "CaO2 = (1,34 × Hb × SpO2) + (0,003 × PaO2). L'anémie réduit le contenu artériel en O2 et donc la DO2, même avec une PaO2 et une SpO2 normales. La SpO2 seule ne reflète pas le transport : c'est un piège classique.",
    source: "ERS Handbook of Respiratory Medicine, oxygen transport"
  },
  {
    id: "sb-07", module: "sciences-basiques", sousTheme: "Physiologie : mécanique ventilatoire et compliance", difficulte: 2,
    enonce: "Chez un patient emphysémateux, la capacité pulmonaire totale (CPT) mesurée en pléthysmographie est de 140 % du théorique. Quel mécanisme l'explique ?",
    options: [
      "Perte du recurage élastique pulmonaire et hypertonie inspiratoire",
      "Rétraction élastique augmentée",
      "Déficit en surfactant",
      "Hypertrophie diaphragmatique",
      "Fibrose interstitielle débutante"
    ],
    reponse: 0,
    explication: "Dans l'emphysème, la destruction du réseau élastique diminue la rétraction du poumon : volume de relaxation augmenté, CPT élevée (hyperinflation). En pléthysmographie, la CPT est mesurée de façon fiable car elle inclut l'air non communicant (bullae), contrairement à la dilution à l'azote qui la sous-estime.",
    source: "ERS/ATS standards for pulmonary function testing ; ERS Handbook"
  },
  {
    id: "sb-08", module: "sciences-basiques", sousTheme: "Défense pulmonaire et immunité", difficulte: 2,
    enonce: "Quel mécanisme de défense est le plus important dans la clairance des particules déposées au niveau des petites voies aériennes ?",
    options: [
      "Action ciliaire seule",
      "Macrophages alvéolaires",
      "Toux",
      "Filtration nasale",
      "Réflexe de fermeture glottique"
    ],
    reponse: 1,
    explication: "Au-delà de la zone ciliée (bronchioles terminales), la clairance repose principalement sur les macrophages alvéolaires (phagocytose) et le drainage lymphatique. Les cils opèrent dans les voies aériennes conductrices ; la toux expulse les sécrétions proximales.",
    source: "ERS Handbook, lung defence"
  },
  {
    id: "sb-09", module: "sciences-basiques", sousTheme: "Équilibre acide-base", difficulte: 3,
    enonce: "Gaz artériel : pH 7,32 ; PaCO2 30 mmHg ; HCO3- 15 mmol/L ; Na+ 140, Cl- 105. Diagnostic ?",
    options: [
      "Acidose respiratoire",
      "Acidose métabolique simple (trou anionique élevé)",
      "Acidose métabolique simple (trou anionique normal)",
      "Alcalose respiratoire",
      "Gaz incompatible"
    ],
    reponse: 1,
    explication: "pH bas avec PaCO2 basse et HCO3- très bas = acidose métabolique avec compensation respiratoire. Trou anionique = 140 − (105 + 15) = 20 mmol/L (normal ≤ 12) : acidose à trou anionique élevé (ex. acidocétose, lactates, insuffisance rénale, intoxications). La compensation attendue (PaCO2 ≈ 1,5 × HCO3 + 8 ± 2 ≈ 30) est correcte, pas de trouble mixte.",
    source: "Approche acide-base — ERS Handbook, acid-base disorders"
  },
  {
    id: "sb-10", module: "sciences-basiques", sousTheme: "Échanges gazeux et transport de l'oxygène", difficulte: 2,
    enonce: "Un sujet sain en altitude (PiO2 réduite) hyperventile. Quel effet sur la courbe de dissociation de l'hémoglobine ?",
    options: [
      "Déplacement vers la gauche (affinité augmentée) par alcalose respiratoire et 2,3-DPG progressif",
      "Déplacement vers la droite immédiat",
      "Aucun effet",
      "Perte de la capacité de fixation de l'O2",
      "Augmentation de la P50 à court terme"
    ],
    reponse: 0,
    explication: "L'hyperventileur en altitude abaisse la PaCO2 (alcalose respiratoire) qui déplace la courbe vers la gauche (affinité accrue) ; à plus long terme, la hausse du 2,3-DPG la déplace vers la droite pour faciliter la libération tissulaire. Le point clé : alcalose aiguë = gauche, 2,3-DPG chronique = droite.",
    source: "ERS Handbook, oxyhaemoglobin dissociation"
  },
  {
    id: "sb-11", module: "sciences-basiques", sousTheme: "Pharmacologie respiratoire", difficulte: 3,
    enonce: "Quelle association est à risque de potentialisation des effets indésirables du fait d'une inhibition commune du CYP3A4 ?",
    options: [
      "Salbutamol + ipratropium",
      "Budésonide inhalé + clarithromycine",
      "Omalizumab + montélukast",
      "Nintédanib + pirfénidone",
      "Formotérol + tiotropium"
    ],
    reponse: 1,
    explication: "La clarithromycine (et le kétoconazole, l'itraconazole) inhibe fortement le CYP3A4 et augmente les concentrations systémiques de budésonide (risque accru d'effets cortisoniques) et de nombreux médicaments. C'est un réflexe d'interaction à connaître en pneumologie (also: riociguat, TKI oncologiques).",
    source: "Pharmacologie respiratoire — ERS Handbook ; RCP budésonide"
  },
  {
    id: "sb-12", module: "sciences-basiques", sousTheme: "Contrôle de la ventilation", difficulte: 3,
    enonce: "Un patient obèse avec hypoventilation alvéolaire chronique a un bilan ventilatoire central. Quel mécanisme contribue typiquement à son hypercapnie ?",
    options: [
      "Hyperréactivité des chémorécepteurs centraux",
      "Diminution de la réponse ventilatoire à l'hypercapnie et au travail respiratoire accru (charge)",
      "Stimulation du centre pneumotaxique",
      "Déficit isolé en chémorécepteurs périphériques",
      "Volonté de réduire sa ventilation pour épargner son diaphragme"
    ],
    reponse: 1,
    explication: "Dans l'hypoventilation chronique (obésité, neuromusculaire), la réponse chémoréceptive à la CO2 est atténuée (« accoutumance ») et la charge mécanique accrue majore la production de CO2 par les muscles respiratoires. La VNI nocturne corrige l'hypercapnie en dechargeant la charge ventilatoire.",
    source: "ERS Handbook, control of breathing ; ERS statement on OHS"
  },
  {
    id: "sb-13", module: "sciences-basiques", sousTheme: "V/Q et shunt", difficulte: 2,
    enonce: "En position debout chez le sujet sain, le rapport V/Q est :",
    options: [
      "Homogène du sommet à la base",
      "Plus élevé au sommet qu'à la base",
      "Plus élevé à la base qu'au sommet",
      "Nul au sommet",
      "Infini à la base"
    ],
    reponse: 1,
    explication: "Debout, la perfusion et la ventilation augmentent vers la base, mais la perfusion augmente davantage : V/Q ≈ 3 au sommet et ≈ 0,6 à la base. En pathologie (emphysème apical, embolie), ces inégalités s'accentuent et expliquent l'hypoxémie et l'élargissement de la différence alvéolo-artérielle en O2.",
    source: "West's Respiratory Physiology ; ERS Handbook"
  },
  {
    id: "sb-14", module: "sciences-basiques", sousTheme: "Défense pulmonaire et immunité", difficulte: 3,
    enonce: "Quel déficit immunitaire expose le plus aux infections à germes encapsulés (pneumocoque, Haemophilus) récidivantes ?",
    options: [
      "Déficit en IgA isolé",
      "Déficit en IgG (notamment sous-classes) ou asplénie fonctionnelle",
      "Déficit en IgE",
      "Neutropénie chronique légère",
      "Déficit en complément C1-inhibiteur"
    ],
    reponse: 1,
    explication: "Les infections récidivantes à germes encapsulés orientent vers un déficit humorel : IgG (déficit commun variable, sous-classes) ou asplénie. Bilan des bronchiectasies/sinusites récidivantes : dosage pondéral des IgG, IgA, IgM et réponse vaccinale. Le déficit isolé en IgA est souvent pauci-symptomatique.",
    source: "ERS Handbook, immunodeficiency and respiratory infections"
  },
  {
    id: "sb-15", module: "sciences-basiques", sousTheme: "Physiologie : mécanique ventilatoire et compliance", difficulte: 3,
    enonce: "Patient sous ventilation mécanique : volume courant 6 mL/kg, PEEP 10, pression de plateau 28 cmH2O. Quel paramètre manque pour calculer la compliance statique ?",
    options: [
      "La pression de pointe (peak pressure)",
      "La PEEP totale (intrinsèque incluse) et le volume administré — la formule étant compliance = VT / (Pplat − PEEPtotale)",
      "La fréquence respiratoire",
      "Le débit inspiratoire",
      "La FiO2"
    ],
    reponse: 1,
    explication: "Compliance statique (ou du système respiratoire) = VT / (pression de plateau − PEEP totale). Une compliance < 30-40 mL/cmH2O dans le SDRA traduit un poumon « baby lung » raide. La pression de pointe reflète surtout les résistances des voies aériennes, pas la compliance.",
    source: "ARDSNet / ventilation protectrice ; ERS Handbook, respiratory mechanics in ICU"
  },

  // ============ SYMPTÔMES ET ÉVALUATION ============
  {
    id: "sy-06", module: "symptomes", sousTheme: "Explorations fonctionnelles respiratoires (spirométrie, DLCO)", difficulte: 3,
    enonce: "Patiente de 45 ans, dyspnée d'effort. EFR : VEMS/CVF 0,78 (normal), CPT 62 % du théorique, DLCO 58 %. Diagnostic fonctionnel ?",
    options: [
      "Trouble obstructif léger",
      "Trouble restrictif avec atteinte diffusive",
      "Pattern normal",
      "Trouble mixte",
      "Syndrome obstructif avec hyperinflation"
    ],
    reponse: 1,
    explication: "Restriction = CPT < 80 % du théorique (ici 62 %) avec VEMS/CVF conservé. La DLCO abaissée (58 %) signe une atteinte du lit capillaire (PID, vasculopathie pulmonaire, emphysème diffus selon contexte). La CVF seule ne suffit jamais à affirmer une restriction : la CPT est nécessaire.",
    source: "ERS/ATS standards for pulmonary function testing 2005/2019"
  },
  {
    id: "sy-07", module: "symptomes", sousTheme: "Tests d'effort et marches de 6 minutes", difficulte: 2,
    enonce: "Lors d'un test de marche de 6 minutes, quelle variable a le meilleur poids pronostique chez un patient BPCO sévère ou atteint d'HTAP ?",
    options: [
      "La saturation minimale atteinte",
      "La distance parcourue",
      "Le score de Borg à la fin",
      "La fréquence cardiaque maximale",
      "Le nombre d'arrêts"
    ],
    reponse: 1,
    explication: "La distance au test de marche de 6 min (TM6) est un des meilleurs prédicteurs de mortalité dans la BPCO sévère, l'HTAP et les PID fibrosantes. Une distance < 350 m dans la BPCO ou < 440 m (≈ 330-450 selon les séries) dans l'HTAP signe un pronostic défavorable et oriente la décision thérapeutique (transplantation, ponts thérapeutiques).",
    source: "ERS/ATS statement sur le TM6 (Am J Respir Crit Care Med 2002, mise à jour ERS 2014)"
  },
  {
    id: "sy-08", module: "symptomes", sousTheme: "Toux aiguë et chronique (guide ERS 2020)", difficulte: 3,
    enonce: "Femme de 52 ans, toux chronique depuis 8 mois, scanner thoracique normal, spirométrie normale, pas de traitement par IEC. La toux disparaît sous IPP à double dose après 8 semaines. Diagnostic ?",
    options: [
      "Toux d'origine médicamenteuse",
      "Toux secondaire à un RGO (reflux) — réponse au traitement d'épreuve",
      "Asthme toux-variant traité par erreur",
      "Toux psychogène",
      "Toux liée à une rhinite"
    ],
    reponse: 1,
    explication: "Après élimination de l'IEC, de l'asthme et de la rhinite/post-nasal drip, l'essai thérapeutique anti-reflux (IPP double dose 8 semaines) qui supprime la toux affirme la toux reflux. Le guide ERS 2020 recommande une démarche par étapes et, en cas d'échec, d'orienter vers un centre spécialisé (toux réfractaire : gabapentinoïdes, speech therapy).",
    source: "ERS guideline on the management of cough, Eur Respir J 2020"
  },
  {
    id: "sy-09", module: "symptomes", sousTheme: "Dyspnée : évaluation et scores (mMRC, échelle de Borg)", difficulte: 2,
    enonce: "Patient de 63 ans, dyspnée d'effort, TUG (timed up and go) normal, pas de BPCO, EFR : VEMS/CVF 0,85, CPT 105 %, DLCO 50 %. Quel bilan est prioritaire ?",
    options: [
      "Bilan cardiaque et vasculaire pulmonaire (échocardiographie, suspicion d'HTP)",
      "Test de réversibilité aux bronchodilatateurs",
      "Kinésithérapie respiratoire",
      "Bilan allergologique",
      "Test de marche de 6 minutes seul"
    ],
    reponse: 0,
    explication: "Une DLCO abaissée avec volumes préservés (pattern « vascular ») oriente vers une atteinte du lit capillaire : HTP, maladie thromboembolique chronique, cardiopathie gauche. L'échocardiographie et l'évaluation hémodynamique sont prioritaires avant tout autre bilan.",
    source: "ERS/ATS pulmonary function testing standards ; ESC/ERS PH guidelines 2022"
  },
  {
    id: "sy-10", module: "symptomes", sousTheme: "Biologie : gaz du sang, marqueurs", difficulte: 2,
    enonce: "Homme de 68 ans, dyspnée aiguë, SpO2 88 %, gaz : pH 7,48, PaCO2 30, PaO2 55, HCO3- 22. Quel mécanisme prédomine ?",
    options: [
      "Hypoventilation alvéolaire",
      "Hyperventilation avec effet shunt (hypoxémie par défaut V/Q)",
      "Intoxication au CO",
      "Acidose métabolique compensée",
      "Alcalose métabolique isolée"
    ],
    reponse: 1,
    explication: "Alcalose respiratoire (PaCO2 basse) avec hypoxémie : l'hypoxémie n'est pas due à l'hypoventilation (elle l'aurait augmentée) mais à un défaut V/Q ou un shunt (ex. embolie pulmonaire typique de ce tableau : hypoxémie + hyperventilation). L'embolie pulmonaire est le premier diagnostic à éliminer dans ce contexte aigu.",
    source: "ESC 2019 guidelines on pulmonary embolism ; ERS Handbook, blood gases"
  },
  {
    id: "sy-11", module: "symptomes", sousTheme: "Radiographie et TDM thoracique", difficulte: 2,
    enonce: "Quel signe radiologique est le plus spécifique d'une pneumopathie interstitielle diffuse fibrosante sur une TDM thoracique ?",
    options: [
      "Épaississement septal lisse",
      "Rayon de miel (honeycombing)",
      "Verre dépoli isolé",
      "Adénopathies médiastinales",
      "Épanchement pleural"
    ],
    reponse: 1,
    explication: "Le rayon de miel (cystes sous-pleuraux de 3-10 mm, parois définies, disposées en ≥ 2 rangées) est le signe TDM de fibrose irréversible le plus spécifique, typique de l'UIP. Le verre dépoli est souvent réversible ; l'épaississement septal lisse évoque un œdème ou un lymphangite carcinomateuse.",
    source: "ERS/ATS idiopathic interstitial pneumonias 2013 ; ERS Handbook, radiology"
  },
  {
    id: "sy-12", module: "symptomes", sousTheme: "Endoscopie bronchique et échographie endobronchique (EBUS)", difficulte: 3,
    enonce: "Patiente de 60 ans, adénopathies médiastinales et lésion périphérique du lobe supérieur droit. Le staging endoscopique commence par une EBUS. Quel principe guide l'ordre des ponctions ?",
    options: [
      "Ponction d'abord la lésion la plus accessible",
      "Ponction d'abord la station ganglionnaire la plus distale (N3 si suspecte) pour établir le stade maximal",
      "Toujours ponctionner la station 7 en premier",
      "Ponction uniquement des ganglions > 1 cm en petit axe",
      "Réserver l'EBUS aux patients opérables"
    ],
    reponse: 1,
    explication: "Le staging doit documenter le stade le plus avancé (N3 avant N2, N2 avant N1) : un N3 positif contre-indique d'emblée la chirurgie et évite des gestes inutiles. L'EBUS est indiquée dans le staging médiastinal invasif selon la probabilité d'envahissement (ADP > 10 mm, PET+, forte suspicion).",
    source: "ERS/ESTS guidelines on preoperative mediastinal staging ; ESTS guidelines"
  },
  {
    id: "sy-13", module: "symptomes", sousTheme: "Pléthysmographie et mesure des volumes", difficulte: 2,
    enonce: "Dans une BPCO emphysémateuse avec grosses bulles, la mesure des volumes par dilution à l'hélium donne une CPT de 100 %, la pléthysmographie 125 %. Pourquoi ?",
    options: [
      "Erreur de calibration de l'hélium",
      "La dilution ne mesure que l'air communicant (bulles non ventilées), la pléthysmographie mesure tout le volume thoracique gazeux",
      "La pléthysmographie inclut le volume sanguin",
      "L'hélium est absorbé par le sang",
      "Les deux méthodes sont équivalentes, c'est un artefact de reproductibilité"
    ],
    reponse: 1,
    explication: "La dilution à l'hélium (ou l'azote) n'atteint que les zones ventilées ; les bulles non communicantes sont exclues, d'où une sous-estimation. La pléthysmographie mesure le volume gazeux thoracique total (loi de Boyle) incluant l'air non communicant — méthode de référence en cas d'hyperinflation/bullles.",
    source: "ERS/ATS standards for pulmonary function testing"
  },
  {
    id: "sy-14", module: "symptomes", sousTheme: "Toux aiguë et chronique (guide ERS 2020)", difficulte: 2,
    enonce: "Quelle prise en charge est recommandée pour une toux chronique réfractaire (asthme, RGO et IEC éliminés) ?",
    options: [
      "Antibiothérapie probabiliste prolongée",
      "Thérapies neuromodulatrices (gabapentinoïdes) et rééducation comportementale de la toux",
      "Corticothérapie orale prolongée",
      "Antitussifs opiacés au long cours",
      "Aucune option n'est efficace"
    ],
    reponse: 1,
    explication: "La toux réfractaire est liée à une hypersensibilité du réflexe tussigène. Les traitements recommandés par le guide ERS 2020 : gabapentinoïdes (gabapentine, prégabaline) et rééducation comportementale de la toux (speech therapy). Les antitussifs classiques ont une efficacité limitée.",
    source: "ERS guideline on the management of cough, Eur Respir J 2020"
  },
  {
    id: "sy-15", module: "symptomes", sousTheme: "Hémoptysie", difficulte: 3,
    enonce: "Patient de 55 ans, hémoptysie de 200 mL en 2 h, tabagique, stable sur le plan hémodynamique, SpO2 94 %. Quelle séquence est correcte ?",
    options: [
      "Fibroscopie immédiate à l'aveugle puis drainage",
      "Protection des voies aériennes, position latérale du côté saignant, avis réanimation/imagerie TDM injectée pour localiser le saignement, discuter embolisation",
      "Attente et surveillance simple, l'hémoptysie cédant spontanément",
      "Anticoagulation curative d'emblée",
      "Thoracotomie en urgence systématique"
    ],
    reponse: 1,
    explication: "Hémoptysie massive : geste vitaux d'abord (position latérale du côté du saignement pour protéger le poumon controlatéral, aspiration, O2, voie veineuse, correction de la coagulation). La TDM injectée localise le saignement ; l'embolisation des artères bronchiques est le traitement de première intention en épargne pulmonaire. La chirurgie est réservée aux échecs localisés.",
    source: "BTS haemoptysis guideline ; ERS Handbook, haemoptysis"
  },

  // ============ VOIES AÉRIENNES ============
  {
    id: "va-06", module: "voies-aeriennes", sousTheme: "BPCO : traitement de fond et exacerbations", difficulte: 2,
    enonce: "Patient 68 ans, BPCO groupe B (mMRC 2, 0 exacerbation), VEMS 48 %. Traitement de fond initial selon GOLD ?",
    options: [
      "LABA seul",
      "LAMA seul ou LABA seul (monothérapie bronchodilatatrice de préférence LAMA)",
      "Triple thérapie CSI/LABA/LAMA",
      "CSI/LABA",
      "Théophylline"
    ],
    reponse: 1,
    explication: "Groupe B (symptomatique sans exacerbations) : monothérapie bronchodilatatrice de longue durée, LAMA préféré au LABA ; la double bronchodilatation LABA/LAMA est une option si les symptômes persistent. Les CSI ne sont pas un traitement initial du groupe B.",
    source: "GOLD Report 2023/2024, initial pharmacological treatment"
  },
  {
    id: "va-07", module: "voies-aeriennes", sousTheme: "BPCO : traitement de fond et exacerbations", difficulte: 3,
    enonce: "Patient BPCO, 3 exacerbations/an sous LAMA/LABA, éosinophiles 350/µL. Quelle adaptation ?",
    options: [
      "Ajouter la théophylline",
      "Ajouter un CSI (passer en triple thérapie)",
      "Ajouter un SABA à forte dose",
      "Antibiothérapie au long cours",
      "Mucolytique seul"
    ],
    reponse: 1,
    explication: "Exacerbations persistantes sous double bronchodilatation : si éosinophiles ≥ 300/µL (ou ≥ 100 avec exacerbations sévères/hospitalisations), l'ajout d'un CSI (triple thérapie) est recommandé par GOLD (essais IMPACT, ETHOS : réduction des exacerbations et de la mortalité). Vigilance pneumocoque (vaccination) et dépistage de la tuberculose avant CSI.",
    source: "GOLD Report 2023 ; IMPACT (NEJM 2018), ETHOS (NEJM 2020)"
  },
  {
    id: "va-08", module: "voies-aeriennes", sousTheme: "Réhabilitation et oxygénothérapie (rapports ERS/ATS)", difficulte: 2,
    enonce: "Quelle est la définition d'une exacerbation de BPCO selon GOLD ?",
    options: [
      "Toute augmentation de la toux",
      "Épisode aigu d'aggravation des symptômes respiratoires (dyspnée, toux, expectorations) au-delà de la variabilité quotidienne, nécessitant un changement de traitement",
      "Hospitalisation obligatoire",
      "Descente des EFR de plus de 10 %",
      "Fièvre avec expectoration purulente"
    ],
    reponse: 1,
    explication: "L'exacerbation est définie cliniquement : aggravation aiguë des symptôèmes au-delà de la variabilité normale, nécessitant une modification thérapeutique. Elle est dite modérée (bronchodilatateurs +/- AAS/AINS, courte durée) ou sévère (hospitalisation, acidose respiratoire, défaillance d'organe).",
    source: "GOLD Report, exacerbation definition"
  },
  {
    id: "va-09", module: "voies-aeriennes", sousTheme: "Asthme : phénotypes et contrôle", difficulte: 2,
    enonce: "Patiente de 28 ans, asthme diagnostiqué, 2 urgences pour exacerbation en 6 mois, réveils nocturnes hebdomadaires, salbutamol 3x/semaine. Quel niveau de contrôle GINA ?",
    options: [
      "Asthme contrôlé",
      "Asthme partiellement contrôlé",
      "Asthme non contrôlé",
      "Asthme en rémission",
      "Impossible à évaluer sans EFR"
    ],
    reponse: 2,
    explication: "Critères GINA de non-contrôle : symptômes diurnes > 2x/semaine, réveils nocturnes, limitation d'activité, recours au traitement de secours > 2x/semaine, exacerbations. Réveils hebdomadaires + exacerbations répétées + secours fréquent = asthme non contrôlé : revoir observance, technique, triggers et escalade thérapeutique (niveau GINA suivant).",
    source: "GINA Strategy Report, assessment of asthma control"
  },
  {
    id: "va-10", module: "voies-aeriennes", sousTheme: "Asthme : phénotypes et contrôle", difficulte: 3,
    enonce: "Comment GINA 2023+ recommande-t-il d'initier le traitement de fond chez l'adulte asthmatique naïf ?",
    options: [
      "SABA à la demande seul",
      "CSI-formotérol à la demande ou CSI-formotérol de fond (selon niveau de sévérité) — le SABA seul n'est plus recommandé",
      "LAMA de fond",
      "CSI à forte dose d'emblée",
      "Antileucotriène seul"
    ],
    reponse: 1,
    explication: "Depuis 2019, GINA ne recommande plus le SABA seul (risque). Deux pistes : CSI-formotérol à la demande ( TRACK anti-inflammatory reliever) pour l'asthme léger, ou CSI-formotérol de fond (maintenance) adapté au niveau. L'escalade se fait par paliers (steps 1-5).",
    source: "GINA Strategy Report 2023, tracks MART/AIR"
  },
  {
    id: "va-11", module: "voies-aeriennes", sousTheme: "Overlap asthme-BPCO", difficulte: 3,
    enonce: "Patiente de 62 ans, tabagique 40 PA, obstruction fixe (VEMS/CVF 0,55), réversibilité > 200 mL et > 12 % sous salbutamol, éosinophiles 400/µL. Quel phénotype ?",
    options: [
      "BPCO pure",
      "Asthme-BPCO overlap (ACO) — traits des deux maladies",
      "Asthme isolé",
      "Bronchiectasies",
      "Bronchiolite constrictive"
    ],
    reponse: 1,
    explication: "ACO/overlap : obstruction fixe (BPCO) + éléments asthmatiques (réversibilité marquée, éosinophilie, often atopic). Ces patients ont plus d'exacerbations et bénéficient particulièrement des CSI ; le suivi conjoint BPCO + asthme est recommandé (GOLD et GINA citent ce phénotype).",
    source: "GOLD Report, asthma-COPD overlap ; GINA appendix"
  },
  {
    id: "va-12", module: "voies-aeriennes", sousTheme: "Bronchiectasies (BTS guideline, ERS)", difficulte: 3,
    enonce: "Patiente de 45 ans, bronchiectasies diffuses, bronchorrhée chronique, 4 exacerbations/an. Quel bilan étiologique est prioritaire et reconnu comme systématique ?",
    options: [
      "Bilan génétique complet systématique",
      "Test de la sueur / recherche de mucoviscidose et dosage des immunoglobulines (IgG, IgA, IgM)",
      "Scintigraphie thyroidienne",
      "Biopsie pulmonaire chirurgicale",
      "Sérologie aspergillaire seule"
    ],
    reponse: 1,
    explication: "Bilan étiologique minimal des bronchiectasies de l'adulte : test de la sueur (mucoviscidose, y compris formes atténuées), immunoglobulines, sérologie Aspergillus (ABPA), alpha-1-antitrypsine, rhinoscopie, ± explorations de la déglutition et ciliaires selon contexte. La génétique (CFTR) complète si test de sueur ou clinique évocateurs.",
    source: "BTS guideline for bronchiectasis 2019 ; ERS statements"
  },
  {
    id: "va-13", module: "voies-aeriennes", sousTheme: "Asthme : phénotypes et contrôle", difficulte: 2,
    enonce: "Un asthmatique a un VEMS à 45 % du théorique, non réversible, sans réveils nocturnes, sans recours au secours depuis 6 mois. Comment interpréter ?",
    options: [
      "Asthme aigu grave",
      "Asthme avec obstruction fixe (remodeling) — contrôlé symptomatiquement",
      "Erreur diagnostique : c'est une BPCO",
      "Asthme non contrôlé",
      "Rémission partielle"
    ],
    reponse: 1,
    explication: "Le contrôle (symptômes) et la fonction (VEMS) sont deux axes distincts. Un VEMS abaissé fixe peut refléter un remodeling bronchique alors que l'asthme est contrôlé. Il faut vérifier la bonne technique d'inhalation, l'observance et réévaluer après 3-6 mois de traitement optimal avant d'étiqueter « obstruction fixe ».",
    source: "GINA Strategy Report, assessment ; ERS/ATS severe asthma 2014"
  },
  {
    id: "va-14", module: "voies-aeriennes", sousTheme: "Maladies des petites voies aériennes", difficulte: 3,
    enonce: "Patiente de 38 ans, toux et dyspnée d'effort, spirométrie quasi normale, présence d'un trapping expiratoire (VR/CPT élevé) et hyperinflation à l'effort. Quel diagnostic évoquer ?",
    options: [
      "Asthme avec atteinte prédominante des petites voies aériennes",
      "Fibrose pulmonaire débutante",
      "Emphysème panlobulaire avancé",
      "Sarcoïdose stade IV",
      "Hypertension pulmonaire"
    ],
    reponse: 0,
    explication: "L'atteinte des petites voies aériennes (small airways disease) est fréquente dans l'asthme : spirométrie spirométrique souvent normale au repos mais trapping (VR élevé), hyperinflation et chute du VEMS à l'effort. Outlis : capacité inspiratoire, oscillométrie (R5-R20), N2 washout multiple.",
    source: "ERS/ATS standards ; ERS statement sur small airways (Eur Respir J 2019)"
  },
  {
    id: "va-15", module: "voies-aeriennes", sousTheme: "Dilatation trachéale et malformations", difficulte: 2,
    enonce: "Homme de 55 ans, dyspnée d'effort avec stridor inspiratoire, toux réfractaire. TDM : trachée en sablier, calibre augmenté en expiration. Quel diagnostic ?",
    options: [
      "Trachéomalacie (bronchomalacie) — collapsus expiratoire excessif",
      "Sténose trachéale post-intubation",
      "Tumeur trachéale",
      "Maladie de Wegener (GPA)",
      "Goître compressif"
    ],
    reponse: 0,
    explication: "La trachéomalacie est définie par un collapsus excessif (> 50 %) de la paroi trachéale à l'expiration, visible au scanner en expiration dynamique ou en endoscopie. Différencier de la sténose (calibre réduit fixe). Traitements : rééducation, CPAP, stents, trachéoplastie dans les formes sévères.",
    source: "ERS/ATS statements tracheomalacia ; ERS Handbook, airway disorders"
  },

  // ============ ONCOLOGIE ============
  {
    id: "on-06", module: "oncologie", sousTheme: "Classification TNM (8e édition)", difficulte: 3,
    enonce: "Selon la 8e édition TNM, un nodule pulmonaire unique de 2,5 cm sans ADP ni métastase est classé :",
    options: [
      "T1aN0M0 — stade IA1",
      "T1bN0M0 — stade IA2",
      "T1cN0M0 — stade IA3",
      "T2aN0M0 — stade IB",
      "T2bN0M0 — stade IIA"
    ],
    reponse: 2,
    explication: "8e édition : T1a ≤ 1 cm, T1b > 1 à ≤ 2 cm, T1c > 2 à ≤ 3 cm. Un nodule de 2,5 cm est donc T1c ; sans ADP ni métastase (T1cN0M0), le stade est IA3. À partir de 3 cm la tumeur devient T2a (stade IB).",
    source: "IASLC TNM 8e édition (2017)"
  },
  {
    id: "on-07", module: "oncologie", sousTheme: "Cancer non à petites cellules : stades localisés", difficulte: 2,
    enonce: "Patient opérable, CBNPC de 3 cm, N0M0 (stade IA2-IB selon 8e TNM),bon état général. Meilleur traitement ?",
    options: [
      "Radiothérapie stéréotaxique seule",
      "Chirurgie d'exérèse anatomique (lobectomie) avec curage ganglionnaire",
      "Chimiothérapie néoadjuvante",
      "Immunothérapie néoadjuvante",
      "Surveillance active"
    ],
    reponse: 1,
    explication: "Stade précoce opérable : lobectomie avec curage/échantillonnage ganglionnaire est le standard. La radiothérapie stéréotaxique (SBRT) est réservée aux patients inopérables ou refusant la chirurgie. Les traitements néoadjuvants (immunothérapie, chimio) se discutent à partir du stade IIB/III.",
    source: "ERS/ESTS/ESTRO guidelines ; recommandations ESMO"
  },
  {
    id: "on-08", module: "oncologie", sousTheme: "Cancer non à petites cellules : stades localisés", difficulte: 3,
    enonce: "Patient 70 ans, CBNPC stade IIIA (N2), performance status 1, perte de poids 5 %. Quelle stratégie est standard ?",
    options: [
      "Chirurgie seule",
      "Chimioradiothérapie concomitante suivie d'immunothérapie de consolidation (durvalumab si PD-L1 ≥ 1 %)",
      "Immunothérapie seule",
      "Radiothérapie palliative",
      "Chimiothérapie seule"
    ],
    reponse: 1,
    explication: "Stade III non résécable, PS 0-1 : chimioradiothérapie concomitante (platine-doublet, 60 Gy) puis durvalumab jusqu'à 12 mois (essai PACIFIC : amélioration de la survie globale et sans progression). La chirurgie est réservée à des cas IIIA sélectionnés (N2 unique, résecable, après discussion multidisciplinaire).",
    source: "PACIFIC trial (NEJM 2017) ; recommandations ESMO/ERS"
  },
  {
    id: "on-09", module: "oncologie", sousTheme: "Mésothéliome pleural", difficulte: 3,
    enonce: "Quel est le régime de chimiothérapie de référence en 1re ligne du mésothéliome pleural malin inopérable ?",
    options: [
      "Cisplatine-pemetrexed (± bévacizumab selon autorisation)",
      "Carboplatine-paclitaxel",
      "Doxorubicine-cyclophosphamide",
      "Etoposide-cisplatine",
      "Gemcitabine-docetaxel"
    ],
    reponse: 0,
    explication: "Pemetrexed + cisplatine (essai EMPHACIS, 2003) est le standard, avec amélioration de la survie et de la qualité de vie vs cisplatine seul. L'ajout de bévacizumab (essai MAPS, 2016) améliore la survie globale chez les patients éligibles. L'immunothérapie (nivolumab + ipilimumab) est validée en 2e ligne (essai CHECKMATE-743).",
    source: "MPACIS (J Clin Oncol 2003) ; MAPS (Lancet 2016) ; CHECKMATE-743 (Lancet 2021)"
  },
  {
    id: "on-10", module: "oncologie", sousTheme: "Dépistage du cancer bronchique (NELSON, NLST)", difficulte: 3,
    enonce: "Dans l'essai NELSON, quelle modalité de suivi des nodules était utilisée pour réduire les faux positifs ?",
    options: [
      "PET-scan systématique",
      "Mesure volumétrique des nodules avec seuils de croissance (volumetry-based management)",
      "Biopsie de tous les nodules > 5 mm",
      "IRM de contrôle",
      "Antigènes tumoraux sériques"
    ],
    reponse: 1,
    explication: "NELSON a utilisé la volumétrie TDM (croissance sur volume, doublement du volume en < 400 jours = suspect) plutôt que le diamètre seul, réduisant le taux de faux positifs. Résultat : réduction de la mortalité spécifique de 24 % (hommes) et 33 % (femmes, analyse post-hoc) vs absence de dépistage.",
    source: "NELSON (NEJM 2020) ; Lancet Oncol 2014 (volumetry)"
  },
  {
    id: "on-11", module: "oncologie", sousTheme: "Oncogènes dirigés (EGFR, ALK, ROS1, etc.)", difficulte: 3,
    enonce: "Patient 45 ans, jamais fumeur, adénocarcinome métastatique, réarrangement ALK détecté. Traitement de 1re ligne ?",
    options: [
      "Crizotinib",
      "Inhibiteur ALK de 2e/3e génération (alectinib, brigatinib ou lorlatinib)",
      "Chimiothérapie seule",
      "Pembrolizumab",
      "Erlotinib"
    ],
    reponse: 1,
    explication: "Dans les CBNPC ALK-positifs, les TKI de nouvelle génération (alectinib, brigatinib, lorlatinib) sont supérieurs au crizotinib en 1re ligne (essais ALEX, ALTA-1L, CROWN : meilleure SSP et meilleur contrôle du SNC). Le crizotinib n'est plus le standard initial.",
    source: "ALEX (NEJM 2017/2020) ; ALTA-1L ; CROWN (Lancet 2020)"
  },
  {
    id: "on-12", module: "oncologie", sousTheme: "Immunothérapie (PD-1/PD-L1)", difficulte: 3,
    enonce: "Quel effet indésirable spécifique de l'immunothérapie doit être expliqué et surveillé avant initiation d'un anti-PD-1 ?",
    options: [
      "Alopécie chimio-induite",
      "Pneumopathie inflammatoire (pneumonitis) immuno-induite",
      "Neuropathie oxaliplatine",
      "Néphropathie au cisplatine",
      "Cardiotoxicité des anthracyclines"
    ],
    reponse: 1,
    explication: "Les immune-related adverse events (irAEs) incluent pneumopathies (grade 2-5 possibles, plus fréquentes chez les patients pulmonaires pré-existants), colites, hépatites, thyroïdites, hypophysites, cutanés. Toute dyspnée/toux fébrile sous immunothérapie impose d'éliminer une pneumopathie immuno-induite : corticoïdes, interruption selon grade.",
    source: "ESMO irAEs guidelines ; fiches RCP anti-PD-1/PD-L1"
  },
  {
    id: "on-13", module: "oncologie", sousTheme: "Tumeurs médiastinales et carcinoides", difficulte: 2,
    enonce: "Patiente de 35 ans, tumeur bronchique bien vascularisée, biopsie : tumeur carcinoïde typique. Quel est le traitement de référence ?",
    options: [
      "Chimiothérapie",
      "Exérèse chirurgicale complète (chirurgie conservatrice si possible)",
      "Immunothérapie",
      "Radiothérapie exclusive",
      "Somatostatine analogues seuls"
    ],
    reponse: 1,
    explication: "Le carcinomeïde pulmonaire typique (grade 1) est traité par exérèse chirurgicale complète, avec résection conservative (sleeve, segmentectomie) si possible. Le pronostic est excellent (survie > 90 % à 10 ans). Les formes atypiques (grade 2) nécessitent une surveillance et un curage ganglionnaire.",
    source: "ENETS guidelines ; ERS Handbook, pulmonary carcinoids"
  },
  {
    id: "on-14", module: "oncologie", sousTheme: "Métastases pulmonaires", difficulte: 2,
    enonce: "Patient suivi pour un cancer colique, apparition de 3 nodules pulmonaires périphériques. Quel examen est le plus rentable pour l'hypothèse de métastases ?",
    options: [
      "PET-scan",
      "Biopsie d'un nodule accessible",
      "Marqueurs tumoraux seuls",
      "IRM cérébrale",
      "Échographie abdominale"
    ],
    reponse: 1,
    explication: "Chez un patient cancer connu, la confirmation histologique d'un nodule pulmonaire (biopsie TDM-guidée ou endoscopique selon localisation) reste déterminante : elle peut révéler un second cancer primitif (surtout chez le fumeur), ce qui change radicalement la prise en charge. Le PET apporte des arguments mais ne remplace pas l'histologie.",
    source: "Recommandations métastases pulmonaires ; ESTS/ERS Handbook"
  },
  {
    id: "on-15", module: "oncologie", sousTheme: "Soins de support et décision multidisciplinaire", difficulte: 2,
    enonce: "Un cancer bronchique est décidé en réunion de décision multidisciplinaire (RCP/Tumor Board). Quel élément est systématiquement requis pour valider une immunothérapie ?",
    options: [
      "Dosage de l'alpha-foetoprotéine",
      "Statut PD-L1 (et recherche des mutations EGFR/ALK/ROS1 chez les non-fumeurs/adénocarcinomes)",
      "Sérologie hépatite B systématique",
      "Biopsie médullaire",
      "Quantiferon"
    ],
    reponse: 1,
    explication: "Avant immunothérapie en 1re ligne : PD-L1 (seuils 1 %/50 %) et — chez les non-fumeurs, adénocarcinomes, sujets jeunes — recherche des drivers EGFR/ALK/ROS1 etc., car un TKI est alors prioritaire. Les drivers oncogéniques sont un critère de non-indication des anti-PD-1 en monothérapie.",
    source: "ESMO guidelines NSCLC ; RCP cancer bronchique"
  },

  // ============ INFECTIONS ============
  {
    id: "in-06", module: "infections", sousTheme: "Pneumonie aiguë communautaire (PAC) : antibiothérapie et prise en charge", difficulte: 2,
    enonce: "Patient 40 ans, PAC légère, sans comorbidité, consultant en ville. Options : amoxicilline 1 g x3/j ou macrolide ou doxycycline selon contexte local. Pourquoi l'amoxicilline est-elle privilégiée en Europe ?",
    options: [
      "Elle couvre les atypiques",
      "Elle couvre Streptococcus pneumoniae, premier pathogène de PAC, avec une résistance encore faible et une excellente concentration pulmonaire",
      "Elle agit sur le SARS-CoV-2",
      "Elle évite toute hospitalisation",
      "Elle couvre Pseudomonas aeruginosa"
    ],
    reponse: 1,
    explication: "Dans les PAC légères sans comorbidité, l'amoxicilline (ou la doxycycline/macrolide selon les résistances locales de S. pneumoniae) est recommandée par les guidelines européennes (ERS/ESCMID) : spectre ciblé sur le pneumocoque. Les atypiques (Mycoplasma, Legionella) sont couverts par macrolide/tétracycline/fluoroquinolone, en association si facteurs de risque.",
    source: "ERS/ESCMID guidelines on CAP 2011 ; BTS/NICE CAP guideline"
  },
  {
    id: "in-07", module: "infections", sousTheme: "Pneumonie aiguë communautaire (PAC) : antibiothérapie et prise en charge", difficulte: 3,
    enonce: "Patient 75 ans, PAC sévère hospitalisée en réanimation (choc septique). Quel antibiothérapie initiale probabiliste est recommandée ?",
    options: [
      "Amoxicilline seule IV",
      "Bêtalactamine IV (ex. C3G) + macrolide IV ou fluoroquinolone antipneumococcique",
      "Gentamicine seule",
      "Métroinidazole seul",
      "Antiviral seul"
    ],
    reponse: 1,
    explication: "PAC sévère : bithérapie initiale associant une bêtalactamine active sur le pneumocoque (C3G type ceftriaxone) et un macrolide IV (ou une fluoroquinolone antipneumococcique en alternative), en raison de la couverture des atypiques et du bénéfice démontré en survie. À adapter après documentation microbiologique.",
    source: "ERS/ESCMID CAP guidelines 2011 ; IDSA/ATS CAP guideline 2019"
  },
  {
    id: "in-08", module: "infections", sousTheme: "Mycobactéries non tuberculeuses", difficulte: 3,
    enonce: "Femme de 65 ans, bronchiectasies, culture positive à Mycobacterium avium complex (M. avium) sur 2 expectorations, TDM : nodules arborisants et cavitation. Quel critère supplémentaire est nécessaire avant de traiter ?",
    options: [
      "Un Quantiféron positif",
      "Des symptômes cliniques et exclusion d'autres diagnostics (critères ATS/ERS 2007)",
      "Une sérologie aspergillaire positive",
      "Une hémoculture positive",
      "Un test de sueur pathologique"
    ],
    reponse: 1,
    explication: "Diagnostic d'infection à mycobactéries non tuberculeuses (MNT) selon ATS/ERS 2007 : critères cliniques (symptômes, exclusion d'autres causes), radiologiques (TDM : nodules, arborisation, cavitation) et microbiologiques (≥ 2 cultures positives d'expectorations, ou 1 lavage broncho-alvéolaire, ou biopsie). La simple colonisation est fréquente dans les bronchiectasies : le traitement est long et lourd (clarithromycine + rifampicine + éthambutol, ≥ 12 mois après négativation).",
    source: "ATS/ERS statement on NTM disease 2007 ; BTS NTM guideline 2017"
  },
  {
    id: "in-09", module: "infections", sousTheme: "Grippe, VRS, COVID-19", difficulte: 2,
    enonce: "Patient à risque de complication grippale, début des symptômes < 48 h. Quelle est la conduite recommandée pour le traitement ?",
    options: [
      "Antibiothérapie immédiate",
      "Inhibiteur de la neuraminidase (oseltamivir) à visée curative",
      "Corticoïdes oraux",
      "Simple repos sans traitement spécifique",
      "Vaccination antigrippale immédiate"
    ],
    reponse: 1,
    explication: "Chez les patients à risque (âge > 65, comorbidités respiratoires/cardiaques, grossesse, immunodépression), l'oseltamivir curatif est recommandé dans les 48 h du début des symptômes (réduction de la durée et des complications). La vaccination annuelle reste la mesure principale de prévention.",
    source: "WHO/ECDC influenza guidelines ; ERS statements"
  },
  {
    id: "in-10", module: "infections", sousTheme: "Pneumocystose et infections de l'immunodéprimé", difficulte: 3,
    enonce: "Patient VIH, CD4 120/mm³, fièvre, dyspnée d'effusion, hypoxémie, TDM : verre dépoli diffus bilatéral. Quel traitement empirique est le premier geste probabiliste ?",
    options: [
      "Antibiothérapie anti-pneumococcique seule",
      "Cotrimoxazole forte dose (pneumocystose à Pneumocystis jirovecii) ± corticoïdes si hypoxémie sévère",
      "Antifongique azolé",
      "Antituberculeux quadrithérapie",
      "Antiviral anti-CMV"
    ],
    reponse: 1,
    explication: "Chez un patient VIH avec CD4 < 200/mm³ et un tableau de pneumopathie interstitielle diffuse avec verre dépoli et hypoxémie, la pneumocystose est le premier diagnostic probabiliste : cotrimoxazole forte dose (TMP-SMX), avec corticoïdes si PaO2 < 70 mmHg ou gradient A-a élevé. Diagnostic de confirmation : LBA (immunofluorescence, PCR).",
    source: "Recommandations BHIVA/ERS ; ERS Handbook, opportunistic infections"
  },
  {
    id: "in-11", module: "infections", sousTheme: "Infections fongiques (aspergillose)", difficulte: 3,
    enonce: "Patiente asthmatique sévère, corticodépendante, toux chronique, bronchectasies proximales, éosinophiles 900/µL, IgE totale 1200 UI/mL, précipitines aspergillaires positives. Diagnostic ?",
    options: [
      "Aspergillose invasive",
      "Aspergillose bronchopulmonaire allergique (ABPA)",
      "Aspergillome",
      "Mucormycose",
      "Candidose bronchique"
    ],
    reponse: 1,
    explication: "Critères d'ABPA : asthme (ou mucoviscidose), IgE totale élevée (> 1000 UI/mL), éosinophilie, précipitines/IgE spécifiques anti-Aspergillus positives, atteintes radiologiques (bronchectasies proximales, mucoid impaction). Traitement : itraconazole/voriconazole + corticoïdes, suivi des IgE totales. L'aspergillome est une colonisation d'une cavité préexistante ; l'aspergillose invasive touche l'immunodéprimé neutropénique.",
    source: "ISHAM ABPA criteria 2013/2021 ; ERS Handbook, aspergillosis"
  },
  {
    id: "in-12", module: "infections", sousTheme: "VAP (pneumonie sous ventilation) : prévention et traitement", difficulte: 3,
    enonce: "Pour diagnostiquer une VAP, quelle association est classique chez un patient ventilé ?",
    options: [
      "Fièvre + leucocytose isolées",
      "Nouvelle infiltration radiologique + purulence trachéale + aggravation de l'oxygénation, confirmées par prélèvements quantitatifs",
      "Baisse isolée de la PEEP",
      "Hyperthermie + acidose métabolique isolée",
      "Hémoptysie isolée"
    ],
    reponse: 1,
    explication: "La VAP associe classiquement : nouvelle/inextension d'infiltrat radiologique, signes infectieux (fièvre, leucocytose, purulence), et détérioration de l'échange gazeux. Le diagnostic microbiologique repose sur des prélèvements quantitatifs (LBA ≥ 10⁴ UFC/mL, brosses ≥ 10³) afin de distinguer colonisation de infection, et d'adapter l'antibiothérapie (qui doit être initiée précocement et probabiliste puis désescaladée).",
    source: "ERS/ESICM/ESCMID/ALAT VAP guidelines 2017"
  },
  {
    id: "in-13", module: "infections", sousTheme: "Tuberculose pulmonaire : diagnostic", difficulte: 3,
    enonce: "Patient 32 ans, toux 3 semaines, sueurs nocturnes, TDM : ADP médiastinales, expectoration BAAR+. Quel test rapide doit être systématiquement demandé ?",
    options: [
      "Sérologie dengue",
      "Test moléculaire rapide avec détection de la résistance à la rifampicine (Xpert MTB/RIF)",
      "Test tuberculinique",
      "Hémoculture mycobactéries systématique",
      "PCR CMV"
    ],
    reponse: 1,
    explication: "Chez tout patient avec BAAR+ (et tout cas suspecté), l'OMS recommande un test moléculaire rapide type Xpert MTB/RIF ou Ultra : il identifie M. tuberculosis complexe et la résistance à la rifampicine (marqueur proxy de MDR) en < 2 h, ce qui change immédiatement le choix du régime et les mesures d'isolement.",
    source: "WHO TB guidelines (Xpert MTB/RIF) ; ERS Handbook"
  },
  {
    id: "in-14", module: "infections", sousTheme: "Bronchite aiguë et exacerbations infectieuses", difficulte: 2,
    enonce: "Une exacerbation de BPCO purulente avec CRP élevée (exacerbation de Anthonisen type 1 : purulence + volume + dyspnée). Quel traitement antibiotique est recommandé ?",
    options: [
      "Aucun, l'infection est virale dans 90 % des cas",
      "Amoxicilline/acide clavulanique ou doxycycline (5-7 jours) selon contextes",
      "Fluoroquinolone systématique",
      "Antifongique",
      "Macrolide 3 semaines"
    ],
    reponse: 1,
    explication: "Exacerbation d'Anthonisen type 1 (3 critères) ou purulente avec CRP élevée : antibiothérapie ciblant H. influenzae, S. pneumoniae, M. catarrhalis — amoxicilline/acide clavulanique ou doxycycline 5-7 jours. Les fluoroquinolones ne sont pas systématiques (effets indésirables, résistance).",
    source: "GOLD Report ; Anthonisen criteria ; ERS statements"
  },
  {
    id: "in-15", module: "infections", sousTheme: "Pneumonie aiguë communautaire (PAC) : diagnostic et scores", difficulte: 2,
    enonce: "Patiente enceinte de 28 SA, PAC légère. Quel traitement est recommandé en ambulatoire ?",
    options: [
      "Doxycycline",
      "Amoxicilline (ou macrolide si suspicion d'atypique, en évitant certaines molécules)",
      "Ofloxacine",
      "Cotrimoxazole au T1",
      "Aucun, traiter par paracétamol seul"
    ],
    reponse: 1,
    explication: "Grossesse : privilégier l'amoxicilline ; en cas de suspicion d'atypique, certaines molécules comme l'azithromycine sont utilisées avec prudence/avis spécialisé, tandis que les cyclines (doxycycline), fluoroquinolones et cotrimoxazole (au T1) sont à éviter (fœtotoxicité). La PAC chez la femme enceinte justifie une surveillance rapprochée du fait du risque accru de complications.",
    source: "Guidelines PAC/grossesse (BTS/NICE) ; ERS Handbook, pregnancy"
  },

  // ============ INTERSTITIELLES ============
  {
    id: "pi-06", module: "interstitielles", sousTheme: "Classification et démarche diagnostique des PID", difficulte: 2,
    enonce: "Quelle approche est recommandée pour la classification des pneumopathies interstitielles diffuses (PID) ?",
    options: [
      "Biopsie chirurgicale systématique",
      "Discussion multidisciplinaire (clinique + radiologie + histologie) : approche MDT",
      "Diagnostic purement radiologique",
      "Diagnostic uniquement fonctionnel",
      "Test thérapeutique aux corticoïdes"
    ],
    reponse: 1,
    explication: "La démarche de référence dans les PID est multidisciplinaire (clinicien + radiologue + pathologiste, « CLIP ») : elle améliore la concordance diagnostique et la confiance. La biopsie n'est requise qu'en cas d'incertitude après discussion. Un test thérapeutique ne doit jamais remplacer le diagnostic étiologique.",
    source: "ERS/ATS idiopathic interstitial pneumonias 2013 ; IPF guideline 2015"
  },
  {
    id: "pi-07", module: "interstitielles", sousTheme: "Pneumoconioses (asbestose, silicose)", difficulte: 2,
    enonce: "Quelle affirmation sur l'asbestose est exacte ?",
    options: [
      "Elle survient uniquement après des expositions intenses",
      "Il s'agit d'une fibrose interstitielle liée à l'exposition à l'amiante, avec risque accru de cancer bronchique et de mésothéliome",
      "Elle est toujours associée à des plaques pleurales",
      "Elle est complètement réversible après arrêt de l'exposition",
      "Elle ne survient qu'après 40 ans d'exposition"
    ],
    reponse: 1,
    explication: "L'asbestose est une pneumopathie interstitielle fibrosante liée à l'inhalation de fibres d'amiante. Elle expose à un risque accru de cancer bronchique (synergie tabac) et de mésothéliome (toutes expositions). Les plaques pleurales peuvent coexister mais ne sont pas systématiques ; la fibrose n'est pas réversible. Toute exposition amiantique doit être déclarée et surveillée.",
    source: "Recommandations ERS sur l'amiante ; ERS Handbook, occupational lung disease"
  },
  {
    id: "pi-08", module: "interstitielles", sousTheme: "Pneumopathie d'hypersensibilité", difficulte: 3,
    enonce: "Quel examen distingue une pneumopathie d'hypersensibilité aiguë d'une pneumopathie infectieuse ?",
    options: [
      "La CRP",
      "La LBA avec lymphocytose (CD8+) et l'anamnèse expositionnelle (antigènes organiques)",
      "L'hémoculture",
      "Le dosage des D-dimères",
      "La procalcitonine"
    ],
    reponse: 1,
    explication: "La PH aiguë : tableau pseudo-grippal 4-6 h après exposition, régression à l'éviction ; LBA avec lymphocytose (souvent CD8+), baisse du rapport CD4/CD8. L'imagerie : verre dépoli, micronodules centro-lobulaires, aspect « mosaic ». L'anamnèse expositionnelle est la clé du diagnostic (oiseaux, moûtures, climatisations...).",
    source: "ERS/ATS HP guideline (AJRCCM 2020) ; ERS Handbook"
  },
  {
    id: "pi-09", module: "interstitielles", sousTheme: "Hémorragie alvéolaire et vascularites", difficulte: 3,
    enonce: "Patiente de 30 ans, hémoptysie, anémie, créatinine élevée, TDM : infiltrats en verre dépoli, c-ANCA/anti-PR3 positifs. Diagnostic ?",
    options: [
      "Goodpasture (anti-MBG)",
      "Granulomatose avec polyangéite (GPA, ex. Wegener) avec hémorragie alvéolaire",
      "Polyangéite microscopique",
      "Lupus pulmonaire",
      "Sarcoïdose"
    ],
    reponse: 1,
    explication: "Hémorragie alvéolaire diffuse + atteinte rénale + c-ANCA anti-PR3 : la GPA (granulomatose avec polyangéite) est la vascularite la plus probable (des formes renales limitées existent, la PAM anti-MPO peut donner un tableau proche — le diagnostic différentiel repose sur la clinique ORL/pulmonaire et l'histologie). Urgence thérapeutique : corticoïdes ± cyclophosphamide/rituximab ± échanges plasmatiques.",
    source: "Recommandations vascularites ANCA (ERS/EDTA) ; ERS Handbook, pulmonary vasculitis"
  },
  {
    id: "pi-10", module: "interstitielles", sousTheme: "PID médicamenteuses et radio-induites", difficulte: 2,
    enonce: "Quelle classe médicamenteuse est classiquement associée aux pneumopathies interstitielles médicamenteuses ?",
    options: [
      "Bêtalactamines",
      "Médicaments cardiovasculaires type amiodarone, chimiothérapies (bléomycine, méthotrexate), immunothérapies (anti-PD-1)",
      "Inhibiteurs de la pompe à protons",
      "Antihistaminiques",
      "Paracétamol"
    ],
    reponse: 1,
    explication: "Pneumopathies médicamenteuses : amiodarone (pneumopathie chronique,organisant), méthotrexate (pneumopathie d'hypersensibilité), bléomycine (fibrose), anti-PD-1/PD-L1 (pneumopathie inflammatoire), radiothérapie (fibrose dans le champ). Le diagnostic est un diagnostic d'éviction + chronologie compatible + évolution à l'arrêt (± régression sous corticoïdes).",
    source: "ERS Handbook, drug-induced lung disease ; Pneumotox (référence en ligne)"
  },
  {
    id: "pi-11", module: "interstitielles", sousTheme: "Fibrose pulmonaire idiopathique (FPI)", difficulte: 3,
    enonce: "Quel critère pronostique est le plus simple à suivre dans la FPI au cours du temps ?",
    options: [
      "Le CRP",
      "Le VEMS annuel (déclin) et la DLCO",
      "La capacité vitale forcée (CVF) : un déclin absolu > 10 % en 6-12 mois signe une progression",
      "Le score de Charlson",
      "Le nombre d'exacerbations"
    ],
    reponse: 2,
    explication: "La CVF est le paramètre de suivi de référence dans la FPI : déclin > 10 % absolu (ou > 5-10 % selon seuils) en 6-12 mois = progression, associée à une mortalité accrue. Le risque de décès est multiplié après exacerbation aiguë (mortalité hospitalière > 50 %). Les antifibrotiques ralentissent le déclin de la CVF.",
    source: "ERS/ATS/JRS/ALAT IPF guideline 2015 ; essais INPULSIS/ASCEND"
  },
  {
    id: "pi-12", module: "interstitielles", sousTheme: "Sarcoïdose", difficulte: 3,
    enonce: "Patiente de 29 ans, sarcoïdose stade II, dyspnée d'effort modérée, érythème noueux. Quel traitement est approprié en première intention ?",
    options: [
      "Aucun traitement systématique — abstention et surveillance, selon le retentissement",
      "Corticothérapie orale forte dose 12 mois",
      "Méthotrexate d'emblée",
      "Anti-TNF d'emblée",
      "Transplantation"
    ],
    reponse: 0,
    explication: "Le traitement de la sarcoïdose n'est pas systématique : il repose sur le retentissement (symptomatologie, atteinte d'organes menaçantes : cardiaque, neuro, oculaire, hypercalcémie). Une sarcoïdose peu symptomatique (érythème noueux + ADP hilaires = Löfgren, de bon pronostic) relève de l'abstention. La corticothérapie est réservée aux formes invalidantes/évolutives ; les immunosuppresseurs en 2e ligne.",
    source: "ERS Statement on sarcoidosis 2014 ; ERS Handbook"
  },
  {
    id: "pi-13", module: "interstitielles", sousTheme: "PID des connectivites", difficulte: 3,
    enonce: "Patiente 45 ans, dyspnée, phénomène de Raynaud, sclérodactylie, reflux, capillaroscopie anormale, TDM : fibrose basale NSIP-like. Quel bilan oriente la prise en charge ?",
    options: [
      "Test de provocation à la méthacholine",
      "Anticentromère/anti-Scl70 (sclérodermie systémique) et évaluation de l'HTP (échocardiographie, DLCO)",
      "Anticorps anti-Jo1 seul",
      "Biopsie pulmonaire chirurgicale systématique",
      "Quantiféron"
    ],
    reponse: 1,
    explication: "Sclérodermie systémique (anticentromère ou anti-Scl70) : PID NSIP fréquente + risque majeur d'HTP (à dépister par échocardiographie ± cathétérisme). Le mycophénolate est le traitement de fond de référence de la PID sclérodermique. La DLCO abaissée avec CPT relativement préservée doit faire suspecter une HTP.",
    source: "ERS statements on systemic sclerosis (Eustar) ; ESC/ERS PH guidelines 2022"
  },
  {
    id: "pi-14", module: "interstitielles", sousTheme: "Pneumoconioses (asbestose, silicose)", difficulte: 2,
    enonce: "Quelle est la présentation TDM typique de la silicose ?",
    options: [
      "Verre dépoli diffus",
      "Micronodules profus, surtout aux lobes supérieurs, avec condensation (progressive massive fibrose) et ADP calcifiées en « coquille d'œuf »",
      "Rayon de miel sous-pleural basal",
      "Épanchement pleural bilatéral",
      "Kystes paraseptaux"
    ],
    reponse: 1,
    explication: "Silicose : nodules de 2-5 mm à prédominance apicodorsale, pouvant coalescer (PMF), avec ganglions médiastinaux calcifiés en « egg-shell ». Risque accru de tuberculose et de cancer bronchique. La déclaration de maladie professionnelle est systématique en cas d'exposition documentée.",
    source: "ERS Handbook, occupational lung diseases ; recommandations de surveillance"
  },
  {
    id: "pi-15", module: "interstitielles", sousTheme: "Alvéolites et proteinose alvéolaire", difficulte: 3,
    enonce: "Patiente de 35 ans, dyspnée progressive, TDM : verre dépoli « crazy paving ». Le LBA est lactescent. Diagnostic probable ?",
    options: [
      "Proteinose alvéolaire",
      "Hémorragie alvéolaire",
      "Pneumonie lipidique exogène",
      "Sarcoïdose",
      "Pneumopathie organisée"
    ],
    reponse: 0,
    explication: "La protéinose alvéolaire (pulmonary alveolar proteinosis) : verre dépoli avec septa épaissies (crazy paving), LBA laitux riche en matériel PAS+. Formes auto-immunes (anticorps anti-GM-CSF, les plus fréquentes) vs congénitales/secondaires. Traitement : lavages pulmonaires totaux ; auto-immune : GM-CSF inhalé ou inhibiteurs du récepteur IL-6.",
    source: "ERS Handbook, alveolar proteinosis ; ERS statements"
  },

  // ============ PLÈVRE, PAROI, MÉDIASTIN ============
  {
    id: "pl-06", module: "pleure-mediastin", sousTheme: "Pleurésie purulente", difficulte: 3,
    enonce: "Patiente de 54 ans, pneumocoque, épanchement pleural purulent avec pH 7,05, glucose < 2,2 mmol/L, LDH élevées. Quelle prise en charge s'impose ?",
    options: [
      "Antibiothérapie seule",
      "Drainage thoracique + antibiothérapie (pleurésie purulente compliquée, éviter la chirurgie différée si non-résolution)",
      "Corticoïdes pleuraux",
      "Simple surveillance biologique",
      "Pleurédose à la talc immédiate"
    ],
    reponse: 1,
    explication: "Pleurésie purulente (empième) : drainage thoracique + antibiothérapie active (couvrant anaérobies), ± fibrinolytiques/instrumentation si loculations. pH < 7,2 ou glucose bas signent un épanchement compliqué nécessitant le drainage. Une chirurgie (décortication) se discute en cas d'échec du drainage ou de retard diagnostique. La pleurodèse n'a pas de place en phase aiguë infectieuse.",
    source: "BTS pleural disease guideline ; ERS Handbook, pleural infection"
  },
  {
    id: "pl-07", module: "pleure-mediastin", sousTheme: "Pneumothorax spontané", difficulte: 3,
    enonce: "Patient de 25 ans, premier épisode de pneumothorax spontané primaire, décollement > 2 cm à la radiographie, dyspnée modérée. Quelle prise en charge ?",
    options: [
      "Exsufflation à l'aiguille ou drainage thoracique (selon tolérance/efficacité)",
      "Surveillance seule 3 semaines",
      "Chirurgie d'emblée",
      "Oxygène seul",
      "Pleurédose talc systématique"
    ],
    reponse: 0,
    explication: "Pneumothorax primaire étendu (> 2 cm) ou symptomatique : exsufflation à l'aiguille en première intention (ou drainage thoracique si échec/contre-indication), selon BTS. La chirurgie (VATS, symphyse) se discute : persistance du bullage > 3-5 jours, récidive controlatérale, professions à risque (aviation, plongée).",
    source: "BTS pleural disease guideline 2023 ; ERS statement on pneumothorax"
  },
  {
    id: "pl-08", module: "pleure-mediastin", sousTheme: "Épanchement pleural : démarche diagnostique (transudat/exsudat)", difficulte: 3,
    enonce: "Patiente insuffisante cardiaque, épanchement pleural bilatéral, protides pleuraux 30 g/L (protides sériques 65), sous furosémide depuis 3 jours. Comment interpréter ?",
    options: [
      "Exsudat franc, TDM nécessaire",
      "Possible « faux exsudat » diurétique-inclus : utiliser les critères alternatifs (protéines sériques − protéines pleurales, albumin gradient) avant de reclasser",
      "Toujours une tuberculose",
      "Hémorragie intrapleurale",
      "Chylothorax"
    ],
    reponse: 1,
    explication: "Sous diurétiques, un transsudat cardiaque peut « se concentrer » et remplir les critères de Light (ratio protéines > 0,5). Des critères alternatifs aident : différence protéines sériques − pleurales > 31 g/L ou gradient d'albumine > 12 g/L suggèrent un transsudat. Le tableau clinique (bilatéral, contexte cardiaque) reste déterminant.",
    source: "BTS pleural disease guideline ; Light, update"
  },
  {
    id: "pl-09", module: "pleure-mediastin", sousTheme: "Cyphoscoliose et déformations pariétales", difficulte: 2,
    enonce: "Patiente de 20 ans, scoliose thoracique sévère (angle de Cobb > 90°), insuffisance respiratoire chronique. Quel mécanisme domine ?",
    options: [
      "Obstruction des voies aériennes proximales",
      "Restriction mécanique sévère avec hypoventilation alvéolaire (déformation de la cage thoracique)",
      "Shunt intrapulmonaire",
      "Défaut de diffusion isolé",
      "HTP post-embolique"
    ],
    reponse: 1,
    explication: "Les déformations pariétales sévères (cyphoscoliose, thoracoplastie) entraînent une restriction (CPT abaissée), une hypoventilation avec hypercapnie nocturne et, au long cours, une HTP. La VNI nocturne est le traitement clé de l'hypoventilation. Le suivi : gaz du sang, polysomnographie, échocardiographie (cœur pulmonaire).",
    source: "ERS Handbook, chest wall diseases ; ERS statements on NIV"
  },
  {
    id: "pl-10", module: "pleure-mediastin", sousTheme: "Pathologies du médiastin", difficulte: 3,
    enonce: "Un patient présente une myasthénie et une masse médiastinale. Quel bilan biologique parallèle est recommandé pour compléter le diagnostic de thymome ?",
    options: [
      "Anticorps anti-récepteurs de l'acétylcholine (anti-AChR)",
      "Anticorps antinucléaires",
      "Facteur rhumatoïde",
      "ANCA",
      "Anticorps anticardiolipines"
    ],
    reponse: 0,
    explication: "La myasthénie associée au thymome (30-45 % des thymomes) est confirmée par les anticorps anti-AChR (souvent élevés dans les formes thymomateuses). Bilan d'extension du thymole : TDM, classification Masaoka-Koga, réunion multidisciplinaire (chirurgie ± radiothérapie selon stade).",
    source: "ERS Handbook, mediastinal tumours ; recommandations myasthénie-thymome"
  },
  {
    id: "pl-11", module: "pleure-mediastin", sousTheme: "Obésité et hypoventilation", difficulte: 2,
    enonce: "Patient IMC 42, somnolence, PaCO2 diurne 52 mmHg, pas d'atteinte parenchymateuse. Quel est le diagnostic et le traitement de première intention ?",
    options: [
      "SAOS isolé — PPC seule",
      "Syndrome d'obésité-hypoventilation — VNI nocturne (± PPC si SAOS associé dominant) et perte de poids",
      "Asthme",
      "BPCO",
      "Insuffisance cardiaque — diurétiques seuls"
    ],
    reponse: 1,
    explication: "OHS : hypercapnie diurne (PaCO2 ≥ 45) chez un patient avec IMC ≥ 30, après exclusion d'autres causes. Traitement de référence : VNI nocturne (pression support/assistance ventilatoire nocturne, souvent avec EPAP pour le SAOS associé), perte de poids (± chirurgie bariatrique). Risque accru d'HTP et de mortalité si non traité.",
    source: "ERS statement on OHS 2016/2017 ; ERS Handbook, obesity hypoventilation"
  },
  {
    id: "pl-12", module: "pleure-mediastin", sousTheme: "Épanchement pleural : démarche diagnostique (transudat/exsudat)", difficulte: 2,
    enonce: "Quel épanchement pleural, chez un patient de 60 ans, évoque en premier une tuberculose pleurale ?",
    options: [
      "Exsudat lymphocytaire avec adénosine désaminase (ADA) élevée et granulomes sur biopsie pleurale",
      "Transsudat clair bilatéral",
      "Exsudat neutrophilique avec glucose normal",
      "Chylothorax",
      "Hémothorax"
    ],
    reponse: 0,
    explication: "Tuberculose pleurale : exsudat lymphocytaire, ADA pleurale élevée (marqueur diagnostique utile dans les zones d'endémie), confirmée par biopsies pleurales (granulomes caséeifiés) ou culture/Xpert. Le traitement antituberculeux standard est le même que pour la tuberculose pulmonaire ; la corticothérapie n'est pas systématique.",
    source: "WHO/ERS TB guidelines ; BTS pleural guideline"
  },
  {
    id: "pl-13", module: "pleure-mediastin", sousTheme: "Paralysie phrénique et diaphragme", difficulte: 3,
    enonce: "Patient post-chirurgie cardiaque, dyspnée, ascension de la coupole diaphragmatique droite à la radiographie. Quel test simple peut distinguer une paralysie d'un événement (slug) diaphragmatique ?",
    options: [
      "Radiographie en expiration seule",
      "Test de reniflement (sniff test) en radioscopie ou échographie du diaphragme",
      "TDM injectée",
      "Gaz du sang",
      "Spirométrie seule"
    ],
    reponse: 1,
    explication: "Le sniff test (radioscopie) visualise le mouvement diaphragmatique : abolition/paradoxe = paralysie (postérieure à la chirurgie cardiaque : lésion du nerf phrénique par la glace/dilatation). L'échographie du diaphragme (épaisseur, excursion) est une alternative non irradiante. Le pronostic de récupération est favorable dans les formes post-chirurgicales (surveillance 6-12 mois).",
    source: "ERS statement on respiratory muscle testing 2019 ; ERS Handbook, diaphragm"
  },
  {
    id: "pl-14", module: "pleure-mediastin", sousTheme: "Pleurésies récidivantes", difficulte: 3,
    enonce: "Patiente de 48 ans, épanchement pleural récidivant bilatéral, jaune citron, exsudat lymphocytaire, cytologie négative, TDM thoracique normal. Quel diagnostic évoquer ?",
    options: [
      "Cancer",
      "Pleurésie « idiopathique » à éliminer : syndrome de Meigs (fibrome ovarien), tuberculose, pleurésie secondaire à une pancréatite (pseudokyste), voire yellow nail syndrome",
      "Embolie pulmonaire",
      "Tuberculose certaine",
      "Chylothorax"
    ],
    reponse: 1,
    explication: "Un épanchement exsudatif lymphocytaire récidivant à cytologie négative impose une démarche exhaustive : imagerie pleurale (TDM/IRM), biopsies pleurales (thoracoscopie si suspicion), pelvienne (syndrome de Meigs), bilan tuberculose, amylases (pancréas), bilan thyroïdien. Le yellow nail syndrome (onychopathie + lymphœdème + pleurésie) est rare mais décrit.",
    source: "BTS pleural guideline ; ERS Handbook, pleural effusion"
  },
  {
    id: "pl-15", module: "pleure-mediastin", sousTheme: "Maladies de la plèvre (mésothéliome)", difficulte: 3,
    enonce: "Quel examen a le meilleur rendement pour le diagnostic histologique de mésothéliome pleural ?",
    options: [
      "Cytologie du liquide pleural seule",
      "Biopsies pleurales sous thoracoscopie (rendement > 90 %)",
      "Biopsie transthoracique à l'aveugle",
      "Marqueur SMRP seul",
      "TDM seule"
    ],
    reponse: 1,
    explication: "La thoracoscopie avec biopsies multiples est l'examen de référence (rendement > 90 %, permet le staging et la pleurodèse dans le même temps). La cytologie a un rendement limité et l'histologie est indispensable pour le sous-type (épithélioïde vs sarcomatoïde, pronostic différent). Un marqueur seul ne suffit jamais.",
    source: "ERS/ESTS guidelines mesothelioma ; BTS pleural guideline"
  },

  // ============ CIRCULATION PULMONAIRE ============
  {
    id: "ci-06", module: "circulation", sousTheme: "Embolie pulmonaire aiguë : diagnostic et traitement", difficulte: 2,
    enonce: "Patiente enceinte de 32 SA, suspicion d'embolie pulmonaire. Quelle stratégie diagnostique ?",
    options: [
      "Attendre l'accouchement avant d'explorer",
      "D-dimères peu utiles (souvent élevés) : TDM angio-thoracique avec protocole adapté si probabilité clinique",
      "Scintigraphie V/Q obligatoire",
      "Aucun examen, traiter empiriquement",
      "Échographie des veines des MI suffira dans tous les cas"
    ],
    reponse: 1,
    explication: "Grossesse : les D-dimères sont peu spécifiques (élevés physiologiquement) — en cas de probabilité clinique, l'imagerie nécessaire : TDM angio-thoracique (protocole adapté à la grossesse, irradiation fœtale faible) ou scintigraphie V/Q selon disponibilité. Ne jamais retarder le diagnostic : l'EP est une cause majeure de mortalité maternelle.",
    source: "ESC 2019 PE guidelines, pregnancy section"
  },
  {
    id: "ci-07", module: "circulation", sousTheme: "Embolie pulmonaire aiguë : diagnostic et traitement", difficulte: 3,
    enonce: "Patient 58 ans, EP proximale avec hypotension (PAS 85) et signes de choc. Quelle séquence de prise en charge ?",
    options: [
      "Anticoagulation seule à dose curative",
      "Support hémodynamique + anticoagulation curative immédiate + reperfusion (thrombolyse systémique, ou thrombectomie percutanée si haut risque de saignement)",
      "VNI",
      "Antibiothérapie",
      "Attente des D-dimères"
    ],
    reponse: 1,
    explication: "EP à haut risque (choc/hypotension) : anticoagulation immédiate (HBPM ou HNF si thrombolyse prévue), support hémodynamique (remplissage prudent, catécholamines), et stratégie de reperfusion : thrombolyse systémique (alciprase/ténacité) ou thrombectomie percutanée dans les centres experts. La VNI n'a pas de place ; la thrombolyse est réservée aux hauts risques ou dégradations sous traitement.",
    source: "ESC 2019 PE guidelines, high-risk PE management"
  },
  {
    id: "ci-08", module: "circulation", sousTheme: "Hypertension pulmonaire : classification et hémodynamique", difficulte: 3,
    enonce: "Patiente avec BPCO sévère, échocardiographie : PAPs estimée à 70 mmHg, dilatation du ventricule droit, dyspnée majeure. Quelle attitude est recommandée avant d'imputer l'HTP à la BPCO ?",
    options: [
      "Conclure à une HTP de la BPCO et ajuster le traitement respiratoire seul",
      "Éliminer une HTP pré-capillaire « disproportionnée » : cathétérisme droit, éliminer une CTEPH ou une cardiopathie gauche (la PAP de la BPCO est habituellement modérée)",
      "Débuter immédiatement les ARE",
      "Débuter l'riociguat",
      "Transplantation pulmonaire en urgence"
    ],
    reponse: 1,
    explication: "Une HTP « disproportionnée » (PAPm > 35-40, RVP très élevées) chez un patient BPCO est atypique et doit faire éliminer : CTEPH, cardiopathie gauche, HTAP « pure ». Le cathétérisme droit est obligatoire avant tout traitement spécifique (les vasodilatateurs de l'HTAP n'ont pas d'indication validée dans l'HTP de la BPCO).",
    source: "ESC/ERS PH guidelines 2022 (groupe 3) ; ERS statements"
  },
  {
    id: "ci-09", module: "circulation", sousTheme: "Thrombose veineuse profonde et anticoagulation", difficulte: 2,
    enonce: "Patient 60 ans, TVP proximale + EP, cancer colique actif. Quelle est l'anticoagulation de référence ?",
    options: [
      "AVK 6 mois",
      "Anticoagulant oral direct (AOD) 6 mois, adapté au cancer (essais Hokusai-VTE, Caravaggio)",
      "HBPM à dose curative 6 mois",
      "Aspirine",
      "Aucune anticoagulation"
    ],
    reponse: 1,
    explication: "TEV associé au cancer : les AOD (edoxaban, apixaban, rivaroxaban) sont désormais une option validée (essais Hokusai-VTE, SELECT-D, Caravaggio) avec un profil favorable, sauf contre-indications (cancer digestif hémorragique : discuter HBPM). Durée ≥ 6 mois, tant que le cancer est actif. Les AVK sont relégués.",
    source: "Hokusai-VTE (NEJM 2018) ; Caravaggio (NEJM 2020) ; ITAC guideline"
  },
  {
    id: "ci-10", module: "circulation", sousTheme: "Cœur pulmonaire chronique", difficulte: 3,
    enonce: "Patient BPCO avec HTP modérée (PAPm 32 mmHg), reflux hépato-jugulaire, œdèmes. Quel élément clinique correspond à un cœur pulmonaire chronique ?",
    options: [
      "Dyspnée aiguë isolée",
      "Insuffisance cardiaque droite chronique (dilatation VD, reflux hépato-jugulaire, œdèmes, turgescence jugulaire) secondaire à l'HTP",
      "Angor",
      "Syncope à l'effort isolée",
      "Palpitations paroxystiques seules"
    ],
    reponse: 1,
    explication: "Le cœur pulmonaire chronique = adaptation (puis défaillance) du ventricule droit à une surcharge de pression prolongée (HTP). Signes : reflux hépato-jugulaire, œdèmes des membres inférieurs, turgescence jugulaire, hépatomégalie douloureuse. Prise en charge : traiter la cause (BPCO : optimiser le traitement respiratoire, OLD), diurétiques prudents ; les vasodilatateurs de l'HTAP ne sont pas indiqués (groupe 3).",
    source: "ESC/ERS PH guidelines 2022 ; ERS Handbook, cor pulmonale"
  },
  {
    id: "ci-11", module: "circulation", sousTheme: "Maladie thromboembolique chronique (CTEPH)", difficulte: 3,
    enonce: "Après une EP, quand doit-on dépister une CTEPH si la dyspnée persiste ?",
    options: [
      "Jamais, la dyspnée résiduelle est toujours liée à l'EP aiguë",
      "Échocardiographie et scintigraphie V/Q ≥ 3 mois après l'EP en cas de dyspnée persistante inexpliquée",
      "Immédiatement à la sortie",
      "Uniquement si récidive d'EP",
      "Seulement 10 ans après"
    ],
    reponse: 1,
    explication: "La CTEPH doit être recherchée chez tout patient avec dyspnée/effort intolérant persistants ≥ 3 mois après une EP : échocardiographie puis scintigraphie V/Q (l'examen de dépistage ; un V/Q normal exclut la CTEPH), puis cathétérisme + angiographie si positive. La CTEPH est curable par endartérectomie pulmonaire.",
    source: "ESC/ERS PH guidelines 2022 ; ERS statement on CTEPH"
  },
  {
    id: "ci-12", module: "circulation", sousTheme: "Embolie pulmonaire aiguë : diagnostic et traitement", difficulte: 2,
    enonce: "Patient 45 ans, EP distale, hémodynamiquement stable (PESI faible), sans anomalité hémodynamique, troponine et échocardiographie normales. Quelle prise en charge à domicile est acceptable ?",
    options: [
      "Hospitalisation systématique en réanimation",
      "Anticoagulation curative à domicile (HBPM relais AOD) avec suivi rapproché",
      "Thrombolyse",
      "Filtre cave",
      "Aspirine"
    ],
    reponse: 1,
    explication: "EP à faible risque (critères PESI/sPESI bas, troponine normale, échocardiographie sans dysfonction VD) : prise en charge à domicile (ou hospitalisation courte) avec anticoagulation curative est validée (essais comme le MISPET, Hestia). Thrombolyse/filtre cave réservés aux hauts risques ou contre-indications.",
    source: "ESC 2019 PE guidelines ; essais Hestia, MISPET"
  },
  {
    id: "ci-13", module: "circulation", sousTheme: "HTAP idiopathique et héréditaire", difficulte: 3,
    enonce: "Avant de débuter un traitement spécifique de l'HTAP, quel bilan est indispensable ?",
    options: [
      "Seulement une échocardiographie",
      "Cathétérisme cardiaque droit au repos (et test de vasoréactivité dans l'HTAP idiopathique/héritable) + exclusion des autres groupes d'HTP",
      "Test d'effort seul",
      "IRM cérébrale",
      "Scintigraphie myocardique"
    ],
    reponse: 1,
    explication: "Le diagnostic d'HTAP exige le cathétérisme droit (PAPm > 20, PAPO ≤ 15, RVP ≥ 3) et la classification du groupe (exclusion HTP post-capillaire, CTEPH, HTP des maladies respiratoires). Dans l'HTAPi/héritable, le test de vasoréactivité aigu (NO, adénosine) identifie les patients répondants (ICS à forte dose, < 10 % des cas). Le traitement initial découle du risque (ESC/ERS 2022).",
    source: "ESC/ERS PH guidelines 2022"
  },
  {
    id: "ci-14", module: "circulation", sousTheme: "Cœur pulmonaire chronique", difficulte: 2,
    enonce: "Quelle cause d'HTP est classée dans le groupe 4 (thromboembolique chronique) ?",
    options: [
      "HTAP idiopathique",
      "CTEPH (maladie thromboembolique chronique avec obstruction organique des artères pulmonaires)",
      "HTP des cardiopathies gauches",
      "HTP de la BPCO",
      "HTP de la sarcoïdose"
    ],
    reponse: 1,
    explication: "Groupe 4 = CTEPH : obstruction proximale/distale organique des artères pulmonaires après épisodes thromboemboliques (souvent non diagnostiqués). Diagnostic : cathétérisme (pré-capillaire) + imagerie vasculaire. Traitement curatif : endartérectomie pulmonaire ; si non opérable : riociguat ou angioplastie pulmonaire par ballon (BPA).",
    source: "ESC/ERS PH guidelines 2022 (classification)"
  },
  {
    id: "ci-15", module: "circulation", sousTheme: "Malformations artério-veineuses pulmonaires", difficulte: 2,
    enonce: "Patiente avec maladie de Rendu-Osler, épistaxis récidivantes, cyanose discrète, SpO2 88 % en position assise. Quel mécanisme explique l'hypoxémie ?",
    options: [
      "Hypoventilation",
      "Shunt droit-gauche à travers les malformations artério-veineuses pulmonaires",
      "Défaut de diffusion isolé",
      "Obstruction bronchique",
      "Anémie"
    ],
    reponse: 1,
    explication: "Les MAVP créent un shunt droit-gauche vrai : sang non oxygéné court-circuitant les capillaires → hypoxémie réfractaire à l'O2, cyanose, polyglobulie, risque d'embolie paradoxale (AVC, abcès cérébral). Traitement : embolisation par coils. Orthodeoxie (hypoxémie majorée en position debout) est un signe décrit.",
    source: "ERS Handbook, pulmonary AVMs ; critères de Curaçao"
  },

  // ============ INSUFFISANCE RESPIRATOIRE / SOINS CRITIQUES ============
  {
    id: "ir-06", module: "insuffisance", sousTheme: "Insuffisance respiratoire aiguë : oxygénothérapie", difficulte: 2,
    enonce: "Patient BPCO en exacerbation, SpO2 84 %, pH 7,29, PaCO2 68. Quelle cible d'oxygénation ?",
    options: [
      "SpO2 ≥ 98 %",
      "SpO2 88–92 %",
      "SpO2 94–98 %",
      "Pas d'oxygène",
      "SpO2 80–85 %"
    ],
    reponse: 1,
    explication: "Chez les patients à risque d'hypercapnie (BPCO, OHS), la cible est SpO2 88–92 % : au-delà, risque d'aggravation de l'hypercapnie (perte du stimulus hypoxique + effet Haldane). Contrôle gazométrique à 30-60 min. Si acidose (pH < 7,35) : VNI selon les critères (pH < 7,35 + PaCO2 > 45).",
    source: "GOLD Report, oxygen targets in exacerbation ; BTS guideline"
  },
  {
    id: "ir-07", module: "insuffisance", sousTheme: "Intubation et ventilation invasive", difficulte: 3,
    enonce: "Patient SDRA sévère (PaO2/FiO2 90), ventilation : VT 6 mL/kg, PEEP 15, Pplat 30. Que faire si l'oxygénation reste mauvaise ?",
    options: [
      "Augmenter le VT à 10 mL/kg",
      "Manœuvre de recrutement et/ou optimisation de la PEEP (table de PEEP plus élevée), épargne des pressions, discuter DECNO/ventilation pronale",
      "Augmenter la fréquence à 40/min",
      "Arrêter la sédation",
      "Passer en VNI"
    ],
    reponse: 1,
    explication: "Dans le SDRA modéré/sévère, après ventilation protectrice (VT 6 mL/kg, Pplat ≤ 30), les manoeuvres de recrutement/PEEP optimisée (selon table ARDSNet élevée), la ventilation pronale (indiquée si PaO2/FiO2 < 150), et le curarisation 48 h (transferring) sont les mesures validées. Augmenter le VT ou la fréquence excessivement aggrave les lésions (volutrauma, auto-PEEP).",
    source: "ARDSNet (NEJM 2000) ; PROSEVA (NEJM 2013) ; ARDS guidelines 2017/2023"
  },
  {
    id: "ir-08", module: "insuffisance", sousTheme: "Ventilation à domicile", difficulte: 2,
    enonce: "Patient avec sclérose latérale amyotrophique (SLA), capacité vitale 50 %, symptômes d'hypoventilation nocturne (céphalées matinales, fatigue). Quelle prise en charge ?",
    options: [
      "Oxygène nasal nocturne",
      "VNI nocturne (initiation précoce, avant l'insuffisance respiratoire diurne)",
      "Intubation",
      "Aucune mesure",
      "Kinésithérapie seule"
    ],
    reponse: 1,
    explication: "Dans les maladies neuromusculaires (SLA), la VNI nocturne est initiée dès les signes d'hypoventilation nocturne/effort (symptômes, PaCO2 limites, CV < 50 %). Elle améliore la survie et la qualité de vie. L'oxygène seul est contre-indiqué en cas d'hypercapnie (risque d'aggravation), sauf pathologie pulmonaire associée.",
    source: "ERS statements on home mechanical ventilation (2019 update)"
  },
  {
    id: "ir-09", module: "insuffisance", sousTheme: "Weaning et trachéotomie", difficulte: 3,
    enonce: "Patient neurologique stable, trachéotomisé depuis 3 semaines, déficit de toux, sevrage ventilatoire impossible. Quelle option est appropriée ?",
    options: [
      "Extuber malgré la faiblesse de la toux",
      "Poursuivre la ventilation via trachéotomie avec programme de sevrage progressif (plan de réhabilitation)",
      "VNI immédiate après décanulation",
      "Sédation continue",
      "Arrêt de toute ventilation"
    ],
    reponse: 1,
    explication: "Sevrage difficile chez le trachéotomisé : approche progressive (screening quotidien, épreuves VS allongées, réentraînement), en tenant compte du déficit neurologique de toux (risque d'encombrement). La VNI peut relayer la trachéotomie dans certains cas sélectionnés ; la décanulation est planifiée (tolérance du bouchon, toux efficace). Décision multidisciplinaire.",
    source: "ERS/ATS weaning guidelines 2017 ; ERS Handbook, tracheostomy"
  },
  {
    id: "ir-10", module: "insuffisance", sousTheme: "SDRA (définition de Berlin) et prise en charge", difficulte: 3,
    enonce: "Quelle mesure fait partie intégrante du « lung-protective ventilation » ?",
    options: [
      "VT 6 mL/kg du poids idéal, pression de plateau ≤ 30 cmH2O",
      "VT 10 mL/kg",
      "FiO2 100 % en continu",
      "PEEP à 0",
      "Ventilation en pression contrôlée à 40 cmH2O"
    ],
    reponse: 0,
    explication: "Ventilation protectrice : VT ≈ 6 mL/kg du poids prédit (essai ARDSNet : réduction de mortalité), pression de plateau ≤ 30 cmH2O, PEEP ajustée selon tables (et FiO2 selon cible SpO2 88-95 %), hypercapnie permissive si nécessaire. C'est la seule mesure de ventilation démontrée comme réduisant la mortalité du SDRA.",
    source: "ARDSNet (NEJM 2000) ; ARDS guidelines (Lancet 2017/2023)"
  },
  {
    id: "ir-11", module: "insuffisance", sousTheme: "Ventilation non invasive (VNI) : indications", difficulte: 2,
    enonce: "Patient immunodéprimé (greffe, hémopathie) avec hypoxémie aiguë (PaO2/FiO2 < 200) et infiltrats bilatéraux. Quelle place pour la VNI ?",
    options: [
      "Contre-indiquée absolument",
      "Peut être tentée précocement (réduction de l'intubation et de la mortalité dans certaines études) avec surveillance stricte, intubation rapide en cas d'échec",
      "Indiquée uniquement à domicile",
      "Seulement après échec de l'O2 haut débit",
      "Aucune place dans les recommandations"
    ],
    reponse: 1,
    explication: "Chez l'immunodéprimé, la VNI précoce (éventuellement après O2 haut débit selon tolérance) peut réduire l'intubation et la mortalité dans certains essais (réduction des pneumonies invasives). Surveillance continue nécessaire : toute aggravation impose l'intubation rapide (le retard est délétère).",
    source: "ERS/ATS acute respiratory failure guidelines ; essais chez l'immunodéprimé"
  },
  {
    id: "ir-12", module: "insuffisance", sousTheme: "Éthique et fin de vie en soins respiratoires critiques", difficulte: 2,
    enonce: "Patient en SDRA sévère, âge 82 ans, comorbidités lourdes, directive anticipée refusant l'intubation. Quelle option de soins est appropriée ?",
    options: [
      "Intuber malgré la directive, la situation étant critique",
      "Traiter en conservant le confort : VNI palliative/oxygène, traitements symptomatiques, accompagnement des proches",
      "Aucune mesure",
      "Transfert en réanimation sans intubation",
      "Sédation profonde immédiate sans discussion"
    ],
    reponse: 1,
    explication: "En cas de limitation thérapeutique (directive anticipée), la prise en charge reste active mais orientée : oxygène/VNI à visée de confort (si cohérent avec les souhaits), traitement de la dyspnée (morphine titrée), position, anxiolyse, accompagnement. Décision collégiale, tracée, avec les proches. La VNI palliative est une option encadrée.",
    source: "Recommandations de limitation/arrêt des traitements (SRLF/SFAR) ; ERS Handbook, ethics"
  },
  {
    id: "ir-13", module: "insuffisance", sousTheme: "Insuffisance respiratoire aiguë : oxygénothérapie", difficulte: 2,
    enonce: "Quel dispositif est le plus approprié pour un patient hypoxémique (PaO2/FiO2 < 150) sans hypercapnie, en réanimation, avant d'envisager l'intubation ?",
    options: [
      "Lunettes nasales à 2 L/min",
      "Oxygénothérapie à haut débit (high-flow nasal oxygen)",
      "Masque simple à 5 L/min",
      "VNI avec EPAP faible",
      "Pas d'oxygène"
    ],
    reponse: 1,
    explication: "L'O2 à haut débit nasal (HFNO, 40-60 L/min) : FiO2 précise, humidification, faible effet de PEP, confort amélioré ; utile dans l'hypoxémie aiguë sans hypercapnie (essai FLORALI : résultats globaux neutres vs VNI mais moins d'intubations dans la pneumonie, et c'est un outil standard de première ligne). Surveillance riche : aggravation → VNI ou intubation.",
    source: "FLORALI (NEJM 2015) ; ERS/ATS acute respiratory failure guideline 2017/2020"
  },
  {
    id: "ir-14", module: "insuffisance", sousTheme: "Oxygénothérapie de longue durée", difficulte: 3,
    enonce: "Patient avec FPI, dyspnée majeure, SpO2 repos 89 %, désaturation majeure à l'effort (SpO2 78 % à la marche). Quel traitement est adapté ?",
    options: [
      "Aucun traitement spécifique",
      "Oxygénothérapie (déambulatoire, adaptée à l'effort) selon les désaturations, dans un contexte palliatif/fonctionnel",
      "OLD au long cours ≥ 15 h/j d'emblée",
      "VNI en pression support",
      "Corticoïdes oraux"
    ],
    reponse: 1,
    explication: "Dans les PID fibrosantes, l'indication d'O2 est fondée sur les désaturations à l'effort (le bénéfice pronostique de l'OLD type BPCO n'y est pas démontré) : O2 de déambulation pour le confort et l'activité. L'OLD à 15 h/j n'est un standard que dans la BPCO avec hypoxémie sévère. La VNI se discute si hypercapnie (épuisement).",
    source: "ERS/ATS IPF guideline 2015 (oxygen) ; ERS statements on home oxygen"
  },
  {
    id: "ir-15", module: "insuffisance", sousTheme: "Sepsis et insuffisance respiratoire", difficulte: 3,
    enonce: "Patient en choc septique, lactates 4 mmol/L, hypotension malgré 30 mL/kg de remplissage. Quelle est la priorité vasopressive ?",
    options: [
      "Dobutamine seule",
      "Noradrénaline (première ligne) pour restaurer la pression de perfusion",
      "Adrénaline d'emblée",
      "Aucune vasopresseur, poursuivre le remplissage",
      "Furosémide"
    ],
    reponse: 1,
    explication: "Choc septique ( Surviving Sepsis Campaign 2021) : après remplissage (30 mL/kg), la noradrénaline est le vasopresseur de première ligne (cible MAP 65 mmHg). L'adrénaline en 2e ligne ; la dobutamine si dysfonction cardiaque persistante. Les lactates guident la réanimation (cible de normalisation).",
    source: "Surviving Sepsis Campaign 2021 (Crit Care Med) ; Sepsis-3 (JAMA 2016)"
  },

  // ============ SOMMEIL ============
  {
    id: "so-06", module: "sommeil", sousTheme: "SAOS : traitement (PPC, orthèses, chirurgie)", difficulte: 3,
    enonce: "Patient SAOS sévère (IAH 45), intolérant à la PPC après 3 mois de tentative (masques adaptés, éducation réalisée). Quelle alternative recommandée ?",
    options: [
      "Arrêter tout traitement",
      "Orthèse d'avancée mandibulaire (OAM), ± chirurgie (maxillomandibulaire) selon évaluation",
      "Médication stimulante",
      "Oxygène nocturne",
      "Uvulopharyngoplastie d'emblée"
    ],
    reponse: 1,
    explication: "Intolérance à la PPC : l'orthèse d'avancée mandibulaire (OAM) est l'alternative validée (efficace surtout IAH modéré, mais utilisée aussi dans le sévère en cas d'intolérance), nécessitant une évaluation dentaire. La chirurgie maxillomandibulaire est une option pour des cas sélectionnés. L'uvulopharyngoplastie isolée n'est pas recommandée comme traitement de première intention du SAOS.",
    source: "ERS statements on non-CPAP therapies ; AASM guidelines"
  },
  {
    id: "so-07", module: "sommeil", sousTheme: "SAOS : définition, polysomnographie", difficulte: 3,
    enonce: "Patiente 52 ans, IMC 27, fatigue, IAH 8/heure avec nombreux réveils, jamais de somnolence (Epworth 4). Comment classer ?",
    options: [
      "SAOS sévère",
      "Pas de SAOS selon les critères — explorer d'autres causes de réveils (insomnie, syndrome des jambes sans repos)",
      "SAOS modéré",
      "Central sleep apnea",
      "Hypoventilation"
    ],
    reponse: 1,
    explication: "SAOS = IAH ≥ 5 avec symptômes (somnolence diurne, fatigue non expliquée, troubles cognitifs) OU IAH ≥ 15. Ici IAH 8 sans symptôme de somnolence : les critères ne sont pas remplis. Les réveils multiples orientent vers insomnie, SJSR, ou anomalies du sommeil profond — à explorer par anamnèse/PSG ciblée.",
    source: "AASM scoring manual ; ICSD-3 criteria"
  },
  {
    id: "so-08", module: "sommeil", sousTheme: "Syndrome d'obésité-hypoventilation", difficulte: 3,
    enonce: "Patient OHS confirmé (PaCO2 52), SAOS associé (IAH 50). Quel mode ventilatoire est le plus adapté en première intention ?",
    options: [
      "PPC seule",
      "VNI en mode pression support avec EPAP (ou PPC avec backup si contrôlée) pour corriger à la fois l'obstruction et l'hypoventilation",
      "O2 nocturne seul",
      "OAM",
      "Pas de traitement"
    ],
    reponse: 1,
    explication: "Dans l'OHS avec SAOS, la VNI (PSV avec EPAP adaptée, ou mode contrôlé avec backup) est préférée à la PPC seule si l'hypercapnie ne se corrige pas ; la PPC peut être tentée en première intention si SAOS dominant et hypercapnie modérée, avec réévaluation gazométrique. Objectif : normocapnie diurne, amélioration de la somnolence.",
    source: "ERS statement on OHS ; essais Pickwick trial (JAMA 2014)"
  },
  {
    id: "so-09", module: "sommeil", sousTheme: "Somnolence et conduite automobile", difficulte: 2,
    enonce: "Chauffeur poids lourd, SAOS sévère nouvellement diagnostiqué, somnolence au volant rapportée. Quelle conduite est appropriée ?",
    options: [
      "Poursuite du travail sans changement",
      "Information sur le risque, mise en place rapide du traitement (PPC), éviction temporaire de la conduite jusqu'au contrôle de la somnolence, déclaration selon la réglementation locale",
      "Arrêt définitif du travail",
      "Traitement par caféine",
      "Chirurgie immédiate"
    ],
    reponse: 1,
    explication: "SAOS avec somnolence au volant = risque d'accident multiplié (2-7 ×). Conduite : informer le patient de son obligation de sécurité, traiter sans délai (PPC), restreindre la conduite jusqu'au contrôle (souvent 1-3 mois), et respecter la réglementation locale (déclaration médicale, aptitude). Objectif : somnolence résiduelle nulle avant reprise.",
    source: "ERS statements, sleep apnoea and driving ; réglementations nationales (UE)"
  },
  {
    id: "so-10", module: "sommeil", sousTheme: "SAOS : définition, polysomnographie", difficulte: 3,
    enonce: "Patient insuffisant cardiaque, apnées centrales (index d'apnées centrales 25/h) avec crescendo-decrescendo du flux. Quel diagnostic ?",
    options: [
      "SAOS",
      "Respiration de Cheyne-Stokes / apnées centrales de l'insuffisance cardiaque",
      "Hypoventilation de l'obésité",
      "Narcolepsie",
      "SJSR"
    ],
    reponse: 1,
    explication: "Le pattern crescendo-decrescendo avec pauses centrales chez l'insuffisant cardiaque = respiration périodique de Cheyne-Stokes. Traitement : optimiser le traitement de l'IC (cible : stabiliser la respiration) ; les thérapies spécifiques (servo-ventilation adaptative, ASV) sont contre-indiquées en cas d'IC à FEVG ≤ 45 % (essai SERVE-HF).",
    source: "SERVE-HF (NEJM 2015) ; AASM central sleep apnoea guidelines"
  },
  {
    id: "so-11", module: "sommeil", sousTheme: "SAOS et maladies cardiovasculaires", difficulte: 3,
    enonce: "Patient HTA résistante (3 molécules dont un diurétique, PAS au cabinet 155). Quelle proportion approximative de ces patients a un SAOS ?",
    options: [
      "< 5 %",
      "Environ 30-50 %, d'où l'intérêt de dépister",
      "80-90 %",
      "0 %",
      "100 %"
    ],
    reponse: 1,
    explication: "Le SAOS est présent chez environ 30-50 % des patients avec HTA résistante (selon les séries, jusqu'à 70-80 % dans certaines cohortes). Le dépistage (questionnaires, polygraphie) est recommandé en cas d'HTA résistante, de somnolence ou d'obésité. Le traitement du SAOS améliore le contrôle tensionnel (modestement mais significativement).",
    source: "ERS statements, sleep apnoea and hypertension ; ESC guidelines"
  },
  {
    id: "so-12", module: "sommeil", sousTheme: "Insomnie et troubles du sommeil liés au travail", difficulte: 2,
    enonce: "Infirmière en rotation, insomnie chronique d'endormissement, répercussions diurnes. Quelle est la prise en charge de première intention recommandée ?",
    options: [
      "Benzodiazépines au long cours",
      "Thérapie cognitivo-comportementale de l'insomnie (TCC-I), hygiène du sommeil et gestion des horaires de travail",
      "Mélatonine forte dose",
      "Antihistaminiques sédatifs au long cours",
      "Aucune, c'est inévitable"
    ],
    reponse: 1,
    explication: "L'insomnie chronique relève en première intention de la TCC-I (stimulus control, restriction du temps au lit, restriction du sommeil, restructuration cognitive) et de l'hygiène du sommeil ; les traitements médicamenteux (z-drugs, mélatonine) sont ponctuels et non des solutions au long cours (risque de dépendance, chute chez le sujet âgé). Le travail posté impose une adaptation de la lumière/obscurité et des horaires de sieste.",
    source: "Recommandations insomnie (SFRMS, AASM) ; ERS Handbook"
  },
  {
    id: "so-13", module: "sommeil", sousTheme: "Mouvements périodiques et syndrome des jambes sans repos", difficulte: 3,
    enonce: "Patiente SJSR, ferritine 15 ng/mL. Quelle est la première mesure ?",
    options: [
      "Agoniste dopaminergique d'emblée",
      "Correction du déficit martial (ferritine < 75 µg/L) puis réévaluation",
      "Opiacés",
      "Benzodiazépines",
      "Aucune"
    ],
    reponse: 1,
    explication: "Dans le SJSR, un déficit martial (ferritine < 75 µg/L, parfois < 100 selon sévérité) doit être corrigé en priorité (fer oral/IV selon tolérance et cause) avant d'envisager un traitement pharmacologique spécifique (agonistes dopaminergiques — pramipexole, ropinirole — ou gabapentine/prégabaline selon profil). Les causes (grossesse, IRC) sont traitées en parallèle.",
    source: "IRLSSG recommendations ; AASM/EURO-NRL guidelines"
  },
  {
    id: "so-14", module: "sommeil", sousTheme: "Syndrome d'hypoventilation central", difficulte: 3,
    enonce: "Patient 25 ans, obésité modérée, céphalées matinales, hypercapnie diurne (PaCO2 50), pas de SAOS significatif à la PSG,IRM cérébrale et cause neuromusculaire exclues. Quel diagnostic ?",
    options: [
      "OHS",
      "Hypoventilation alvéolaire centrale (syndrome d'hypoventilation centrale congénitale ou « late-onset », à confirmer par bilan génétique et test d'hypercapnie)",
      "SAOS",
      "Asthme",
      "Narcolepsie"
    ],
    reponse: 1,
    explication: "Une hypoventilation hypercapnique sans SAOS significatif ni cause neuromusculaire/obésité majeure évoque un syndrome d'hypoventilation centrale (congenital central hypoventilation syndrome, CCHS, mutation PHOX2B, formes late-onset) ou une hypoventilation idiopathique. Bilan : génétique, tests de réponse à l'hypercapnie/hypoxie. Traitement : VNI nocturne (voire diurne).",
    source: "ICSD-3 ; ERS Handbook, central hypoventilation"
  },
  {
    id: "so-15", module: "sommeil", sousTheme: "SAOS : traitement (PPC, orthèses, chirurgie)", difficulte: 2,
    enonce: "Sous PPC depuis 3 mois, l'observance mesurée est de 3 h/nuit avec somnolence résiduelle (Epworth 14). Quelle étape est prioritaire ?",
    options: [
      "Changer de masque et renforcer l'éducation/le suivi (résolution des fuites, pression adaptée, observance renforcée), réévaluer la somnolence",
      "Chirurgie",
      "Arrêter la PPC",
      "Ajouter un stimulant",
      "O2 nocturne"
    ],
    reponse: 0,
    explication: "Une observance < 4 h/nuit est associée à un moindre bénéfice. Priorité : éducation renforcée, contrôle des fuites, essais de masque, éventuellement télé-observance/pressions auto, traitement des effets indésirables (rhinite, sécheresse). Si échec malgré optimisation : alternatives (OAM). La somnolence résiduelle impose aussi à reconsidérer d'autres causes.",
    source: "ERS statements on CPAP adherence ; AASM guidelines"
  }
];
