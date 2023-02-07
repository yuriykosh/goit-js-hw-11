import axios from 'axios';

const API_KEY = '33424262-f95ab5c19357b040dd6ddc43b';
axios.defaults.baseURL = 'https://pixabay.com/api/';

class ImageApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const options = new URLSearchParams({
      q: this.searchQuery,
      per_page: 40,
      page: this.page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    const { data } = await axios(`?${options}`);
    this.incrementPage();
    return data;
  }

  get _searchQuery() {
    return this.searchQuery;
  }
  set _searchQuery(newQuery) {
    this._searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}

export const imageApi = new ImageApi();
