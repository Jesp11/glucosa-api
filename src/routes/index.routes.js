const { Router } = require("express");
const router = Router();
const userRoutes = require("./user.routes");

// Rutas de usuario
router.use("/users", userRoutes);

// Rutas de prueba
router.get("/health", (_req, res) => {
  res.json({ ok: true, message: "API funcionando 🚀" });
});



module.exports = router;