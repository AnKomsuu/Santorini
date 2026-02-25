import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IoFastFoodOutline, IoFishOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";

import fon from "../../assets/pastaBarFon.jpg";
import pasta1 from "../../assets/pasta1.jpg";
import pasta2 from "../../assets/pasta2.jpg";
import pasta3 from "../../assets/pasta3.jpg";
import pasta4 from "../../assets/pasta4.jpg";

const PastaBarPage = () => {
  return (
    <>
      <Helmet>
        <title>Pasta Bar Pranzo — Santorini Hotel</title>
        <meta name="description" content="Паста-бар Pranzo в отеле Santorini — свежая паста ручной работы, авторские соусы и уютная атмосфера." />
      </Helmet>
      <section className="relative">
        <img className="w-full h-48 sm:h-80 md:h-130 object-cover" src={fon} alt="Паста-бар Pranzo" />
        <p
          className="absolute text-2xl md:text-5xl text-center uppercase leading-tight
                          pt-4 md:pt-9 px-6 md:px-15 bg-theme-img rounded-tl-[30px] md:rounded-tl-[50px] font-serif bottom-0 right-0"
        >
          Pasta Bar &apos;Pranzo&apos;
        </p>
      </section>

      <section className="py-10 md:py-20 container text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-8 md:mb-12">
          Всего 3 шага до вашей идеальной пасты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="p-4 md:p-6">
            <IoFastFoodOutline className="text-4xl md:text-6xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">1. Выберите пасту</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Спагетти, фетучини, пенне или ньокки — вся паста готовится вручную
              нашими поварами по классическим итальянским рецептам.
            </p>
          </div>
          <div className="p-4 md:p-6">
            <FaFire className="text-4xl md:text-6xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">2. Выберите соус</h3>
            <p className="text-gray-600 text-sm md:text-base">
              От насыщенного Болоньезе и сливочной Карбонары до легкого Песто —
              наши соусы готовятся только из свежих продуктов.
            </p>
          </div>
          <div className="p-4 md:p-6">
            <IoFishOutline className="text-4xl md:text-6xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">3. Добавьте топпинги</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Королевские креветки, фермерская курица, тертый пармезан или
              свежие овощи — создайте свое уникальное сочетание.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-theme-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-serif text-center mb-8 md:mb-12 italic">
            Наше Меню
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-20 md:gap-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-bg-blue mb-4 border-b pb-2">
                Виды пасты
              </h3>
              <ul className="space-y-2 text-base md:text-lg">
                <li>Спагетти</li>
                <li>Фетучини</li>
                <li>Пенне</li>
                <li>Ньокки (картофельные)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-bg-blue mb-4 border-b pb-2">
                Фирменные соусы
              </h3>
              <ul className="space-y-2 text-base md:text-lg">
                <li>Карбонара (сливки, бекон, пармезан)</li>
                <li>Болоньезе (томатный соус, мясной фарш)</li>
                <li>Песто (базилик, кедровые орехи, пармезан)</li>
                <li>Альфредо (сливочный с грибами)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 container">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-8 md:mb-12">
          Атмосфера и Блюда
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div className="col-span-2 row-span-2 rounded-xl md:rounded-2xl overflow-hidden">
            <img
              src={pasta1}
              alt="Интерьер паста-бара"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl md:rounded-2xl overflow-hidden">
            <img
              src={pasta2}
              alt="Готовое блюдо пасты"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl md:rounded-2xl overflow-hidden">
            <img
              src={pasta3}
              alt="Процесс приготовления пасты"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 rounded-xl md:rounded-2xl overflow-hidden">
            <img
              src={pasta4}
              alt="Гости в паста-баре"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-20 container text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">Готовы попробовать?</h2>
        <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-15">
          Паста-бар открыт ежедневно с 12:00 до 22:00. Бронирование не
          требуется.
        </p>
        <Link
          to="/road"
          className="px-8 md:px-10 py-3 md:py-4 bg-bg-blue text-white uppercase rounded-lg font-bold text-sm md:text-base"
        >
          Найти нас на карте
        </Link>
      </section>
    </>
  );
};

export default PastaBarPage;
