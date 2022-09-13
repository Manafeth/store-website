export default function getLanguage() {
    if (typeof window !== 'undefined')
      return localStorage.userLanguage;
    return 'en'
}
