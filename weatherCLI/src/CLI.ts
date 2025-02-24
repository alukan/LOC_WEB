import { program } from "commander";
import chalk from "chalk";

async function getWeather(city: string, isFull: Boolean) {
  const result = await //?full=value of is Full
  (
    await fetch("http://localhost:3000/weather/" + city + `?full=${isFull}`, {
      method: "GET",
    })
  ).text();

  console.log(chalk.blue(`Weather in ` + city + ` is`));
  console.log(chalk.green(result));
}

interface opt {
  city: string;
  full: boolean;
}

program
  .version("0.0.1")
  .description("Weather CLI")
  .option("--city <city>", "City name")
  .option("-f, --full", "Show full weather report")
  .action((options: opt) => {
    getWeather(options.city, options.full);
  });

program.parse(process.argv);
