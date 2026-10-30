const SYLLABUS = {
  titre: "HERMES — Adult Respiratory Medicine",
  source: "ERS international Adult Respiratory Medicine syllabus (Tabin N, et al. Breathe 2018; 14: 19–28)",
  sourceLien: "https://breathe.ersjournals.com/content/14/1/19",
  exam: {
    qcm: 90, dureeMinutes: 180,
    types: [
      "Type A : 5 options, 1 seule réponse correcte — 1 point",
      "K-prime : 4 options, 0 à 4 réponses correctes — marquer chaque option vraie (+) ou fausse (−) ; 4 correctes = 1 point, 3 correctes = 0,5 point",
      "Pas de pénalité négative ; question sans réponse = 0 point"
    ]
  },
  guidelines: "https://channel.ersnet.org/channel-25-guidelines",
  modules: [
    {
      id: "m01", nom: "Structure et fonction du système respiratoire", icone: "🫁",
      sousThemes: ["Anatomie et développement (malformations incluses)", "Immunologie et mécanismes de défense"],
      sources: [
        { t: "ERS Handbook of Respiratory Medicine (3rd ed.)", l: "https://publications.ersnet.org/content/book/handbook/978-1-84984-2037" }
      ]
    },
    {
      id: "m02", nom: "Physiologie et explorations fonctionnelles respiratoires", icone: "📈",
      sousThemes: ["Ventilation", "Circulation", "Contrôle de la respiration", "Contrôle de la ventilation", "Mécanique respiratoire", "Échanges gazeux", "Gaz du sang et équilibre acide-base", "Épreuve d'effort", "Tests de provocation bronchique", "Interprétation des EFR"],
      sources: [
        { t: "ERS/ATS 2022 update: standardisation of pulmonary function testing", l: "https://doi.org/10.1183/13993003.01008-2022" },
        { t: "ERS Technical Standard — Reference values for cardiopulmonary exercise testing (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "ERS/ATS technical standard on interpretive strategies for routine lung function tests", l: "https://doi.org/10.1183/13993003.00793-2021" }
      ]
    },
    {
      id: "m03", nom: "Démarche diagnostique", icone: "🩺",
      sousThemes: ["Symptômes", "Signes", "Syndrome-based approach to diagnosis and differential diagnosis"],
      sources: [
        { t: "ERS guidelines on diagnosis and management of chronic cough (2020)", l: "https://doi.org/10.1183/13993003.0186-2019" },
        { t: "ERS statement on breathlessness", l: "https://doi.org/10.1183/13993003.01075-2022" }
      ]
    },
    {
      id: "m04", nom: "Procédures diagnostiques", icone: "🔬",
      sousThemes: ["Bronchoscopie", "EBUS et EUS", "Thoracoscopie", "Thoracentèse et biopsie pleurale", "Radiographie thoracique", "Échographie thoracique", "TDM", "TEP-TDM", "FeNO et NO nasal", "Examen des expectorations", "Méthodes microbiologiques de base"],
      sources: [
        { t: "ERS/ESGE/ESTS guideline on endobronchial and oesophageal endosonography (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "ERS statement on percutaneous ultrasound-guided interventions (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "ERS/ATS/ESGAR statement on thoracic ultrasound", l: "https://doi.org/10.1183/13993003.02307-2021" }
      ]
    },
    {
      id: "m05", nom: "Principes généraux de traitement et prévention", icone: "💊",
      sousThemes: ["Thérapie inhalée", "Pharmacothérapie systémique", "Immunothérapie allergénique spécifique", "Immunothérapie du cancer pulmonaire", "Kinésithérapie respiratoire", "Réhabilitation pulmonaire", "Soins palliatifs", "Oxygénothérapie", "Mesures préventives", "Sevrage tabagique", "Ventilation assistée", "Drainage thoracique", "Interventions endobronchiques", "Lung volume reduction", "Transplantation pulmonaire"],
      sources: [
        { t: "ERS clinical practice guideline on symptom management for serious respiratory illness (2024)", l: "https://doi.org/10.1183/13993003.00143-2024" },
        { t: "ERS clinical practice guideline: palliative care for people with COPD or ILD (2023)", l: "https://doi.org/10.1183/13993003.00362-2023" },
        { t: "ERS/ATS statement on pulmonary rehabilitation", l: "https://doi.org/10.1164/rccm.202306-1067ST" },
        { t: "ERS statement on adult bronchoscopy", l: "https://doi.org/10.1183/13993003.01079-2020" }
      ]
    },
    {
      id: "m06", nom: "Urgences respiratoires", icone: "🚨",
      sousThemes: ["Évaluation", "Diagnostic différentiel", "Gestes de prise en charge immédiats", "Traitement de première intention", "Situations spécifiques"],
      sources: [
        { t: "ERS/ESICM/ESCMID/ALAT guidelines for the management of severe CAP (2023)", l: "https://doi.org/10.1183/13993003.00755-2023" },
        { t: "ESC 2019 guidelines on acute pulmonary embolism", l: "https://doi.org/10.1093/eurheartj/ehz405" },
        { t: "ERS/ATS guideline on acute respiratory failure (2020)", l: "https://doi.org/10.1164/rccm.202005-1955ST" }
      ]
    },
    {
      id: "m07", nom: "Maladies des voies aériennes", icone: "💨",
      sousThemes: ["Maladies des voies aériennes supérieures", "Asthme", "Bronchite", "COPD and emphysema", "Bronchiolite", "Bronchiectasies", "Maladies rares des voies aériennes", "Malformations congénitales des voies aériennes"],
      sources: [
        { t: "GINA 2025 — Global Strategy for Asthma Management and Prevention", l: "https://ginasthma.org" },
        { t: "GOLD 2025 — Global Strategy for COPD", l: "https://goldcopd.org" },
        { t: "ERS clinical practice guideline for the management of adult bronchiectasis (2025)", l: "https://doi.org/10.1183/13993003.01126-2025" },
        { t: "ERS/ATS guideline on severe asthma (2014)", l: "https://doi.org/10.1183/13993003.00505-2014" }
      ]
    },
    {
      id: "m08", nom: "Infections respiratoires", icone: "🦠",
      sousThemes: ["Infections ORL hautes", "Infections respiratoires basses", "Infections pleurales", "Abcès pulmonaire", "Grippe, pandémies et SARS", "Infections chez l'hôte immunodéprimé", "Pneumonite d'inhalation"],
      sources: [
        { t: "ERS/ESICM/ESCMID/ALAT guidelines for the management of severe CAP (2023)", l: "https://doi.org/10.1183/13993003.00755-2023" },
        { t: "ERS/ESCMID statement on rapid diagnostic tests for community-acquired LRTI (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "ERS/ESICM/ESCMID/ALAT guidelines on hospital-acquired and ventilator-associated pneumonia (2017)", l: "https://doi.org/10.1183/13993003.00582-2017" }
      ]
    },
    {
      id: "m09", nom: "Maladies mycobactériennes", icone: "🧫",
      sousThemes: ["Pulmonary TB incl. MDR/XDR-TB", "Tuberculose extrapulmonaire", "Infection tuberculeuse latente", "Mycobactérioses non tuberculeuses"],
      sources: [
        { t: "WHO operational handbook on tuberculosis (2022/2024 update)", l: "https://www.who.int/publications/i/item/9789240061507" },
        { t: "ERS/WHO TB culture and CXR methods statement", l: "https://doi.org/10.1183/09031936.00189608" },
        { t: "BTS guideline for non-tuberculous mycobacterial disease (2017)", l: "https://doi.org/10.1183/13993003.00794-2017" }
      ]
    },
    {
      id: "m10", nom: "Tumeurs thoraciques", icone: "🎗️",
      sousThemes: ["Lung cancer (incl. paraneoplastic syndromes)", "Autres tumeurs pulmonaires", "Tumeurs pulmonaires métastatiques", "Nodules solitaires", "Mésothéliome", "Autres tumeurs pleurales", "Tumeurs de la paroi thoracique", "Tumeurs médiastinales"],
      sources: [
        { t: "ERS/ESTS clinical practice guideline on fitness for curative intent treatment of lung cancer (2025)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "ERS/ESGE/ESTS guideline on endosonography for diagnosis and staging of lung cancer (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "ESMO guidelines on early-stage and advanced NSCLC", l: "https://doi.org/10.1016/j.annonc.2023.10.008" }
      ]
    },
    {
      id: "m11", nom: "Sommeil et troubles du contrôle respiratoire", icone: "😴",
      sousThemes: ["Syndrome d'apnées obstructives du sommeil", "Syndrome d'apnées centrales du sommeil", "Syndromes d'hypoventilation", "Respiration dysfonctionnelle / hyperventilation"],
      sources: [
        { t: "ERS/ESRS clinical practice guideline for CPAP in adult OSA (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "AASM clinical practice guideline: treatment of central sleep apnoea in adults (2023)", l: "https://doi.org/10.5664/jcsm.10660" },
        { t: "ERS statement on obesity hypoventilation syndrome (2017)", l: "https://doi.org/10.1183/13993003.00777-2017" }
      ]
    },
    {
      id: "m12", nom: "Insuffisance respiratoire", icone: "📉",
      sousThemes: ["Insuffisance respiratoire aiguë", "Insuffisance respiratoire chronique"],
      sources: [
        { t: "ERS/ATS guideline on acute respiratory failure (2020)", l: "https://doi.org/10.1164/rccm.202005-1955ST" },
        { t: "ERS statement on home mechanical ventilation (2019)", l: "https://doi.org/10.1183/13993003.00131-2019" }
      ]
    },
    {
      id: "m13", nom: "Pneumopathies infiltrantes diffuses", icone: "🕸️",
      sousThemes: ["Pneumopathie d'hypersensibilité", "Sarcoïdose", "Pneumopathies interstitielles idiopathiques", "COP/BOOP", "PID des connectivites", "Histiocytose langerhansienne", "LAM", "Protéinose alvéolaire", "Amylose", "Maladies médicamenteuses", "Maladies radio-induites", "Bronchite éosinophilique non asthmatique", "Eosinophilic pneumonia", "Syndrome hyperéosinophilique"],
      sources: [
        { t: "ERS/ATS/JRS/ALAT clinical practice guideline for IPF (2024 update)", l: "https://doi.org/10.1183/13993003.00929-2023" },
        { t: "ERS/ATS guideline on hypersensitivity pneumonitis (2020)", l: "https://doi.org/10.1164/rccm.202005-0528ST" },
        { t: "ERS statement on sarcoidosis (2014)", l: "https://doi.org/10.1183/13993003.00179-2014" },
        { t: "ERS statement on LAM", l: "https://doi.org/10.1183/13993003.01013-2024" }
      ]
    },
    {
      id: "m14", nom: "Pathologies vasculaires pulmonaires", icone: "❤️",
      sousThemes: ["Maladie thromboembolique", "Hypertension pulmonaire", "Vascularites et hémorragies alvéolaires diffuses", "Malformations artério-veineuses"],
      sources: [
        { t: "ERS clinical practice guidelines update for the treatment of PAH (2026)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "ESC/ERS guidelines for the diagnosis and treatment of pulmonary hypertension (2022)", l: "https://doi.org/10.1183/13993003.00879-2022" },
        { t: "ESC 2019 guidelines on acute pulmonary embolism", l: "https://doi.org/10.1093/eurheartj/ehz405" }
      ]
    },
    {
      id: "m15", nom: "Paroi thoracique et muscles respiratoires", icone: "🦴",
      sousThemes: ["Déformations de la paroi thoracique", "Maladies neuromusculaires", "Pathologies diaphragmatiques"],
      sources: [
        { t: "ERS statement on respiratory muscle testing (2019)", l: "https://doi.org/10.1183/13993003.00352-2019" },
        { t: "ERS statement on chest wall diseases", l: "https://doi.org/10.1183/13993003.00633-2021" }
      ]
    },
    {
      id: "m16", nom: "Pathologies pleurales et médiastinales (hors tumeurs)", icone: "🫙",
      sousThemes: ["Épanchement pleural", "Pneumothorax", "Médiastinite"],
      sources: [
        { t: "BTS pleural disease guideline (2023)", l: "https://doi.org/10.1183/13993003.00612-2023" },
        { t: "ERS statement on pneumothorax", l: "https://doi.org/10.1183/13993003.00486-2015" }
      ]
    },
    {
      id: "m17", nom: "Conséquences respiratoires des maladies systémiques", icone: "🩻",
      sousThemes: ["Déficits immunitaires primitifs", "Immunodépressions secondaires", "Pathologies cardiaques", "Atteintes digestives, hépatiques et rénales", "Maladies hématologiques", "Obésité", "Connectivites"],
      sources: [
        { t: "ERS/EBMT clinical practice guideline on pulmonary chronic GVHD (2023)", l: "https://doi.org/10.1183/13993003.00896-2022" },
        { t: "ERS statement on lung involvement in CTD", l: "https://doi.org/10.1183/13993003.00955-2019" }
      ]
    },
    {
      id: "m18", nom: "Maladies génétiques", icone: "🧬",
      sousThemes: ["Mucoviscidose", "Dyskinésie ciliaire primitive", "Déficit en alpha-1-antitrypsine", "Birt–Hogg–Dubé syndrome"],
      sources: [
        { t: "ERS/ATS guideline for the diagnosis of primary ciliary dyskinesia (2025)", l: "https://channel.ersnet.org/channel-25-guidelines" },
        { t: "ERS standards of care for cystic fibrosis", l: "https://doi.org/10.1183/13993003.00982-2020" },
        { t: "ERS/ATS statement on α1-antitrypsin deficiency (2017)", l: "https://doi.org/10.1183/13993003.00164-2017" }
      ]
    },
    {
      id: "m19", nom: "Maladies professionnelles", icone: "⛑️",
      sousThemes: ["Risques respiratoires professionnels", "Inhalations toxiques aiguës", "Infections respiratoires professionnelles", "Asthme lié au travail", "BPCO et travail", "PID liées aux agents inorganiques", "PID liées aux poussières organiques", "Pathologies liées à l'amiante", "Causes professionnelles du cancer bronchique"],
      sources: [
        { t: "ERS statement on work-related asthma", l: "https://doi.org/10.1183/13993003.00185-2012" },
        { t: "ERS statement on occupational COPD", l: "https://doi.org/10.1183/13993003.00117-2020" }
      ]
    },
    {
      id: "m20", nom: "Épidémiologie, environnement et mode de vie", icone: "🌍",
      sousThemes: ["Méthodes épidémiologiques et statistiques", "Pollution intérieure", "Pollution extérieure", "Altitude et plongée", "Mode de vie (tabac, e-cigarettes, nutrition, activité)"],
      sources: [
        { t: "WHO global air quality guidelines (2021)", l: "https://www.who.int/publications/i/item/9789240034221" },
        { t: "ERS statement on e-cigarettes and respiratory health", l: "https://doi.org/10.1183/13993003.01054-2019" },
        { t: "ERS statement on high altitude and diving", l: "https://doi.org/10.1183/13993003.00880-2021" }
      ]
    }
  ]
};
