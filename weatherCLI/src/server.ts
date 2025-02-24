import express, { Request, Response } from "express";

const port = 3000;
const app = express();

app.use(express.json());

app.get("/weather/:city", async (req: Request, res: Response) => {
  const city = req.params.city;
  const isFull = req.query.full === "true";

  let url;
  if (isFull) {
    url = `https://wttr.in/${city}?format=%C+%t+%w+%h+%l`;
  } else {
    url = `https://wttr.in/${city}?format=%t`;
  }
  //   url  settings
  const result = await (
    await fetch(url, {
      method: "GET",
    })
  ).text();

  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
