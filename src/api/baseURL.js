import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'https://roads.googleapis.com/v1/snapToRoads?path=',
});
