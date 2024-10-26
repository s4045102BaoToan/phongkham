const MongoStore = require("connect-mongo");
require("dotenv").config();

const mongoStore = MongoStore.create({
  mongoUrl: process.env.DATABASE,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret: "secret-key",
  },
  dbName: "database",
  ttl: 8 * 24 * 60 * 60,
  autoRemove: "native",
});

mongoStore.on("error", function (e) {
  console.log("session store error:", e);
});

module.exports = {
  secret: "secret-key",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
};
