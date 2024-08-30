import exprees from "express";
import startScheduler from "./schedular1.js";
import startScheduler2 from "./schedular2.js";
// startScheduler();
startScheduler2();

const app = exprees();
app.use(exprees.json());

app.listen(5000, () => {
  console.log("server listening on port : 5000");
});
