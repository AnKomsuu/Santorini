import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaUtensils, FaBaby, FaUmbrellaBeach } from "react-icons/fa";

import grace from "../../assets/grace.jpg";
import pubPool from "../../assets/pubPool.jpg";
import pool from "../../assets/pool.jpg";
import playground from "../../assets/playground.jpg";
import fon from "../../assets/wellness.jpg";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Услуги — Santorini Hotel</title>
        <meta name="description" content="Услуги отеля Santorini — рестораны, бассейны, пляж, детский клуб и СПА для идеального отдыха." />
      </Helmet>
      <section className="relative w-full max-w-[1512px] mx-auto h-48 sm:h-72 md:h-[400px] text-center">
        <img className="w-full h-full object-cover" src={fon} alt="Услуги отеля Santorini" />
        <div className="absolute bottom-6 md:bottom-25 left-4 md:left-50 text-white px-4 md:px-0">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif">
            Услуги для вашего идеального отдыха
          </h2>
          <p className="mt-3 md:mt-6 text-sm md:text-xl max-w-3xl mx-auto">
            От расслабляющих СПА-ритуалов до гастрономических изысков — мы
            продумали каждую деталь вашего комфорта.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-20 container text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-8 md:mb-12">
          Откройте для себя все возможности
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-x-8">
          <a
            href="#gastronomy"
            className="w-full sm:w-60 py-4 md:py-6 border rounded-lg text-theme-blue hover:shadow-lg transition-shadow"
          >
            <FaUtensils className="text-3xl md:text-5xl mx-auto mb-3 md:mb-4" />
            <h3 className="font-bold text-base md:text-lg">Гастрономия</h3>
          </a>
          <a
            href="#pool"
            className="w-full sm:w-60 py-4 md:py-6 border rounded-lg text-theme-blue hover:shadow-lg transition-shadow"
          >
            <FaUmbrellaBeach className="text-3xl md:text-5xl mx-auto mb-3 md:mb-4" />
            <h3 className="font-bold text-base md:text-xl">Оазис</h3>
          </a>
          <a
            href="#family"
            className="w-full sm:w-60 py-4 md:py-6 border rounded-lg text-theme-blue hover:shadow-lg transition-shadow"
          >
            <FaBaby className="text-3xl md:text-5xl mx-auto mb-3 md:mb-4" />
            <h3 className="font-bold text-base md:text-lg">Для детей и семьи</h3>
          </a>
        </div>
      </section>

      <section id="gastronomy" className="py-10 md:py-20 bg-theme-50">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-8 md:mb-15">
            Искусство вкуса
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-12 items-center">
            <div className="md:col-span-2">
              <img
                src={grace}
                alt="Ресторан"
                className="rounded-2xl shadow-lg h-48 sm:h-72 md:h-100 w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-10">Ресторан &apos;Grace&apos;</h3>
              <p className="text-base md:text-xl">
                Наш фирменный ресторан с панорамным видом на море, где шеф-повар
                представляет авторский взгляд на классическую крымскую и
                средиземноморскую кухню.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center mt-10 md:mt-20">
            <div className="md:col-span-2 md:order-last">
              <img
                src={pubPool}
                alt="Бар у бассейна"
                className="rounded-2xl shadow-lg h-48 sm:h-72 md:h-100 w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-10">Бар &apos;Breeze&apos; у бассейна</h3>
              <p className="text-base md:text-xl">
                Идеальное место, чтобы насладиться освежающим коктейлем,
                свежевыжатым соком или легкими закусками, не отходя от бассейна.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pool" className="py-10 md:py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 items-center">
          <div>
            <img
              src={pool}
              alt="Пляж отеля"
              className="rounded-2xl shadow-lg h-64 sm:h-96 md:h-150 w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-4 md:mb-8">Оазис солнца и воды</h2>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Наш отель предлагает идеальные условия как для активного, так и
              для умиротворенного отдыха у воды.
            </p>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-lg">
              <li className="flex items-start gap-x-3">
                <FaUmbrellaBeach className="text-bg-blue flex-shrink-0 mt-1" />
                <span>Собственный галечный пляж с шезлонгами и зонтиками.</span>
              </li>
              <li className="flex items-start gap-x-3">
                <FaUmbrellaBeach className="text-bg-blue flex-shrink-0 mt-1" />
                <span>Панорамный инфинити-бассейн с подогреваемой морской водой.</span>
              </li>
              <li className="flex items-start gap-x-3">
                <FaUmbrellaBeach className="text-bg-blue flex-shrink-0 mt-1" />
                <span>Детская зона: неглубокий бассейн для маленьких гостей.</span>
              </li>
              <li className="flex items-start gap-x-3">
                <FaUmbrellaBeach className="text-bg-blue flex-shrink-0 mt-1" />
                <span>Пляжный сервис с доставкой напитков к шезлонгу.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="family" className="py-10 md:py-20 bg-theme-50">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif mb-4 md:mb-8">
              Счастливые моменты для всей семьи
            </h2>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-lg">
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue flex-shrink-0" />
                <span>Детский клуб &apos;Островок&apos; с аниматорами</span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue flex-shrink-0" />
                <span>Игровая площадка на свежем воздухе</span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue flex-shrink-0" />
                <span>Специальное детское меню в ресторане</span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue flex-shrink-0" />
                <span>Услуги профессиональной няни (по запросу)</span>
              </li>
              <li className="flex items-center gap-x-3">
                <FaBaby className="text-bg-blue flex-shrink-0" />
                <span>Подогреваемый детский бассейн</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src={playground}
              alt="Детский клуб"
              className="rounded-2xl shadow-lg h-64 sm:h-80 md:h-120 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-20 container text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-10">
          Готовы выбрать свой идеальный отдых?
        </h2>
        <Link
          to="/rooms"
          className="px-8 md:px-10 py-3 md:py-4 bg-bg-blue text-white uppercase rounded-lg font-bold text-sm md:text-base"
        >
          Перейти к выбору номера
        </Link>
      </section>
    </>
  );
};

export default Services;
