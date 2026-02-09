import axios from "axios";

const DB_URL = "/db.json";

const fetchDb = async () => {
  const response = await axios.get(DB_URL);
  return response.data;
};

const api = {
  async getRooms() {
    const db = await fetchDb();
    return db.rooms || [];
  },

  async getActivities() {
    const db = await fetchDb();
    return db.activities || [];
  },

  async getNews() {
    const db = await fetchDb();
    return db.news || [];
  },

  async getSpecials() {
    const db = await fetchDb();
    return db.specials || [];
  },

  async getReviews() {
    const db = await fetchDb();
    return db.reviews || [];
  },

  async getAttractions() {
    const db = await fetchDb();
    return db.attractions || [];
  },
};

export default api;
