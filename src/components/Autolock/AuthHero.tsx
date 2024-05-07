"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styles from "@/assets/styles";
import { generateTimeOptions } from "@/hooks/generateTimeOptions";

const AutoHero = () => {
  const [keys, setKeys] = useState<
    {
      date: Date;
      time: string;
      repetition: string;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("00:00");
  const timeOptions = generateTimeOptions();
  const [repetition, setRepetition] = useState("Daily");

  const addKey = () => {
    if (keys.length >= 5) {
      // Check if we need to paginate after adding this key
      setCurrentPage(Math.ceil((keys.length + 1) / 5));
    }
    const newKey = { date: startDate, time, repetition }; // Include duration in the new key
    setKeys([...keys, newKey]);
  };

  const keysPerPage = 5;
  const indexOfLastKey = currentPage * keysPerPage;
  const indexOfFirstKey = indexOfLastKey - keysPerPage;
  const currentKeys = keys.slice(indexOfFirstKey, indexOfLastKey);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(keys.length / keysPerPage);

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 flex-col`}>
        <div className={` ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-center text-center w-full">
            <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
              Auto Lock
            </h1>
          </div>

          <p
            className={`${styles.paragraph} ss:font-['inter'] text-[#12141D] text-center max-w-[600px] mt-5`}
          >
            Set up auto-lock by choosing the date, time, and repetition
            schedule.
          </p>
          <p
            className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px] `}
          >
            Choose Time
          </p>
          {/* Date Picker */}
          <div className="flex mt-4 ">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date!)}
              dateFormat="MMMM d, yyyy"
              className="text-center rounded-md"
            />

            {/* Time Picker */}

            <select
              className="text-center rounded-md ml-2 border border-gray-300 px-8 py-2 focus:outline-none focus:border-black"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {timeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/* Dropdown */}
          <select
            className="mt-6 block  ss:px-48 py-2 px-24 ss:font-['Space Gortesk'] font-medium text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-base rounded-md"
            value={repetition}
            onChange={(e) => setRepetition(e.target.value)}
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Repeat</option>
          </select>

          {/*button add key */}
          <button
            onClick={addKey}
            className="text-white font-poppins bg-black px-6 py-2.5 rounded-full ss:mt-8 mt-6"
          >
            Add Key
          </button>

          {/* Displaying key cards */}
          {currentKeys.map((key, index) => (
            <div
              key={index}
              className="mt-6 p-2 border border-gray-300 rounded-lg bg-[#12141D]"
            >
              <div className="px-12 py-4 font-poppins font-medium text-white text-center">
                <p>Date: {key.date.toDateString()}</p>
                <p>Time: {key.time}</p>
                <p>Repetition: {key.repetition}</p>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex mt-4">
              {[...Array(totalPages)].map((e, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 font-poppins font-medium ${
                    currentPage === i + 1 ? "bg-gray-300" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AutoHero;
