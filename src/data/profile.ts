/**
 * Dados públicos do site: home, sobre, contato e imagens de compartilhamento.
 */

export const profile = {
  name: "Joyce Nogueira",
  role: "Arquiteta e Engenheira de Dados Sênior",
  headline: "Construo a base que sustenta a confiança no dado",
  /** Descrição da home para buscadores e pré-visualização de link. */
  summary:
    "Comecei no BI e desci para a engenharia e a arquitetura de dados para garantir que a informação chega inteira, de uma ponta a outra, e que a entrega se sustenta.",
  location: "Brasília, DF · Remoto",
  email: "joycelnog@gmail.com",
  github: "https://github.com/joycelnog",
  /** Primeiro cargo de BI. Usado no contador de anos de experiência. */
  careerStart: "2019-01-01",
};

/** Texto de abertura da home, em parágrafos. */
export const home = {
  paragraphs: [
    "Trabalho com arquitetura e engenharia de dados: estrutura, padronização e governança, para que a informação chegue inteira de uma ponta a outra e decisões, entregas e resultados cresçam junto com o negócio.",
  ],
};

export const stackPrimary = [
  "Python",
  "SQL",
  "Airflow",
  "Delta Lake",
  "Spark",
  "Kafka",
  "Trino",
  "dbt",
  "Docker",
];

export const skillGroups = [
  {
    label: "Linguagens e frameworks",
    items: ["Python", "SQL", "Shell", "Django"],
  },
  {
    label: "Orquestração e processamento",
    items: ["Apache Airflow", "Apache Spark", "PySpark", "dbt", "Data Factory", "Celery", "Pentaho", "SSIS"],
  },
  {
    label: "Lakehouse e consulta",
    items: ["Delta Lake", "Microsoft Fabric", "MinIO (S3)", "Trino", "Hive Metastore", "DuckDB"],
  },
  {
    label: "Streaming e integração",
    items: ["Apache Kafka", "Kafka Connect", "Debezium", "REST / SOAP"],
  },
  {
    label: "Bancos",
    items: ["PostgreSQL", "Oracle", "SQL Server", "Teradata", "Sybase ASE"],
  },
  {
    label: "Infra, segurança e entrega",
    items: ["Docker", "Git", "GitLab CI/CD", "Linux", "Azure", "AWS", "TLS / RBAC", "Nginx"],
  },
  {
    label: "Governança",
    items: ["LGPD", "Hash de PII", "OpenMetadata", "Linhagem"],
  },
  {
    label: "Analytics",
    items: ["Power BI", "Tableau", "Streamlit", "QlikView"],
  },
];

