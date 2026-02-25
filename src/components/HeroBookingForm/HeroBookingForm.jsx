import { MdOutlineDateRange, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoPeople, GoPlus } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiMinus } from "react-icons/fi";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useState, useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { useOutletContext } from "react-router-dom";

const HeroBookingForm = () => {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [personCount, setPersonCount] = useState(2);
  const menuRef = useRef(null);
  const { onSearchOpen } = useOutletContext();

  const countPlus = () => {
    setPersonCount((prevCount) => prevCount + 1);
  };

  const countMinus = () => {
    setPersonCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const resetRange = () => {
    setRange({ from: undefined, to: undefined });
    setCalendarOpen(false);
  };
  useClickOutside(menuRef, () => {
    if (isCalendarOpen) setTimeout(() => setCalendarOpen(false), 50);
  });
  return (
    <div
      id="booking"
      ref={menuRef}
      className="max-w-6xl w-[calc(100%-2rem)] md:w-full mx-auto absolute bottom-4 md:bottom-25 left-1/2 -translate-x-1/2 rounded-lg
                 flex flex-col md:flex-row items-stretch shadow-lg"
    >
      <div className="relative flex-1 flex items-center gap-x-2 md:gap-x-4 px-3 md:px-6 py-3 md:py-0 min-h-[48px] md:min-h-[96px]">
        <MdOutlineDateRange
          onClick={resetRange}
          className="text-2xl md:text-3xl cursor-pointer flex-shrink-0"
        />
        <div
          className="flex-grow cursor-pointer"
          onClick={() => setCalendarOpen(!isCalendarOpen)}
        >
          <span className="uppercase font-medium text-xs md:text-base">
            {range.from && range.to
              ? `${format(range.from, "dd MMM")} - ${format(
                  range.to,
                  "dd MMM"
                )}`
              : "Дата заезда - Дата выезда"}
          </span>
        </div>
        <MdOutlineKeyboardArrowDown
          className="text-xl md:text-2xl cursor-pointer flex-shrink-0"
          onClick={() => setCalendarOpen(!isCalendarOpen)}
        />

        {isCalendarOpen && (
          <div className="absolute top-full mt-2 bg-theme-50 p-2 rounded-lg shadow-2xl left-0 z-50">
            <DayPicker
              className="z-40"
              mode="range"
              selected={range}
              onSelect={setRange}
              locale={ru}
              numberOfMonths={1}
            />
          </div>
        )}
      </div>

      <div className="hidden md:block w-0.5 bg-theme-blue"></div>
      <div className="md:hidden h-px bg-theme-blue mx-3"></div>

      <div className="flex-1 flex items-center justify-between px-3 md:px-6 py-3 md:py-0 min-h-[48px]">
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <GoPeople className="text-2xl md:text-3xl text-gray-400 flex-shrink-0" />
          <p className="uppercase font-medium text-xs md:text-base">Кол-во человек</p>
        </div>
        <div className="flex items-center gap-x-2 md:gap-x-3">
          <button
            onClick={countPlus}
            className="bg-gray-100 cursor-pointer p-1.5 md:p-2 rounded-full text-gray-700 hover:bg-gray-300"
          >
            <GoPlus />
          </button>
          <p className="w-8 text-center font-bold text-base md:text-lg">
            {String(personCount).padStart(2, "0")}
          </p>
          <button
            onClick={countMinus}
            className="bg-gray-100 cursor-pointer p-1.5 md:p-2 rounded-full text-gray-700 hover:bg-gray-300"
          >
            <FiMinus />
          </button>
        </div>
      </div>

      <div className="hidden md:block w-0.5 bg-theme-blue"></div>

      <div className="flex items-center justify-center px-3 md:px-6 py-3 md:py-0">
        <button
          type="button"
          onClick={onSearchOpen}
          className="p-3 md:p-5 bg-bg-blue rounded-full text-white cursor-pointer hover:bg-blue-500"
        >
          <HiMagnifyingGlass className="text-2xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
};
export default HeroBookingForm;
