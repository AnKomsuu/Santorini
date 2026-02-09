import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const SearchPanel = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [allSearchableData, setAllSearchableData] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        const rooms = response.data.rooms.map((item) => ({
          type: "Номер",
          name: item.category,

          searchableText:
            `${item.category} ${item.description} ${item.view}`.toLowerCase(),
          path: `/rooms/${item.id}`,
        }));

        const activities = response.data.activities.map((item) => ({
          type: "Активность",
          name: item.title,
          searchableText: `${item.title} ${item.description}`.toLowerCase(),
          path: `/recreation/${item.id}`,
        }));

        const news = response.data.news.map((item) => ({
          type: "Новость",
          name: item.title,
          searchableText: `${item.title} ${item.excerpt}`.toLowerCase(),
          path: `/news/${item.id}`,
        }));

        const staticPages = [
          {
            type: "Страница",
            name: "Правила проживания",
            searchableText: "правила условия проживание заезд выезд",
            path: "/rules",
          },
          {
            type: "Страница",
            name: "Контакты",
            searchableText: "контакты адрес телефон карта добраться",
            path: "/contacts",
          },
          {
            type: "Страница",
            name: "Об отеле",
            searchableText: "об отеле философия история",
            path: "/about",
          },
        ];

        setAllSearchableData([
          ...rooms,
          ...activities,
          ...news,
          ...staticPages,
        ]);
      })
      .catch((err) => console.error("Ошибка загрузки данных для поиска:", err));
  }, []);

  useEffect(() => {
    const cleanedQuery = query.trim().toLowerCase();

    if (cleanedQuery === "") {
      setResults([]);
      setError("");
      return;
    }

    const foundResults = allSearchableData.filter((item) =>
      item.searchableText.includes(cleanedQuery)
    );

    setResults(foundResults);

    if (foundResults.length === 0) {
      setError(`Извините, по запросу "${query}" ничего не найдено.`);
    } else {
      setError("");
    }
  }, [query, allSearchableData]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`absolute top-full w-full bg-theme-100 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="container py-4">
        <div className="flex items-center gap-x-4 border-b pb-4">
          <FiSearch className="text-2xl" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по сайту (RU)"
            className="w-full h-12 text-lg outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-3xl cursor-pointer"
            aria-label="Закрыть поиск"
          >
            <IoMdClose />
          </button>
        </div>

        <div className="pt-4 max-h-40 overflow-y-auto">
          {results.length > 0 && (
            <div className="space-y-1">
              {results.map((item) => (
                <Link
                  key={`${item.type}-${item.name}`}
                  to={item.path}
                  onClick={onClose}
                  className="block p-3 rounded-md hover:bg-theme-img"
                >
                  {item.name}
                  <span className="text-xs ml-2">({item.type})</span>
                </Link>
              ))}
            </div>
          )}

          {error && <p className="p-3 italic">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
