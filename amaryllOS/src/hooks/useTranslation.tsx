import { useMemo } from 'react';
import { useLocale } from '../locales/LocaleContext';

const localeModules = import.meta.glob<{ default: Record<string, any> }>(
  '../locales/*/*.json',
  { eager: true }
);

function getNamespace(namespace: string, lang: string) {
  const path = `../locales/${lang}/${namespace}.json`;
  const mod = localeModules[path];

  if (!mod) {
    throw new Error(`Namespace ${namespace} not found for language ${lang}`);
  }

  return mod.default;
}

export function useTranslation(namespace: string) {
  const { lang } = useLocale();
  return useMemo(() => getNamespace(namespace, lang), [namespace, lang]);
}