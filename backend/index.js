import app from "./src/app.js";
import { PORT } from "./src/config/envVar.config.js";

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
