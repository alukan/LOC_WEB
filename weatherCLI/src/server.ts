import express, { Request, Response } from "express";

const port = 3000;
const app = express();

app.use(express.json());

app.get("/weather/:city", (req: Request, res: Response) => {
  const city = req.params.city;
  res.send({ message: `city` });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
