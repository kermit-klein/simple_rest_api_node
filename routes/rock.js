import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.db.models.rocks));
});

router.get("/:rockId", (req, res) => {
  return res.send(req.db.models.rocks[req.params.rockId]);
});

export default router;
