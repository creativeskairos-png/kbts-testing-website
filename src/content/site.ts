/**
 * KBTS site content, English + Swahili.
 *
 * Sources: KBTS brand guideline v1.0 (2026) and "OVERALL DOCUMENT OF THE KBTS
 * WEB INSTRUCTION.txt". Short descriptions are DRAFT in plain English.
 * [NEEDS APPROVAL] All Swahili text should be checked by a native speaker
 * at KBTS before launch.
 * Contact details come from environment variables (see .env.example).
 */

export type Lang = "en" | "sw";
export type L = { en: string; sw: string };
const l = (en: string, sw: string): L => ({ en, sw });

export const company = {
  name: "KBTS",
  tagline: "Smart Solutions. Reliable Service.", // logo lockup, kept in English
  city: "Dar es Salaam",
  country: "Tanzania",
  headline: l("Technical work, done right.", "Kazi za kiufundi, kwa ubora."),
  summary: l(
    "We install, maintain and repair technical systems for homes, offices and businesses: CCTV, electrical, lighting, smart home and more. We start in Dar es Salaam.",
    "Tunafunga, tunatunza na kutengeneza mifumo ya kiufundi kwa nyumba, ofisi na biashara: CCTV, umeme, taa, nyumba janja na zaidi. Tunaanzia Dar es Salaam.",
  ),
  footerSummary: l(
    "Reliable technical solutions for homes, offices and businesses in Tanzania.",
    "Suluhisho za kiufundi za kuaminika kwa nyumba, ofisi na biashara Tanzania.",
  ),
};

const env = (value: string | undefined) => (value && value.trim() ? value.trim() : null);

export const contact = {
  whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)?.replace(/\D/g, "") || null,
  phone: env(process.env.NEXT_PUBLIC_PHONE),
  email: env(process.env.NEXT_PUBLIC_EMAIL),
  address: env(process.env.NEXT_PUBLIC_ADDRESS),
  hours: env(process.env.NEXT_PUBLIC_HOURS),
};

