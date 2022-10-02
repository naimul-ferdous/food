import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer m0FuoLms2mB8yXfOwgf1imngWXZqlq-coW4iM5FkdRQtcCsXjwrvR9tyb4ePsssdWHqQolZBLEokWGhJVyRYye3qLdZrI9EPDLjRV1m5UdFX3thgtyscTCuoV7g5Y3Yx",
  },
});
