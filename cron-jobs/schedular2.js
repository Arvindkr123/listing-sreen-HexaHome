import cron from "node-cron";
import invoices from "./data/invoice.json" assert { type: "json" };
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const task = () => {
  try {
    const paidInvoices = invoices.filter((item) => item.status === "paid");
    //console.log(paidInvoices);
    // remove the paid invoices
    if (paidInvoices.length > 0) {
      paidInvoices.forEach((item) => {
        invoices.splice(
          invoices.findIndex((e) => e.status === item.status),
          1
        );
      });

      // write the data into file then
      fs.writeFileSync(
        path.join(__dirname, "./", "data", "invoice.json"),
        JSON.stringify(invoices),
        "utf-8"
      );

      // write the data into file then
      fs.writeFileSync(
        path.join(__dirname, "./", "data", "archive2.json"),
        JSON.stringify(invoices),
        "utf-8"
      );
    }
  } catch (error) {
    console.log(error);
  }
};

// Define and export a function to start the scheduler
export default function startScheduler2() {
  // Schedule the task to run every minute
  cron.schedule("* * * * * *", task);
}
