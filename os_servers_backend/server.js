require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const Docker = require("dockerode");
const docker = new Docker({ socketPath: "/var/run/docker.sock" });
const app = express();
const path = require("path");

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

// Routes
app.use("/api/users", userRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => {
    console.error(` MongoDB connection error: ${err.message}`);
    process.exit(1);
  });

app.post("/api/termincal", async (req, res) => {
  const { command, os } = req.body;

  try {
    // Step 1: Create a container
    const container = await docker.createContainer({
      Image: os, // Must already exist or be built
      Cmd: ["sh", "-c", command],
      Tty: false,
    });

    // Step 2: Start it
    await container.start();

    // Step 3: Collect output
    const stream = await container.logs({
      stdout: true,
      stderr: true,
      follow: true,
    });

    let output = "";

    stream.on("data", (chunk) => {
      output += chunk.toString();
    });

    stream.on("end", async () => {
      await container.remove();
      res.json({ output });
      console.log(output);
    });


  } catch (err) {
    console.error(err);
    res.status(500).send("Error running command");
  }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
