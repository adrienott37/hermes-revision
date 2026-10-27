const QUESTIONS = [
  // ============ SCIENCES DE BASE ============
  {
    id: "sb-01", module: "sciences-basiques", sousTheme: "V/Q et shunt", difficulte: 1,
    enonce: "Chez un patient présentant un shunt intrapulmonaire vrai (ex. SDRA), quelle est la caractéristique de l'hypoxémie ?",
    options: [
      "Elle se corrige complètement avec l'oxygène à 100 %",
      "Elle ne se corrige que partiellement avec l'oxygène à 100 %",
      "Elle s'accompagne toujours d'une hypercapnie",
      "Elle est due à une hypoventilation alvéolaire isolée",
      "Elle est maximale en position assise"
    ],
    reponse: 1,
    explication: "Un shunt vrai (sang traversant des alvéoles non ventilées) est réfractaire à l'oxygène : le PaO2 ne se normalise pas sous FiO2 1,0, contrairement aux effets shunt/V/Q bas où l'O2 corrige l'hypoxémie. L'hypercapnie n'est pas obligatoire grâce à l'hyperventilation compensatrice.",
    source: "Physiologie respiratoire — ERS Handbook of Respiratory Medicine, section Basic science"
  },
  {
    id: "sb-02", module: "sciences-basiques", sousTheme: "Physiologie : mécanique ventilatoire et compliance", difficulte: 1,
    enonce: "Quelle affirmation sur la compliance pulmonaire est exacte ?",
    options: [
      "Elle est augmentée dans la fibrose pulmonaire idiopathique",
      "Elle est diminuée dans l'emphysème",
      "Elle est augmentée dans l'emphysème et diminuée dans la fibrose",
      "Elle est indépendante du surfactant",
      "Elle diminue uniquement après 70 ans"
    ],
    reponse: 2,
    explication: "L'emphysème détruit les fibres élastiques : la compliance augmente (poumon « mou »). La fibrose raidit le parenchyme : la compliance diminue. Le surfactant augmente la compliance en réduisant la tension superficielle.",
    source: "ERS Handbook of Respiratory Medicine, respiratory mechanics"
  },
  {
    id: "sb-03", module: "sciences-basiques", sousTheme: "Équilibre acide-base", difficulte: 2,
    enonce: "Gaz artériel : pH 7,28 ; PaCO2 60 mmHg ; HCO3- 28 mmol/L. Quel trouble acide-base ?",
    options: [
      "Acidose respiratoire aiguë",
      "Acidose respiratoire chronique",
      "Acidose métabolique avec compensation respiratoire",
      "Alcalose métabolique",
      "Acidose mixte"
    ],
    reponse: 1,
    explication: "pH bas + PaCO2 élevée = acidose respiratoire. Le HCO3- élevé (28) traduit une compensation rénale, qui nécessite plusieurs jours : il s'agit donc d'une acidose respiratoire chronique (ex. BPCO). En aigu, le HCO3- ne serait que faiblement augmenté (+1 mmol/L par 10 mmHg de PaCO2).",
    source: "ERS Handbook of Respiratory Medicine, acid-base"
  },
  {
    id: "sb-04", module: "sciences-basiques", sousTheme: "Contrôle de la ventilation", difficulte: 2,
    enonce: "Chez un patient en insuffisance respiratoire chronique avec hypercapnie (BPCO sévère), l'oxygénothérapie à trop haut débit risque de :",
    options: [
      "Corriger immédiatement l'hypercapnie",
      "Aggraver l'hypercapnie par perte du stimulus hypoxique et effet Haldane",
      "Provoquer une acidose métabolique",
      "Réduire le travail respiratoire de façon fiable",
      "Augmenter la capacité de diffusion du CO2"
    ],
    reponse: 1,
    explication: "Chez les patients « CO2 retainers », la drive ventilatoire repose en partie sur l'hypoxémie. La correction trop brutale de l'hypoxie peut réduire la ventilation, et l'effet Haldane (libération de CO2 de l'hémoglobine oxygénée) aggrave l'hypercapnie. L'O2 reste néanmoins nécessaire : cible SpO2 88–92 %.",
    source: "GOLD Report, chapter on oxygen therapy"
  },
  {
    id: "sb-05", module: "sciences-basiques", sousTheme: "Pharmacologie respiratoire", difficulte: 2,
    enonce: "Quel bronchodilatateur a la durée d'action la plus longue parmi les suivants ?",
    options: [
      "Salbutamol",
      "Ipratropium",
      "Formotérol",
      "Indacatérol",
      "Aminophylline intraveineuse"
    ],
    reponse: 3,
    explication: "L'indacatérol (comme l'olodatérol, le vilantérol) est un LABA ultra-long agissant plus de 24 h. Salbutamol = SABA 4–6 h ; ipratropium = SAMA 6–8 h ; formotérol = LABA 12 h ; la théophylline/aminophylline n'est pas un bêta-agoniste et a une fenêtre thérapeutique étroite.",
    source: "ERS Handbook of Respiratory Medicine, pharmacology of airway drugs"
  },

  // ============ SYMPTÔMES ET ÉVALUATION ============
  {
    id: "sy-01", module: "symptomes", sousTheme: "Toux aiguë et chronique (guide ERS 2020)", difficulte: 1,
    enonce: "Selon le guide ERS 2020 sur la toux, la toux est dite chronique chez l'adulte au-delà de :",
    options: [
      "2 semaines",
      "3 semaines",
      "8 semaines",
      "3 mois",
      "6 mois"
    ],
    reponse: 2,
    explication: "L'ERS définit la toux chronique par une durée > 8 semaines chez l'adulte. Le guide recommande d'éliminer d'abord les causes les plus fréquentes (toux d'origine upper airway/rhinite, asthme, RGO, BPCO, traitement par IEC).",
    source: "ERS guideline on the management of cough, Eur Respir J 2020"
  },
  {
    id: "sy-02", module: "symptomes", sousTheme: "Explorations fonctionnelles respiratoires (spirométrie, DLCO)", difficulte: 2,
    enonce: "La spirométrie d'un patient de 55 ans, tabagique, montre : VEMS 62 % du théorique, VEMS/CVF = 0,50, CVF conservée. Quelle interprétation ?",
    options: [
      "Trouble ventilatoire restrictif",
      "Trouble ventilatoire obstructif",
      "Spirométrie normale",
      "Trouble mixte",
      "Test non interprétable sans DLCO"
    ],
    reponse: 1,
    explication: "VEMS/CVF abaissé (< 0,70 ou sous la limite inférieure du théorique) avec CVF conservée = trouble obstructif. La DLCO aiderait au phénotypage (emphysème) mais n'est pas requise pour affirmer l'obstruction. Une restriction se juge sur la capacité pulmonaire totale, pas sur la CVF seule.",
    source: "ERS/ATS standards for pulmonary function testing, Eur Respir J 2005/2019"
  },
  {
    id: "sy-03", module: "symptomes", sousTheme: "Dyspnée : évaluation et scores (mMRC, échelle de Borg)", difficulte: 1,
    enonce: "Un patient BPCO marche plus lentement que les personnes de son âge sur terrain plat et doit s'arrêter après ~100 m en montée. Quel score mMRC ?",
    options: [
      "mMRC 0",
      "mMRC 1",
      "mMRC 2",
      "mMRC 3",
      "mMRC 4"
    ],
    reponse: 2,
    explication: "mMRC 2 = marche plus lente que les personnes du même âge sur le plat, ou arrêt après ~100 m / quelques minutes en montée. mMRC 3 : arrêt après ~100 m ou quelques minutes sur le plat. mMRC 4 : trop essoufflé pour sortir ou s'essouffle en s'habillant.",
    source: "GOLD Report — assessment of dyspnoea (mMRC scale)"
  },
  {
    id: "sy-04", module: "symptomes", sousTheme: "Hémoptysie", difficulte: 2,
    enonce: "Face à une hémoptysie de sang rouge chez un patient tabagique chronique, quel examen d'imagerie est prioritaire pour éliminer un cancer ?",
    options: [
      "Radiographie de thorax seule",
      "TDM thoracique avec injection",
      "Scintigraphie de ventilation/perfusion",
      "Échographie pleurale",
      "Angio-IRM pulmonaire"
    ],
    reponse: 1,
    explication: "Chez un fumeur, toute hémoptysie impose une TDM thoracique avec injection. L'endoscopie bronchique est discutée selon la quantité et l'imagerie. En cas d'hémoptysie massive, priorité hémodynamique (position latérale du côté du saignement, aspiration, réanimation) puis imagerie pour localiser le saignement avant embolisation si besoin.",
    source: "BTS guideline sur l'hémoptysie ; ERS Handbook, haemoptysis"
  },
  {
    id: "sy-05", module: "symptomes", sousTheme: "Endoscopie bronchique et échographie endobronchique (EBUS)", difficulte: 2,
    enonce: "Quelle est la principale indication de l'EBUS-TBNA dans le bilan d'un cancer bronchique ?",
    options: [
      "Mesurer l'épaisseur pleurale",
      "Ponctionner les adénopathies médiastinales pour la stadification",
      "Traiter une fistule broncho-pleurale",
      "Diagnostiquer une embolie pulmonaire",
      "Mesurer la diffusion du CO"
    ],
    reponse: 1,
    explication: "L'EBUS-TBNA permet les ponctions des adénopathies médiastinales (stations 2R/2L, 4R/4L, 7, 10–11) pour la stadification ganglionnaire du cancer bronchique. Complémentaire de l'EUS œsophagienne pour les stations 4L, 7, 8, 9.",
    source: "ERS/ESTS guidelines on preoperative mediastinal staging ; ERS Handbook, bronchoscopy"
  },

  // ============ VOIES AÉRIENNES ============
  {
    id: "va-01", module: "voies-aeriennes", sousTheme: "BPCO : définition, dépistage, classification GOLD ABE", difficulte: 1,
    enonce: "Selon GOLD 2023, la classification d'un patient BPCO en groupes A/B/E repose sur :",
    options: [
      "Le VEMS seul",
      "Le nombre d'exacerbations et le score de symptômes (mMRC ou CAT)",
      "La PaO2",
      "Le nombre d'hospitalisations en réanimation",
      "La DLCO"
    ],
    reponse: 1,
    explication: "GOLD 2023 a fusionné les anciens groupes C et D en groupe E (≥ 2 exacerbations modérées/sévères par an ou ≥ 1 hospitalisation). La classification ABE combine symptômes (mMRC ≥ 2 ou CAT ≥ 10) et historique d'exacerbations. Le VEMS (stade 1–4) est rapporté séparément pour le pronostic.",
    source: "GOLD Report 2023, classification ABE"
  },
  {
    id: "va-02", module: "voies-aeriennes", sousTheme: "BPCO : traitement de fond et exacerbations", difficulte: 2,
    enonce: "Patient BPCO groupe E selon GOLD (2 exacerbations/an), VEMS 55 %, pas d'asthme associé, éosinophiles 150/µL. Quel traitement de fond initial recommandé ?",
    options: [
      "CSI/LABA",
      "SABA seul",
      "LAMA/LABA en association fixe",
      "Théophylline",
      "Antibiothérapie continue"
    ],
    reponse: 2,
    explication: "GOLD 2023 : double bronchodilatation LAMA/LABA en initiation pour le groupe E. Les CSI ne s'ajoutent qu'en cas d'exacerbations persistantes sous double bronchodilatation, surtout si éosinophiles ≥ 300/µL ou asthme associé.",
    source: "GOLD Report 2023, initial pharmacological treatment"
  },
  {
    id: "va-03", module: "voies-aeriennes", sousTheme: "Asthme sévère (guide ERS/ATS 2014)", difficulte: 2,
    enonce: "Selon le guide ERS/ATS 2014, avant de conclure à un asthme sévère, il faut d'abord :",
    options: [
      "Commencer immédiatement un traitement par omalizumab",
      "Confirmer le diagnostic, vérifier l'adhérence et la technique d'inhalation, corriger les comorbidités (RGO, rhinite, SAOS)",
      "Passer directement à la corticothérapie orale continue",
      "Faire un test de provocation bronchique à la méthacholine",
      "Réaliser une TDM thoracique pour éliminer une infection"
    ],
    reponse: 1,
    explication: "L'asthme sévère nécessite un traitement de niveau 4–5 (GINA) pour rester contrôlé, ou reste incontrôlé malgré ce traitement. Avant de l'affirmer : vérifier le diagnostic, l'observance, la technique d'inhalation, les comorbidités (RGO, rhinite chronique, SAOS) et les facteurs déclenchants.",
    source: "ERS/ATS guideline on severe asthma, Eur Respir J 2014"
  },
  {
    id: "va-04", module: "voies-aeriennes", sousTheme: "Asthme : biologiques et thérapies ciblées", difficulte: 3,
    enonce: "Un patient atteint d'asthme sévère non contrôlé a des éosinophiles à 450/µL et des exacerbations fréquentes sous CSI/LABA, sans IgE élevées ni sensibilisation allergique dominante. Quelle thérapie ciblée est la plus appropriée ?",
    options: [
      "Omalizumab (anti-IgE)",
      "Anti-IL-5/IL-5R (ex. mépolizumab, bénralizumab)",
      "Thermoplastie bronchique en première intention",
      "Corticoïdes oraux à faible dose au long cours",
      "Antihistaminique"
    ],
    reponse: 1,
    explication: "Les anti-IL-5/IL-5R ciblent l'asthme à éosinophiles élevées avec exacerbations fréquentes. L'omalizumab est indiqué si sensibilisation allergique avec IgE élevées. La thermoplastie est réservée à des cas sélectionnés. La corticothérapie orale chronique expose à de nombreux effets indésirables.",
    source: "ERS/ATS severe asthma guideline 2014 ; GINA — add-on biologic type 2 asthma"
  },
  {
    id: "va-05", module: "voies-aeriennes", sousTheme: "Bronchiectasies (BTS guideline, ERS)", difficulte: 2,
    enonce: "Quel examen permet de confirmer le diagnostic de bronchiectasies ?",
    options: [
      "Radiographie de thorax",
      "TDM thoracique en coupes fines (high-resolution CT)",
      "IRM thoracique",
      "Scintigraphie de ventilation",
      "Échographie pleurale"
    ],
    reponse: 1,
    explication: "La TDM haute résolution est l'examen de référence (signe du signet ring, bronches non effilées, épaississement pariétal). Y associer un bilan étiologique (test de la sueur, immunité, immunoglobulines, mucoviscidose selon l'âge, Aspergillus).",
    source: "BTS guideline for bronchiectasis in adults 2019 ; ERS Handbook"
  },

  // ============ ONCOLOGIE ============
  {
    id: "on-01", module: "oncologie", sousTheme: "Dépistage du cancer bronchique (NELSON, NLST)", difficulte: 2,
    enonce: "Dans quelle population le dépistage du cancer bronchique par TDM faible dose a-t-il démontré une réduction de mortalité spécifique ?",
    options: [
      "Fumeurs de plus de 10 paquets-années, tout âge",
      "Adultes de 50–80 ans, fumeurs actifs ou sevrés depuis moins de 15 ans, avec 20–30 paquets-années",
      "Non-fumeurs exposés au radon",
      "Patients de plus de 40 ans avec BPCO",
      "Toute personne avec antécédent familial de cancer"
    ],
    reponse: 1,
    explication: "NLST (30 PA, 55–74 ans) et NELSON ont montré une réduction de la mortalité spécifique par TDM annuel faible dose chez les gros fumeurs. NELSON (hommes 50–74 ans sevrés < 10 ans, > 10 PA) a confirmé le bénéfice en Europe. Le dépistage cible donc les gros fumeurs âgés de 50–80 ans, actifs ou sevrés récemment.",
    source: "NLST (NEJM 2011) ; NELSON (NEJM 2020) ; ERS/ESTS statements on lung cancer screening"
  },
  {
    id: "on-02", module: "oncologie", sousTheme: "Oncogènes dirigés (EGFR, ALK, ROS1, etc.)", difficulte: 2,
    enonce: "Femme de 58 ans, non-fumeuse, adénocarcinome pulmonaire métastatique avec délétion de l'exon 19 de l'EGFR. Quel traitement de première ligne ?",
    options: [
      "Chimiothérapie platine-pemetrexed",
      "Inhibiteur de tyrosine kinase de l'EGFR (osimertinib)",
      "Immunothérapie anti-PD-1 en monothérapie",
      "Chimio + immunothérapie",
      "Radiothérapie thoracique seule"
    ],
    reponse: 1,
    explication: "En cas de mutation activatrice de l'EGFR (exon 19 ou L858R), un TKI de 3e génération (osimertinib) est le standard de 1re ligne, avec un bénéfice de survie sans progression supérieur à la chimiothérapie (essai FLAURA). L'immunothérapie seule est peu efficace sur les tumeurs EGFR-mutées.",
    source: "FLAURA trial (NEJM 2018) ; recommandations ESMO sur le CBNPC avancé"
  },
  {
    id: "on-03", module: "oncologie", sousTheme: "Immunothérapie (PD-1/PD-L1)", difficulte: 2,
    enonce: "Un CBNPC métastatique exprime fortement PD-L1 (≥ 50 % des cellules tumorales), sans mutation EGFR/ALK. Quelle option de 1re ligne ?",
    options: [
      "Inhibiteur de TKI de l'EGFR",
      "Anti-PD-1 en monothérapie (ex. pembrolizumab)",
      "Corticoïdes oraux seuls",
      "Chimiothérapie seule, l'immunothérapie étant réservée à la 2e ligne",
      "Interleukine-2"
    ],
    reponse: 1,
    explication: "PD-L1 ≥ 50 % sans driver oncogénique : pembrolizumab en monothérapie est approuvé en 1re ligne (KEYNOTE-024), avec amélioration de la survie globale vs chimiothérapie. Les associations chemo-immunothérapie sont aussi une option selon l'état général.",
    source: "KEYNOTE-024 (NEJM 2016) ; recommandations ESMO"
  },
  {
    id: "on-04", module: "oncologie", sousTheme: "Mésothéliome pleural", difficulte: 3,
    enonce: "Quel marqueur sérique est le plus utile pour le suivi du mésothéliome pleural malin épithélioïde ?",
    options: [
      "CYFRA 21-1",
      "CA 15-3",
      "Mésothéline soluble",
      "NSE",
      "ProGRP"
    ],
    reponse: 2,
    explication: "La mésothéline soluble (SMRP) est le marqueur le plus validé dans le mésothéliome épithélioïde, utile au suivi de la réponse. La CYFRA 21-1 et l'ostéopontine ont été évaluées mais moins validées. NSE et ProGRP concernent le cancer à petites cellules.",
    source: "Recommandations ERS/ESTS sur le mésothéliome ; ERS Handbook"
  },
  {
    id: "on-05", module: "oncologie", sousTheme: "Cancer à petites cellules : chimio et radiothérapie", difficulte: 2,
    enonce: "Un cancer pulmonaire à petites cellules est classé « maladie limitée ». Quelle est la prise en charge standard ?",
    options: [
      "Chimiothérapie seule",
      "Chimiothérapie platine-étoposide + radiothérapie thoracique concomitante, puis irradiation cérébrale prophylactique en cas de bonne réponse",
      "Immunothérapie en monothérapie première",
      "Chirurgie d'exérèse première",
      "Soins de support seuls"
    ],
    reponse: 1,
    explication: "Maladie limitée : chimiothérapie platine-étoposide avec radiothérapie thoracique concomitante précoce, suivie d'une irradiation cérébrale prophylactique en cas de réponse, qui améliore la survie. L'immunothérapie en association (ex. atezolizumab) a une place en 1re ligne dans la maladie étendue (IMpower133).",
    source: "IMpower133 (NEJM 2018) ; ERS Handbook, small cell lung cancer"
  },

  // ============ INFECTIONS ============
  {
    id: "in-01", module: "infections", sousTheme: "Pneumonie aiguë communautaire (PAC) : diagnostic et scores", difficulte: 1,
    enonce: "Quel score peut être utilisé en ambulatoire pour décider d'une hospitalisation d'un patient avec PAC ?",
    options: [
      "Score de CURB-65",
      "Score de Wells",
      "Score de Charlson",
      "Score de Berlin",
      "Score de Duke"
    ],
    reponse: 0,
    explication: "CURB-65 (Confusion, urée > 7 mmol/L, FR ≥ 30/min, PA systolique < 90 ou diastolique ≤ 60 mmHg, âge ≥ 65) : 0–1 = prise en charge ambulatoire possible, ≥ 2 = hospitalisation à discuter. Wells concerne l'embolie pulmonaire, Berlin le SDRA, Charlson les comorbidités.",
    source: "ERS/ESCMID guidelines on CAP 2011 ; BTS CAP guideline"
  },
  {
    id: "in-02", module: "infections", sousTheme: "VAP (pneumonie sous ventilation) : prévention et traitement", difficulte: 3,
    enonce: "Quelle mesure fait partie de la prévention recommandée de la pneumonie associée au ventilateur (VAP) ?",
    options: [
      "Antibiothérapie prophylactique systématique",
      "Élévation de la tête du lit à 30–45° et soins buccaux avec chlorhexidine",
      "Aspiration gastrique continue",
      "Corticostéroïdes systémiques",
      "Nutrition parentérale exclusive"
    ],
    reponse: 1,
    explication: "Les « care bundles » de prévention des VAP reposent notamment sur la position demi-assise 30–45°, l'hygiène des mains, les soins buccaux (chlorhexidine), la surveillance de la pression du ballonnet et le retrait précoce du matériel. L'antibioprophylaxie systématique n'est pas recommandée.",
    source: "ERS/ESICM/ESCMID/ALAT VAP guidelines 2017"
  },
  {
    id: "in-03", module: "infections", sousTheme: "Tuberculose pulmonaire : diagnostic", difficulte: 1,
    enonce: "Quel est l'examen clé pour le diagnostic de tuberculose pulmonaire active ?",
    options: [
      "Sérologie VIH",
      "Examen microscopique des expectorations (BAAR) et culture / test moléculaire (Xpert MTB/RIF)",
      "Radiographie de thorax seule",
      "Test tuberculinique (IDR)",
      "Nasofibroscopie"
    ],
    reponse: 1,
    explication: "Le diagnostic de tuberculose active repose sur la mise en évidence de Mycobacterium tuberculosis : microscopie BAAR et surtout culture ou test moléculaire rapide type Xpert MTB/RIF (détecte aussi la résistance à la rifampicine). L'IDR et les tests interferon-gamma témoignent d'une infection latente, pas de la maladie active.",
    source: "WHO TB guidelines ; ERS Handbook, tuberculosis"
  },
  {
    id: "in-04", module: "infections", sousTheme: "Traitement antituberculeux et résistances (MDR/XDR)", difficulte: 2,
    enonce: "Le traitement standard d'une tuberculose pulmonaire sensible de l'adulte (phase d'attaque) comporte :",
    options: [
      "Isoniazide + rifampicine pendant 2 mois",
      "Isoniazide + rifampicine + pyrazinamide + éthambutol pendant 2 mois",
      "Isoniazide seul pendant 6 mois",
      "Rifampicine + éthambutol pendant 9 mois",
      "Quinolone + macrolide pendant 3 mois"
    ],
    reponse: 1,
    explication: "Phase d'attaque : quadrithérapie RHZE (isoniazide, rifampicine, pyrazinamide, éthambutol) pendant 2 mois, puis phase d'entretien bithérapie RH pendant 4 mois (durée totale 6 mois) pour une tuberculose sensible sans facteur de risque de rechute.",
    source: "WHO treatment guidelines for drug-susceptible TB ; ERS Handbook"
  },
  {
    id: "in-05", module: "infections", sousTheme: "Infections fongiques (aspergillose)", difficulte: 3,
    enonce: "Quel critère mycologique est requis pour le diagnostic d'aspergillose pulmonaire invasive probable chez un patient neutropénique fébrile ?",
    options: [
      "Toux chronique depuis plus de 8 semaines",
      "Présence d'Aspergillus dans les expectorations uniquement",
      "Test galactomannane positif (sang ou LBA) et/ou culture positive",
      "Élévation des éosinophiles sanguins",
      "Présence de précipitines sériques"
    ],
    reponse: 2,
    explication: "L'aspergillose invasive probable associe un hôte à risque (neutropénie, greffe, corticothérapie), un critère mycologique (galactomannane sanguin ou dans le LBA, culture positive) et des critères cliniques/radiologiques (nodule avec halo, croissant gazeux). Les précipitines et IgE spécifiques concernent l'aspergillose bronchopulmonaire allergique (ABPA).",
    source: "EORTC/MSG revised definitions 2008/2020 ; ERS Handbook, aspergillosis"
  },

  // ============ INTERSTITIELLES ============
  {
    id: "pi-01", module: "interstitielles", sousTheme: "Fibrose pulmonaire idiopathique (FPI)", difficulte: 2,
    enonce: "Quel est le pattern TDM typique de la fibrose pulmonaire idiopathique ?",
    options: [
      "Verre dépoli diffus",
      "Pattern de pneumonie organisée",
      "Pattern UIP : fibrose basale et sous-pleurale, rayon de miel, bronchiolectasies de traction",
      "Micronodules centro-lobulaires diffus",
      "Épaississement septal lisse"
    ],
    reponse: 2,
    explication: "La FPI correspond au pattern UIP (usual interstitial pneumonia) : prédominance basale et sous-pleurale, rayon de miel (honeycombing), bronchiolectasies de traction, sans signe en faveur d'un autre diagnostic. En cas de TDM typique, la biopsie n'est pas requise (décision multidisciplinaire).",
    source: "ERS/ATS/JRS/ALAT IPF guideline 2015 ; ERS/ATS idiopathic interstitial pneumonias 2013"
  },
  {
    id: "pi-02", module: "interstitielles", sousTheme: "Fibrose pulmonaire idiopathique (FPI)", difficulte: 2,
    enonce: "Quel traitement pharmacologique est recommandé dans la FPI ?",
    options: [
      "Corticothérapie orale à forte dose",
      "Association azathioprine + prednisone",
      "Antifibrotique (nintédanib ou pirfénidone)",
      "Méthotrexate",
      "Aucun traitement n'a montré de bénéfice"
    ],
    reponse: 2,
    explication: "Les antifibrotiques (nintédanib, pirfénidone) ralentissent le déclin du VEMS (essais INPULSIS, ASCEND/CAPACITY). La corticothérapie et l'association azathioprine + prednisone sont délétères dans la FPI (essai PANTHER). La transplantation pulmonaire reste l'option pour les formes sévères.",
    source: "ERS/ATS/JRS/ALAT IPF guideline 2015 ; essais INPULSIS, ASCEND"
  },
  {
    id: "pi-03", module: "interstitielles", sousTheme: "Sarcoïdose", difficulte: 2,
    enonce: "Le stade II d'une sarcoïdose thoracique (classification de Scadding) correspond à :",
    options: [
      "Adénopathies hilaires bilatérales sans atteinte parenchymateuse",
      "Adénopathies hilaires bilatérales avec atteinte parenchymateuse",
      "Atteinte parenchymateuse isolée",
      "Fibrose pulmonaire avancée",
      "Atteinte extrathoracique disséminée"
    ],
    reponse: 1,
    explication: "Stades de Scadding : 0 = radiographie normale ; I = adénopathies hilaires bilatérales isolées ; II = ADP + atteinte parenchymateuse ; III = atteinte parenchymateuse isolée ; IV = fibrose. Le pronostic de résolution spontanée est meilleur pour les stades I–II.",
    source: "ERS Statement on sarcoidosis (Eur Respir J 2014) ; ERS Handbook"
  },
  {
    id: "pi-04", module: "interstitielles", sousTheme: "Pneumopathie d'hypersensibilité", difficulte: 3,
    enonce: "Un éleveur de pigeons présente une pneumopathie chronique fibrosante. Quel test soutient le diagnostic de pneumopathie d'hypersensibilité ?",
    options: [
      "Test tuberculinique",
      "Anticorps précipitants sériques contre les antigènes aviaires",
      "Dosage de l'alpha-1-antitrypsine",
      "Test de provocation bronchique à la méthacholine",
      "Bilan auto-immun complet"
    ],
    reponse: 1,
    explication: "Dans le bird fancier's lung, les anticorps précipitants spécifiques (anti-antigènes aviaires) attestent de l'exposition antigénique ; le diagnostic reste multidisciplinaire (exposition, TDM, LBA lymphocytaire, parfois biopsie). Le geste le plus important est l'éviction antigénique.",
    source: "ERS/ATS HP guideline (Am J Respir Crit Care Med 2020) ; ERS Handbook"
  },
  {
    id: "pi-05", module: "interstitielles", sousTheme: "PID des connectivites", difficulte: 2,
    enonce: "Quels auto-anticorps définissent le syndrome des anti-synthétases ?",
    options: [
      "Facteur rhumatoïde isolé",
      "Anti-ARN-synthétases (anti-Jo1, PL-7, PL-12...)",
      "ANCA anti-PR3",
      "Anticorps anti-centromère isolés",
      "Anti-mitochondries M2"
    ],
    reponse: 1,
    explication: "Les anti-ARN-synthétases (anti-Jo1, PL-7, PL-12...) définissent le syndrome des anti-synthétases : PID, myosite, arthrite, fièvre, mains de mécanicien, rayon noir. Anti-MDA5 : pneumopathie interstitielle rapidement progressive des dermatomyosites amyopathiques. Les ANCA concernent les vascularites.",
    source: "ERS statements on CTD-ILD ; ERS Handbook, connective tissue disease lung involvement"
  },

  // ============ PLÈVRE, PAROI, MÉDIASTIN ============
  {
    id: "pl-01", module: "pleure-mediastin", sousTheme: "Épanchement pleural : démarche diagnostique (transudat/exsudat)", difficulte: 1,
    enonce: "Selon les critères de Light, un épanchement pleural est un exsudat si :",
    options: [
      "Protéines pleurales/protéines sériques > 0,5 ou LDH pleurale/LDH sérique > 0,6",
      "Protéines pleurales < 25 g/L",
      "Glucose pleural < 3,3 mmol/L",
      "pH pleural < 7,20",
      "LDH pleurale < 200 UI/L"
    ],
    reponse: 0,
    explication: "Critères de Light : ratio protéines pleurales/sériques > 0,5, ou ratio LDH pleurale/sérique > 0,6, ou LDH pleurale > 2/3 de la limite supérieure normale sérique. Un seul critère suffit. Sensibilité ~99 % mais spécificité moindre (faux exsudats possibles sous diurétiques, d'où l'apport des critères de Heffner/Light alternatifs).",
    source: "Light criteria ; BTS pleural disease guideline 2010/2023"
  },
  {
    id: "pl-02", module: "pleure-mediastin", sousTheme: "Pneumothorax spontané", difficulte: 2,
    enonce: "Jeune homme de 22 ans, tabagique, pneumothorax spontané primaire de petite taille (< 2 cm), peu symptomatique. Quelle prise en charge initiale ?",
    options: [
      "Drainage thoracique d'emblée",
      "Surveillance clinique ± oxygène, avec contrôle radiologique",
      "Chirurgie de première intention",
      "Pleurédose chimique immédiate",
      "Antibiothérapie prophylactique"
    ],
    reponse: 1,
    explication: "Pneumothorax spontané primaire de petite taille et peu symptomatique : surveillance ± oxygénothérapie (accélère la résorption). Le drainage est indiqué si décollement étendu, symptômes marqués ou échec de la surveillance. La chirurgie (symphyse) se discute en cas de récidive, de persistance du bullage ou selon la profession (pilote, plongeur).",
    source: "BTS pleural disease guideline 2023 ; ERS statement on pneumothorax"
  },
  {
    id: "pl-03", module: "pleure-mediastin", sousTheme: "Paralysie phrénique et diaphragme", difficulte: 2,
    enonce: "Quel examen confirme une paralysie phrénique ?",
    options: [
      "Radiographie de thorax inspiratoire seule",
      "Radioscopie du diaphragme avec sniff test (abolition/paradoxe des mouvements)",
      "Échographie pleurale",
      "TDM thoracique injectée",
      "Échocardiographie"
    ],
    reponse: 1,
    explication: "La paralysie phrénique s'objective par l'abolition ou le mouvement paradoxal de la coupole en radioscopie lors du sniff test. Les mesures des pressions (Pimax, pression transdiaphragmatique) ou l'EMG du diaphragme complètent le bilan. Causes fréquentes : chirurgie cardiaque/thoracique, traumatisme, compression tumorale, neuropathies.",
    source: "ERS statement on respiratory muscle testing (Eur Respir J 2019)"
  },
  {
    id: "pl-04", module: "pleure-mediastin", sousTheme: "Pathologies du médiastin", difficulte: 3,
    enonce: "Une masse médiastinale antérieure chez un homme de 35 ans avec symptômes myasthéniques évoque :",
    options: [
      "Lymphome hodgkinien",
      "Thymome",
      "Goître plongeant",
      "Neurinome paravertébral",
      "Kyste bronchogénique"
    ],
    reponse: 1,
    explication: "Le thymome est la tumeur la plus fréquente du médiastin antérieur de l'adulte jeune et s'associe à la myasthénie gravis dans ~30–45 % des cas. Le goître est antéro-supérieur, les neurinomes et kystes bronchogéniques sont postérieurs ou du médiastin moyen, le lymphome n'a pas de lien avec la myasthénie.",
    source: "ERS Handbook, mediastinal tumours"
  },
  {
    id: "pl-05", module: "pleure-mediastin", sousTheme: "Maladies de la plèvre (mésothéliome)", difficulte: 3,
    enonce: "Femme de 68 ans : pleurésie exsudative lymphocytaire récidivante, TDM montrant un épaississement pleural nodulaire, douleur thoracique. Quel diagnostic évoquer en premier ?",
    options: [
      "Tuberculose pleurale",
      "Mésothéliome pleural malin",
      "Insuffisance cardiaque",
      "Pleurésie virale",
      "Syndrome de Meigs"
    ],
    reponse: 1,
    explication: "Pleurésie exsudative avec épaississement pleural nodulaire et douleur chez un sujet âgé (souvent exposition à l'amiante) = suspicion de mésothéliome pleural. Confirmation par TDM ± thoracoscopie avec biopsies. La TB pleurale est lymphocytaire mais rarement nodulaire et douloureuse ; le syndrome de Meigs s'associe à un fibrome ovarien.",
    source: "ERS/ESTS recommandations sur le mésothéliome ; BTS pleural guideline"
  },

  // ============ CIRCULATION PULMONAIRE ============
  {
    id: "ci-01", module: "circulation", sousTheme: "Hypertension pulmonaire : classification et hémodynamique", difficulte: 2,
    enonce: "Selon ESC/ERS 2022, l'HTP pré-capillaire est définie par :",
    options: [
      "PAPm ≥ 25 mmHg et PAPO ≤ 15 mmHg",
      "PAPm > 20 mmHg, PAPO ≤ 15 mmHg et RVP ≥ 3 unités Wood",
      "PAPm ≥ 20 mmHg et PAPO ≥ 15 mmHg",
      "PAPm ≥ 15 mmHg avec débit cardiaque élevé",
      "PAPO ≥ 20 mmHg isolément"
    ],
    reponse: 1,
    explication: "ESC/ERS 2022 : HTP = PAPm > 20 mmHg au cathétérisme droit. Pré-capillaire : PAPO ≤ 15 mmHg et RVP ≥ 3 WU. Post-capillaire : PAPO > 15 mmHg (isolée si RVP < 3, combinée si ≥ 3). L'ancien seuil de 25 mmHg a été abaissé.",
    source: "ESC/ERS pulmonary hypertension guidelines 2022"
  },
  {
    id: "ci-02", module: "circulation", sousTheme: "Maladie thromboembolique chronique (CTEPH)", difficulte: 2,
    enonce: "Quel couple d'examens est indispensable pour confirmer une CTEPH et évaluer son opérabilité ?",
    options: [
      "Échocardiographie et radiographie de thorax",
      "Cathétérisme cardiaque droit et angiographie pulmonaire (TDM ou conventionnelle)",
      "Spirométrie et DLCO",
      "Scintigraphie cardiaque et ECG",
      "IRM cérébrale"
    ],
    reponse: 1,
    explication: "La CTEPH est confirmée par cathétérisme droit (PAPm > 20, PAPO ≤ 15) associé à une imagerie vasculaire pulmonaire ; l'angiographie est indispensable pour évaluer l'opérabilité, l'endartérectomie pulmonaire étant le traitement curatif de référence. La scintigraphie V/Q est l'examen de dépistage de première intention.",
    source: "ESC/ERS 2022 PH guidelines ; ERS statement on CTEPH"
  },
  {
    id: "ci-03", module: "circulation", sousTheme: "Embolie pulmonaire aiguë : diagnostic et traitement", difficulte: 1,
    enonce: "Probabilité clinique faible d'embolie pulmonaire (score de Wells < 2). Quelle est la meilleure stratégie diagnostique initiale ?",
    options: [
      "TDM angio-thoracique immédiate",
      "Dosage des D-dimères (test à haute sensibilité)",
      "Scintigraphie V/Q",
      "Échocardiographie",
      "Angio-IRM"
    ],
    reponse: 1,
    explication: "Probabilité clinique faible : D-dimères en premier ; un résultat négatif avec un test à haute sensibilité exclut l'EP sans imagerie. Si positifs, TDM angio-thoracique. Cette stratégie évite des irradiations inutiles.",
    source: "ESC 2019 guidelines on acute pulmonary embolism"
  },
  {
    id: "ci-04", module: "circulation", sousTheme: "HTAP idiopathique et héréditaire", difficulte: 3,
    enonce: "Quelle stratégie thérapeutique initiale est recommandée dans l'HTAP idiopathique à faible risque ?",
    options: [
      "Anticoagulation orale seule",
      "Association orale d'un antagoniste des récepteurs de l'endothéline et d'un IPDE5 (ou riociguat)",
      "Oxygène à domicile seul",
      "Furosémide seul",
      "Prostanïdes intraveineux d'emblée"
    ],
    reponse: 1,
    explication: "ESC/ERS 2022 : à faible risque, association initiale orale (ARE + IPDE5 ou riociguat) recommandée, avec réévaluation à 3–6 mois. Les prostanoïdes parentéraux sont réservés aux patients à risque intermédiaire/élevé. L'anticoagulation n'est pas systématique dans l'HTAP idiopathique (à discuter au cas par cas).",
    source: "ESC/ERS 2022 PH guidelines"
  },
  {
    id: "ci-05", module: "circulation", sousTheme: "Malformations artério-veineuses pulmonaires", difficulte: 3,
    enonce: "Les malformations artério-veineuses pulmonaires sont le plus souvent associées à :",
    options: [
      "Maladie de Rendu-Osler-Weber (télangiectasie hémorragique héréditaire)",
      "Sarcoïdose",
      "Polyarthrite rhumatoïde",
      "Mucoviscidose",
      "Amylose"
    ],
    reponse: 0,
    explication: "Les MAVP pulmonaires sont majoritairement associées à la maladie de Rendu-Osler-Weber (HHT), autosomique dominante (mutations ENG ou ACVRL1). Dépistage des apparentés par échodoppler à bulles et TDM. Traitement de référence : embolisation.",
    source: "ERS Handbook, pulmonary vascular malformations ; critères de Curaçao (HHT)"
  },

  // ============ INSUFFISANCE RESPIRATOIRE / SOINS CRITIQUES ============
  {
    id: "ir-01", module: "insuffisance", sousTheme: "Ventilation non invasive (VNI) : indications", difficulte: 1,
    enonce: "Quelle est l'indication de premier plan de la VNI en aigu ?",
    options: [
      "Asthme aigu sévère de première intention",
      "Exacerbation de BPCO avec acidose respiratoire (pH < 7,35)",
      "Pneumothorax suffocant",
      "SDRA grave confirmé en première intention",
      "Polytraumatisé stable"
    ],
    reponse: 1,
    explication: "La VNI est indiquée en première intention dans l'exacerbation de BPCO avec acidose respiratoire (niveau de preuve élevé : réduction de l'intubation et de la mortalité). Elle a aussi une place dans l'OAP cardiogénique et peut être tentée chez l'immunodéprimé hypoxémique. Le SDRA grave relève d'emblée de la ventilation invasive.",
    source: "ERS/TSANZ acute NIV guidelines ; GOLD Report, exacerbation management"
  },
  {
    id: "ir-02", module: "insuffisance", sousTheme: "SDRA (définition de Berlin) et prise en charge", difficulte: 2,
    enonce: "Selon la définition de Berlin, la sévérité du SDRA est gradée sur :",
    options: [
      "La PaCO2",
      "Le rapport PaO2/FiO2 sous PEEP ≥ 5 cmH2O",
      "La compliance seule",
      "Le nombre d'organes défaillants",
      "Le score de Wells"
    ],
    reponse: 1,
    explication: "Berlin : début < 7 jours, opacités bilatérales, absence de surcharge hydrostatique, PaO2/FiO2 ≤ 300 sous PEEP ≥ 5. Léger 201–300, modéré 101–200, sévère ≤ 100. La PEEP minimale de 5 distingue le SDRA de l'insuffisance respiratoire hypoxémique simple.",
    source: "ARDS Definition Task Force, Berlin definition, JAMA 2012"
  },
  {
    id: "ir-03", module: "insuffisance", sousTheme: "Oxygénothérapie de longue durée", difficulte: 2,
    enonce: "L'oxygénothérapie de longue durée (OLD) dans la BPCO est indiquée quand :",
    options: [
      "SpO2 < 92 % à l'effort",
      "PaO2 repos ≤ 55 mmHg (ou 56–59 mmHg si polyglobulie, HTP ou œdèmes)",
      "PaCO2 > 45 mmHg isolé",
      "VEMS < 40 %",
      "Toute dyspnée mMRC ≥ 3"
    ],
    reponse: 1,
    explication: "OLD ≥ 15 h/j : PaO2 repos ≤ 55 mmHg ou SaO2 ≤ 88 % ; ou PaO2 56–59 mmHg en cas de polyglobulie, d'HTP ou d'œdèmes périphériques. Indication pronostique (réduction de mortalité, essai NOTT/MRC). La désaturation isolée à l'effort ou nocturne n'est pas un critère.",
    source: "GOLD Report ; rapports ERS/ATS sur l'oxygénothérapie"
  },
  {
    id: "ir-04", module: "insuffisance", sousTheme: "Weaning et trachéotomie", difficulte: 3,
    enonce: "Chez un patient difficile à sevrer du ventilateur, quel est le meilleur indice prédictif isolé de succès d'extubation ?",
    options: [
      "Le rapport PaO2/FiO2 seul",
      "Le rapport fréquence respiratoire/volume courant (RSBI, indice de Tobin)",
      "La gazométrie après une nuit de repos",
      "Le score de Glasgow",
      "La radiographie de thorax"
    ],
    reponse: 1,
    explication: "Le sevrage repose sur la recherche quotidienne de critères de sevrabilité puis une épreuve de ventilation spontanée. Le RSBI < 105/min/L est le meilleur indice prédictif isolé. En cas d'échecs itératifs : sevrage progressif, VNI relayant l'extubation, ou trachéotomie selon le contexte.",
    source: "ERS/ATS weaning guidelines 2017 ; ERS Handbook, weaning"
  },
  {
    id: "ir-05", module: "insuffisance", sousTheme: "Sepsis et insuffisance respiratoire", difficulte: 2,
    enonce: "Selon la définition Sepsis-3, le sepsis est défini par :",
    options: [
      "Une bactériémie documentée",
      "Une infection suspectée ou confirmée avec défaillance d'organe aiguë (score SOFA ≥ 2)",
      "Une hypotension réfractaire isolée",
      "Une hyperleucocytose > 15 G/L",
      "Deux hémocultures positives"
    ],
    reponse: 1,
    explication: "Sepsis-3 (2016) : infection suspectée ou confirmée + augmentation du score SOFA ≥ 2 points (défaillance d'organe). Choc septique : hypotension nécessitant des catécholamines malgré un remplissage adéquat, avec lactates > 2 mmol/L. La bactériémie n'est présente que dans ~30 % des sepsis.",
    source: "Sepsis-3 consensus (JAMA 2016) ; Surviving Sepsis Campaign 2021"
  },

  // ============ SOMMEIL ============
  {
    id: "so-01", module: "sommeil", sousTheme: "SAOS : définition, polysomnographie", difficulte: 1,
    enonce: "Le diagnostic de SAOS est retenu pour un index d'apnées-hypopnées (IAH) :",
    options: [
      "≥ 5/heure avec symptômes (somnolence) ou ≥ 15/heure sans symptôme",
      "≥ 15/heure uniquement",
      "≥ 30/heure uniquement",
      "≥ 3/heure",
      "Indépendant de l'IAH"
    ],
    reponse: 0,
    explication: "SAOS : IAH ≥ 5/heure avec symptômes (somnolence, fatigue, troubles cognitifs) ou comorbidités, ou IAH ≥ 15/heure même sans symptôme. Sévérité : léger 5–15, modéré 15–30, sévère > 30. Enregistrement par polysomnographie ou polygraphie ventilatoire.",
    source: "AASM scoring manual ; ERS Handbook, sleep-disordered breathing"
  },
  {
    id: "so-02", module: "sommeil", sousTheme: "SAOS : traitement (PPC, orthèses, chirurgie)", difficulte: 1,
    enonce: "Quel est le traitement de première intention du SAOS modéré à sévère symptomatique ?",
    options: [
      "Orthèse d'avancée mandibulaire",
      "Pression positive continue (PPC)",
      "Uvulopharyngopalatoplastie",
      "Médication stimulante",
      "Perte de poids isolée"
    ],
    reponse: 1,
    explication: "La PPC est le traitement de référence du SAOS modéré/sévère : réduction de la somnolence et des événements respiratoires. Les orthèses d'avancée mandibulaire sont une alternative en cas de SAOS léger/modéré ou d'intolérance à la PPC ; les mesures d'hygiène (perte de poids, position) restent essentielles.",
    source: "ERS statements on sleep apnoea treatment ; AASM guidelines"
  },
  {
    id: "so-03", module: "sommeil", sousTheme: "Syndrome d'obésité-hypoventilation", difficulte: 2,
    enonce: "Comment définit-on le syndrome d'obésité-hypoventilation (OHS) ?",
    options: [
      "Obésité + somnolence diurne",
      "Obésité (IMC ≥ 30) + PaCO2 diurne ≥ 45 mmHg + troubles respiratoires du sommeil, après exclusion d'autres causes d'hypoventilation",
      "Obésité + désaturation nocturne isolée",
      "Obésité + IAH ≥ 15",
      "Obésité + ronflement"
    ],
    reponse: 1,
    explication: "OHS = IMC ≥ 30 kg/m² + hypercapnie diurne chronique (PaCO2 ≥ 45 mmHg) avec troubles respiratoires du sommeil (le plus souvent SAOS), après exclusion d'autres causes d'hypoventilation. Risque accru d'HTP, d'insuffisance cardiaque droite et de mortalité. Traitement : PPC/VNI et perte de poids.",
    source: "ERS statement on OHS (Eur Respir J 2016) ; ERS Handbook"
  },
  {
    id: "so-04", module: "sommeil", sousTheme: "SAOS et maladies cardiovasculaires", difficulte: 2,
    enonce: "Quel lien entre SAOS sévère non traité et système cardiovasculaire est le mieux établi ?",
    options: [
      "Réduction du risque d'hypertension artérielle",
      "Association avec l'hypertension artérielle (notamment résistante), la fibrillation auriculaire et un risque accru d'AVC",
      "Protection contre l'insuffisance coronaire",
      "Réduction du risque d'HTP",
      "Absence d'association documentée"
    ],
    reponse: 1,
    explication: "Le SAOS sévère non traité est associé à l'HTA résistante, à la fibrillation auriculaire (récidives post-ablation), à l'insuffisance coronaire et au risque d'AVC, via l'activation sympathique, le stress oxydatif et l'inflammation. La PPC réduit la somnolence et la PA ; le bénéfice cardiovasculaire majeur est surtout démontré chez les patients somnolents (essais SAVE/RICCADSA).",
    source: "ERS statements, sleep apnoea and cardiovascular disease ; essais SAVE, RICCADSA"
  },
  {
    id: "so-05", module: "sommeil", sousTheme: "Mouvements périodiques et syndrome des jambes sans repos", difficulte: 2,
    enonce: "Un patient décrit une urge impérieuse de bouger les jambes au repos, soulagée par le mouvement, majorée le soir et la nuit. De quoi s'agit-il ?",
    options: [
      "Syndrome des jambes sans repos (SJSR)",
      "Crampes nocturnes idiopathiques",
      "Neuropathie périphérique douloureuse",
      "Dystonie",
      "Akathisie médicamenteuse"
    ],
    reponse: 0,
    explication: "Critères IRLSSG du SJSR : urge de bouger les jambes, majorée par le repos, soulagée par le mouvement, prédominance vespérale/nocturne. Bilan : ferritine (supplémentation si < 75 µg/L), causes secondaires (grossesse, insuffisance rénale). Traitement selon sévérité : agonistes dopaminergiques ou gabapentinoïdes.",
    source: "IRLSSG criteria ; ERS Handbook, restless legs syndrome"
  }
];
