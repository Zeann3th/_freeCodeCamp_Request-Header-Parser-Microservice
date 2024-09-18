import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();


app.use(express.static('public'));

const __dirname = import.meta.dirname
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res) => {
  return res.status(200).json({
    "ipaddress": req.ip,
    "language": req.headers["accept-language"],
    "software": req.headers["user-agent"]
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
