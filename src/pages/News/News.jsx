import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
      } catch {
        setError("Не удалось загрузить данные.");
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
    <div className="container">
      <Helmet>
        <title>Новости — Santorini Hotel</title>
        <meta name="description" content="Последние новости отеля Santorini — события, обновления и интересные истории." />
      </Helmet>
      <p className="uppercase text-3xl md:text-5xl text-center my-10 md:my-20">Новости</p>
      <div className="flex flex-col gap-y-12 md:gap-y-30">
        {currentNews.map((news, index) => (
          <div
            key={news.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-25 items-center"
          >
            <img
              loading="lazy"
              className={`w-full h-48 sm:h-64 md:h-92 object-cover rounded-lg ${
                index % 2 !== 0
                  ? "md:order-last md:rounded-tl-[70px]"
                  : "md:rounded-tr-[70px]"
              }`}
              src={news.image}
              alt={news.title}
            />
            <div>
              <h3 className="text-xl md:text-3xl uppercase">{news.title}</h3>
              <p className="mb-6 md:mb-13 mt-3 md:mt-5 text-sm md:text-base">{news.excerpt}</p>
              <Link to={`/news/${news.id}`}>
                <p className="uppercase flex items-center gap-x-2 text-bg-blue font-medium text-sm md:text-base">
                  читать новость <BsArrowUpRight />
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-x-2 md:gap-x-4 mt-10 md:mt-16">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="pb-2 pt-0.5 md:pb-3 md:pt-1 cursor-pointer hover:bg-gray-400 px-3 md:px-4 text-2xl md:text-4xl border rounded-full"
        >
          &larr;
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer text-lg md:text-2xl transition-colors ${
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
          className="pb-2 pt-0.5 md:pb-3 md:pt-1 cursor-pointer hover:bg-gray-400 px-3 md:px-4 text-2xl md:text-4xl border rounded-full"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};
export default News;
