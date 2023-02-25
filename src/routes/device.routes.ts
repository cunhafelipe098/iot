import { Router } from "express"
import { deviceControler } from "../main/DeviceMain";

const deviceRoutes = Router();

deviceRoutes.post("/", (request, response) => {
  return deviceControler.create(request, response);
});

deviceRoutes.get("/", (request, response) => {
  return deviceControler.list(request, response);
});

deviceRoutes.get("/:id", (request, response) => {
  return deviceControler.finOne(request, response);
});

deviceRoutes.put("/:id", (request, response) => {
  return deviceControler.update(request, response);
});

deviceRoutes.delete("/:id", (request, response) => {
  return deviceControler.delete(request, response);
});

export { deviceRoutes };