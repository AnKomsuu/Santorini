import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import api from "../../services/api";

const NEWS_PER_PAGE = 4;
const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: news, loading, error } = useData(api.getNews);

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

  const totalPages = Math.ceil((news?.length || 0) / NEWS_PER_PAGE);

  const indexOfLastNews = currentPage * NEWS_PER_PAGE;
  const indexOfFirstNews = indexOfLastNews - NEWS_PER_PAGE;
  const currentNews = (news || []).slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const goToPrevPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  return (
    <>
      <div className="container">
        <p className="uppercase text-3xl md:text-4xl lg:text-5xl text-center my-20">Новости</p>
        <div className="flex flex-col gap-y-30">
          {currentNews.map((news, index) => (
            <div
              key={news.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-25 items-center last:border-b-0"
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
              <div className="px-4 md:px-0">
                <h3 className="text-xl md:text-2xl lg:text-3xl uppercase">{news.title}</h3>
                <p className="mb-8 md:mb-13 mt-5">{news.excerpt}</p>
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
            className="pb-3 pt-1 cursor-pointer hover:bg-gray-400 px-4 text-2xl md:text-3xl lg:text-4xl border rounded-full "
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
            className="pb-3 pt-1 cursor-pointer hover:bg-gray-400 px-4 text-2xl md:text-3xl lg:text-4xl border rounded-full"
          >
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
};
export default News;
