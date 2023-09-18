"use client";
import { useState } from "react";
import cn from "classnames";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [time, setTime] = useState("朝食");
  const [number, setNumber] = useState(0);
  const [taste, setTaste] = useState(Array<string>);
  const [main, setMain] = useState("肉");
  const [other, setOther] = useState("");
  const router = useRouter();
  const radioButton = ({
    text,
    value,
    setValue,
  }: {
    text: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  }) => {
    return (
      <button
        className={cn(
          text == value
            ? "bg-white text-main-red border-main-red"
            : "bg-gray-200 text-gray-900 border-gray-500",
          "flex items-center justify-center w-[84px] lg:w-[96px] py-2 text-xs lg:text-base font-bold rounded-full border"
        )}
        onClick={() => setValue(text)}
      >
        {text}
      </button>
    );
  };
  const tasteButton = ({ text }: { text: string }) => {
    return (
      <button
        className={cn(
          taste.length < number
            ? "bg-white text-gray-900 border-gray-900"
            : "bg-gray-200 text-gray-700 border-gray-500",
          "flex items-center justify-center w-[84px] lg:w-[96px] py-2 text-xs lg:text-base font-bold rounded-full border"
        )}
        onClick={() => {
          if (taste.length < number) setTaste([...taste, text]);
        }}
      >
        {text}
      </button>
    );
  };
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="bg-main-red h-20 text-sub-yellow flex items-center justify-center lg:text-2xl font-bold">
        献立を立てる
      </div>
      <div>
        <div className="pt-8 text-gray-900 lg:text-xl font-medium">
          <div className="w-full pl-9">
            <div className=" border-main-red border-b-2">時間帯</div>
          </div>
          <div className="flex gap-3 py-8 justify-center lg:gap-6">
            {radioButton({ text: "朝食", value: time, setValue: setTime })}
            {radioButton({ text: "昼食", value: time, setValue: setTime })}
            {radioButton({ text: "夕食", value: time, setValue: setTime })}
          </div>
        </div>
        <div className="pt-8 text-gray-900 lg:text-xl font-medium">
          <div className="w-full pl-9">
            <div className=" border-main-red border-b-2">品数</div>
          </div>
          <div className="flex gap-3 py-8 justify-center items-end font-medium">
            <input
              type="number"
              value={number}
              onChange={(e) => {
                setNumber(parseInt(e.target.value));
                if (taste.length > parseInt(e.target.value)) {
                  setTaste(taste.slice(0, parseInt(e.target.value)));
                }
              }}
              className="w-12 py-2 text-base rounded-lg border border-gray-500 text-center text-gray-900"
            />
            品
          </div>
        </div>
        <div className="pt-8 text-gray-900 lg:text-xl font-medium">
          <div className="w-full pl-9">
            <div className=" border-main-red border-b-2">味</div>
          </div>
          <div className="w-full pl-9 flex pt-2 gap-2">
            {taste.map((t, index) => (
              <div key={index}>
                <button
                  className="bg-white text-main-red border-main-red flex items-center justify-center w-[60px] lg:w-[72px] py-2 text-[10px] lg:text-xs font-bold rounded-full border-2"
                  onClick={() => {
                    setTaste(taste.filter((_, i) => i != index));
                  }}
                >
                  {t}
                </button>
              </div>
            ))}
          </div>
          <div className="lg:flex gap-3 justify-center lg:gap-6">
            <div className="flex gap-3 lg:py-8 pt-8 pb-4 justify-center lg:gap-6">
              {tasteButton({ text: "甘い" })}
              {tasteButton({ text: "しょっぱい" })}
              {tasteButton({ text: "辛い" })}
            </div>
            <div className="flex gap-3 pb-8 lg:py-8 justify-center lg:gap-6">
              {tasteButton({ text: "苦い" })}
              {tasteButton({ text: "酸っぱい" })}
            </div>
          </div>
          <div className="pt-8 text-gray-900 lg:text-xl font-medium">
            <div className="w-full pl-9">
              <div className=" border-main-red border-b-2">メイン</div>
            </div>
            <div className="flex gap-3 py-8 justify-center lg:gap-6">
              {radioButton({ text: "肉", value: main, setValue: setMain })}
              {radioButton({ text: "魚", value: main, setValue: setMain })}
              {radioButton({ text: "野菜", value: main, setValue: setMain })}
            </div>
          </div>
          <div className="pt-8 text-gray-900 lg:text-xl font-medium">
            <div className="w-full pl-9">
              <div className=" border-main-red border-b-2">その他</div>
              <div className="py-8 font-medium px-5 pr-9">
                <textarea
                  value={other}
                  onChange={(e) => {
                    setOther(e.target.value);
                  }}
                  className="w-full p-2 lg:text-base text-xs rounded-lg border border-gray-500 text-gray-900 h-20"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-[72px] pb-20">
          <button
            onClick={() => {
              router.push(
                ("/recipe?meal_type=" +
                  time +
                  "&dish_num=" +
                  number +
                  "&tastes=" +
                  taste +
                  "&main_dish=" +
                  main +
                  "&preference=" +
                  other) as "recipe"
              );
            }}
            className="bg-main-red text-sub-yellow w-full py-4 text-lg font-bold rounded-2xl text-center"
          >
            献立を立てる
          </button>
        </div>
      </div>
    </div>
  );
}
