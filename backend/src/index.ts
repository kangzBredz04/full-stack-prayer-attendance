import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Bismilah Sukses!");
});

app.notFound((c) => {
  return c.text("Halaman tidak ditemukan...", 404);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Maaf ada yang error", 500);
});

export default app;
