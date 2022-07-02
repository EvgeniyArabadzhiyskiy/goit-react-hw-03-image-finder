import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '26298929-dc8db63efad38f2c4177a32d6';
const OPTIONS = 'image_type=photo';

async function fetchImages(query, page) {
  const response = await axios(
    `${BASE_URL}?key=${API_KEY}&q=${query}&${OPTIONS}&page=${page}&per_page=12`
  );

  return response.data;
}

export default fetchImages;
