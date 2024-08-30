import cron from "node-cron";
import archiveDatas from "./data/archive.json" assert { type: "json" };
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const task = () => {
  try {
    // console.log(archiveDatas);
    archiveDatas.map((item) => {
      const presentDate = new Date().getTime();
      const recordDate = new Date(item.date).getTime();

      console.log(
        "number of days",
        Math.floor((presentDate - recordDate) / (1000 * 60 * 60 * 24))
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// Define and export a function to start the scheduler
export default function startScheduler3() {
  // Schedule the task to run every minute
  cron.schedule("* * * * * *", task);
}
