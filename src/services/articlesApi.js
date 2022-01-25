import axios from 'axios';

const fetchArticlesWithQuery = imageName => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${imageName}&page=1&key=24433477-a7717dfa51cf01b03daed8616&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default fetchArticlesWithQuery;
