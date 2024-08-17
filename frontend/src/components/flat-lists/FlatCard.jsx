import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import FlatImagesSlider from "./FlatImagesSlider";
import Carousel from "react-bootstrap/Carousel";

const FlatCard = ({ flat, groupedTags }) => {
  // Group tags by 3 per slide
  const groupSize = 4;
  const groupedTagsArray = [];

  for (let i = 0; i < groupedTags.length; i += groupSize) {
    groupedTagsArray.push(groupedTags.slice(i, i + groupSize));
  }

  //console.log(groupedTagsArray)

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
              {groupedTagsArray?.map((tagGroup, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-center">
                    {tagGroup.map((tag, idx) => (
                      <span key={idx} className="badge bg-secondary mx-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            <hr />
            <p>{flat?.owner}</p>
            <p>{flat?.postedByType}</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default FlatCard;
