import cron from "node-cron";

const task = () => {
  console.log("Running a scheduled task at: ", new Date());
};

// Define and export a function to start the scheduler
export default function startScheduler() {
  // Schedule the task to run every minute
  cron.schedule("* * * * * *", task);
}
