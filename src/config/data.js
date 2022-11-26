import recipes from "./recipes";

const categories = [
    {
        id: 1,
        title: "All",
        recipes: recipes,
    },
    {
        id: 2,
        title: "Headphones",
        recipes: [...recipes.slice(4, 8)],
    },
    {
        id: 3,
        title: "Earbuds",
        recipes: [...recipes.slice(3, 7)],
    },
    {
        id: 4,
        title: "Wired",
        recipes: [...recipes.slice(2, 6)],
    },
];

export default categories;