import { useState, useEffect } from "react";

/**
 * Кастомный хук для загрузки данных
 * @param {Function} fetchFunction - Функция запроса (например, api.getRooms)
 * @returns {{ data: any, loading: boolean, error: string | null }}
 */
const useData = (fetchFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError("Не удалось загрузить данные.");
        console.error("Ошибка загрузки данных:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Методы api стабильны, поэтому можно использовать пустой массив

  return { data, loading, error };
};

export default useData;

