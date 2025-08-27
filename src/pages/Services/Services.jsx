import { Link } from "react-router-dom";
import { FaUtensils, FaBaby, FaUmbrellaBeach } from "react-icons/fa";

import grace from "../../assets/grace.jpg";
import pubPool from "../../assets/pubPool.jpg";
import pool from "../../assets/pool.jpg";
import playground from "../../assets/playground.jpg";
import fon from "../../assets/wellness.jpg";

const Services = () => {
  return (
    <>
      <section className="relative w-378 mx-auto h-[400px] text-center">
        <img className="w-full h-full object-cover" src={fon} alt="" />
        <div className="absolute bottom-25 left-50 text-white">
          <h2 className="text-6xl font-serif">
            Услуги для вашего идеального отдыха
          </h2>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            От расслабляющих СПА-ритуалов до гастрономических изысков — мы
            продумали каждую деталь вашего комфорта.
          </p>
        </div>
      </section>

      <section className="py-20 container text-center">
        <h2 className="text-4xl font-serif mb-12">
          Откройте для себя все возможности
        </h2>
        <div className="flex justify-center gap-x-8">
          <a
            href="#gastronomy"
            className="w-60 py-6 border rounded-lg text-theme-blue hover:shadow-lg transition-shadow"
          >
            <FaUtensils className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Гастрономия</h3>
          </a>
          <a
            href="#pool"
            className="w-60 py-6 border rounded-lg text-theme-blue hover:shadow-lg transition-shadow"
          >
            <FaUmbrellaBeach className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl">Оазис</h3>
          </a>
          <a
            href="#family"
            className="w-60 py-6 border rounded-lg text-theme-blue hover:shadow-lg transition-shadow"
          >
            <FaBaby className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Для детей и семьи</h3>
          </a>
        </div>
      </section>

      <section id="gastronomy" className="py-20 bg-theme-50">
        <div className="container">
          <h2 className="text-5xl font-serif text-center mb-15">
            Искусство вкуса
          </h2>
          <div className="grid grid-cols-3 gap-x-12 items-center">
            <div className="col-span-2">
              <img
                src={grace}
                alt="Ресторан"
                className="rounded-2xl shadow-lg h-100 w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl mb-10">Ресторан 'Grace'</h3>
              <p className="text-xl">
                Наш фирменный ресторан с панорамным видом на море, где шеф-повар
                представляет авторский взгляд на классическую крымскую и
                средиземноморскую кухню. Все блюда готовятся из свежайших
                локальных продуктов.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12 items-center mt-20">
            <div className="col-span-2 order-last">
              <img
                src={pubPool}
                alt="Бар у бассейна"
                className="rounded-2xl shadow-lg h-100 w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl mb-10">Бар 'Breeze' у бассейна</h3>
              <p className="text-xl">
                Идеальное место, чтобы насладиться освежающим коктейлем,
                свежевыжатым соком или легкими закусками, не отходя от бассейна.
                Вечером бар превращается в уютный лаунж с живой музыкой.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pool" className="py-20 container">
        <div className="grid grid-cols-2 gap-x-12 items-center">
          <div>
            <img
              src={pool}
              alt="Пляж отеля"
              className="rounded-2xl shadow-lg h-150 w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-serif mb-8">Оазис солнца и воды</h2>
            <p className="text-lg mb-6">
              Наш отель предлагает идеальные условия как для активного, так и
              для умиротворенного отдыха у воды. Наслаждайтесь чистым морем на
              нашем частном пляже или расслабьтесь у одного из наших бассейнов.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-x-3">
                <FaUmbrellaBeach className="text-bg-blue flex-shrink-0" />
                <span>
                  **Собственный галечный пляж:** оборудованный шезлонгами,
                  зонтиками и теневыми навесами.
                </span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaUmbrellaBeach className="text-bg-blue flex-shrink-0" />
                <span>
                  **Панорамный инфинити-бассейн:** с подогреваемой морской водой
                  и видом на горизонт.
                </span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaUmbrellaBeach className="text-bg-blue flex-shrink-0" />
                <span>
                  **Детская зона:** отдельный неглубокий бассейн для самых
                  маленьких гостей.
                </span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaUmbrellaBeach className="text-bg-blue flex-shrink-0" />
                <span>
                  **Пляжный сервис:** наш персонал доставит вам прохладительные
                  напитки и легкие закуски прямо к вашему шезлонгу.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="family" className="py-20 bg-theme-50">
        <div className="container grid grid-cols-2 gap-x-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-8">
              Счастливые моменты для всей семьи
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue" />
                <span>Детский клуб 'Островок' с аниматорами</span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue" />
                <span>Игровая площадка на свежем воздухе</span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue" />
                <span>Специальное детское меню в ресторане</span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue" />
                <span>Услуги профессиональной няни (по запросу)</span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue" />
                <span>Подогреваемый детский бассейн</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src={playground}
              alt="Детский клуб"
              className="rounded-2xl shadow-lg h-120 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pt-20 container text-center">
        <h2 className="text-3xl font-serif mb-10">
          Готовы выбрать свой идеальный отдых?
        </h2>
        <Link
          to="/rooms"
          className="px-10 py-4 bg-bg-blue text-white uppercase rounded-lg font-bold"
        >
          Перейти к выбору номера
        </Link>
      </section>
    </>
  );
};

export default Services;
