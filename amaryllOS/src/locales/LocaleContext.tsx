import { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';

type Lang = 'en' | 'it';

interface LocaleContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}