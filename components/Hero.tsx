"use client";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "@/public/logo.svg";
import cartIcon from "@/public/cart-icon.svg";
import searchIcon from "@/public/search-icon.svg";
import NavLink from "@/components/NavLink";
import FadeIn from "@/components/FadeIn";

function Hero() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="h-screen pt-10 px-10 relative flex flex-col items-center bg-hero bg-bottom bg-no-repeat bg-cover">
      <div className="w-full max-w-[1490px] flex items-center justify-between mx-auto">
        <Image src={logo} alt="logo" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Shop</NavLink>
          <NavLink to="reference">Reference</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>

        <Image src={cartIcon} className="hidden md:block cursor-pointer" alt="cart" />
        <HiMenuAlt3 size={30} className="block md:hidden cursor-pointer text-white" onClick={() => setShowMobileMenu((prev) => !prev)} />

        <div
          className={`block md:hidden w-full fixed ${showMobileMenu ? "top-0" : "-top-[410px]"} left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}>
          <AiOutlineClose size={25} className="absolute top-5 right-5 cursor-pointer" onClick={() => setShowMobileMenu(false)} />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="products" mobileMenu>
              Shop
            </NavLink>
            <NavLink to="reference" mobileMenu>
              Reference
            </NavLink>
            <NavLink to="care" mobileMenu>
              Care
            </NavLink>
          </ul>

          <Image src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="cart" />
        </div>
      </div>

      <FadeIn delay={0.2} direction="down">
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">Bring Serenity to Your Place With Interior Plants</h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">find your dream plant for your home decoration with us, and we will make it happen.</h5>
      </FadeIn>
      <FadeIn delay={0.2} direction="up">
        <div className="relative w-full xs:w-[460px] mt-11">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white
              text-base xs:text-lg placeholder-white"
          />
          <Image src={searchIcon} alt="search" className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer" />
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
}

export default Hero;