export const whatsappLink = (message = "Hello KBTS, I would like to ask about your services.") =>
  contact.whatsapp ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}` : null;

export const ui = {
  getQuote: l("Get a quote", "Omba bei"),
  callBack: l("Request a call back", "Omba tukupigie"),
  callKbts: l("Call KBTS", "Piga simu KBTS"),
  exploreServices: l("See our services", "Angalia huduma zetu"),
  bookConsultation: l("Ask for advice", "Omba ushauri"),
  whatsapp: l("Or message us on WhatsApp", "Au tutumie ujumbe WhatsApp"),
  rights: l("All rights reserved.", "Haki zote zimehifadhiwa."),
};

export const nav = [
  { label: l("Services", "Huduma"), href: "#services" },
  { label: l("About", "Kuhusu sisi"), href: "#about" },
  { label: l("Why KBTS", "Kwa nini KBTS"), href: "#why" },
  { label: l("How we work", "Jinsi tunavyofanya kazi"), href: "#how" },
  { label: l("FAQ", "Maswali"), href: "#faq" },
];

export const hero = {
  lead: l("Systems that keep", "Mifumo inayoendelea"),
  // Rotating endings; the first is the confirmed line ("keep working")
  words: {
    en: ["working.", "you safe.", "you powered.", "you connected."],
    sw: ["kufanya kazi.", "kukulinda.", "kukupa umeme.", "kukuunganisha."],
  } satisfies Record<Lang, string[]>,
  perks: [
    l("Installation to long-term maintenance", "Kufunga hadi matengenezo ya muda mrefu"),
    l("Clear advice before you spend", "Ushauri wa wazi kabla ya kutumia pesa"),
  ],
  chips: {
    basedIn: l("Based in", "Tupo"),
    tested: l("System tested", "Mfumo umejaribiwa"),
    handover: l("Handover walkthrough", "Maelezo ya makabidhiano"),
  },
};

// Service groups from the instruction document (section 2)
export type ServiceId = "automation" | "cctv" | "electrical" | "lighting" | "maintenance" | "inspection";
export const services: { id: ServiceId; short: L; name: L; text: L }[] = [
  {
    id: "cctv",
    short: l("CCTV & security", "CCTV na usalama"),
    name: l("CCTV & security", "CCTV na usalama"),
    text: l(
      "Cameras, security systems and access control for doors and gates, installed and maintained.",
      "Kamera, mifumo ya usalama na udhibiti wa milango na mageti, tunafunga na kutunza.",
    ),
  },
  {
    id: "electrical",
    short: l("Electrical", "Umeme"),
    name: l("Electrical wiring", "Nyaya za umeme"),
    text: l(
      "Safe wiring and rewiring, and installing electrical equipment.",
      "Kuweka na kubadilisha nyaya za umeme kwa usalama, na kufunga vifaa vya umeme.",
    ),
  },
  {
    id: "automation",
    short: l("Smart home", "Nyumba janja"),
    name: l("Home automation", "Nyumba janja"),
    text: l(
      "Smart lights, switches and devices that are easy to control.",
      "Taa, swichi na vifaa janja unavyoweza kudhibiti kwa urahisi.",
    ),
  },
  {
    id: "lighting",
    short: l("Lighting", "Taa"),
    name: l("Lighting", "Taa"),
    text: l("New lights installed and broken lights repaired.", "Kufunga taa mpya na kutengeneza taa zilizoharibika."),
  },
  {
    id: "maintenance",
    short: l("Maintenance & repairs", "Matengenezo"),
    name: l("Maintenance & repairs", "Matengenezo"),
    text: l(
      "Regular care and repairs for home appliances, equipment and technical systems.",
      "Huduma za mara kwa mara na matengenezo ya vifaa vya nyumbani, mashine na mifumo ya kiufundi.",
    ),
  },
  {
    id: "inspection",
    short: l("Inspections", "Ukaguzi"),
    name: l("Inspections & troubleshooting", "Ukaguzi na utatuzi"),
    text: l("We find out what is wrong and explain how to fix it.", "Tunagundua tatizo na kukueleza jinsi ya kulitatua."),
  },
];

export const strip = { label: l("What we work on", "Tunachofanya") };

export const pillars = [
  { value: l("Install", "Kufunga"), label: l("We set up new systems", "Tunafunga mifumo mipya") },
  { value: l("Maintain", "Kutunza"), label: l("We keep them working", "Tunaitunza ifanye kazi") },
  { value: l("Advise", "Kushauri"), label: l("We give honest advice", "Tunatoa ushauri wa kweli") },
];

// Instruction document sections 1, 3 and 4
export const intro = {
  heading: l("KBTS in one minute", "KBTS kwa dakika moja"),
  body: l(
    "KBTS is a technical services company. We install, maintain and repair the systems that keep your property safe, powered and comfortable.",
    "KBTS ni kampuni ya huduma za kiufundi. Tunafunga, tunatunza na kutengeneza mifumo inayoweka mali yako salama, yenye umeme na yenye starehe.",
  ),
  facts: [
    {
      title: l("What we do", "Tunachofanya"),
      text: l(
        "Install, maintain and repair CCTV, electrical, lighting, smart-home and security systems.",
        "Kufunga, kutunza na kutengeneza CCTV, umeme, taa, nyumba janja na mifumo ya usalama.",
      ),
    },
    {
      title: l("Who we help", "Tunaowahudumia"),
      text: l(
        "Homeowners, tenants, offices, shops, schools, hotels, apartments, property owners and small businesses.",
        "Wamiliki wa nyumba, wapangaji, ofisi, maduka, shule, hoteli, apartimenti, wamiliki wa majengo na biashara ndogo.",
      ),
    },
    {
      title: l("Where we work", "Tunapofanya kazi"),
      text: l(
        "Dar es Salaam first. Other regions of Tanzania will follow.",
        "Tunaanza Dar es Salaam. Mikoa mingine ya Tanzania itafuata.",
      ),
    },
  ],
};

export const servicesSection = {
  heading: l("Our services", "Huduma zetu"),
  body: l(
    "Pick what you need. Not sure? Ask us and we will check for you.",
    "Chagua unachohitaji. Huna uhakika? Tuulize, tutakuangalia.",
  ),
  ask: l("Ask about this", "Uliza kuhusu hili"),
};

// Instruction document section 5
export const why = {
  heading: l("Why choose KBTS", "Kwa nini uchague KBTS"),
  items: [
    { title: l("Reliable service", "Huduma ya kuaminika"), text: l("Work that keeps running after we leave.", "Kazi inayoendelea kufanya kazi baada ya sisi kuondoka.") },
    { title: l("Qualified work", "Kazi ya kitaalamu"), text: l("Skilled people who know the systems they work on.", "Mafundi wenye ujuzi wanaoijua mifumo wanayoifanyia kazi.") },
    { title: l("Clear communication", "Mawasiliano wazi"), text: l("We explain the work and the price before we start.", "Tunaeleza kazi na bei kabla ya kuanza.") },
    { title: l("Professional", "Weledi"), text: l("Respect for your time, your space and your property.", "Tunaheshimu muda wako, nafasi yako na mali yako.") },
    { title: l("Safe installations", "Ufungaji salama"), text: l("Done to protect people, property and equipment.", "Unaofanywa kulinda watu, mali na vifaa.") },
    { title: l("After-sales support", "Huduma baada ya mauzo"), text: l("We are still here after the job is done.", "Tupo nawe hata baada ya kazi kukamilika.") },
  ],
};

export const how = {
  heading: l("From first message to aftercare", "Kuanzia ujumbe wa kwanza hadi huduma baada ya kazi"),
  quote: {
    label: l("Quote request", "Ombi la bei"),
    title: l("CCTV & security, office", "CCTV na usalama, ofisi"),
    rows: [
      [l("Location", "Mahali"), l(company.city, company.city)],
      [l("Site visit", "Kutembelea eneo"), l("Arranged if needed", "Inapangwa ikihitajika")],
      [l("Quotation", "Bei"), l("Explains the work first", "Inaeleza kazi kwanza")],
    ] as [L, L][],
    example: l("Example request [DRAFT]", "Mfano wa ombi [DRAFT]"),
    caption: [l("Clear quotation", "Bei iliyo wazi"), l("before any work", "kabla ya kazi yoyote")],
  },
  report: {
    caption: [l("Maintenance that", "Matengenezo yanayoweka"), l("keeps it working", "mfumo ukifanya kazi")],
    label: l("Visit report", "Ripoti ya ziara"),
    done: l("Completed", "Imekamilika"),
    title: l("Planned maintenance", "Matengenezo yaliyopangwa"),
    items: [
      l("Cameras cleaned and aligned", "Kamera zimesafishwa na kunyooshwa"),
      l("Recorder and storage checked", "Kifaa cha kurekodi na hifadhi vimekaguliwa"),
      l("Distribution board inspected", "Ubao wa umeme umekaguliwa"),
    ],
    example: l("Example report [DRAFT]", "Mfano wa ripoti [DRAFT]"),
  },
  phone: {
    subtitle: l("Technical solutions", "Suluhisho za kiufundi"),
    input: l("Message", "Ujumbe"),
    // DRAFT example conversation
    messages: [
      { from: "client", text: l("Hello KBTS, I’d like a quote for CCTV at our office.", "Habari KBTS, naomba bei ya kufunga CCTV ofisini kwetu.") },
      { from: "kbts", text: l("Thanks for reaching out. Where is the site, and which areas need cover?", "Asante kwa kuwasiliana nasi. Eneo liko wapi, na sehemu zipi zinahitaji kamera?") },
      { from: "client", text: l(`${company.city}. Entrance, parking and the store room.`, `${company.city}. Mlangoni, maegesho na stoo.`) },
      { from: "kbts", text: l("We’ll arrange a visit, then send a clear quotation.", "Tutapanga kuja kuangalia, kisha tutakutumia bei iliyo wazi.") },
    ] as { from: "client" | "kbts"; text: L }[],
  },
};

export const plansSection = {
  heading: l("Find the right service for your site", "Pata huduma inayofaa eneo lako"),
  notSure: l("Not sure what you need?", "Huna uhakika unahitaji nini?"),
  askAdvice: l("Ask us for advice", "Tuombe ushauri"),
};

// DRAFT: two ways to work with KBTS. No prices until KBTS confirms how it quotes.
export const plans = [
  {
    name: l("Installation project", "Mradi wa ufungaji"),
    headline: l("Per job", "Kwa kazi"),
    note: l("Clear quotation before work starts", "Bei wazi kabla kazi kuanza"),
    cta: l("Request a quote", "Omba bei"),
    featured: false,
    features: [
      l("Site visit where needed", "Kutembelea eneo ikihitajika"),
      l("Clear quotation before any work", "Bei wazi kabla ya kazi yoyote"),
      l("Installation by skilled technicians", "Ufungaji na mafundi wenye ujuzi"),
      l("Testing and handover walkthrough", "Majaribio na maelezo ya makabidhiano"),
      l("Homes, offices and businesses", "Nyumba, ofisi na biashara"),
    ],
  },
  {
    name: l("Maintenance plan", "Mpango wa matengenezo"),
    headline: l("Ongoing", "Endelevu"),
    note: l("Visit frequency agreed with you [NEEDS APPROVAL]", "Idadi ya ziara tunakubaliana nawe [NEEDS APPROVAL]"),
    cta: l("Ask about maintenance", "Uliza kuhusu matengenezo"),
    featured: true,
    features: [
      l("Planned maintenance visits", "Ziara za matengenezo zilizopangwa"),
      l("Repairs and replacements", "Matengenezo na ubadilishaji wa vifaa"),
      l("Clear reports on what was done", "Ripoti wazi ya kazi iliyofanyika"),
      l("Covers systems we didn’t install", "Hata mifumo ambayo hatukuifunga"),
      l("After-sales support", "Huduma baada ya mauzo"),
    ],
  },
];

// CONFIRMED statements from the brand guideline
export const statements = [
  {
    label: l("Our promise", "Ahadi yetu"),
    text: l(
      "The dependable technical solutions partner: skilled installation, practical advice and responsive maintenance, so systems work safely every day.",
      "Mshirika wa kuaminika wa suluhisho za kiufundi: ufungaji wa kitaalamu, ushauri wa vitendo na matengenezo ya haraka, ili mifumo ifanye kazi kwa usalama kila siku.",
    ),
  },
  {
    label: l("Our mission", "Dhamira yetu"),
    text: l(
      "To deliver safe, practical and reliable technical solutions, from installation to long-term maintenance, across Tanzania.",
      "Kutoa suluhisho za kiufundi zilizo salama, za vitendo na za kuaminika, kuanzia ufungaji hadi matengenezo ya muda mrefu, kote Tanzania.",
    ),
  },
  {
    label: l("Our vision", "Maono yetu"),
    text: l(
      "To be Tanzania's most trusted name in everyday technical solutions.",
      "Kuwa jina linaloaminika zaidi Tanzania katika suluhisho za kiufundi za kila siku.",
    ),
  },
];

export const faqSection = {
  heading: l("Questions people ask", "Maswali yanayoulizwa mara kwa mara"),
  items: [
    {
      q: l("Which areas do you work in?", "Mnafanya kazi maeneo gani?"),
      a: l(
        "We start in Dar es Salaam and plan to reach other regions of Tanzania. If you are outside Dar es Salaam, send us the details and we will tell you what is possible.",
        "Tunaanzia Dar es Salaam, na tunapanga kufika mikoa mingine ya Tanzania. Kama uko nje ya Dar es Salaam, tutumie maelezo na tutakueleza kinachowezekana.",
      ),
    },
    {
      q: l("How do I get a quotation?", "Nitapataje bei?"),
      a: l(
        "Message us on WhatsApp, call us, or leave your number in the form below. Tell us what you need and where. We will get back to you.",
        "Tutumie ujumbe WhatsApp, tupigie simu, au acha namba yako kwenye fomu hapa chini. Tueleze unachohitaji na mahali. Tutakurudia.",
      ),
    },
    {
      q: l("Can you fix a system another company installed?", "Mnaweza kutengeneza mfumo uliofungwa na kampuni nyingine?"),
      a: l("Yes. We check it first and explain what needs work.", "Ndiyo. Tunaukagua kwanza na kukueleza kinachohitaji kutengenezwa."),
    },
    {
      q: l("Do you work with businesses or only homes?", "Mnafanya kazi na biashara au nyumba tu?"),
      a: l(
        "Both. We work with homes, tenants, offices, shops, schools, hotels, apartments and small businesses.",
        "Vyote viwili. Tunafanya kazi na nyumba, wapangaji, ofisi, maduka, shule, hoteli, apartimenti na biashara ndogo.",
      ),
    },
    {
      q: l("Do you help after the job is finished?", "Mnasaidia baada ya kazi kukamilika?"),
      a: l(
        "Yes. We offer after-sales support and maintenance, so your system keeps working.",
        "Ndiyo. Tunatoa huduma baada ya mauzo na matengenezo, ili mfumo wako uendelee kufanya kazi.",
      ),
    },
  ],
};

export const ctaSection = {
  heading: l("Tell us what you need. We’ll plan it properly.", "Tueleze unachohitaji. Tutapanga vizuri."),
  body: l(
    "Leave a number or email and KBTS will get back to you to discuss the job and arrange a quotation.",
    "Acha namba ya simu au barua pepe, na KBTS itakurudia kujadili kazi na kupanga bei.",
  ),
};

export const form = {
  label: l("Phone number or email", "Namba ya simu au barua pepe"),
  submit: l("Request a call back", "Omba tukupigie"),
  error: l(
    "Enter a phone number (e.g. +255 7XX XXX XXX) or an email address.",
    "Weka namba ya simu (mfano +255 7XX XXX XXX) au barua pepe.",
  ),
  done: l("Thanks. Demo only: requests aren’t sent to KBTS yet.", "Asante. Hili ni jaribio tu: maombi bado hayatumwi kwa KBTS."),
};

export const footer = {
  columns: [
    { title: l("Services", "Huduma"), links: services.map((s) => ({ label: s.name, href: "#services" })) },
    {
      title: l("Company", "Kampuni"),
      links: [
        { label: l("About KBTS", "Kuhusu KBTS"), href: "#about" },
        { label: l("Why KBTS", "Kwa nini KBTS"), href: "#why" },
        { label: l("How we work", "Jinsi tunavyofanya kazi"), href: "#how" },
        { label: l("FAQ", "Maswali"), href: "#faq" },
        { label: l("Get a quote", "Omba bei"), href: "#contact" },
      ],
    },
  ],
  contactTitle: l("Contact", "Mawasiliano"),
  details: {
    phone: l("Phone", "Simu"),
    email: l("Email", "Barua pepe"),
    address: l("Address", "Anwani"),
    hours: l("Hours", "Saa za kazi"),
  },
};
