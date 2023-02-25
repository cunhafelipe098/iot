import { Router } from "express"

const deviceRoutes = Router();

deviceRoutes.get("/", (request, response) => {
  return response.json({
    menssage: "get device"
  });
});

export { deviceRoutes };