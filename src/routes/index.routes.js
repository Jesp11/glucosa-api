const { Router } = require("express");
const router = Router();

// Rutas de prueba
router.get("/health", (_req, res) => {
  res.json({ ok: true, message: "API funcionando 🚀" });
});



module.exports = router;