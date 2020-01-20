type TemplateOptions = {
  app: string;
  body: string;
}

export default function render({
  app,
  body
}: TemplateOptions) {
  return /* html */`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="${app}"></script>
  </body>
</html>
`
}