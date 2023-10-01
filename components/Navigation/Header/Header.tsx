"use client";

import { useEffect, useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

import { menu } from "@/components/utils/data";

function Header() {
  const [hide, setHide] = useState(true);
  const [floating, setFloating] = useState(false);

  const scrollDetector = () => {
    window.scrollY > 500 ? setFloating(true) : setFloating(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollDetector);
    return () => window.removeEventListener("scroll", scrollDetector);
  }, []);

  return (
    <>
        <div
        className={`${
          floating ? "sticky top-0" : "top-[-100px]"
        } z-[99]  bg-black p-5 transition-all lg:px-12`}
      >
        <div className="mx-auto flex max-w-full items-center justify-between space-x-5">
          <a href="#">
            <img className="h-[4rem] md:h-auto" src="/logo.png" />
          </a>
          <div className="hidden items-center space-x-8 text-[1.25rem] md:flex">
            {menu.map((x) => {
              return (
                <a
                  key={x.link}
                  className="revalia cursor-pointer transition-all hover:text-primary"
                  href={x.link}
                >
                  {x.label}
                </a>
              );
            })}
          </div>
          <RiMenu3Fill
            onClick={() => setHide(false)}
            className="text-[2.5rem] md:hidden"
          />
        </div>
      </div>
      <div
        className={`${
          hide ? "translate-y-[100%]" : "translate-y-[0]"
        } fixed bottom-0 left-0 right-0 top-0 z-[999] flex w-full flex-col items-center justify-center space-y-12 bg-black text-[1.25rem] transition-all`}
      >
        <RiCloseFill
          onClick={() => setHide(true)}
          className="absolute right-[5%] top-[5%] text-[3rem]"
        />
        {menu.map((x) => {
          return (
            <a
              onClick={() => setHide(true)}
              key={`mobile${x.link}`}
              className="revalia cursor-pointer transition-all hover:text-primary"
              href={x.link}
            >
              {x.label}
            </a>
          );
        })}
      </div>
    </>
  )
}

export default Header