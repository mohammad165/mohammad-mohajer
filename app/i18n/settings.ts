// app/i18n/settings.ts
export const locales = ['fa', 'en'] as const;
export const defaultLocale = 'fa' as const;
export type Locale = typeof locales[number];

export const localeNames = {
    fa: 'فارسی',
    en: 'English'
};