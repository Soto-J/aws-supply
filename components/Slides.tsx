import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const slideImg = [
  {
    label: "First slide label",
    src: "./images/slide_1.svg",
    alt: "First slide",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    label: "Second slide label",
    src: "./images/slide_2.svg",
    alt: "Second slide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    label: "Third slide label",
    src: "./images/slide_3.svg",
    alt: "Third slide",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

function Slides() {
  return (
    <Carousel>
      {slideImg.map((img) => (
        <Carousel.Item key={img.src}>
          <Image
            className="d-block w-100 h-100"
            src={img.src}
            alt={img.label}
            height="100"
            width="100"
          />

          <Carousel.Caption>
            <h3>{img.label}</h3>
            <p>{img.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slides;
