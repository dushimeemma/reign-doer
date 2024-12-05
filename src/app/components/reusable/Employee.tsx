"use client";

import Image from "next/image";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Employee } from "@/app/helpers/types";

interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div
      className="flex flex-col w-full lg:w-1/3  rounded-[0.625rem] shadow-lg"
      key={employee.id}
    >
      <div className="flex-1 rounded-t-[0.625rem]">
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
  );
}
