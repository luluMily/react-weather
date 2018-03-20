// export function selectBook(book) {
//   // selectBook is an Action Creator, it needs to return an action,
//   // an object with a type property
//   return {
//     type: 'BOOK_SELECTED',
//     payload: book
//   }
// }
import axios from 'axios';
const API_KEY = 'MDpiNmM2NjY3ZS0yYTU3LTExZTgtOWE2Ny1jYjk2YzY5Mjc3Y2M6ckxlUWhDdG1tZzVXOEM0YXRreWxJV1BEZ3RhaTJCVWFLUEg3';
const ROOT_URL = `https://lcboapi.com/products?access_key=${API_KEY}`;
const BRAND = 'Beau’s';
const SEASONAL = 'is_seasonal';

export const FETCH_BEER = 'FETCH_BEER';

export function fetchBeer() {
  const url = `${ROOT_URL}&q=${BRAND}&where=${SEASONAL}`;
  const request = axios.get(url);

  return {
    type: 'FETCHER_BEER',
    payload: request
  };
}
