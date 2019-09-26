const url = "https://comms.globalxchange.com/";
//if (process.env.NODE_ENV === "production") {
if ("fly" === "fly") {
  module.exports = {
    url
  };
} else {
  module.exports = {
    url: "http://localhost:7000/"
  };
}
