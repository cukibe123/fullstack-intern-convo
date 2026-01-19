import { Router } from "express";
import { getInterviewResponses } from "../services/responses.service.js";

const router = Router();

router.get("/responses", (req, res) => {

    const data = getInterviewResponses();
    res.json(data);
});

export default router;