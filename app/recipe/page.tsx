"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { createRecipe } from "../api";
import { FaDrumstickBite, FaFish, FaCarrot } from "react-icons/fa";

export type Recipe = {
  title: string;
  description: string;
};
export default function Recipe() {
  // const recipe: Recipe[] = [
  //   {
  //     title: "カレー",
  //     description:
  //       "【材料】\n・ニンジン\n・玉ねぎ\n・じゃがいも\n\n【手順】\n１．野菜を切る\n２．煮る",
  //   },
  //   {
  //     title: "サラダ",
  //     description:
  //       "【材料】\n・きゅうり\n・レタス\n\n【手順】\n１．野菜を切る\n２．煮る",
  //   },
  // ];
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const searchParams = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await createRecipe({
        meal_type: searchParams.get("meal_type") as string,
        dish_num: Number(searchParams.get("dish_num")),
        tastes: searchParams.getAll("tastes"),
        main_dish: searchParams.get("main_dish") as string,
        preference: searchParams.get("preference") as string,
      });
      setRecipe(data);
      setIsLoading(false);
    };
    fetchData();
  }, [searchParams]);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex flex-col items-center justify-center">
          {(searchParams.get("main_dish") as string) == "肉" ? (
            <FaDrumstickBite
              size={64}
              className="animate-bounce"
              color="#FFA0A0"
            />
          ) : (searchParams.get("main_dish") as string) == "魚" ? (
            <FaFish size={64} className="animate-bounce" color="#FFA0A0" />
          ) : (
            <FaCarrot size={64} className="animate-bounce" color="#FFA0A0" />
          )}

          <div className="text-main-red font-extralight text-xl pt-1">
            献立作成中...
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center">
          <div className="bg-main-red h-20 text-sub-yellow flex items-center justify-center lg:text-2xl font-bold">
            献立ができました！
          </div>
          <div>
            {recipe.map((recipe, index) => (
              <div key={index}>
                <div className="pt-8 text-gray-900 lg:text-xl font-medium">
                  <div className="w-full pl-9">
                    <div className=" border-main-red border-b-2">
                      ・{recipe.title}
                    </div>
                  </div>
                  <div className="py-8 lg:gap-6 w-full px-12 text-xs lg:text-base whitespace-pre-wrap">
                    {recipe.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full px-[72px] pb-20 pt-10">
            <button
              className="bg-main-red text-sub-yellow w-full py-4 text-lg font-bold rounded-2xl"
              onClick={() => router.push("/")}
            >
              献立を立て直す
            </button>
          </div>
        </div>
      )}
    </>
  );
}
