import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID f4b883758a95d6576994f2dc90815fd5016032db03f4df942bbc1bfb1deae2dc"
  }
})