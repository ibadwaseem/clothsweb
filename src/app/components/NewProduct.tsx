import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/w1.jpg",
    title: "2 Piece Organza Cardigan-Embroidered",
    Description: "Front open cardigan with tie knot waist and sequins embroidery Fabric: Organza",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/w2.jpg",
    title: "Suede Coat",
    Description: "Suede coat with strap on shoulders and layerd yoke  Two side pockets with flapSleeves with adjustable beltComes with a belt Fabric: Suede",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/shoes1.jpg",
    title: "Party Wear",
    Description: "Women's Party Wear - Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/jacket.jpg",
    title: "Watches",
    Description: "Pocket Watch Leather Pouch- Watches",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/smart2.jpg",
    title: "Watches",
    Description: "Smart Watches Vital - Watches",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/normal-w.jpg",
    title: "Watches",
    Description: "Pocket Watch Leather Pouch- Watches",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/smart2.jpg",
    title: "Watches",
    Description: "Smart Watches Vital - Watches",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/jacket.jpg",
    title: "Watches",
    Description: "Pocket Watch Leather Pouch- Watches",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/smart2.jpg",
    title: "Watches",
    Description: "Smart Watches Vital - Watches",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/normal-w.jpg",
    title: "Watches",
    Description: "Pocket Watch Leather Pouch- Watches",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/smart2.jpg",
    title: "Watches",
    Description: "Smart Watches Vital - Watches",
    rating: 4,
    price: "120.00",
  },

];

const NewProduct = () => {
  return (
    <div>
      <div className="container pt-16  mx-auto py-4">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard  key={index} 
            img={item.img}
            title={item.title} 
            description={item.Description} 
            rating={item.rating}
            price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
