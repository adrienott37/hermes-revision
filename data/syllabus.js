const SYLLABUS = {
  titre: "Syllabus HERMES — Pneumologie adulte",
  source: "ERS international Adult Respiratory Medicine syllabus (Breathe 2018; 14: 19–29)",
  modules: [
    {
      id: "sciences-basiques",
      nom: "Sciences de base et poumon sain",
      icone: "🫁",
      description: "Anatomie, histologie, physiologie respiratoire, mécanique ventilatoire, échanges gazeux, défenses pulmonaires.",
      sousThemes: [
        "Anatomie et histologie pulmonaire",
        "Physiologie : mécanique ventilatoire et compliance",
        "Échanges gazeux et transport de l'oxygène",
        "V/Q et shunt",
        "Contrôle de la ventilation",
        "Défense pulmonaire et immunité",
        "Équilibre acide-base",
        "Pharmacologie respiratoire"
      ],
      referents: [
        "ERS Handbook of Respiratory Medicine (3e éd.), section Basic science",
        "West's Respiratory Physiology — pour les notions de référence"
      ]
    },
    {
      id: "symptomes",
      nom: "Symptômes et évaluation du patient",
      icone: "🩺",
      description: "Démarche clinique : dyspnée, toux, hémoptysie, douleur thoracique, exploration fonctionnelle, imagerie, endoscopie.",
      sousThemes: [
        "Dyspnée : évaluation et scores (mMRC, échelle de Borg)",
        "Toux aiguë et chronique (guide ERS 2020)",
        "Hémoptysie",
        "Douleur thoracique",
        "Explorations fonctionnelles respiratoires (spirométrie, DLCO)",
        "Pléthysmographie et mesure des volumes",
        "Tests d'effort et marches de 6 minutes",
        "Radiographie et TDM thoracique",
        "Endoscopie bronchique et échographie endobronchique (EBUS)",
        "Biologie : gaz du sang, marqueurs"
      ],
      referents: [
        "ERS guideline on cough 2020 (Eur Respir J)",
        "ERS/ATS standards for pulmonary function testing 2019/2005"
      ]
    },
    {
      id: "voies-aeriennes",
      nom: "Maladies obstructives des voies aériennes",
      icone: "💨",
      description: "BPCO, asthme, bronchectasies, bronchiolites, emphysème, SAOS de l'overlap.",
      sousThemes: [
        "BPCO : définition, dépistage, classification GOLD ABE",
        "BPCO : traitement de fond et exacerbations",
        "Réhabilitation et oxygénothérapie (rapports ERS/ATS)",
        "Asthme : phénotypes et contrôle",
        "Asthme sévère (guide ERS/ATS 2014)",
        "Asthme : biologiques et thérapies ciblées",
        "Overlap asthme-BPCO",
        "Bronchiectasies (BTS guideline, ERS)",
        "Dilatation trachéale et malformations",
        "Maladies des petites voies aériennes"
      ],
      referents: [
        "GOLD Report 2023/2024",
        "ERS/ATS Severe asthma guideline 2014",
        "ERS statement on asthma-COPD overlap 2014"
      ]
    },
    {
      id: "oncologie",
      nom: "Oncologie thoracique",
      icone: "🎗️",
      description: "Cancer bronchique, dépistage, stadification TNM, oncogènes dirigés, immunothérapie, tumeurs médiastinales, métastases.",
      sousThemes: [
        "Dépistage du cancer bronchique (NELSON, NLST)",
        "Classification TNM (8e édition)",
        "Cancer à petites cellules : chimio et radiothérapie",
        "Cancer non à petites cellules : stades localisés",
        "Oncogènes dirigés (EGFR, ALK, ROS1, etc.)",
        "Immunothérapie (PD-1/PD-L1)",
        "Mésothéliome pleural",
        "Tumeurs médiastinales et carcinoides",
        "Métastases pulmonaires",
        "Soins de support et décision multidisciplinaire"
      ],
      referents: [
        "ERS/ESTS/ESTRO guidelines sur le cancer du poumon",
        "IASLC TNM 8e édition"
      ]
    },
    {
      id: "infections",
      nom: "Infections respiratoires",
      icone: "🦠",
      description: "Pneumonies communautaires et nosocomiales, tuberculose, mycobactéries, infections fongiques et parasitaires, immunodéprimés.",
      sousThemes: [
        "Pneumonie aiguë communautaire (PAC) : diagnostic et scores",
        "PAC : antibiothérapie et prise en charge",
        "VAP (pneumonie sous ventilation) : prévention et traitement",
        "Tuberculose pulmonaire : diagnostic",
        "Traitement antituberculeux et résistances (MDR/XDR)",
        "Mycobactéries non tuberculeuses",
        "Infections fongiques (aspergillose)",
        "Pneumocystose et infections de l'immunodéprimé",
        "Grippe, VRS, COVID-19",
        "Bronchite aiguë et exacerbations infectieuses"
      ],
      referents: [
        "ERS/ESCMID guidelines PAC 2011",
        "ERS/ESICM/ESCMID/ALAT VAP guidelines 2017",
        "WHO/Ers TB guidelines"
      ]
    },
    {
      id: "interstitielles",
      nom: "Pathologies pulmonaires interstitielles",
      icone: "🕸️",
      description: "PID : FPI, pneumopathies d'hypersensibilité, connectivites, sarcoïdose, pneumoconioses, PID iatrogènes.",
      sousThemes: [
        "Classification et démarche diagnostique des PID",
        "Fibrose pulmonaire idiopathique (FPI)",
        "DIP et pneumopathies idiopathiques rares",
        "Pneumopathie d'hypersensibilité",
        "PID des connectivites",
        "Sarcoïdose",
        "Pneumoconioses (asbestose, silicose)",
        "PID médicamenteuses et radio-induites",
        "Hémorragie alvéolaire et vascularites",
        "Alvéolites et proteinose alvéolaire"
      ],
      referents: [
        "ERS/ATS/JRS/ALAT IPF guideline 2015",
        "ERS/ATS idiopathic interstitial pneumonias 2013"
      ]
    },
    {
      id: "pleure-mediastin",
      nom: "Plèvre, paroi thoracique et médiastin",
      icone: "🫙",
      description: "Épanchements pleuraux, pneumothorax, pathologies de la paroi, maladies du médiastin et du diaphragme.",
      sousThemes: [
        "Épanchement pleural : démarche diagnostique (transudat/exsudat)",
        "Pleurésie purulente ( Light criteria, pleurodèse)",
        "Pneumothorax spontané",
        "Maladies de la plèvre (mésothéliome)",
        "Cyphoscoliose et déformations pariétales",
        "Pathologies du médiastin",
        "Paralysie phrénique et diaphragme",
        "Obésité et hypoventilation",
        "Pleurésies récidivantes"
      ],
      referents: [
        "ERS statement on the management of pneumothorax (2015)",
        "BTS pleural disease guideline"
      ]
    },
    {
      id: "circulation",
      nom: "Circulation pulmonaire et cœur droit",
      icone: "❤️",
      description: "Hypertension pulmonaire, embolie pulmonaire, cœur pulmonaire chronique, malformations vasculaires.",
      sousThemes: [
        "Hypertension pulmonaire : classification et hémodynamique",
        "HTAP idiopathique et héréditaire",
        "HTP des cardiopathies gauches",
        "HTP des maladies respiratoires chroniques",
        "Maladie thromboembolique chronique (CTEPH)",
        "Embolie pulmonaire aiguë : diagnostic et traitement",
        "Cœur pulmonaire chronique",
        "Thrombose veineuse profonde et anticoagulation",
        "Malformations artério-veineuses pulmonaires"
      ],
      referents: [
        "ERS/ESC pulmonary hypertension guidelines 2022",
        "ERS statement on CTEPH 2021"
      ]
    },
    {
      id: "insuffisance",
      nom: "Insuffisance respiratoire et soins respiratoires critiques",
      icone: "🚨",
      description: "Insuffisance respiratoire aiguë et chronique, VNI, ventilation invasive, SDRA, sepsis, réhabilitation en soins critiques.",
      sousThemes: [
        "Insuffisance respiratoire aiguë : oxygénothérapie",
        "Ventilation non invasive (VNI) : indications",
        "Intubation et ventilation invasive",
        "SDRA (définition de Berlin) et prise en charge",
        "Sepsis et insuffisance respiratoire",
        "Oxygenothérapie de longue durée",
        "Ventilation à domicile",
        "Weaning et trachéotomie",
        "Éthique et fin de vie en soins respiratoires critiques"
      ],
      referents: [
        "ERS/ATS ARDS definition (Berlin) 2012",
        "ERS VNI guidelines et statements"
      ]
    },
    {
      id: "sommeil",
      nom: "Médecine du sommeil",
      icone: "😴",
      description: "Syndrome d'apnées obstructives du sommeil, syndrome d'hypoventilation, insomnie, syndrome des jambes sans repos.",
      sousThemes: [
        "SAOS : définition, polysomnographie",
        "SAOS : traitement (PPC, orthèses, chirurgie)",
        "Syndrome d'hypoventilation central",
        "Syndrome d'obésité-hypoventilation",
        "Insomnie et troubles du sommeil liés au travail",
        "Mouvements périodiques et syndrome des jambes sans repos",
        "Somnolence et conduite automobile",
        "SAOS et maladies cardiovasculaires"
      ],
      referents: [
        "ERS statement on sleep apnoea",
        "ERS guidelines on non-CPAP therapies"
      ]
    }
  ]
};
