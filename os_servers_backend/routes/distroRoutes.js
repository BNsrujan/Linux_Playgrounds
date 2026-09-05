const express = require("express");
const Distro = require("../models/Distro");
const { asyncRoute } = require("../middleware/errorHandler");
const { notFound } = require("../lib/httpError");

const router = express.Router();

router.get(
  "/",
  asyncRoute(async (req, res) => {
    const distros = await Distro.find({ enabled: true }).sort({ sortOrder: 1, name: 1 });
    res.json({ distros: distros.map((distro) => distro.toPublicJSON()) });
  })
);

router.get(
  "/:slug",
  asyncRoute(async (req, res) => {
    const distro = await Distro.findOne({ slug: req.params.slug.toLowerCase(), enabled: true });
    if (!distro) throw notFound(`No distro named ${req.params.slug}`);
    res.json({ distro: distro.toPublicJSON() });
  })
);

module.exports = router;
