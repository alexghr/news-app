import Koa from 'koa';
import serveStatic from 'koa-static';
import { PORT } from './config';
import { render, staticDir } from '@alexghr/news-ui';

export default async function createServer() {
  const server = new Koa();

  server.use(serveStatic(staticDir));
  server.use(ktx => ktx.body = render());

  return () => server.listen(PORT);
}
