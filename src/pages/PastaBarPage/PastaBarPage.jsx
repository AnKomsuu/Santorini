import { Link } from "react-router-dom";
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
      <section className="relative">
        <img className="w-full h-130 object-cover" src={fon} alt="" />
        <p
          className="absolute text-5xl text-center uppercase leading-tight
                          pt-9 px-15 bg-theme-img rounded-tl-[50px] font-serif bottom-0 right-0"
        >
          Pasta Bar 'Pranzo'
        </p>
      </section>

      <section className="py-20 container text-center">
        <h2 className="text-4xl font-serif mb-12">
          Всего 3 шага до вашей идеальной пасты
        </h2>
        <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="p-6">
            <IoFastFoodOutline className="text-6xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">1. Выберите пасту</h3>
            <p className="text-gray-600">
              Спагетти, фетучини, пенне или ньокки — вся паста готовится вручную
              нашими поварами по классическим итальянским рецептам.
            </p>
          </div>
          <div className="p-6">
            <FaFire className="text-6xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">2. Выберите соус</h3>
            <p className="text-gray-600">
              От насыщенного Болоньезе и сливочной Карбонары до легкого Песто —
              наши соусы готовятся только из свежих продуктов.
            </p>
          </div>
          <div className="p-6">
            <IoFishOutline className="text-6xl text-bg-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">3. Добавьте топпинги</h3>
            <p className="text-gray-600">
              Королевские креветки, фермерская курица, тертый пармезан или
              свежие овощи — создайте свое уникальное сочетание.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-theme-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 italic">
            Наше Меню
          </h2>
          <div className="grid grid-cols-2 gap-x-20 gap-y-8">
            <div>
              <h3 className="text-2xl font-bold text-bg-blue mb-4 border-b pb-2">
                Виды пасты
              </h3>
              <ul className="space-y-2 text-lg">
                <li>Спагетти</li>
                <li>Фетучини</li>
                <li>Пенне</li>
                <li>Ньокки (картофельные)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-bg-blue mb-4 border-b pb-2">
                Фирменные соусы
              </h3>
              <ul className="space-y-2 text-lg">
                <li>Карбонара (сливки, бекон, пармезан)</li>
                <li>Болоньезе (томатный соус, мясной фарш)</li>
                <li>Песто (базилик, кедровые орехи, пармезан)</li>
                <li>Альфредо (сливочный с грибами)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container">
        <h2 className="text-4xl font-serif text-center mb-12">
          Атмосфера и Блюда
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <img
              src={pasta1}
              alt="Интерьер паста-бара"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={pasta2}
              alt="Готовое блюдо пасты"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={pasta3}
              alt="Процесс приготовления пасты"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden">
            <img
              src={pasta4}
              alt="Гости в паста-баре"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pt-20 container text-center">
        <h2 className="text-3xl font-serif mb-4">Готовы попробовать?</h2>
        <p className="text-lg text-gray-500 mb-15">
          Паста-бар открыт ежедневно с 12:00 до 22:00. Бронирование не
          требуется.
        </p>
        <Link
          to="/road"
          className="px-10 py-4 bg-bg-blue text-white uppercase rounded-lg font-bold"
        >
          Найти нас на карте
        </Link>
      </section>
    </>
  );
};

export default PastaBarPage;
