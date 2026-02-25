import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import vk from "../../assets/VK.svg";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const NewsDetailsPage = () => {
  const { newsId } = useParams();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get("/db.json");
        const allNews = response.data.news;

        const currentArticle = allNews.find(
          (item) => item.id === Number(newsId)
        );

        if (currentArticle) {
          setNews(currentArticle);
        } else {
          setError("Новость не найдена.");
        }
      } catch {
        setError("Ошибка загрузки данных.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [newsId]);
  if (loading)
    return <div className="container py-40 text-center">Загрузка...</div>;
  if (error)
    return (
      <div className="container py-40 text-center text-red-500">{error}</div>
    );

  const ContentBlock = ({ block }) => {
    switch (block.type) {
      case "heading":
        return block.level === 2 ? (
          <h2 className="text-xl md:text-3xl font-serif mt-8 md:mt-12 mb-3 md:mb-4">{block.text}</h2>
        ) : (
          <h3 className="text-lg md:text-2xl font-serif mt-6 md:mt-10 mb-3 md:mb-4">{block.text}</h3>
        );
      case "paragraph":
        return <p className="text-base md:text-xl leading-relaxed mb-4 md:mb-6">{block.text}</p>;
      case "image":
        return (
          <figure className="my-6 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10">
            <div>
              <img
                src={block.src}
                alt={block.caption || ""}
                className="w-full object-cover rounded-lg shadow-md h-48 md:h-100"
              />
              {block.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  {block.caption}
                </figcaption>
              )}
            </div>
            <div>
              <p className="text-xl md:text-3xl border-b-2 pb-3 md:pb-5 border-theme-blue">
                {block.title}
              </p>
              <p className="mt-4 md:mt-10 text-base md:text-lg leading-[180%]">{block.text}</p>
            </div>
          </figure>
        );
      case "list": {
        const ListTag = block.style === "ordered" ? "ol" : "ul";
        return (
          <ListTag className="list-inside list-disc space-y-2 mb-4 md:mb-6 pl-4 text-base md:text-lg">
            {block.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ListTag>
        );
      }
      case "blockquote":
        return (
          <blockquote className="border-l-4 border-bg-blue pl-4 md:pl-6 italic text-lg md:text-xl font-bold my-6 md:my-10">
            {block.text}
          </blockquote>
        );
      default:
        return null;
    }
  };
  return (
    <section className="container">
      {news && (
        <article>
          <Helmet>
            <title>{news.title} — Santorini Hotel</title>
            <meta name="description" content={news.excerpt?.slice(0, 160) || ""} />
          </Helmet>
          <div className="relative mb-6 md:mb-10">
            <img
              className="w-full h-48 sm:h-72 md:h-140 object-cover"
              src={news.image}
              alt={news.title}
            />
            <p
              className="absolute text-lg sm:text-2xl md:text-4xl uppercase
                        text-center pt-4 md:pt-10 pb-3 md:pb-5 w-full md:w-200 px-4 md:px-5 bg-theme-img rounded-t-[30px] md:rounded-t-[50px] font-serif bottom-0 left-0 md:left-[18.5%]"
            >
              {news.title}
            </p>
          </div>
          <div>
            {news.content.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>

          <div className="mt-10 md:mt-20 border-t pt-6 md:pt-10 flex flex-col sm:flex-row justify-evenly items-center gap-4">
            <div className="text-center sm:text-left">
              <span className="font-bold">Понравилось?</span>
              <p>Расскажите друзьям!</p>
            </div>
            <div className="flex gap-x-5 md:gap-x-7">
              <FaWhatsapp className="w-8 md:w-12 h-auto text-green-600" />
              <FaTelegram className="w-7 md:w-10 h-auto text-blue-600" />
              <img className="w-7 md:w-10 h-auto" src={vk} alt="" />
            </div>
          </div>

          <div className="mt-6 md:mt-10 flex justify-between border-t pt-6 md:pt-10 text-sm md:text-base">
            <Link
              to={`/news/${news.id - 1}`}
              className={
                news.id === 1 ? "pointer-events-none opacity-50" : ""
              }
            >
              &larr; Предыдущая статья
            </Link>
            <Link
              to={`/news/${news.id + 1}`}
              className={
                news.id === 10 ? "pointer-events-none opacity-50" : ""
              }
            >
              Следующая статья &rarr;
            </Link>
          </div>
        </article>
      )}
    </section>
  );
};

export default NewsDetailsPage;
