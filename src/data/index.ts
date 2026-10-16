import * as pt from "./profile";
import * as en from "./profile.en";
import type { Lang } from "../i18n/ui";

const content = { pt, en };

/** Dados de carreira no idioma pedido (mesma estrutura nos dois). */
export function getData(lang: Lang) {
  return content[lang] as typeof pt;
}

export { yearsSince } from "./profile";