export const about = {
  heading: "Engenheira de dados",
  /** Frase com o contador de anos: antes + [anos] + depois. */
  leadBefore: "Trabalho com dados há",
  leadAfter:
    "anos. Hoje o foco é plataforma: pipelines, integrações e a infraestrutura que vários projetos usam ao mesmo tempo.",
  paragraphs: [
    "Comecei como analista de dados, trabalhando com painéis. Para entregar um painel melhor, fui descendo: passei a fazer o ETL e a modelagem, tudo o que prepara a informação antes de ela aparecer na tela.",
    "Esse é o arroz com feijão do trabalho com dados. Só que ele é a superfície: a informação já chegou, e o trabalho é traduzi-la em painel. Quando você desce, encontra o resto. Há mais informação, em níveis e formatos diferentes, vinda de muitos lugares, e a complexidade cresce junto com os projetos.",
    "É aí que a engenharia passa a importar. E quem cuida da engenharia acaba cuidando também da arquitetura e da governança, porque os problemas que aparecem na ponta se resolvem lá embaixo: a carga que não rodou, o número que ninguém sabe de onde veio.",
    "Com equipes grandes e vários projetos ao mesmo tempo, as perguntas mudam. Como controlar? Como mapear? Como monitorar? Como garantir que nada se perde no caminho? É nessas perguntas que trabalho hoje.",
    "Na prática, isso virou trabalho de plataforma. São bibliotecas que vários pipelines usam, rotinas que cuidam do lake sem intervenção manual e uma forma padronizada de publicar.",
    "Boa parte dos dados com que trabalho é sensível. Então controle de acesso, rastreabilidade e LGPD entram no desenho desde o começo.",
  ],
  /** Seção "Como eu trabalho": cinco pilares, na ordem em que entram em um projeto. */
  howIWorkLead:
    "São cinco pilares, na ordem em que entram em um projeto: do entendimento do negócio ao acompanhamento depois da entrega. São também os pontos em que sou mais exigente.",
  howIWork: [
    {
      title: "Entender o negócio.",
      text: "Não aplico a mesma fórmula a todo projeto. Tenho um padrão mínimo e ajusto o resto à complexidade de cada um, sem complicar além do necessário. O que não muda é a qualidade e o monitoramento.",
    },
    {
      title: "Definir a qualidade.",
      text: "A qualidade começa por definir o que o dado precisa cumprir, como datas válidas e nomes no padrão. Isso vira um contrato de qualidade, e é ele que mostra quando um indicador está comprometido por um problema na origem, e por quê.",
    },
    {
      title: "Rastrear a informação.",
      text: "É governança e linhagem. Trabalhando em camadas, tenho o histórico da informação: de onde ela veio, por quais tratamentos passou e em que padrão precisa sair.",
    },
    {
      title: "Padronizar o processo.",
      text: "Padronizar é combinar como a equipe trabalha, e não só como o código é escrito. Cada pessoa mantém o seu estilo, mas todos seguem o mesmo núcleo: tipos de dados, nomenclatura, forma de buscar e de catalogar a informação. Isso envolve a gestão também. O ganho é colaboração e continuidade: o trabalho segue de uma pessoa para outra, e quem entra no meio do caminho se adapta mais rápido.",
    },
    {
      title: "Monitorar a entrega.",
      text: "O projeto entregue continua sendo acompanhado. Os controles no pipeline mostram onde algo falhou antes que a informação falte lá na ponta, e a equipe segue de olho, dando suporte.",
    },
  ],
  howIWorkClosing: [
    "Isso vem de amadurecimento. Já me preocupei em fazer algo mirabolante e, no fim, gerei mais desconfiança do que confiança. Hoje sei que às vezes o projeto pede menos, e sigo os mesmos pilares do mesmo jeito.",
    "Continuo aprendendo com cada experiência, buscando feedback e me aprofundando em outros temas. O objetivo é entregar algo de valor que se mantenha, e não algo descartável. O pior resultado, para mim, é não gerar confiança.",
  ],
  focusNow: [
    "Databricks e prática de cloud / IaC",
    "Concluir Data Governance Foundations",
    "Arquitetura de plataformas de dados e governança",
  ],
};

export const education = {
  degree: "Bacharelado em Engenharia da Computação",
  school: "Centro Universitário de Brasília (UniCEUB)",
  year: "2021",
  language: "Inglês B2",
};

export const certifications = [
  { name: "CSM, Certified Scrum Master", year: "2025" },
  { name: "Big Data Ecosystem, FIAP", year: "2023" },
  { name: "Microsoft Power BI para Data Science, Data Science Academy", year: "2021" },
  { name: "DevOps & Agile Culture, FIAP", year: "2021" },
  { name: "Nano Course Business Intelligence, FIAP", year: "2021" },
];

export const inProgress = [
  { name: "Data Governance Foundations", year: "previsão 2026" },
];

/** Anos completos desde `iso` (calculado no build; o JS recalcula no cliente). */
export function yearsSince(iso: string, now = new Date()): number {
  const start = new Date(`${iso}T00:00:00`);
  const years = (now.getTime() - start.getTime()) / (365.25 * 24 * 3600 * 1000);
  return Math.max(0, Math.floor(years));
}
