import { createI18n } from 'vue-i18n';

async function createI18nInstance(): Promise<ReturnType<typeof createI18n>> {
  const options = {
    locale: 'zh',
    messages: {
      zh: await import('@locales/zh.json').then(module => module.default),
      en: await import('@locales/en.json').then(module => module.default),
    },
  };

  return createI18n(options);
}

export const i18n = createI18nInstance();

export default i18n;
