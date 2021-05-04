import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  let rocks = Object.values(req.db.models.rocks);
  res.render("rocks/index", {
    rocks: rocks,
  });
});

router.get("/:rockId", (req, res) => {
  let rock = req.db.models.rocks[req.params.rockId];
  res.render("rocks/show", { rock: rock });
});

export default router;
