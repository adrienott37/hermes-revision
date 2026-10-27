// Fiches de cours par module — points clés tirés des recommandations publiques
const FICHES = {
  "sciences-basiques": {
    titre: "Sciences de base et poumon sain",
    sections: [
      {
        titre: "Mécanique ventilatoire",
        points: [
          "Compliance = ΔV/ΔP : augmentée dans l'emphysème, diminuée dans la fibrose et le SDRA",
          "Le surfactant réduit la tension superficielle et augmente la compliance alvéolaire",
          "Pression de plateau = reflet de la compliance ; pression de pointe = reflet des résistances",
          "Compliance du système respiratoire en ventilation : VT / (Pplat − PEEPtotale) ; < 30-40 mL/cmH2O = poumon raide (SDRA)"
        ]
      },
      {
        titre: "Échanges gazeux",
        points: [
          "V/Q debout : ≈ 3 au sommet, ≈ 0,6 à la base",
          "Effet shunt (V/Q bas) : se corrige avec l'O2 ; shunt vrai : ne se corrige pas (PaO2 reste basse sous FiO2 1,0)",
          "Hypoventilation : hypoxémie + hypercapnie, A-a normal ; V/Q : hypoxémie, A-a augmenté",
          "CaO2 = (1,34 × Hb × SpO2) + (0,003 × PaO2) — l'anémie abaisse la DO2 malgré une SpO2 normale"
        ]
      },
      {
        titre: "Courbe de dissociation de l'Hb",
        points: [
          "Déplacement gauche (affinité ↑) : alcalose, hypocapnie, hypothermie, HbF, intoxication CO",
          "Déplacement droite (affinité ↓, libération tissulaire) : acidose, hypercapnie, fièvre, 2,3-DPG ↑",
          "P50 ≈ 26-27 mmHg à pH 7,4"
        ]
      },
      {
        titre: "Équilibre acide-base",
        points: [
          "Acidose respiratoire aiguë : +1 mmol/L HCO3 par +10 mmHg PaCO2 ; chronique : +3-4 mmol/L",
          "Compensation métabolique d'une acidose respiratoire : 3-5 jours (rein)",
          "Trou anionique = Na − (Cl + HCO3) ; normal ≤ 12 mmol/L ; élevé = acidocétose, lactates, IRC, intoxications",
          "Compensation attendue acidose métabolique : PaCO2 ≈ 1,5 × HCO3 + 8 ± 2"
        ]
      },
      {
        titre: "Défenses pulmonaires",
        points: [
          "Voies aériennes proximales : filtration nasale, escalator mucociliaire, toux",
          "Alvéoles : macrophages alvéolaires + drainage lymphatique",
          "Infections récidivantes à germes encapsulés → doser IgG/IgA/IgM, penser asplénie"
        ]
      },
      {
        titre: "Pharmacologie (durées d'action)",
        points: [
          "SABA (salbutamol) 4-6 h ; SAMA (ipratropium) 6-8 h",
          "LABA (formotérol, salmétérol) 12 h ; LABA ultra-longs (indacatérol, olodatérol, vilantérol) > 24 h",
          "Inhibiteurs CYP3A4 (clarithromycine, azolés) ↑ concentrations de budésonide et de nombreux TKI"
        ]
      }
    ]
  },
  "symptomes": {
    titre: "Symptômes et évaluation du patient",
    sections: [
      {
        titre: "Scores et symptômes",
        points: [
          "mMRC : 1 = essoufflé en montée rapide ; 2 = plus lent que les pairs / arrêt à 100 m en montée ; 3 = arrêt à 100 m sur le plat ; 4 = ne sort pas",
          "Toux chronique (ERS 2020) : > 8 semaines chez l'adulte",
          "Démarche toux chronique : IEC ? → radio/Tabac → asthme → rhinite/upper airway → RGO (IPP double dose 8 sem.) ; réfractaire : gabapentinoïdes + rééducation comportementale",
          "Hémoptysie du fumeur = TDM injectée (cancer) jusqu'à preuve du contraire"
        ]
      },
      {
        titre: "Spirométrie et EFR",
        points: [
          "Obstruction : VEMS/CVF < 0,70 (ou < LIN) ; réversibilité : +12 % et +200 mL du VEMS",
          "Restriction : CPT < 80 % du théorique — jamais la CVF seule",
          "DLCO abaissée + volumes préservés = atteinte vasculaire (HTP, embolie) ; DLCO basse + CPT basse = PID/emphysème",
          "Pléthysmographie > dilution (hélium/azote) en cas de bulles/trapping (air non communicant)"
        ]
      },
      {
        titre: "Tests d'effort",
        points: [
          "TM6 : distance = prédicteur de mortalité (BPCO, HTAP, PID) ; < 350 m (BPCO) ou < 440 m (HTAP) = sévère",
          "Borg 0-10 : dyspnée perçue à l'effort"
        ]
      },
      {
        titre: "Endoscopie et imagerie",
        points: [
          "EBUS-TBNA : stadification médiastinale (stations 2R/2L, 4R/4L, 7, 10-11) ; EUS pour 4L/7/8/9",
          "Staging : ponctionner d'abord la station la plus « distale » (N3 > N2 > N1) pour établir le stade maximal",
          "Signes TDM : rayon de miel = fibrose (UIP) ; verre dépoli = souvent réversible ; septa lisses = œdème/lymphangite"
        ]
      },
      {
        titre: "Gaz du sang : réflexes",
        points: [
          "pH ↓ + PaCO2 ↑ = acidose respiratoire (chronique si HCO3 élevé)",
          "Hypoxémie + PaCO2 basse = défaut V/Q ou shunt → penser embolie pulmonaire",
          "Anémie : SpO2 normale mais CaO2 abaissé — toujours interpréter avec l'Hb"
        ]
      }
    ]
  },
  "voies-aeriennes": {
    titre: "Maladies obstructives des voies aériennes",
    sections: [
      {
        titre: "BPCO — évaluation (GOLD)",
        points: [
          "Obstruction fixe post-bronchodilatateur : VEMS/CVF < 0,70",
          "Stade 1-4 : VEMS ≥ 80 / 50-79 / 30-49 / < 30 % du théorique",
          "Groupes ABE : A = peu symptomatique (mMRC 0-1) sans exacerbation ; B = mMRC ≥ 2 sans exacerbation ; E = ≥ 2 exacerbations ou ≥ 1 hospitalisation/an",
          "Exacerbation : aggravation aiguë au-delà de la variabilité quotidienne nécessitant un changement de traitement"
        ]
      },
      {
        titre: "BPCO — traitement",
        points: [
          "Groupe A : bronchodilatateur court ou long selon symptômes",
          "Groupe B : LAMA (ou LABA) ; si symptômes persistants → LAMA/LABA",
          "Groupe E : LAMA/LABA d'emblée",
          "Ajouter CSI si exacerbations malgré LAMA/LABA : surtout si éosinophiles ≥ 300/µL (ou ≥ 100 avec hospitalisations)",
          "Exacerbation : SABA/SAMA ± corticoïdes 5 jours ± antibiotiques si purulence (Anthonisen) ; VNI si pH < 7,35",
          "OLD si PaO2 ≤ 55 (ou 56-59 avec polyglobulie/HTP/œdèmes), ≥ 15 h/j"
        ]
      },
      {
        titre: "Asthme — contrôle et traitement (GINA)",
        points: [
          "Non contrôlé : symptômes > 2x/sem, réveils nocturnes, secours > 2x/sem, limitation d'activité, exacerbation",
          "Le SABA seul n'est plus recommandé (GINA 2019+) : CSI-formotérol à la demande ou de fond",
          "Asthme sévère : niveau 4-5 requis pour le contrôle — vérifier d'abord observance, technique, comorbidités (RGO, rhinite, SAOS)",
          "Biologiques : anti-IL-5 si éosinophiles élevés + exacerbations ; anti-IgE si sensibilisation + IgE élevées"
        ]
      },
      {
        titre: "Overlap et autres",
        points: [
          "Asthme-BPCO overlap : obstruction fixe + réversibilité/éosinophilie — forte réponse aux CSI",
          "Bronchiectasies : TDM haute résolution ; bilan : test de la sueur, IgG/A/M, Aspergillus, AAT",
          "Small airways : spirométrie normale mais trapping (VR/CPT ↑), hyperinflation à l'effort"
        ]
      }
    ]
  },
  "oncologie": {
    titre: "Oncologie thoracique",
    sections: [
      {
        titre: "Dépistage",
        points: [
          "TDM faible dose annuelle : gros fumeurs 50-80 ans, 20-30 PA, sevrage < 15 ans (NLST, NELSON)",
          "NELSON : volumétrie des nodules (doublement volume < 400 jours = suspect), −24 % mortalité spécifique (hommes)"
        ]
      },
      {
        titre: "Stadification TNM (8e édition)",
        points: [
          "T1a ≤ 1 cm / T1b > 1-2 cm / T1c > 2-3 cm / T2a > 3-4 cm (ou atélectasie, envahissement proximal) / T2b > 4-5 cm / T3 > 5-7 cm / T4 > 7 cm",
          "N2 = médiastinal ipsilatéral ; N3 = controlatéral ou sus-claviculaire",
          "EBUS : ponctionner d'abord le N3/N2 le plus suspect (stade maximal)"
        ]
      },
      {
        titre: "Traitement par stade",
        points: [
          "Stade précoce opérable : lobectomie + curage ; SBRT si inopérable",
          "Stade III non résécable : chimioradiothérapie concomitante (60 Gy) puis durvalumab 12 mois (PACIFIC)",
          "Stade IV avec driver EGFR : osimertinib (FLAURA) ; ALK : alectinib/brigatinib/lorlatinib (ALEX/ALTA-1L/CROWN)",
          "PD-L1 ≥ 50 % sans driver : pembrolizumab 1re ligne (KEYNOTE-024)",
          "Petites cellules limité : platine-étoposide + radiothérapie concomitante + irradiation cérébrale prophylactique ; étendu : + atezolizumab (IMpower133)"
        ]
      },
      {
        titre: "Mésothéliome et tumeurs médiastinales",
        points: [
          "Mésothéliome : cisplatine-pemetrexed ± bévacizumab (MAPS) ; nivolumab+ipilimumab en 2e ligne (CHECKMATE-743)",
          "Biopsies thoracoscopiques = rendement > 90 % ; SMRP pour le suivi",
          "Thymome : médiastin antérieur + myasthénie (30-45 %) ; anti-AChR ; traitement chirurgical"
        ]
      },
      {
        titre: "Surveillance de l'immunothérapie",
        points: [
          "Pneumopathie immuno-induite : toute dyspnée/toux sous anti-PD-1 → imagerie, corticoïdes selon grade",
          "Avant immunothérapie : PD-L1 + recherche drivers chez non-fumeurs/adénocarcinomes"
        ]
      }
    ]
  },
  "infections": {
    titre: "Infections respiratoires",
    sections: [
      {
        titre: "Pneumonie aiguë communautaire",
        points: [
          "CURB-65 : confusion, urée > 7, FR ≥ 30, PAS < 90 ou PAD ≤ 60, âge ≥ 65 — 0-1 ambulatoire, ≥ 2 hospitalisation",
          "Ambulatoire sans comorbidité : amoxicilline (ou doxycycline/macrolide selon résistances)",
          "Hospitalisé : C3G ± macrolide ; réanimation : bithérapie C3G + macrolide IV (ou FQ antipneumococcique)",
          "Grossesse : amoxicilline ; éviter cyclines, fluoroquinolones, cotrimoxazole (T1)"
        ]
      },
      {
        titre: "Tuberculose",
        points: [
          "Diagnostic : BAAR + culture/Xpert MTB/RIF (détecte la résistance à la rifampicine) — systématique si BAAR+",
          "Traitement sensible : RHZE 2 mois puis RH 4 mois (6 mois total)",
          "IDR/Quantiféron = infection latente, jamais maladie active"
        ]
      },
      {
        titre: "MNT et fongiques",
        points: [
          "MNT (ATS/ERS 2007) : clinique + TDM + microbiologie (≥ 2 expectorations positives ou 1 LBA) — MAC, traitement ≥ 12 mois après négativation",
          "ABPA : asthme + IgE > 1000 + éosinophilie + précipitines + bronchectasies proximales",
          "Aspergillose invasive : hôte à risque + galactomannane + TDM (halo) — pas les précipitines"
        ]
      },
      {
        titre: "VAP et immunodéprimés",
        points: [
          "Prévention VAP : tête de lit 30-45°, chlorhexidine buccale, hygiène des mains, retrait précoce du matériel",
          "Diagnostic VAP : prélèvements quantitatifs (LBA ≥ 10⁴ UFC/mL)",
          "Pneumocystose : CD4 < 200 + verre dépoli + hypoxémie → cotrimoxazole forte dose ± corticoïdes (PaO2 < 70)"
        ]
      }
    ]
  },
  "interstitielles": {
    titre: "Pathologies pulmonaires interstitielles",
    sections: [
      {
        titre: "Démarche",
        points: [
          "Discussion multidisciplinaire clinique + radiologie + histologie — jamais de biopsie systématique",
          "UIP TDM typique = diagnostic de FPI sans biopsie (basal, sous-pleural, rayon de miel, traction)"
        ]
      },
      {
        titre: "FPI",
        points: [
          "Antifibrotiques : nintédanib ou pirfénidone (ralentissent le déclin de la CVF)",
          "Corticoïdes + azathioprine = délétères (PANTHER)",
          "Suivi : déclin de CVF > 10 % en 6-12 mois = progression ; exacerbation aiguë = mortalité > 50 %"
        ]
      },
      {
        titre: "Sarcoïdose",
        points: [
          "Scadding : 0 normal / I ADP hilaires / II ADP + parenchyme / III parenchyme / IV fibrose",
          "Löfgren (ADP + érythème noueux + arthralgies) = bon pronostic, abstention",
          "Traitement si retentissement : corticoïdes, puis immunosuppresseurs (méthotrexate) ; organes menaçants = urgence"
        ]
      },
      {
        titre: "Hypersensibilité et connectivites",
        points: [
          "PH : anamnèse expositionnelle + LBA lymphocytaire + verre dépoli/micronodules ; traitement = éviction",
          "Anti-synthétases (Jo1, PL-7, PL-12) : PID + myosite + mains de mécanicien",
          "Sclérodermie : PID NSIP + dépister HTP (DLCO isolément basse) ; mycophénolate"
        ]
      },
      {
        titre: "Autres",
        points: [
          "Vascularites ANCA : hémorragie alvéolaire + atteinte rénale → urgence thérapeutique",
          "Silicose : micronodules apicaux + ADP calcifiées « egg-shell » + risque TB/cancer",
          "Protéinose alvéolaire : crazy paving + LBA lactescent PAS+"
        ]
      }
    ]
  },
  "pleure-mediastin": {
    titre: "Plèvre, paroi thoracique et médiastin",
    sections: [
      {
        titre: "Épanchement pleural",
        points: [
          "Light : prot. pleur/sér > 0,5 ou LDH pleur/sér > 0,6 ou LDH > 2/3 LSN = exsudat",
          "Faux exsudat possible sous diurétiques : gradient protides sérum-pleure > 31 g/L ou albumine > 12 g/L = transsudat",
          "Purulente : pH < 7,2 ou glucose < 2,2 → drainage + antibiotiques",
          "TB pleurale : lymphocytaire + ADA élevée + biopsies"
        ]
      },
      {
        titre: "Pneumothorax",
        points: [
          "Primaire petit (< 2 cm) et peu symptomatique : surveillance ± O2",
          "Étendu (> 2 cm) ou symptomatique : exsufflation ou drainage",
          "Chirurgie (VATS + symphyse) : récidive, bullage persistant, professions à risque (aviation, plongée)"
        ]
      },
      {
        titre: "Paroi et diaphragme",
        points: [
          "Paralysie phrénique : sniff test (radioscopie/échographie) — abolition ou paradoxe",
          "Cyphoscoliose sévère : restriction + hypoventilation → VNI nocturne"
        ]
      },
      {
        titre: "Médiastin",
        points: [
          "Antérieur : thymome (myasthénie, anti-AChR), lymphome, goître, tumeurs germinales",
          "Moyen/postérieur : kystes bronchogéniques, neurinomes",
          "Mésothéliome : pleurésie nodulaire douloureuse + exposition amiante → thoracoscopie (rendement > 90 %)"
        ]
      }
    ]
  },
  "circulation": {
    titre: "Circulation pulmonaire et cœur droit",
    sections: [
      {
        titre: "Hypertension pulmonaire (ESC/ERS 2022)",
        points: [
          "HTP : PAPm > 20 mmHg ; pré-capillaire : PAPO ≤ 15 + RVP ≥ 3 WU ; post-capillaire : PAPO > 15",
          "Groupes : 1 HTAP ; 2 cardiopathies gauches ; 3 maladies respiratoires ; 4 CTEPH ; 5 divers",
          "HTAP à faible risque : association orale ARE + IPDE5 (ou riociguat), réévaluation 3-6 mois",
          "HTP de la BPCO « disproportionnée » (PAPm > 35-40) : éliminer CTEPH/cardiopathie avant d'imputer au poumon"
        ]
      },
      {
        titre: "Embolie pulmonaire aiguë",
        points: [
          "Probabilité faible : D-dimères ; positive ou probabilité forte : TDM angio",
          "Faible risque (PESI/sPESI bas, troponine, écho normales) : anticoagulation à domicile possible",
          "Haut risque (choc) : support hémodynamique + anticoagulation + thrombolyse ou thrombectomie",
          "Grossesse : D-dimères peu utiles — imagerie sans délai si suspicion"
        ]
      },
      {
        titre: "CTEPH",
        points: [
          "Dyspnée persistante > 3 mois après EP : écho + scintigraphie V/Q (un V/Q normal exclut la CTEPH)",
          "Confirmation : cathétérisme droit + angiographie ; curable par endartérectomie ; riociguat/BPA si inopérable"
        ]
      },
      {
        titre: "Cœur pulmonaire et Divers",
        points: [
          "Cœur pulmonaire chronique : RVJ + œdèmes + hépatomégalie — traiter la cause ; vasodilatateurs HTAP non indiqués (groupe 3)",
          "TEV du cancer : AOD validés (Hokusai-VTE, Caravaggio) ≥ 6 mois tant que le cancer est actif",
          "MAVP : Rendu-Osler (ENG/ACVRL1), shunt droit-gauche → hypoxémie + embolies paradoxales ; embolisation"
        ]
      }
    ]
  },
  "insuffisance": {
    titre: "Insuffisance respiratoire et soins respiratoires critiques",
    sections: [
      {
        titre: "Oxygénothérapie",
        points: [
          "BPCO/hypercapnie : cible SpO2 88-92 % (risque d'aggravation de l'hypercapnie au-delà)",
          "OLD (BPCO) : PaO2 ≤ 55 (ou 56-59 avec polyglobulie/HTP/œdèmes), ≥ 15 h/j, bénéfice pronostique",
          "PID : O2 de déambulation selon désaturation à l'effort (pas de bénéfice pronostique démontré)",
          "HFNO : hypoxémie aiguë sans hypercapnie, avant intubation (FLORALI)"
        ]
      },
      {
        titre: "VNI",
        points: [
          "Indication princeps aiguë : exacerbation BPCO avec pH < 7,35 (réduction intubation + mortalité)",
          "Autres : OAP cardiogénique, immunodéprimé hypoxémique (surveillance stricte), hypoventilation chronique (OHS, neuromusculaire)",
          "OHS : VNI nocturne (Pickwick) ; SLA : VNI dès symptômes/CV < 50 %"
        ]
      },
      {
        titre: "SDRA (Berlin)",
        points: [
          "Définition : < 7 jours, opacités bilatérales, pas de surcharge, PaO2/FiO2 ≤ 300 sous PEEP ≥ 5",
          "Léger 201-300 / modéré 101-200 / sévère ≤ 100",
          "Ventilation protectrice : VT 6 mL/kg poids prédit, Pplat ≤ 30 — seule mesure réduisant la mortalité",
          "PaO2/FiO2 < 150 : ventilation pronale (PROSEVA) ; curarisation 48 h"
        ]
      },
      {
        titre: "Sevrage et sepsis",
        points: [
          "RSBI (f/VT) < 105 = meilleur prédicteur isolé ; épreuve de ventilation spontanée 30-120 min",
          "Sepsis-3 : infection + SOFA ≥ 2 ; choc septique : noradrénaline en 1re ligne (cible MAP 65), lactates à normaliser"
        ]
      }
    ]
  },
  "sommeil": {
    titre: "Médecine du sommeil",
    sections: [
      {
        titre: "SAOS",
        points: [
          "Diagnostic : IAH ≥ 5 + symptômes, ou IAH ≥ 15 ; sévérité : 5-15 / 15-30 / > 30",
          "Traitement 1re intention (modéré-sévère) : PPC — observance cible ≥ 4 h/nuit",
          "Intolérance PPC : orthèse d'avancée mandibulaire ; chirurgie maxillomandibulaire dans des cas sélectionnés",
          "HTA résistante : SAOS chez ~30-50 % — dépister",
          "Conduite + somnolence : traiter sans délai, restreindre la conduite jusqu'au contrôle"
        ]
      },
      {
        titre: "Hypoventilation",
        points: [
          "OHS : IMC ≥ 30 + PaCO2 ≥ 45 + sleep-disordered breathing → VNI nocturne (± EPAP si SAOS dominant)",
          "Apnées centrales de l'insuffisant cardiaque (Cheyne-Stokes) : ASV contre-indiquée si FEVG ≤ 45 % (SERVE-HF)",
          "Hypoventilation centrale (CCHS/PHOX2B, late-onset) : VNI, bilan génétique"
        ]
      },
      {
        titre: "Autres",
        points: [
          "SJSR : urge de bouger + repos + soulagement au mouvement + vespéral ; ferritine < 75 µg/L → supplémentation d'abord",
          "Insomnie chronique : TCC-I en 1re intention ; hypnotiques ponctuels seulement",
          "Narcolepsie : somnolence + cataplexie, SOREMPs ; test de latence multiples"
        ]
      }
    ]
  }
};
