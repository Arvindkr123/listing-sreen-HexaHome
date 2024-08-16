import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import FlatImagesSlider from "./FlatImagesSlider";
import Carousel from "react-bootstrap/Carousel";

// eslint-disable-next-line react/prop-types
const FlatCard = ({ flat }) => {
  // Group tags by 3 per slide
  //console.log(flat.tags);
  const groupedTags = [];
  for (let i = 0; i < flat.tags?.length; i += 3) {
    groupedTags.push(flat.tags?.slice(i, i + 4));
  }

  return (
    <Container fluid className="bg-body p-3">
      <Row>
        <Col lg={4} md={3} className="position-relative">
          <FlatImagesSlider flat={flat} />
        </Col>
        <Col lg={8} md={9}>
          <Container fluid>
            <h5>₹ {flat?.price}</h5>
            <p>
              <b>{flat?.title}</b> in {flat?.location}
            </p>

            {/* Slider for Tags */}
            <Carousel className="mt-3">
              {groupedTags.map((tagGroup, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center">
                    {tagGroup.map((tag, i) => (
                      <span key={i} className="badge bg-secondary mx-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            <hr />
            <p>{flat?.owner}</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default FlatCard;
