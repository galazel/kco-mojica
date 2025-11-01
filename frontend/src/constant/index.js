import axios from "axios";
export const products = [
  { image: "/1.png", name: "Classic", price: 120, stocks: 20 },
  { image: "/2.png", name: "Spicy Cheese", price: 120, stocks: 20 },
  { image: "/3.png", name: "Sour Cream", price: 120, stocks: 20 },
  { image: "/4.png", name: "Cheese", price: 120, stocks: 20 },
  { image: "/5.png", name: "Barbecue", price: 120, stocks: 20 },
  { image: "/6.png", name: "Salt N Vinegar", price: 120, stocks: 20 },
];
export const manages = [
  {
    title: "Dashboard",
    subcategories: [
      {
        title: "Overview",
        link: "",
      },
      {
        title: "Sales Summary",
        link: "",
      },
    ],
  },
  {
    title: "Products",
    link: "",
  },
  {
    title: "Orders",
    subcategories: [
      {
        title: "All Orders",
        link: "",
      },
      {
        title: "Pending",
        link: "",
      },
      {
        title: "Shipped",
        link: "",
      },
      {
        title: "Completed",
        link: "",
      },
    ],
  },
  {
    title: "Customers",
    subcategories: [
      {
        title: "All Customers",
        link: "",
      },
      {
        title: "Reviews",
        link: "",
      },
    ],
  },
];

export async function getAllProducts() {
  return await axios.get("");
}
export async function addProduct({ product }) {
  const product = await axios
    .post("/user", {
      product,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export async function deleteProduct() {
  axios.delete();
}

export async function getAllOrders() {
  return await axios.get("");
}
export async function addOrder({ product }) {
  const product = await axios
    .post("/user", {
      product,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export async function deleteOrder() {
  axios.delete();
}

