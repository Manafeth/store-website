export default function getLocalStorage() {
    if (typeof window !== 'undefined')
      return localStorage.userLanguage;
    return 'en'
}
