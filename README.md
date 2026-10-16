# Joyce Nogueira — Portfólio

Site de portfólio em **Astro** (engenharia de dados).

**Live:** [https://joyceliin.github.io/](https://joyceliin.github.io/)

## Conteúdo

- Home, sobre, projetos e contato
- Cases: plataforma Airflow, lakehouse on-premises, integração com Kafka, governança com OpenMetadata

## Stack do site

- [Astro](https://astro.build) (site estático)
- Deploy automático via GitHub Actions → GitHub Pages

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:4321`.

Build estático:

```bash
npm run build
npm run preview
```

## Português e inglês

O site tem as duas versões: português em `/` e inglês em `/en/`, com seletor
de idioma no topo. Ao editar conteúdo, atualize os dois idiomas:

| O quê | Português | Inglês |
|---|---|---|
| Dados do perfil | `src/data/profile.ts` | `src/data/profile.en.ts` |
| Cases | `src/content/projects/pt/` | `src/content/projects/en/` (mesmo nome de arquivo) |
| Textos da interface e rotas | `src/i18n/ui.ts` | `src/i18n/ui.ts` |

As páginas ficam em `src/views/` e recebem o idioma; `src/pages/` só define as
rotas.

## Imagem de compartilhamento

Depois de editar, regenere a imagem Open Graph:

```bash
npm run assets   # usa Chrome/Edge headless; defina CHROME_PATH se preciso
```

Gera `public/og.png` e `public/og-en.png`. Commite os dois arquivos.

## Perfil e projetos no GitHub

- GitHub: [github.com/joycelnog](https://github.com/joycelnog)
- Email: joycelnog@gmail.com
