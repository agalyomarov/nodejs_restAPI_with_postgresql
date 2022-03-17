const express = require("express");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", postRoutes);

app.listen(PORT, () => {
    console.log("Server started");
});