import Koa from 'koa';
import serveStatic from 'koa-static';
import { PORT } from './config';
import { render, staticDir } from '@alexghr/news-ui';
import api from './api';

export default async function createServer() {
  const server = new Koa();

  server.use(api());

  server.use(serveStatic(staticDir));
  server.use(ktx => ktx.body = render());

  return () => server.listen(PORT);
}
