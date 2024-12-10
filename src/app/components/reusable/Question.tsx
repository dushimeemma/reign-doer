import { MouseEventHandler } from "react";

import CustomIcon from "./CustomIcon";

interface QuestionProps {
  question?: string;
  onAdd?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Question({ question, onAdd }: QuestionProps) {
  return (
    <div className="flex flex-row items-center justify-between p-6 my-6 shadow-2xl w-full cursor-pointer">
      <p className="text-primary">
        {question ?? "What makes you different from other agencies?"}
      </p>
      <button onClick={onAdd}>
        <CustomIcon src="/add.png" />
      </button>
    </div>
  );
}
