
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  et: {
    translation: {
      nav: {
        solutions: 'Lahendused',
        services: 'Teenused',
        about: 'Meist',
        contact: 'Kontakt',
        startProject: 'Alusta projekti',
        language: 'Keel'
      },
      hero: {
        badge: 'Epicor & iScala Partner',
        title: 'Pane oma tootmine ja ladu tööle nagu kellavärk.',
        description: 'Andares Consulting on Epicor ja iScala ametlik partner Eestis.',
        audit: 'Broneeri audit',
        howItWorks: 'Lahendused'
      },
      trust: {
        badge: 'Kogemus',
        title: 'Kindel partner',
        subtitle: 'Eesti kogeninuim Epicori meeskond.',
        partnersLabel: 'Partnerid',
        stat1: {
          value: '30 a',
          label: 'Kogemust',
          desc: 'Alates 1995'
        },
        stat2: {
          value: '50+',
          label: 'Klienti',
          desc: 'Tootmine ja logistika'
        },
        stat3: {
          value: '#1',
          label: 'Eestis',
          desc: 'Sertifitseeritud'
        }
      },
      solutions: {
        title: 'Meie lahendused',
        p1: '',
        p2: '',
        chooseTitle: 'Vali sobiv platvorm',
        targetTitle: 'Kellele:',
        learnMore: 'Loe lähemalt',
        iscala: {
          header: 'Epicor iScala',
          tag: 'Logistika & Finants',
          description: '', 
          targets: ['Hulgimüük', 'Logistika'],
          features: ['Tsentraliseeritud finantsid', 'Tarneahela juhtimine (SCM)', 'Mitmekeelne tugi']
        },
        epicor: {
          header: 'Epicor ERP',
          tag: 'Tööstus & Tootmine',
          description: '',
          targets: ['Tootmine', 'Tehased'],
          features: ['Tootmise planeerimine (MES)', 'Reaalajas monitooring', 'Kvaliteedikontroll']
        }
      },
      comparison: {
        title: 'Miks valida Andares Consulting?',
        subtitle: 'Erinevus on detailides.',
        guarantee: 'Garantii: Sinu äri ei peatu ülemineku ajal.',
        headers: {
            feature: 'Võrdlus',
            standard: 'Tavaline ERP',
            andares: 'Andares Lahendus'
        },
        rows: [
            { label: 'Spetsialiseerumine', standard: '(Üldine)', andares: '100% Tootmiskeskne', checkStandard: false, checkAndares: true },
            { label: 'Kohalik kasutajatugi', standard: '', andares: 'Kohalik meeskond', checkStandard: false, checkAndares: true },
            { label: 'Juurutamise kiirus', standard: '12+ kuud', andares: '3-6 kuud', checkStandard: false, checkAndares: true },
            { label: 'Fikseeritud eelarve', standard: '', andares: 'Fikseeritud eelarve', checkStandard: false, checkAndares: true }
        ]
      },
      industries: {
        header: 'Valdkonnad',
        subtext: 'Lahendused teie äri eripäradele.',
        select: 'Valdkond',
        cta: 'Saa lahendus',
        features: 'Võimalused:',
        items: {
          manufacturing: {
            label: 'Tootmine',
            title: 'Tootmisjuhtimine',
            description: 'Ressursside planeerimine ja andmete sünkroniseerimine.',
            benefits: ['MRP Planeerimine', 'Partiide jälgitavus', 'Kvaliteedikontroll', 'Omahinna arvestus'],
            quote: { text: 'Tootmistsükkel vähenes 20%.', author: 'Tootmisjuht' }
          },
          wholesale: {
            label: 'Logistika',
            title: 'WMS & Logistika',
            description: 'Täpsed laoseisud ja optimeeritud tarned.',
            benefits: ['WMS vöötkoodidega', 'Nõudluse prognoos', 'Tarneahela juhtimine', 'Otsetarned'],
            quote: { text: 'Reaalajas kasumlikkus.', author: 'Logistikadirektor' }
          },
          service: {
            label: 'Teenindus',
            title: 'Projektid & Hooldus',
            description: 'Projektide kasumlikkus ja lepingute täitmine.',
            benefits: ['Eelarvestamine', 'Mobiilirakendus', 'Aja arvestus', 'Ressursid'],
            quote: { text: 'Täpne arveldus on meie kasvu alus.', author: 'Tegevjuht' }
          },
          finance: {
            label: 'Finantsid',
            title: 'Finantsjuhtimine',
            description: 'Ühtne finantspilt kõigi üksuste lõikes.',
            benefits: ['Mitmevaluuta', 'Võlgnevused', 'Rahavood', 'E-arved'],
            quote: { text: 'Finantside konsolideerimine on nüüd automaatne.', author: 'CFO' }
          }
        }
      },
      local: {
        badge: 'Ekspertiis',
        title: 'Kohalik partner',
        description: 'Teie süsteem vastab Eesti seadustele.',
        cta: 'Konsultatsioon',
        compliance: {
          title: 'Seadusandlus',
          desc: 'KMKR ja aruandlus'
        },
        language: {
          title: 'Emakeelne tugi',
          desc: 'EST / ENG / RUS',
          team: 'Tallinna meeskond'
        },
        integrations: {
          title: 'Liidestused',
          desc: 'Pangad ja Telema'
        }
      },
      modules: {
        financeContent: {
          title: 'Finantsjuhtimine',
          p1: 'Edukas finantsjuhtimine on ettevõtte alustala.',
          p2: '',
          highlight: 'iScala on tipptasemel finantstarkvara.',
          listTitle1: 'Sisaldab:',
          list1: ['Pearaamat', 'Müügireskontro', 'Ostureskontro'],
          listTitle2: 'Võimalused:',
          list2: [
            'Eelarved',
            'Mitmevaluuta',
            'Konsolideerimine',
            'Rahavood',
            'Otsekorraldused'
          ],
          readMore: 'Loe lisa'
        }
      },
      epicorPage: {
        hero: {
          title: 'Epicor Kinetic',
          subtitle: 'Tuleviku tootmistarkvara, mis on loodud kasvama.',
          desc: 'Spetsiaalselt tootmisettevõtetele loodud pilvepõhine ERP, mis ühendab kogu tehase.',
          cta: 'Küsi demo'
        },
        problems: {
          title: 'Probleemid, mida lahendame',
          p1: { title: 'Pime tootmine', desc: 'Puudub reaalajas ülevaade tootmise statusest ja seadmete koormatusest.' },
          p2: { title: 'Katkine tarneahel', desc: 'Materjalide hilinemine ja laoseisude ebatäpsus peatab tootmisliinid.' },
          p3: { title: 'Manuaalne töö', desc: 'Exceli tabelid ja käsitöö aeglustavad planeerimist ja pakkumiste tegemist.' }
        },
        features: {
          title: 'Võtmemoodulid',
          f1: { title: 'Tootmise juhtimine (MES)', desc: 'Reaalajas andmed otse tööpinkidelt ja operaatoritelt.' },
          f2: { title: 'Planeerimine (APS)', desc: 'Automaatne tootmisplaani optimeerimine vastavalt ressurssidele.' },
          f3: { title: 'Finantsjuhtimine', desc: 'Täpne omahinna arvestus ja integreeritud raamatupidamine.' },
          f4: { title: 'Tarneahel (SCM)', desc: 'Ostusoovitused ja laovarude optimeerimine.' },
          f5: { title: 'Müügihaldus (CRM)', desc: 'Pakkumiste koostamine ja kliendisuhete haldus.' },
          f6: { title: 'Kvaliteedikontroll', desc: 'Jälgitavus partiide ja seerianumbrite lõikes.' }
        },
        capabilities: {
          title: 'Täielik funktsionaalsus',
          items: {
            production: { title: 'Tootmise juhtimine (MES)', desc: 'Planeerimine ja täitmine reaalajas.' },
            project: { title: 'Projektijuhtimine', desc: 'Jälgi projekti kulusid ja tähtaegu.' },
            asset: { title: 'Varade haldus (EAM)', desc: 'Seadmete hooldus ja elutsükli juhtimine.' },
            maintenance: { title: 'Hooldustellimused', desc: 'Ennetav hooldus ja remont.' },
            supply: { title: 'Tarneahela haldus (SCM)', desc: 'Ostmine ja varude optimeerimine.' }
          }
        },
        cta: {
          title: 'Valmis järgmiseks sammuks?',
          text: 'Vii oma tootmine uuele tasemele Epicor Kineticuga.'
        }
      },
      iscalaPage: {
        hero: {
          title: 'Epicor iScala',
          subtitle: 'Globaalne äri, lokaalne kontroll.',
          desc: 'Terviklik ERP lahendus rahvusvahelistele ettevõtetele, hulgimüüjatele ja hotellidele.',
          cta: 'Küsi pakkumist'
        },
        problems: {
          title: 'Väljakutsed, mida ületame',
          p1: { title: 'Killustunud andmed', desc: 'Erinevad süsteemid finantside ja lao jaoks tekitavad vigu.' },
          p2: { title: 'Keeruline aruandlus', desc: 'Kontserni konsolideerimine võtab nädalaid, mitte minuteid.' },
          p3: { title: 'Globaalne skaleerimine', desc: 'Vajadus toe järele mitmes riigis ja valuutas.' }
        },
        features: {
          title: 'iScala Võimekused',
          f1: { title: 'Globaalne Finants', desc: 'Mitme ettevõtte, valuuta ja keele tugi ühes andmebaasis.' },
          f2: { title: 'Tarneahel & Logistika', desc: 'Täiustatud laohaldus (WMS) ja nõudluse planeerimine.' },
          f3: { title: 'Teenindusjuhtimine', desc: 'Lepingute, garantiide ja väliteeninduse (Field Service) haldus.' },
          f4: { title: 'Projektijuhtimine', desc: 'Kulude ja tulude jälgimine projektipõhiselt.' },
          f5: { title: 'Hospitality', desc: 'Spetsiaalne lahendus hotellidele ja restoranidele (PMS liidestused).' },
          f6: { title: 'Integratsioonid', desc: 'Lihtne ühendamine pankade, e-poodide ja partneritega.' }
        },
        capabilities: {
          title: 'Täielik funktsionaalsus',
          items: {
            logistics: { title: 'Logistika ja Laohaldus (WMS)', desc: 'Täpne laoseis ja tarned.' },
            finance: { title: 'Finantsjuhtimine', desc: 'Pearaamat, võlad, nõuded, mitu valuutat.' },
            supply: { title: 'Hanke- ja Tarneahela haldus', desc: 'Ostutellimused ja tarnijad.' },
            contracts: { title: 'Lepingute haldus', desc: 'Teenuslepingud ja arveldus.' },
            hr: { title: 'Palga- ja personalihaldus', desc: 'Tööajaarvestus ja palgad.' }
          }
        },
        modules: {
          title: 'Funktsionaalsus ja Moodulid',
          items: {
            finance: { title: 'Finantsjuhtimine', desc: 'Mitme valuuta ja ettevõtte tugi.' },
            logistics: { title: 'Logistika ja Laohaldus', desc: 'Optimeeritud laoseis ja tarned.' },
            hr: { title: 'Palga- ja personalihaldus', desc: 'Palgad ja tööjõu planeerimine.' },
            contracts: { title: 'Lepingute haldus', desc: 'Lepingute elutsükli haldus.' },
            supply: { title: 'Tarneahela juhtimine', desc: 'Tõhus tarneahela ja varude juhtimine.' }
          }
        },
        cta: {
          title: 'Optimeeri oma äriprotsesse.',
          text: 'Võta kontroll oma rahvusvahelise äri üle.'
        }
      },
      references: {
        title: 'Edulood',
        subtitle: 'Eesti juhtivate ettevõtete strateegiline partner.',
        trustTitle: 'Meid usaldavad tööstusliidrid',
        moreClients: 'Ja paljud teised...',
        contactUs: 'Liitu nendega',
        items: [
           { label: "Tootmisettevõtted" },
           { label: "Logistika ja Hulgimüük" },
           { label: "Teenindus ja Horeca" },
           { label: "Jaekaubandus" }
        ],
        cases: {
          eskaro: {
            challenge: 'Keerukas planeerimine',
            solution: 'Tootmismoodul ja aruandlus',
            result: 'Täpne omahind'
          },
          prike: {
            challenge: 'Suur maht',
            solution: 'Müügi automatiseerimine',
            result: 'Kiirus'
          },
          logistics: {
            challenge: 'WMS liidestus',
            solution: 'Reaalajas andmevahetus',
            result: 'Sünkroonus'
          }
        }
      },
      whyUs: {
        title: 'Miks meid valida?',
        stats: {
            clients: { val: '20 000+', label: 'Klienti' },
            countries: { val: '150+', label: 'Riiki' },
            partners: { val: '500+', label: 'Partnerit' }
        }
      },
      cases: {
        title: 'Tehtud tööd',
        subtitle: 'Tulemused räägivad enda eest.',
        portfolioBtn: 'Portfoolio',
        items: [
          { title: 'Metalli tootmine', metricDesc: 'Varud' },
          { title: 'Jaemüügi ladu', metricDesc: 'Kiirus' },
          { title: 'Väliteenindus', metricDesc: 'Tunnid' }
        ]
      },
      process: {
        title: 'Tööprotsess',
        subtitle: 'Lihtne ja kontrollitud teekond.',
        steps: [
          { title: 'Audit ja Analüüs' },
          { title: 'Lahenduse disain' },
          { title: 'Juurutamine ja koolitus' },
          { title: 'Tugi ja arendus' }
        ]
      },
      contact: {
        bannerTitle: 'Alustame?',
        bannerText: 'Konsultatsioon on tasuta.',
        office: 'Kontor',
        phone: 'Telefon',
        formTitle: 'Kirjutage meile',
        formSubtitle: 'Vastame 1 tööpäeva jooksul.',
        fields: {
          name: 'Nimi',
          company: 'Ettevõte',
          email: 'E-post',
          message: 'Sõnum',
          placeholderName: 'Nimi',
          placeholderCompany: 'Ettevõte',
          placeholderMsg: 'Sõnum...'
        },
        submit: 'Saada'
      },
      footer: {
        tagline: 'Usaldusväärne ERP partner aastast 1995.',
        services: 'Teenused',
        industries: 'Valdkonnad',
        company: 'Ettevõte',
        rights: 'Kõik õigused kaitstud.',
        regCode: 'Reg',
        vatCode: 'KMKR'
      },
      finalCta: {
        title: 'Tootmine korda.',
        subtitle: 'Broneeri tasuta 30-minutiline konsultatsioon.',
        button: 'Broneeri audit',
        callAction: 'Call'
      }
    }
  },
  en: {
    translation: {
      nav: {
        solutions: 'Solutions',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        startProject: 'Start Project',
        language: 'Language'
      },
      hero: {
        badge: 'Epicor & iScala Partner',
        title: 'Make production run like clockwork.',
        description: 'Andares Consulting is the official Epicor and iScala partner in Estonia.',
        audit: 'Book Audit',
        howItWorks: 'Solutions'
      },
      trust: {
        badge: 'Experience',
        title: 'Trusted Partner',
        subtitle: 'Most experienced Epicor team in Estonia.',
        partnersLabel: 'Partners',
        stat1: {
          value: '30 y',
          label: 'Experience',
          desc: 'Since 1995'
        },
        stat2: {
          value: '50+',
          label: 'Clients',
          desc: 'Manufacturing & Logistics'
        },
        stat3: {
          value: '#1',
          label: 'In Estonia',
          desc: 'Certified'
        }
      },
      solutions: {
        title: 'Our Solutions',
        p1: '',
        p2: '',
        chooseTitle: 'Choose the Right Platform',
        targetTitle: 'For:',
        learnMore: 'Learn More',
        iscala: {
          header: 'Epicor iScala',
          tag: 'Logistics & Finance',
          description: '', 
          targets: ['Wholesale', 'Logistics'],
          features: ['Centralized Finance', 'Supply Chain Management (SCM)', 'Multilingual Support']
        },
        epicor: {
          header: 'Epicor ERP',
          tag: 'Industry & Manufacturing',
          description: '',
          targets: ['Manufacturing', 'Factories'],
          features: ['Manufacturing Execution (MES)', 'Real-time Monitoring', 'Quality Control']
        }
      },
      comparison: {
        title: 'Why Choose Andares Consulting?',
        subtitle: 'The difference is in the details.',
        guarantee: 'Guarantee: Your business won\'t stop during transition.',
        headers: {
            feature: 'Comparison',
            standard: 'Standard ERP',
            andares: 'Andares Solution'
        },
        rows: [
            { label: 'Specialization', standard: '(General)', andares: '100% Manufacturing', checkStandard: false, checkAndares: true },
            { label: 'Local Support', standard: '', andares: 'Local Team', checkStandard: false, checkAndares: true },
            { label: 'Implementation Speed', standard: '12+ months', andares: '3-6 months', checkStandard: false, checkAndares: true },
            { label: 'Fixed Budget', standard: '', andares: 'Fixed Budget', checkStandard: false, checkAndares: true }
        ]
      },
      industries: {
        header: 'Industries',
        subtext: 'Solutions tailored to your business.',
        select: 'Industry',
        cta: 'Get Solution',
        features: 'Features:',
        items: {
          manufacturing: {
            label: 'Manufacturing',
            title: 'Manufacturing Management',
            description: 'Resource planning and data synchronization.',
            benefits: ['MRP Planning', 'Batch Traceability', 'Quality Control', 'Cost Accounting'],
            quote: { text: 'Production cycle reduced by 20%.', author: 'Production Manager' }
          },
          wholesale: {
            label: 'Logistics',
            title: 'WMS & Logistics',
            description: 'Accurate inventory and optimized deliveries.',
            benefits: ['WMS with Barcodes', 'Demand Forecasting', 'Supply Chain Management', 'Direct Deliveries'],
            quote: { text: 'Real-time profitability.', author: 'Logistics Director' }
          },
          service: {
            label: 'Service',
            title: 'Projects & Maintenance',
            description: 'Project profitability and contract fulfillment.',
            benefits: ['Budgeting', 'Mobile App', 'Time Tracking', 'Resources'],
            quote: { text: 'Accurate billing is our growth foundation.', author: 'CEO' }
          },
          finance: {
            label: 'Finance',
            title: 'Financial Management',
            description: 'Unified financial view across all units.',
            benefits: ['Multi-currency', 'Payables/Receivables', 'Cash Flow', 'E-invoicing'],
            quote: { text: 'Financial consolidation is now automatic.', author: 'CFO' }
          }
        }
      },
      local: {
        badge: 'Expertise',
        title: 'Local Partner',
        description: 'Your system complies with Estonian laws.',
        cta: 'Consultation',
        compliance: {
          title: 'Legislation',
          desc: 'VAT and reporting'
        },
        language: {
          title: 'Native Support',
          desc: 'EST / ENG / RUS',
          team: 'Tallinn Team'
        },
        integrations: {
          title: 'Integrations',
          desc: 'Banks and Telema'
        }
      },
      modules: {
        financeContent: {
          title: 'Financial Management',
          p1: 'Successful financial management is the foundation of a company.',
          p2: '',
          highlight: 'iScala is top-tier financial software.',
          listTitle1: 'Includes:',
          list1: ['General Ledger', 'Accounts Receivable', 'Accounts Payable'],
          listTitle2: 'Capabilities:',
          list2: [
            'Budgets',
            'Multi-currency',
            'Consolidation',
            'Cash Flow',
            'Direct Debits'
          ],
          readMore: 'Read more'
        }
      },
      epicorPage: {
        hero: {
          title: 'Epicor Kinetic',
          subtitle: 'Future-proof manufacturing software.',
          desc: 'Cloud-based ERP built specifically for manufacturers to connect the entire factory.',
          cta: 'Request Demo'
        },
        problems: {
          title: 'Problems We Solve',
          p1: { title: 'Blind Production', desc: 'Lack of real-time visibility into production status and equipment load.' },
          p2: { title: 'Broken Supply Chain', desc: 'Material delays and inventory inaccuracies stopping production lines.' },
          p3: { title: 'Manual Work', desc: 'Excel spreadsheets and manual labor slowing down planning and quoting.' }
        },
        features: {
          title: 'Key Modules',
          f1: { title: 'Production Management (MES)', desc: 'Real-time data directly from workstations and operators.' },
          f2: { title: 'Planning (APS)', desc: 'Automatic production schedule optimization based on resources.' },
          f3: { title: 'Financial Management', desc: 'Precise costing and integrated accounting.' },
          f4: { title: 'Supply Chain (SCM)', desc: 'Purchase recommendations and inventory optimization.' },
          f5: { title: 'Sales Management (CRM)', desc: 'Quote generation and customer relationship management.' },
          f6: { title: 'Quality Control', desc: 'Traceability by batches and serial numbers.' }
        },
        capabilities: {
          title: 'Full Functionality',
          items: {
            production: { title: 'Production Management (MES)', desc: 'Real-time planning and execution.' },
            project: { title: 'Project Management', desc: 'Track project costs and deadlines.' },
            asset: { title: 'Asset Management (EAM)', desc: 'Equipment maintenance and lifecycle management.' },
            maintenance: { title: 'Maintenance Orders', desc: 'Preventive maintenance and repairs.' },
            supply: { title: 'Supply Chain (SCM)', desc: 'Purchasing and inventory optimization.' }
          }
        },
        cta: {
          title: 'Ready for the next step?',
          text: 'Take your production to the next level with Epicor Kinetic.'
        }
      },
      iscalaPage: {
        hero: {
          title: 'Epicor iScala',
          subtitle: 'Global Business, Local Control.',
          desc: 'Comprehensive ERP solution for international companies, hospitality, and wholesale.',
          cta: 'Request Quote'
        },
        problems: {
          title: 'Challenges We Overcome',
          p1: { title: 'Fragmented Data', desc: 'Separate systems for finance and warehouse create errors.' },
          p2: { title: 'Complex Reporting', desc: 'Group consolidation takes weeks instead of minutes.' },
          p3: { title: 'Global Scaling', desc: 'Need for support in multiple countries and currencies.' }
        },
        features: {
          title: 'iScala Capabilities',
          f1: { title: 'Global Finance', desc: 'Multi-company, multi-currency, and multi-language support in one DB.' },
          f2: { title: 'Supply Chain & Logistics', desc: 'Advanced warehouse management (WMS) and demand planning.' },
          f3: { title: 'Service Management', desc: 'Contract, warranty, and field service management.' },
          f4: { title: 'Project Management', desc: 'Track costs and revenue by project.' },
          f5: { title: 'Hospitality', desc: 'Specialized solution for hotels and restaurants (PMS integrations).' },
          f6: { title: 'Integrations', desc: 'Easy connection to banks, e-commerce, and partners.' }
        },
        capabilities: {
          title: 'Full Functionality',
          items: {
            logistics: { title: 'Logistics & Warehouse (WMS)', desc: 'Accurate inventory and deliveries.' },
            finance: { title: 'Financial Management', desc: 'General ledger, AP/AR, multi-currency.' },
            supply: { title: 'Procurement & Supply Chain', desc: 'Purchase orders and suppliers.' },
            contracts: { title: 'Contract Management', desc: 'Service contracts and billing.' },
            hr: { title: 'Payroll & HR', desc: 'Time tracking and salaries.' }
          }
        },
        modules: {
          title: 'Capabilities & Modules',
          items: {
            finance: { title: 'Financial Management', desc: 'Multi-currency and multi-company support.' },
            logistics: { title: 'Logistics & Warehouse', desc: 'Optimized inventory and deliveries.' },
            hr: { title: 'Payroll & HR', desc: 'Payroll and workforce planning.' },
            contracts: { title: 'Contract Management', desc: 'Contract lifecycle management.' },
            supply: { title: 'Supply Chain', desc: 'Efficient supply chain and inventory management.' }
          }
        },
        cta: {
          title: 'Optimize your business processes.',
          text: 'Take control of your international business.'
        }
      },
      references: {
        title: 'Success Stories',
        subtitle: 'Strategic partner for leading Estonian companies.',
        trustTitle: 'Trusted by Industry Leaders',
        moreClients: 'And many others...',
        contactUs: 'Join them',
        items: [
           { label: "Manufacturing" },
           { label: "Logistics & Wholesale" },
           { label: "Service & Horeca" },
           { label: "Retail" }
        ],
        cases: {
          eskaro: {
            challenge: 'Complex Planning',
            solution: 'Production Module & Reporting',
            result: 'Accurate Costing'
          },
          prike: {
            challenge: 'High Volume',
            solution: 'Sales Automation',
            result: 'Speed'
          },
          logistics: {
            challenge: 'WMS Integration',
            solution: 'Real-time Data Exchange',
            result: 'Sync'
          }
        }
      },
      whyUs: {
        title: 'Why Choose Us?',
        stats: {
            clients: { val: '20 000+', label: 'Clients' },
            countries: { val: '150+', label: 'Countries' },
            partners: { val: '500+', label: 'Partners' }
        }
      },
      cases: {
        title: 'Success Stories',
        subtitle: 'Results speak for themselves.',
        portfolioBtn: 'Portfolio',
        items: [
          { title: 'Metal Manufacturing', metricDesc: 'Inventory' },
          { title: 'Retail Warehouse', metricDesc: 'Speed' },
          { title: 'Field Service', metricDesc: 'Hours' }
        ]
      },
      process: {
        title: 'Process',
        subtitle: 'Simple and controlled journey.',
        steps: [
          { title: 'Audit & Analysis' },
          { title: 'Solution Design' },
          { title: 'Implementation & Training' },
          { title: 'Support & Development' }
        ]
      },
      contact: {
        bannerTitle: 'Shall we start?',
        bannerText: 'Consultation is free.',
        office: 'Office',
        phone: 'Phone',
        formTitle: 'Write to us',
        formSubtitle: 'We reply within 1 business day.',
        fields: {
          name: 'Name',
          company: 'Company',
          email: 'Email',
          message: 'Message',
          placeholderName: 'Name',
          placeholderCompany: 'Company',
          placeholderMsg: 'Message...'
        },
        submit: 'Send'
      },
      footer: {
        tagline: 'Reliable ERP partner since 1995.',
        services: 'Services',
        industries: 'Industries',
        company: 'Company',
        rights: 'All rights reserved.',
        regCode: 'Reg',
        vatCode: 'VAT'
      },
      finalCta: {
        title: 'Fix your production.',
        subtitle: 'Book a free 30-minute consultation.',
        button: 'Book Audit',
        callAction: 'Call'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'et',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
