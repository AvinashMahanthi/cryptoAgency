import React from "react";
import Carousel from "react-elastic-carousel";

// import bg2 from "../Assets/images/bitcoin-bg2.jpg";
// import bg3 from "../Assets/images/bitcoin-bg3.jpg";
// import bg4 from "../Assets/images/bitcoin-bg4.jpg";

const Testimonials = () => {
  const items = [
    {
      id: 1,
      title: "Best Trading service",
      description:
        "Its is making my trading experience enjoyable and secure....",
      name: "Jhonathan",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 2,
      title: "Best Trading service",
      description:
        "Its is making my trading experience enjoyable and secure....",
      name: "Alex",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 3,
      title: "Best Trading service",
      description:
        "Its is making my trading experience enjoyable and secure....",
      name: "Mark",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 4,
      title: "Best Trading service",
      description:
        "Its is making my trading experience enjoyable and secure....",
      name: "Steve",
      rating: "⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="container testimonials">
      <center>
        <h2 className="heading font-weight-bold">Testimonials</h2>
      </center>
      <Carousel className="my-5 p-5 carousel">
        {items.map((item) => (
          <div className=" card-block p-2" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h6>
              {item.name}:<span>{item.rating}</span>
            </h6>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
