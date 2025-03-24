interface ILocale {
  id: string;
  name: string;
}

export const mockedLocales: ILocale[] = [
  {
    id: 'en',
    name: 'English (Default)'
  },
  {
    id: 'nl-be',
    name: 'Dutch (Belgium)'
  },
  {
    id: 'fr-be',
    name: 'French (Belgium)'
  }
  // Add more locales here if necessary
];
