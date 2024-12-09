"use client";

import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

import SeeMore from "./SeeMore";
import Title from "./Title";
import CustomIcon from "./CustomIcon";

import { testimonials } from "@/app/helpers/stub-data/testimonials";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-6">
      <Image
        src={testimonials[currentIndex].image}
        width={381}
        height={437}
        alt={testimonials[currentIndex].from}
        className="rounded-[1.875rem] cursor-pointer w-full lg:w-1/2"
      />
      <div className="flex flex-col justify-around gap-4">
        <div>
          <Link href={testimonials[currentIndex].link} target="_blank">
            <SeeMore label="View project" size={24} classNames="my-6" />
          </Link>
          <p className="m-0 text-start font-light">
            {testimonials[currentIndex].description}
          </p>
        </div>

        <div>
          <Title
            title={testimonials[currentIndex].from}
            classNames="text-start lg:text-center"
          />
          <span className="font-bold">
            {testimonials[currentIndex].company}
          </span>
        </div>
        <div className="flex flex-row gap-4 items-center mb-6">
          <button onClick={handlePrevious}>
            <CustomIcon
              size={24}
              alt="arrow previous"
              src="/arrow-rounded-back.png"
            />
          </button>
          <button onClick={handleNext}>
            <CustomIcon
              size={24}
              alt="arrow next"
              src="/arrow-rounded-next.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
