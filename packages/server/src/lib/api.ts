import compose from 'koa-compose';
import route from 'koa-route';

const countries = [
  {
    id: 'gb',
    name: 'United Kingdom'
  },
  {
    id: 'us',
    name: 'United States'
  },
  {
    id: 'fr',
    name: 'France'
  },
  {
    id: 'au',
    name: 'Australia'
  },
  {
    id: 'in',
    name: 'India'
  }
];

export default function api() {
  const base = '/api/v1';
  return compose([
    route.get(`${base}/countries`, ktx => ktx.body = countries),
  ]);
}