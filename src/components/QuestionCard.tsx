import React, { FC, useEffect, useState } from "react";

interface questionCardProps {}

const QuestionCard: FC<questionCardProps> = ({}) => {
  const [option1, setOption1] = useState<number>(0);
  const [option2, setOption2] = useState<number>(0);
  const [option3, setOption3] = useState<number>(0);
  const [option4, setOption4] = useState<number>(0);

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(option1 + option2 + option3 + option4);
  }, [option1, option2, option3, option4]);

  return (
    <div>
      <div className="flex flex-col items-start px-80 py-40">
        <h1 className="text-red-600 pb-2">
          Where was the first example of paper money used?
        </h1>
        <h2 className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          doloremque quam corporis sapiente sint esse debitis quasi omnis
          voluptatum, ullam assumenda, modi dolor iste. Assumenda, quisquam.
          Animi repellat eaque saepe?
        </h2>{" "}
        <div className="w-full flex flex-col gap-2">
          <div className="flex ">
            <h1 className="w-[5%]">
              {((100 * option1) / total || 0).toFixed(0)}%
            </h1>
            <button
              className="bg-blue-300 w-full text-start  pl-2"
              onClick={() => {
                setOption1((e) => e + 1);
              }}
            >
              China
            </button>
            <h1 className="w-[10%] text-end">{option1} Votes</h1>
          </div>{" "}
          <div className="flex">
            <h1 className="w-[5%]">
              {((100 * option2) / total || 0).toFixed(0)}%
            </h1>
            <button
              className="bg-blue-300 w-full text-start pl-2"
              onClick={() => {
                setOption2((e) => e + 1);
              }}
            >
              Turkey
            </button>{" "}
            <h1 className="w-[10%] text-end">{option2} Votes</h1>
          </div>{" "}
          <div className="flex">
            <h1 className="w-[5%]">
              {((100 * option3) / total || 0).toFixed(0)}%
            </h1>
            <button
              className="bg-blue-300 w-full text-start pl-2"
              onClick={() => {
                setOption3((e) => e + 1);
              }}
            >
              Greece
            </button>{" "}
            <h1 className="w-[10%] text-end">{option3} Votes</h1>
          </div>{" "}
          <div className="flex">
            <h1 className="w-[5%]">
              {((100 * option4) / total || 0).toFixed(0)}%
            </h1>
            <button
              className="bg-blue-300 w-full text-start pl-2"
              onClick={() => {
                setOption4((e) => e + 1);
              }}
            >
              India
            </button>{" "}
            <h1 className="w-[10%] text-end">{option4} Votes</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
