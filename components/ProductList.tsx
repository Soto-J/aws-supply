import React from "react";
import Card from "react-bootstrap/Card";

const productList = [
  { category: "Janitorial", src: "Janitorial" },
  { category: "Hardware", src: "", alt: "Hardware" },
  { category: "Tools", src: "", alt: "Tools" },
  { category: "Construction/Lumber", src: "", alt: "Construction/Lumber" },
  { category: "Cabinets", src: "", alt: "Cabinets" },
  { category: "Tile", src: "", alt: "Tile" },
  { category: "Paint", src: "", alt: "Paint" },
  { category: "Electrical", src: "", alt: "Electrical" },
  { category: "Lighting", src: "", alt: "Lighting" },
  { category: "Plumbing", src: "", alt: "Plumbing" },
];

function ProductList() {
  return (
    <section className="container p-4">
      <h2 className="text-center">
        Elevate Your Building with Our Range of Products
      </h2>
      <ul className="row">
        {productList.map((product) => (
          <li
            key={product.category}
            className="col-5 col-lg-3 mt-4 mx-auto"
            style={{ listStyle: "none" }}
          >
            <Card>
              <Card.Img variant="top" src="" />

              <Card.Title>{product.category}</Card.Title>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
