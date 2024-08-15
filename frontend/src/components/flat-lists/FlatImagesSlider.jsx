import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";

function FlatImagesSlider({ flat }) {
  return (
    <Carousel data-bs-theme="dark" className="position-relative">
      {flat?.images?.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 rounded-2"
            src={item}
            alt={`Slide ${index + 1}`}
          />
          <Badge className="position-absolute bottom-0 end-0 m-2" bg="dark">
            {index + 1}/{flat?.images?.length}
          </Badge>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default FlatImagesSlider;
