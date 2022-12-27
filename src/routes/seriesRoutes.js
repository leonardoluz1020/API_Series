import serieController from "../controllers/seriesController.js";
import express from 'express';

const router = express.Router();

router
  .get('/series', serieController.listSeries)
  .get('/series/:id', serieController.listSeriesId)
  .post('/series', serieController.registerSeries)
  .post('/series/:id', serieController.registerNewSeasonById)
  .put('/series/:id', serieController.updatingSeriesId)

export default router;