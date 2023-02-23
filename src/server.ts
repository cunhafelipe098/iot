import express from "express";

const app = express();


app.get("/", (req, res) => {
  return res.json({
    menssage: "iot project"
  });
});
app.listen(3000, () => console.log("Running on port 3000"));