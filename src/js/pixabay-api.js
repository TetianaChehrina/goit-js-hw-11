export function getImage(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '43043595-2b9ab8fff7b2b720f98fadc4f';
  const params = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
