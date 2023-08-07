import axios from "axios";

//const BASE_URL ="https://youtube138.p.rapidapi.com";
const BASE_URL = "https://youtube-v311.p.rapidapi.com"

 const options = {
    params: {
      hl: 'en', gl: 'US'},
     headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
     }
  };

// const options = {
//   params: {
//     part: 'snippet',
//     channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
//     maxResults: '5'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
//   }
// };

  export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

