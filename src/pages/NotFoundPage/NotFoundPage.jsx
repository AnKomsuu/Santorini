import { Link } from "react-router-dom";
import fon from "../../assets/errorFon.jpg";
import decore from "../../assets/errorDecore.png";

const NotFoundPage = () => {
  return (
    <>
      <section className="container text-center">
        <div className="relative mb-30">
          <img className="rounded-b-2xl" src={fon} alt="" />
          <p
            className="absolute bottom-[-60px] text-left text-4xl uppercase
                                  pt-9 px-15 bg-theme-img rounded-tr-[40px] font-serif leading-snug"
          >
            Ого... Так далеко даже мы <br /> не заходили
          </p>
        </div>
        <div className="text-[150px] relative font-serif text-bg-blue mb-10">
          <img
            className="absolute w-150 left-[27%] top-8"
            src={decore}
            alt=""
          />
          404
        </div>
        <p className="text-2xl mb-8 leading-relaxed">
          Страницу, которую вы искали, похитили пираты. <br />
          Без паники, наш капитан уже ищет их, пожалуйста вернитесь в главное
          меню и <br /> поищите что нибудь другое. Спасибо и извините за
          неудобства!
        </p>

        <div className="mt-12">
          <Link
            to="/"
            className="px-8 py-4 bg-bg-blue text-white rounded-lg font-bold uppercase"
          >
            Вернуться на главную
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
