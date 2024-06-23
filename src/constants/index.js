export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.395945',
      bl_lng: '24.795437',
      tr_lat: '43.431971',
      tr_lng: '44.980891',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '26844ed7admsh4d72262ddf6abf3p1f57f1jsn9ee4e003a8b3',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

  export const dOptions ={
    headers: {
      'X-RapidAPI-Key': '26844ed7admsh4d72262ddf6abf3p1f57f1jsn9ee4e003a8b3',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  }