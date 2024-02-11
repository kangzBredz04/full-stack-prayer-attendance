import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Bismilah Sukses!");
});

export default app;
