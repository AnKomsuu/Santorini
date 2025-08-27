import fon from "../../assets/roadFon.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

const ITEMS_PER_PAGE = 6;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/db.json");
        setReviews(response.data.reviews);
      } catch (err) {
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="container">
        <div className="relative mb-25">
          <img className="rounded-b-2xl" src={fon} alt="" />
          <p
            className="absolute bottom-0 left-[29%] text-4xl uppercase
                          pt-8 px-15 bg-theme-img rounded-t-[40px] font-serif"
          >
            отзывы о santorini
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {reviews.slice(0, visibleCount).map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl border border-theme-blue shadow-sm"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-6">{review.text}</p>

              <div className="flex items-center gap-x-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          {visibleCount < reviews.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              className="text-lg underline cursor-pointer text-bg-blue hover:text-orange-500"
            >
              Загрузить еще
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Reviews;
