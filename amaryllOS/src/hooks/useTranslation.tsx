import { useMemo } from 'react';
import { useTranslation as useI18n } from 'react-i18next';

const localeModules = import.meta.glob<{ default: Record<string, any> }>(
  '../locales/*/*.json',
  { eager: true }
);

function getNamespace(namespace: string, lang: string) {
  const mod =
    localeModules[`../locales/${lang}/${namespace}.json`] ??
    localeModules[`../locales/en/${namespace}.json`];

  if (!mod) {
    throw new Error(`Namespace ${namespace} not found for language ${lang}`);
  }

  return mod.default;
}

export function useTranslation(namespace: string) {
  const { i18n } = useI18n(); 
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? 'en').split('-')[0];

  return useMemo(() => getNamespace(namespace, lang), [namespace, lang]);
}