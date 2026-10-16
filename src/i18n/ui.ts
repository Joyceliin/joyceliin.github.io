/**
 * Textos da interface e rotas nos dois idiomas. Conteúdo de carreira fica em
 * src/data (profile.ts / profile.en.ts); cases em src/content/projects/<lang>/.
 */

export type Lang = "pt" | "en";
export const langs: Lang[] = ["pt", "en"];

export type PageKey = "home" | "about" | "projects" | "contact";

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { pt: "/", en: "/en/" },
  about: { pt: "/sobre/", en: "/en/about/" },
  projects: { pt: "/projetos/", en: "/en/projects/" },
  contact: { pt: "/contato/", en: "/en/contact/" },
};

export function caseHref(slug: string, lang: Lang): string {
  return `${routes.projects[lang]}${slug}/`;
}

export const ui = {
  pt: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    skip: "Pular para o conteúdo",
    navLabel: "Principal",
    nav: { about: "Sobre", projects: "Projetos", contact: "Contato" },
    switchTo: "EN",
    switchLabel: "Read in English",
    homeLabel: "início",
    // home
    seeCases: "Ver cases",
    contact: "Contato",
    nowAria: "Momento atual",
    now: "Agora",
    since: "desde",
    stackMain: "Stack principal",
    yearsLabel: "anos trabalhando com dados",
    recentResults: "Resultados recentes",
    cases: "Cases",
    allCases: "Todos os cases →",
    // cards / cases
    readCase: "Ler o case →",
    techAria: "Tecnologias",
    resultsAria: "Resultados",
    backToCases: "← Cases",
    repository: "Repositório",
    // about
    aboutTitle: "Sobre",
    howIWork: "Como eu trabalho",
    skills: "Competências",
    education: "Formação",
    completedIn: "concluído em",
    languageLabel: "Idioma",
    certs: "Certificações e cursos",
    inProgress: "em curso",
    focusNow: "Em foco agora",
    // projects
    projectsTitle: "Projetos",
    projectsLead:
      "Problema, resultado, arquitetura e decisões de projetos que construí. Nomes de clientes e dados internos ficam de fora.",
    projectsDescription:
      "Cases de engenharia de dados: plataforma Airflow, lakehouse, arquitetura medalhão, integração com Kafka, sistemas com Django e governança.",
    // contact
    contactTitle: "Contato",
    contactHeading: "Vamos conversar",
    contactLead:
      "Disponível para oportunidades em engenharia e arquitetura de dados e para consultoria: desenho de solução, lakehouse, integração, streaming ou apoio técnico em entregas específicas.",
    contactDescription: "Fale com Joyce Nogueira sobre engenharia de dados, projetos e consultoria.",
    email: "Email",
    location: "Localização",
    // diagrams
    zoom: "Zoom",
    zoomAria: "Ampliar diagrama",
    zoomIn: "Aumentar zoom",
    zoomOut: "Diminuir zoom",
    zoomReset: "Resetar zoom",
    close: "Fechar",
    dialogLabel: "Diagrama ampliado",
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    skip: "Skip to content",
    navLabel: "Main",
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    switchTo: "PT",
    switchLabel: "Ler em português",
    homeLabel: "home",
    seeCases: "See case studies",
    contact: "Contact",
    nowAria: "Current role",
    now: "Now",
    since: "since",
    stackMain: "Main stack",
    yearsLabel: "years working with data",
    recentResults: "Recent results",
    cases: "Case studies",
    allCases: "All case studies →",
    readCase: "Read the case study →",
    techAria: "Technologies",
    resultsAria: "Results",
    backToCases: "← Case studies",
    repository: "Repository",
    aboutTitle: "About",
    howIWork: "How I work",
    skills: "Skills",
    education: "Education",
    completedIn: "completed in",
    languageLabel: "Languages",
    certs: "Certifications and courses",
    inProgress: "in progress",
    focusNow: "Current focus",
    projectsTitle: "Projects",
    projectsLead:
      "Problem, results, architecture and decisions from projects I built. Client names and internal data are left out.",
    projectsDescription:
      "Data engineering case studies: Airflow platform, lakehouse, medallion architecture, Kafka integration, Django systems and governance.",
    contactTitle: "Contact",
    contactHeading: "Let's talk",
    contactLead:
      "Open to data engineering and data architecture roles and to consulting: solution design, lakehouse, integration, streaming or hands-on help with specific deliverables.",
    contactDescription: "Get in touch with Joyce Nogueira about data engineering, projects and consulting.",
    email: "Email",
    location: "Location",
    zoom: "Zoom",
    zoomAria: "Enlarge diagram",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    zoomReset: "Reset zoom",
    close: "Close",
    dialogLabel: "Enlarged diagram",
  },
} as const;

export type UI = (typeof ui)[Lang];
