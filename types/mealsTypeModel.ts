export interface MealsModel {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface PropsModel {
  meal: MealsModel;
  handleMeal: (meal: MealsModel) => void;
}
