import Koa from 'koa';
import serveStatic from 'koa-static';
import { PORT } from './config';
import { render, staticDir } from '@alexghr/news-ui';
import api from './api';

export default async function createServer() {
  const server = new Koa();

  server.use(async (ktx, next) => {
    try {
      await next();
    } catch (err) {
      console.error("Error processing request %s %s: %o", ktx.method, ktx.path, err);
      ktx.status = 500;
      ktx.body = 'Internal server error';
    }
  });

  server.use(api());

  server.use(serveStatic(staticDir));
  server.use(ktx => ktx.body = render());

  return () => server.listen(PORT);
}
