import products from "./products";

const categories = [
    {
        id: 1,
        title: "All",
        recipes: products,
    },
    {
        id: 2,
        title: "Headphones",
        recipes: [...products.slice(4, 8)],
    },
    {
        id: 3,
        title: "Earbuds",
        recipes: [...products.slice(3, 7)],
    },
    {
        id: 4,
        title: "Wired",
        recipes: [...products.slice(2, 6)],
    },
];

export default categories;