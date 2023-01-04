export default function getAccessToken() {
  if (typeof window !== 'undefined')
    return localStorage.getItem('accessToken');
  return false
}
