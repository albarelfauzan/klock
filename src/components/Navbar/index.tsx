"use client";
import React, { useState, useEffect } from "react";

import { close, logo, menu } from "@/assets/images";
import { navLinks } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    checkTronLinkConnection();
  }, []);

  const checkTronLinkConnection = () => {
      if ((window as any).tronWeb && (window as any).tronWeb.ready) {
        setConnected(true);
      }
  };

  const connectWallet = () => {
      if ((window as any).tronWeb && (window as any).tronWeb.ready) {
        setConnected(true);
      } else {
        setError("TronLink not installed or not ready");
      }
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image
        src={logo}
        alt="klock"
        width={124}
        height={32}
        className="w-[124px] h-[32px]"
      />

      <ul className="list-none sm:flex hidden justify-center items-center ml-24 flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-dimWhite" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.path}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:flex hidden items-center">
        <div>
          {error && <p>Error: {error}</p>}
          <button
            className={`text-white font-['inter'] bg-[#414141] px-4 py-2 rounded-[55px] hover:bg-blue-700 transition-colors duration-300`}
            onClick={() => (connected ? null : connectWallet)}
            disabled={connected}
          >
            {connected ? "Connected" : "Connect Wallet"}
          </button>
        </div>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-dimWhite" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.path}`}>{nav.title}</a>
              </li>
            ))}
            {error && <p>Error: {error}</p>}
            <button
              className={`text-white font-['inter'] bg-[#414141] px-4 py-2 rounded-[55px] hover:bg-blue-700 transition-colors duration-300`}
              onClick={() => (connected ? null : connectWallet)}
              disabled={connected}
            >
              {connected ? "Connected" : "Connect Wallet"}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
