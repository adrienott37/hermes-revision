// Fiches récap des recommandations par module — HERMES Adult Respiratory Medicine
// Chaque fiche : points clés + chiffres/seuils + sources avec liens
const FICHES_V2 = {
  "m01": {
    titre: "Structure et fonction du système respiratoire",
    sections: [
      { titre: "Défenses pulmonaires", points: [
        "Voies aériennes proximales : escalator mucociliaire + toux",
        "Alvéoles : macrophages alvéolaires + drainage lymphatique (zone non ciliée)",
        "Infections à germes encapsulés récidivantes → doser IgG/IgA/IgM (déficit humoral)",
        "Pneumocystis, CMV, mycobactéries atypiques → déficit cellulaire T"
      ]},
      { titre: "À retenir", points: [
        "Le déficit isolé en IgA est fréquent mais pauci-symptomatique",
        "Le surfactant réduit la tension superficielle → augmente la compliance",
        "La clearance mucociliaire est altérée dans la mucoviscidose et la DCP"
      ]}
    ]
  },
  "m02": {
    titre: "Physiologie et EFR",
    sections: [
      { titre: "Interprétation EFR (standard ERS/ATS 2022)", points: [
        "Obstruction : VEMS/CVF < limite inférieure de la normale (z-score, pas de % fixe)",
        "Restriction : CPT < LIN — jamais la CVF seule",
        "Réversibilité : +12 % ET +200 mL du VEMS",
        "DLCO abaissée + volumes préservés = atteinte vasculaire (HTP, EP)",
        "Pléthysmographie > dilution en cas de bulles/trapping (mesure l'air non communicant)"
      ]},
      { titre: "Gaz du sang", points: [
        "Acidose resp. aiguë : +1 mmol/L HCO3 par +10 mmHg PaCO2 ; chronique : +3-4",
        "Compensation métabolique : 3-5 jours (rein)",
        "Trou anionique = Na − (Cl + HCO3) ; normal ≤ 12 mmol/L",
        "Compensation acidose métabolique : PaCO2 ≈ 1,5 × HCO3 + 8 ± 2"
      ]},
      { titre: "Épreuve d'effort", points: [
        "CPET : VO2max, seuil ventilatoire — valeurs de référence ERS 2026",
        "TM6 : distance = prédicteur de mortalité (BPCO < 350 m, HTAP < 440 m)"
      ]}
    ],
    sources: [{ t: "ERS/ATS 2022 standardisation EFR", l: "https://doi.org/10.1183/13993003.01008-2022" }]
  },
  "m03": {
    titre: "Démarche diagnostique",
    sections: [
      { titre: "Toux chronique (ERS 2020)", points: [
        "Définition : > 8 semaines chez l'adulte",
        "Étape 1 : IEC ? tabac ? radio anormale ?",
        "Étape 2 : traitements d'épreuve séquentiels — rhinite/upper airway, asthme, RGO",
        "Toux réfractaire : gabapentinoïdes + rééducation comportementale"
      ]},
      { titre: "Dyspnée", points: [
        "mMRC 0-4 : 2 = plus lent que les pairs/arrêt 100 m en montée ; 3 = arrêt 100 m sur le plat ; 4 = ne sort pas",
        "Évaluer : gaz du sang, EFR (avec DLCO), échographie, BNP selon le contexte"
      ]}
    ],
    sources: [{ t: "ERS chronic cough guideline 2020", l: "https://doi.org/10.1183/13993003.0186-2019" }]
  },
  "m04": {
    titre: "Procédures diagnostiques",
    sections: [
      { titre: "Endoscopie et endosonographie", points: [
        "EBUS-TBNA = référence du staging médiastinal (stations 2R/2L, 4R/4L, 7, 10-11)",
        "EUS complémentaire pour 4L, 7, 8, 9",
        "Thoracoscopie : diagnostic pleural (rendement > 90 % pour le mésothéliome)",
        "Guideline ERS/ESGE/ESTS 2026 (mise à jour endosonographie)"
      ]},
      { titre: "Échographie thoracique", points: [
        "Lung sliding présent = pas de pneumothorax côté exploré",
        "≥ 3 lignes B par champ, bilatérales = syndrome interstitiel (œdème)",
        "Lignes A + abolition du sliding = pneumothorax",
        "Repérage échographique systématique avant thoracentèse"
      ]},
      { titre: "FeNO", points: [
        "FeNO ≥ 50 ppb (adulte) = inflammation eosinophilique, réponse attendue aux CSI",
        "NO nasal effondré = oriente vers une dyskinésie ciliaire primitive"
      ]}
    ],
    sources: [{ t: "ERS statement échographie percutanée 2026", l: "https://channel.ersnet.org/channel-25-guidelines" }]
  },
  "m05": {
    titre: "Principes généraux de traitement",
    sections: [
      { titre: "Réhabilitation pulmonaire", points: [
        "BPCO mMRC ≥ 2 : fortement recommandée (dyspnée, qualité de vie, réhospitalisations)",
        "Bronchiectasies avec dyspnée/capacité réduite : recommandée (ERS 2025)",
        "Programme multimodal : réentraînement + éducation + nutrition + psychosocial",
        "L'OLD n'est pas une contre-indication"
      ]},
      { titre: "Dyspnée réfractaire / soins palliatifs", points: [
        "Approche multimodale : fan therapy, techniques de respiration, positions",
        "Morphine orale faible dose (2,5-5 mg) : dyspnée réfractaire des maladies avancées",
        "L'oxygène ne soulage que si hypoxémie documentée",
        "Guidelines ERS 2023 (palliatif BPCO/PID) et 2024 (symptômes)"
      ]},
      { titre: "Sevrage tabagique", points: [
        "Première cause de mortalité évitable — sevrage systématique à chaque consultation",
        "TSN + varénicline/bupropion + suivi structuré"
      ]}
    ],
    sources: [
      { t: "ERS symptom management 2024", l: "https://doi.org/10.1183/13993003.00143-2024" },
      { t: "ERS palliative care COPD/ILD 2023", l: "https://doi.org/10.1183/13993003.00362-2023" }
    ]
  },
  "m06": {
    titre: "Urgences respiratoires",
    sections: [
      { titre: "Démarche", points: [
        "Évaluation rapide : constantes, gaz du sang, score de gravité (CURB-65 si pneumonie)",
        "O2 cible : SpO2 88-92 % si hypercapnie ; 94-98 % sinon",
        "Antibiothérapie précoce si infection (dans l'heure si choc septique)"
      ]},
      { titre: "EP grave (ESC 2019)", points: [
        "Haut risque (choc) : anticoagulation immédiate + thrombolyse systémique (altéplase)",
        "Remplissage prudent (500 mL max) + noradrénaline",
        "Écho au lit : dilatation VD, signe de McConnell"
      ]}
    ],
    sources: [
      { t: "ERS severe CAP 2023", l: "https://doi.org/10.1183/13993003.00755-2023" },
      { t: "ESC PE 2019", l: "https://doi.org/10.1093/eurheartj/ehz405" }
    ]
  },
  "m07": {
    titre: "Maladies des voies aériennes",
    sections: [
      { titre: "BPCO (GOLD 2025)", points: [
        "Groupes A/B/E : A = peu symptomatique ; B = mMRC ≥ 2 sans exacerbation ; E = ≥ 2 exacerbations ou ≥ 1 hospitalisation",
        "Traitement initial : A = bronchodilatateur ; B = LAMA ; E = LABA/LAMA",
        "CSI : seulement si exacerbations sous LABA/LAMA, surtout si éos ≥ 300 (ou ≥ 100 + hospitalisation)",
        "Exacerbation : bronchodilatateurs + corticoïdes 5 j ± antibio si purulence ; VNI si pH < 7,35",
        "OLD : PaO2 ≤ 55 (ou 56-59 + polyglobulie/HTP/œdèmes), ≥ 15 h/j"
      ]},
      { titre: "Asthme (GINA)", points: [
        "Le SABA seul n'est plus recommandé : CSI-formotérol à la demande (léger) ou de fond",
        "Asthme sévère : vérifier observance, technique, comorbidités avant tout",
        "Biologiques : anti-IL-5 si éos élevées + exacerbations ; anti-IgE si sensibilisation"
      ]},
      { titre: "Bronchiectasies (ERS 2025)", points: [
        "Pas de CSI au long cours sans asthme/BPCO associé",
        "Réhabilitation + désencombrement kiné = socle",
        "Macrolides au long cours si exacerbations fréquentes (surveillance résistance, QT)",
        "Éradication de Pseudomonas à la première colonisation"
      ]}
    ],
    sources: [
      { t: "GOLD 2025", l: "https://goldcopd.org" },
      { t: "GINA 2025", l: "https://ginasthma.org" },
      { t: "ERS bronchiectasis 2025", l: "https://doi.org/10.1183/13993003.01126-2025" }
    ]
  },
  "m08": {
    titre: "Infections respiratoires",
    sections: [
      { titre: "PAC (ERS 2023)", points: [
        "CURB-65 : confusion, urée > 7, FR ≥ 30, PAS < 90/PAD ≤ 60, âge ≥ 65",
        "Ambulatoire sans comorbidité : amoxicilline (ou doxy/macrolide selon résistances)",
        "Hospitalisé : C3G ± macrolide ; Réanimation : C3G + macrolide IV",
        "Désescalade dès documentation ; tests diagnostiques rapides (statement ERS/ESCMID 2026)"
      ]},
      { titre: "Grippe", points: [
        "Oseltamivir < 48 h chez les patients à risque",
        "Vaccination annuelle = prévention essentielle",
        "Complications : pneumonie virale, surinfection bactérienne"
      ]}
    ],
    sources: [
      { t: "ERS severe CAP 2023", l: "https://doi.org/10.1183/13993003.00755-2023" },
      { t: "ERS rapid diagnostics 2026", l: "https://channel.ersnet.org/channel-25-guidelines" }
    ]
  },
  "m09": {
    titre: "Maladies mycobactériennes",
    sections: [
      { titre: "Tuberculose", points: [
        "RHZE 2 mois puis RH 4 mois (sensible, sans facteur de rechute)",
        "Xpert MTB/RIF systématique si BAAR+ (détecte la résistance à la rifampicine)",
        "IDR/Quantiféron = infection latente, jamais maladie active"
      ]},
      { titre: "MNT", points: [
        "Diagnostic : clinique + TDM (tree-in-bud) + ≥ 2 cultures positives",
        "MAC : clarithro/rifampicine/éthambutol ≥ 12 mois après négativation",
        "Une culture positive unique = possible colonisation, ne suffit pas"
      ]}
    ],
    sources: [
      { t: "WHO TB guidelines", l: "https://www.who.int/publications/i/item/9789240061507" },
      { t: "BTS NTM 2017", l: "https://doi.org/10.1183/13993003.00794-2017" }
    ]
  },
  "m10": {
    titre: "Tumeurs thoraciques",
    sections: [
      { titre: "CBNPC", points: [
        "Stade précoce : chirurgie (lobectomie + curage) ; SBRT si inopérable",
        "Stade III non résécable : chimioradiothérapie + durvalumab (PACIFIC)",
        "EGFR muté : osimertinib 1re ligne (FLAURA) ; ALK : alectinib (ALEX)",
        "PD-L1 ≥ 50 % sans driver : pembrolizumab (KEYNOTE-024)",
        "Fitness à la chirurgie : guideline ERS/ESTS 2025"
      ]},
      { titre: "CPSC", points: [
        "Limité : platine-étoposide + radiothérapie concomitante + irradiation cérébrale prophylactique",
        "Étendu : chimio + atezolizumab (IMpower133)"
      ]},
      { titre: "irAEs (immunothérapie)", points: [
        "Pneumonitis à tout moment → TDM, LBA si doute",
        "Grade ≥ 2 : arrêt + corticoïdes 1-2 mg/kg ; grade 3-4 : hospitalisation",
        "Potentiellement mortelle — ne jamais différer le traitement"
      ]}
    ],
    sources: [
      { t: "ESMO NSCLC", l: "https://doi.org/10.1016/j.annonc.2023.10.008" },
      { t: "ERS/ESTS fitness 2025", l: "https://channel.ersnet.org/channel-25-guidelines" }
    ]
  },
  "m11": {
    titre: "Sommeil et contrôle respiratoire",
    sections: [
      { titre: "SAOS", points: [
        "Diagnostic : IAH ≥ 5 + symptômes, ou IAH ≥ 15",
        "PPC = traitement de référence (observance cible ≥ 4 h/nuit) — guideline ERS/ESRS 2026",
        "Alternative : orthèse d'avancée mandibulaire",
        "HTA résistante : dépister le SAOS"
      ]},
      { titre: "OHS", points: [
        "IMC ≥ 30 + PaCO2 diurne ≥ 45 mmHg",
        "VNI nocturne = traitement (O2 seul contre-indiqué)",
        "SAOS associé dans 80-90 %"
      ]},
      { titre: "Apnées centrales", points: [
        "Cheyne-Stokes de l'insuffisance cardiaque : ASV contre-indiquée si FEVG ≤ 45 % (SERVE-HF)",
        "AASM 2023 (endorsée ERS) : traitement des apnées centrales"
      ]}
    ],
    sources: [
      { t: "ERS/ESRS CPAP OSA 2026", l: "https://channel.ersnet.org/channel-25-guidelines" },
      { t: "ERS OHS 2017", l: "https://doi.org/10.1183/13993003.00777-2017" }
    ]
  },
  "m12": {
    titre: "Insuffisance respiratoire",
    sections: [
      { titre: "Aiguë", points: [
        "VNI : exacerbation BPCO avec pH < 7,35 (réduction intubation + mortalité)",
        "HFNO : hypoxémie sans hypercapnie (FLORALI)",
        "SDRA : ventilation protectrice VT 6 mL/kg, Pplat ≤ 30"
      ]},
      { titre: "Chronique", points: [
        "OLD (BPCO) : PaO2 ≤ 55 ou 56-59 + signes, ≥ 15 h/j",
        "VNI à domicile : OHS, neuromusculaire (CV < 50 %), kyphoscoliose",
        "O2 seul contre-indiqué si hypercapnie (sauf sous VNI)"
      ]}
    ],
    sources: [
      { t: "ERS/TSANZ NIV", l: "https://goldcopd.org" },
      { t: "ERS home ventilation 2019", l: "https://doi.org/10.1183/13993003.00131-2019" }
    ]
  },
  "m13": {
    titre: "Pneumopathies infiltrantes diffuses",
    sections: [
      { titre: "Démarche", points: [
        "Discussion multidisciplinaire (clinique + radiologie + histologie)",
        "UIP TDM typique = diagnostic de FPI sans biopsie"
      ]},
      { titre: "FPI", points: [
        "Antifibrotiques : nintédanib ou pirfénidone (ralentissent le déclin de CVF)",
        "Corticoïdes + azathioprine délétères (PANTHER)",
        "Suivi : déclin CVF > 10 %/an = progression ; exacerbation aiguë = mortalité > 50 %"
      ]},
      { titre: "Sarcoïdose", points: [
        "Scadding : I ADP ; II ADP + parenchyme ; III parenchyme ; IV fibrose",
        "Löfgren = bon pronostic, abstention",
        "Corticoïdes si retentissement ; organes menaçants = urgent"
      ]}
    ],
    sources: [
      { t: "ERS/ATS/JRS/ALAT IPF", l: "https://doi.org/10.1183/13993003.00929-2023" },
      { t: "ERS sarcoidosis 2014", l: "https://doi.org/10.1183/13993003.00179-2014" }
    ]
  },
  "m14": {
    titre: "Pathologies vasculaires pulmonaires",
    sections: [
      { titre: "HTP (ESC/ERS 2022 + update PAH ERS 2026)", points: [
        "HTP = PAPm > 20 mmHg ; pré-capillaire : PAPO ≤ 15 + RVP ≥ 3 WU",
        "HTAP à faible risque : association orale ARE + IPDE5/riociguat",
        "Cathétérisme droit obligatoire avant tout traitement spécifique",
        "Update ERS 2026 : traitement de l'HTAP"
      ]},
      { titre: "Embolie pulmonaire (ESC 2019)", points: [
        "Probabilité faible : D-dimères ; forte ou DD+ : TDM angio",
        "Haut risque (choc) : anticoagulation immédiate + thrombolyse",
        "CTEPH : dyspnée > 3 mois après EP → écho + V/Q ; curable (endartérectomie)"
      ]}
    ],
    sources: [
      { t: "ESC/ERS PH 2022", l: "https://doi.org/10.1183/13993003.00879-2022" },
      { t: "ERS PAH update 2026", l: "https://channel.ersnet.org/channel-25-guidelines" }
    ]
  },
  "m15": {
    titre: "Paroi thoracique et muscles respiratoires",
    sections: [
      { titre: "Diaphragme", points: [
        "Paralysie phrénique : sniff test (radioscopie) ou échographie diaphragmatique",
        "Post-chirurgie cardiaque : récupération fréquente (surveillance 6-12 mois)"
      ]},
      { titre: "Neuromusculaire", points: [
        "VNI nocturne dès symptômes d'hypoventilation ou CV < 50 %",
        "O2 seul contre-indiqué dans l'hypercapnie",
        "Céphalées matinales + fatigue = hypoventilation nocturne"
      ]}
    ],
    sources: [{ t: "ERS respiratory muscle testing 2019", l: "https://doi.org/10.1183/13993003.00352-2019" }]
  },
  "m16": {
    titre: "Pathologies pleurales et médiastinales",
    sections: [
      { titre: "Épanchement pleural", points: [
        "Light : prot. P/S > 0,5 ou LDH P/S > 0,6 ou LDH > 2/3 LSN",
        "Sous diurétiques : gradient protides > 31 g/L ou albumine > 12 g/L = transsudat",
        "Purulent (pH < 7,2, glucose < 2,2) : drainage + antibiotiques",
        "Repérage échographique systématique avant ponction"
      ]},
      { titre: "Pneumothorax (BTS 2023)", points: [
        "Primaire < 2 cm peu symptomatique : surveillance ± O2",
        "Étendu ou mal toléré : exsufflation (1re intention) ou drainage",
        "Chirurgie : récidive, bullage persistant, aviation/plongée"
      ]}
    ],
    sources: [{ t: "BTS pleural 2023", l: "https://doi.org/10.1183/13993003.00612-2023" }]
  },
  "m17": {
    titre: "Conséquences respiratoires des maladies systémiques",
    sections: [
      { titre: "Connectivites", points: [
        "Sclérodermie : PID NSIP + dépister HTP (DLCO isolément basse) ; mycophénolate",
        "Anti-synthétases : PID + myosite + mains de mécanicien"
      ]},
      { titre: "Immunodépression", points: [
        "GVHD pulmonaire : guideline ERS/EBMT 2023",
        "Déficits humoraux : bronchiectasies ; doser les Ig dans le bilan étiologique"
      ]}
    ],
    sources: [{ t: "ERS/EBMT GVHD 2023", l: "https://doi.org/10.1183/13993003.00896-2022" }]
  },
  "m18": {
    titre: "Maladies génétiques",
    sections: [
      { titre: "AATD", points: [
        "Emphysème panlobulaire basal, sujet jeune/non-fumeur → doser l'AAT",
        "Dépistage systématique recommandé (ERS/ATS 2017)",
        "Substitution IV si emphysème + variant déficitaire ; surveillance hépatique"
      ]},
      { titre: "DCP", points: [
        "Kartagener : bronchiectasies + sinusites + situs inversus",
        "NO nasal effondré + vidéomicroscopie + génétique (guideline ERS/ATS 2025)",
        "Infertilité masculine fréquente"
      ]},
      { titre: "Birt-Hogg-Dubé", points: [
        "Kystes pulmonaires + pneumothorax récidivant + fibrofolliculomes + risque rénal",
        "Surveillance rénale (TDM/IRM) ; FLCN"
      ]}
    ],
    sources: [
      { t: "ERS/ATS AATD 2017", l: "https://doi.org/10.1183/13993003.00164-2017" },
      { t: "ERS/ATS PCD 2025", l: "https://channel.ersnet.org/channel-25-guidelines" }
    ]
  },
  "m19": {
    titre: "Maladies professionnelles",
    sections: [
      { titre: "Asthme professionnel", points: [
        "Aggravation au travail, amélioration en congés = signature",
        "Débit de pointe en série travail/repos + tests spécifiques",
        "Diagnostic précoce = pronostic (éviter l'asthme fixé) ; déclaration MP"
      ]},
      { titre: "Amiante", points: [
        "Plaques = marqueur d'exposition le plus fréquent",
        "Asbestose = fibrose (fortes expositions), synergie tabac pour le cancer",
        "Épanchement bénin = précoce (< 20 ans) ; mésothéliome = tardif (> 30-40 ans)"
      ]},
      { titre: "Silicose", points: [
        "Micronodules apicaux + ADP calcifiées en coquille d'œuf",
        "Risque accru de TB et de cancer bronchique"
      ]}
    ],
    sources: [{ t: "ERS work-related asthma", l: "https://doi.org/10.1183/13993003.00185-2012" }]
  },
  "m20": {
    titre: "Épidémiologie, environnement et mode de vie",
    sections: [
      { titre: "Qualité de l'air (OMS 2021)", points: [
        "PM2.5 annuelle = 5 µg/m³ ; PM10 = 15 µg/m³",
        "PM2.5 24 h = 15 µg/m³ ; O3 8 h = 100 µg/m³",
        "Pollution = déterminant majeur (mortalité CV, exacerbations, infections)"
      ]},
      { titre: "e-cigarettes", points: [
        "Aérosol = propylène glycol/glycérol + nicotine + arômes + produits de dégradation",
        "Réduction des risques si substitution complète, mais dépendance nicotinique réelle",
        "Interdites de vente aux mineurs ; l'arrêt complet reste l'objectif"
      ]},
      { titre: "Altitude et plongée", points: [
        "Mal aigu des montagnes : montée progressive, acétazolamide si antécédent",
        "Plongée : contre-indications respiratoires (asthme non contrôlé, pneumothorax, bulles)"
      ]}
    ],
    sources: [
      { t: "WHO Air Quality 2021", l: "https://www.who.int/publications/i/item/9789240034221" },
      { t: "ERS e-cigarettes 2019", l: "https://doi.org/10.1183/13993003.01054-2019" }
    ]
  }
};
