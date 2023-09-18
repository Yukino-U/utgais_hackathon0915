import { Recipe } from "./recipe/page";


export const createRecipe = async (data: {
  meal_type: string;
  dish_num: number;
  tastes: string[];
  main_dish: string;
  preference: string;
}) => {
  const options = {
    method: "POST",
    body:
      "meal_type=" +
      data.meal_type +
      "&dish_num=" +
      data.dish_num +
      "&tastes=" +
      data.tastes +
      "&main_dish=" +
      data.main_dish +
      "&preference=" +
      data.preference,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const res = await fetch("https://menu-app-lhrm.onrender.com/", options);
  const response = await res.json();
  return response as Recipe[];
};
