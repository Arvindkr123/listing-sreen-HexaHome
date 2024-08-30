import cron from "node-cron";
import invoices from "./data/invoice.json" assert { type: "json" };

const task = () => {
  console.log("Running a scheduled task at: ", new Date());

  const paidInvoices = invoices.filter((item) => item.status === "paid");
};

// Define and export a function to start the scheduler
export default function startScheduler2() {
  // Schedule the task to run every minute
  cron.schedule("* * * * * *", task);
}
