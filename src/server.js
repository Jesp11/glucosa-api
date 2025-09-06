require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models/index"); // models/index.js lo crea sequelize-cli

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a Postgres (Neon) OK");
    app.listen(PORT, () => console.log(`🚀 http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ Error DB:", err);
    process.exit(1);
  }
})();
