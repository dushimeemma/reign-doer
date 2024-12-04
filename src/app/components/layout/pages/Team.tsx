"use client";

import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import SubTitle from "../../reusable/SubTitle";
import Title from "../../reusable/Title";
import { employees } from "@/app/helpers/stub-data/employees";
import Link from "next/link";

export default function Team() {
  return (
    <div className="m-6 min-h-[60vh] w-screen flex flex-col items-center">
      <Title title="Team" />
      <SubTitle text="Know about our people" />
      <div className="w-full flex flex-row flex-wrap justify-center gap-4 my-6">
        {employees.map((employee) => (
          <div
            className="flex flex-col w-full mx-6 lg:mx-0 lg:w-[40vw] rounded-[0.625rem] shadow-lg"
            key={employee.id}
          >
            <div className="w-full lg:w-[40vw] flex-1 rounded-t-[0.625rem]">
              <Image
                src={employee.image}
                width={500}
                height={500}
                alt={employee.name}
                layout="responsive"
                className="rounded-t-[0.625rem]"
              />
            </div>
            <div className=" bg-primary text-white rounded-b-[0.625rem] flex flex-row items-center justify-around gap-4">
              <div className="flex flex-col gap-2 p-4">
                <span className="font-bold">{employee.name}</span>
                <span className="font-light">{employee.position}</span>
              </div>
              <Link href={employee.linkedIn} target="_blank">
                <LinkedInIcon className="cursor-pointer w-[5vw] h-[5vh]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
