import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import fon from "../../assets/errorFon.jpg";
import decore from "../../assets/errorDecore.png";

const NotFoundPage = () => {
  return (
    <section className="container text-center">
      <Helmet>
        <title>Страница не найдена — Santorini Hotel</title>
      </Helmet>
      <div className="relative mb-12 md:mb-30">
        <img className="rounded-b-2xl w-full" src={fon} alt="" />
        <p
          className="absolute bottom-[-30px] md:bottom-[-60px] text-left text-xl md:text-4xl uppercase
                                pt-4 md:pt-9 px-6 md:px-15 bg-theme-img rounded-tr-[25px] md:rounded-tr-[40px] font-serif leading-snug"
        >
          Ого... Так далеко даже мы <br className="hidden md:block" /> не заходили
        </p>
      </div>
      <div className="text-6xl sm:text-8xl md:text-[150px] relative font-serif text-bg-blue mb-6 md:mb-10">
        <img
          className="absolute w-48 md:w-150 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[27%] top-2 md:top-8 hidden md:block"
          src={decore}
          alt=""
        />
        404
      </div>
      <p className="text-base md:text-2xl mb-6 md:mb-8 leading-relaxed px-4">
        Страницу, которую вы искали, похитили пираты. <br className="hidden md:block" />
        Без паники, вернитесь в главное меню.
      </p>

      <div className="mt-8 md:mt-12">
        <Link
          to="/"
          className="px-6 md:px-8 py-3 md:py-4 bg-bg-blue text-white rounded-lg font-bold uppercase text-sm md:text-base"
        >
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
