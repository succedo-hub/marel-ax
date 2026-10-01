export default {
  async fetch(): Promise<Response> {
    const html = `<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Marel.ax</title>
</head>
<body>
  <main>
    <h1>Marel.ax</h1>
    <p>Cloudflare Worker is running.</p>
  </main>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    });
  },
};
