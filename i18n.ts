
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
        learnMore: 'Vaata lähemalt',
        iscala: {
          header: 'Epicor iScala',
          tag: 'Logistika & Finants',
          description: '', // Removed
          targets: ['Hulgimüük', 'Logistika'],
          features: ['Tsentraliseeritud finantsid', 'Tarneahela juhtimine (SCM)', 'Mitmekeelne tugi']
        },
        epicor: {
          header: 'Epicor ERP',
          tag: 'Tööstus & Tootmine',
          description: '', // Removed
          targets: ['Tootmine', 'Tehased'],
          features: ['Tootmise planeerimine (MES)', 'Reaalajas monitooring', 'Kvaliteedikontroll']
        }
      },
      comparison: {
        title: 'Miks valida Andares Consulting?',
        subtitle: 'Erinevus on detailides.',
        standard: { title: '', tag: '', items: [] }, // Not used in new minimalist design
        andares: {
          title: '',
          badge: '',
          tag: '',
          result: '',
          cta: 'Küsi pakkumist',
          // Converted to short phrases for icons
          items: [
            '100% Tootmiskeskne',
            'Kindel eelarve',
            'Kohalik tugi',
            'Skaleeritav tehnoloogia'
          ]
        }
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
            quote: 'Tootmistsükkel vähenes 20%.'
          },
          wholesale: {
            label: 'Logistika',
            title: 'WMS & Logistika',
            description: 'Täpsed laoseisud ja optimeeritud tarned.',
            benefits: ['WMS vöötkoodidega', 'Nõudluse prognoos', 'Tarneahela juhtimine', 'Otsetarned'],
            quote: 'Reaalajas kasumlikkus.'
          },
          service: {
            label: 'Teenindus',
            title: 'Projektid & Hooldus',
            description: 'Projektide kasumlikkus ja lepingute täitmine.',
            benefits: ['Eelarvestamine', 'Mobiilirakendus', 'Aja arvestus', 'Ressursid']
          },
          finance: {
            label: 'Finantsid',
            title: 'Finantsjuhtimine',
            description: 'Ühtne finantspilt kõigi üksuste lõikes.',
            benefits: ['Mitmevaluuta', 'Võlgnevused', 'Rahavood', 'E-arved']
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
        sidebar: {
          logistics: 'Logistika',
          wms: 'Ladu',
          scm: 'Tarneahel',
          production: 'Tootmine',
          service: 'Hooldus',
          projects: 'Projektid',
          contracts: 'Lepingud',
          finance: 'Finants',
          hr: 'Personal',
          assets: 'Varad',
          reporting: 'Aruandlus'
        },
        searchPlaceholder: 'Otsi...',
        banner: {
          title: 'Uus ERP?',
          text: 'Tasuta konsultatsioon.',
          btn: 'Soovin auditit',
          placeholders: {
            name: 'Nimi',
            company: 'Ettevõte',
            email: 'E-post',
            phone: 'Telefon'
          }
        },
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
      references: {
        title: 'Edulood',
        subtitle: 'Eesti juhtivate ettevõtete strateegiline partner.',
        trustTitle: 'Meid usaldavad',
        moreClients: 'Ja paljud teised...',
        contactUs: 'Liitu nendega',
        labels: {
          challenge: 'Väljakutse',
          solution: 'Lahendus'
        },
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
        items: [
          'Suurim toepartner Eestis',
          'Pikaajaline kogemus',
          'Usaldusväärsed lahendused',
          'Mitmekülgne meeskond'
        ],
        globalTitle: 'Globaalne mastaap',
        globalDesc: 'Tõsta tootlikkust.',
        globalStat: 'Mastaap',
        globalStatText: '20 000+ klienti',
        toolsTitle: 'Moodsad tööriistad',
        toolsDesc: 'Äri toimub reaalajas.',
        partnerTitle: 'Pikaajaline ekspert',
        partnerDesc: 'Pühendunud meeskond.',
        expYears: 'alates 1995',
        expLabel: 'Kogemus',
        clientsCount: '50+',
        clientsLabel: 'Klienti'
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
        methodologyNote: 'Signature Methodology',
        steps: [
          { title: 'Audit', desc: '' },
          { title: 'Disain', desc: '' },
          { title: 'Testimine', desc: '' },
          { title: 'Koolitus', desc: '' },
          { title: 'Tugi', desc: '' }
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
        callAction: 'Helista'
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
        stat1: { value: '30 y', label: 'Experience', desc: 'Since 1995' },
        stat2: { value: '50+', label: 'Clients', desc: 'Manufacturing' },
        stat3: { value: '#1', label: 'In Estonia', desc: 'Certified' }
      },
      solutions: {
        title: 'Our Solutions',
        p1: '',
        p2: '',
        chooseTitle: 'Select Platform',
        targetTitle: 'For:',
        learnMore: 'Learn more',
        iscala: {
          header: 'Epicor iScala',
          tag: 'Logistics & Finance',
          targets: ['Wholesale', 'Logistics'],
          features: ['Centralized Finance', 'Supply Chain (SCM)', 'Multi-language']
        },
        epicor: {
          header: 'Epicor ERP',
          tag: 'Industry & Manufacturing',
          targets: ['Manufacturing', 'Factories'],
          features: ['Production Planning (MES)', 'Real-time Monitoring', 'Quality Control']
        }
      },
      comparison: {
        title: 'Why Andares Consulting?',
        subtitle: 'The difference is in details.',
        standard: { title: '', tag: '', items: [] },
        andares: {
          items: [
            '100% Industry Focused',
            'Fixed Budget',
            'Local Support',
            'Scalable Tech'
          ]
        }
      },
      process: {
        title: 'Process',
        subtitle: 'Simple and controlled journey.',
        methodologyNote: 'Signature Methodology',
        steps: [
          { title: 'Audit', desc: '' },
          { title: 'Design', desc: '' },
          { title: 'Testing', desc: '' },
          { title: 'Training', desc: '' },
          { title: 'Support', desc: '' }
        ]
      }
      // ... simplified EN translations for other sections would follow similar pattern
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