module.exports = {
  appName: "My Express App",
  port: process.env.PORT || 3000,
  db: process.env.DATABASE_URL || "mongodb://localhost:27017/myapp",
};
