import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
      } catch (err) {
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
          <h2 className="text-3xl font-serif mt-12 mb-4">{block.text}</h2>
        ) : (
          <h3 className="text-2xl font-serif mt-10 mb-4">{block.text}</h3>
        );
      case "paragraph":
        return <p className="text-xl leading-relaxed mb-6">{block.text}</p>;
      case "image":
        return (
          <figure className="my-10 grid grid-cols-2 gap-x-10">
            <div>
              <img
                src={block.src}
                alt={block.caption || ""}
                className="w-full object-cover rounded-lg shadow-md h-100"
              />
              {block.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  {block.caption}
                </figcaption>
              )}
            </div>
            {
              <div>
                <p className="text-3xl border-b-2 pb-5 border-theme-blue">
                  {block.title}
                </p>
                <p className="mt-10 text-lg leading-[180%]">{block.text}</p>
              </div>
            }
          </figure>
        );
      case "list":
        const ListTag = block.style === "ordered" ? "ol" : "ul";
        return (
          <ListTag className="list-inside list-disc space-y-2 mb-6 pl-4 text-lg">
            {block.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ListTag>
        );
      case "blockquote":
        return (
          <blockquote className="border-l-4 border-bg-blue pl-6 italic text-xl font-bold my-10">
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
        <>
          <article>
            <div className="relative mb-10">
              <img
                className="w-full h-140 object-cover"
                src={news.image}
                alt={news.title}
              />
              <p
                className="absolute text-4xl uppercase
                          text-center pt-10 pb-5 w-200 px-5 bg-theme-img rounded-t-[50px] font-serif bottom-0 left-[18.5%]"
              >
                {news.title}
              </p>
            </div>
            <div>
              {news.content.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}
            </div>

            <div className="mt-20 border-t pt-10 flex justify-evenly items-center">
              <div>
                <span className="font-bold">Понравилось?</span>
                <p>Расскажите друзьям!</p>
              </div>
              <div className="flex gap-x-7">
                <FaWhatsapp className="w-12 h-auto text-green-600" />
                <FaTelegram className="w-10 h-auto text-blue-600" />
                <img className="w-10 h-auto" src={vk} alt="" />
              </div>
            </div>

            <div className="mt-10 flex justify-between border-t pt-10">
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
        </>
      )}
    </section>
  );
};

export default NewsDetailsPage;
