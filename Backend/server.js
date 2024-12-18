require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const authRoutes = require("./routes/userRoute");
const DestinationRoutes = require("./routes/destinationRoute");

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API routes
app.use("/api/user", authRoutes);
app.use("/api/destination", DestinationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
