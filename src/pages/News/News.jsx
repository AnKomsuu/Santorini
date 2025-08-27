import { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const NEWS_PER_PAGE = 4;
const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/db.json");

        if (response.data && response.data.news) {
          setNews(response.data.news);
        } else {
          setError("Раздел 'news' не найден в db.json");
        }
      } catch (err) {
        setError("Не удалось загрузить данные.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="container py-20 text-center">Загрузка новостей...</div>
    );
  }

  if (error) {
    return (
      <div className="container py-20 text-center text-red-500">{error}</div>
    );
  }

  const totalPages = Math.ceil(news.length / NEWS_PER_PAGE);

  const indexOfLastNews = currentPage * NEWS_PER_PAGE;
  const indexOfFirstNews = indexOfLastNews - NEWS_PER_PAGE;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const goToPrevPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  return (
    <>
      <div className="container">
        <p className="uppercase text-5xl text-center my-20">Новости</p>
        <div className="flex flex-col gap-y-30">
          {currentNews.map((news, index) => (
            <div
              key={news.id}
              className="grid grid-cols-2 gap-25 items-center last:border-b-0"
            >
              <img
                className={`w-full h-92 object-cover ${
                  index % 2 !== 0
                    ? "md:order-last rounded-tl-[70px]"
                    : "rounded-tr-[70px]"
                }`}
                src={news.image}
                alt={news.title}
              />
              <div>
                <h3 className="text-3xl uppercase">{news.title}</h3>
                <p className="mb-13 mt-5">{news.excerpt}</p>
                <Link to={`/news/${news.id}`}>
                  <p className="uppercase flex items-center gap-x-2 text-bg-blue font-medium">
                    читать новость <BsArrowUpRight />
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-x-4 mt-16">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="pb-3 pt-1 cursor-pointer hover:bg-gray-400 px-4 text-4xl border rounded-full "
          >
            &larr;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-12 h-12 rounded-full cursor-pointer text-2xl transition-colors ${
                currentPage === number
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="pb-3 pt-1 cursor-pointer hover:bg-gray-400 px-4 text-4xl border rounded-full"
          >
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
};
export default News;
