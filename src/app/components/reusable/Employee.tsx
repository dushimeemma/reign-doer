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
      className="flex flex-col w-full lg:w-[24%] my-3  rounded-[0.625rem] shadow-lg"
      key={employee.id}
    >
      <div className="w-[124px] self-center h-[124px] rounded-t-[0.625rem] m-12">
        <Image
          src={employee.image}
          width={164}
          height={164}
          alt={employee.name}
          layout="responsive"
          className="rounded-t-[0.625rem]"
        />
      </div>
      <div className=" bg-primary text-white rounded-b-[0.625rem] flex flex-row items-center justify-center gap-4">
        <div className="flex flex-col gap-2 p-4">
          <span className="font-bold text-center">{employee.name}</span>
          <span className="font-light text-center">{employee.position}</span>
        </div>
        {employee.linkedIn && employee.linkedIn !== "#" && (
          <Link href={employee.linkedIn} target="_blank">
            <LinkedInIcon className="cursor-pointer w-[5vw] h-[5vh]" />
          </Link>
        )}
      </div>
    </div>
  );
}
