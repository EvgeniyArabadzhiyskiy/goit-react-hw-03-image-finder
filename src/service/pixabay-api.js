import axios from 'axios';

const API_KEY = '26298929-dc8db63efad38f2c4177a32d6';

async function fetchImages(query, page) {
  const response = await axios(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&page=${page}&per_page=12`
  );

  return response.data.hits;
}

export default fetchImages;
