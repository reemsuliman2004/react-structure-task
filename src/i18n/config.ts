export const i18n = {
  locale: 'en' as const,
  messages: {
    en: {
      greeting: 'Welcome',
      homeTitle: 'React project structure demo',
      aboutTitle: 'About this example',
    },
  } as const,
}

export function t(key: keyof (typeof i18n.messages)[typeof i18n.locale]) {
  return i18n.messages[i18n.locale][key]
}
