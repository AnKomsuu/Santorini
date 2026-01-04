import axios from "axios";

// Имитация задержки для реалистичности
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Базовый URL для API
const API_BASE_URL = "/db.json";

// Функция для получения данных с задержкой
const fetchWithDelay = async (url, delayMs = 300) => {
  await delay(delayMs);
  const response = await axios.get(url);
  return response.data;
};

// API сервис
const api = {
  /**
   * Получить все номера
   * @returns {Promise<Array>}
   */
  getRooms: async () => {
    const data = await fetchWithDelay(API_BASE_URL);
    return data.rooms || [];
  },

  /**
   * Получить все активности
   * @returns {Promise<Array>}
   */
  getActivities: async () => {
    const data = await fetchWithDelay(API_BASE_URL);
    return data.activities || [];
  },

  /**
   * Получить все новости
   * @returns {Promise<Array>}
   */
  getNews: async () => {
    const data = await fetchWithDelay(API_BASE_URL);
    return data.news || [];
  },

  /**
   * Получить все отзывы
   * @returns {Promise<Array>}
   */
  getReviews: async () => {
    const data = await fetchWithDelay(API_BASE_URL);
    return data.reviews || [];
  },

  /**
   * Получить все спецпредложения
   * @returns {Promise<Array>}
   */
  getSpecials: async () => {
    const data = await fetchWithDelay(API_BASE_URL);
    return data.specials || [];
  },

  /**
   * Получить все достопримечательности
   * @returns {Promise<Array>}
   */
  getAttractions: async () => {
    const data = await fetchWithDelay(API_BASE_URL);
    return data.attractions || [];
  },
};

export default api;

