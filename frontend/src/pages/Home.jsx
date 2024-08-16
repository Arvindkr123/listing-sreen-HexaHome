import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlatLists from "../components/flat-lists/FlatLists";
import FilteredFlatsCategory from "../components/filter/FilteredFlatsCategory";
const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col
          md={5}
          sm={3}
          xs={"auto"}
          style={{
            height: "100vh",
            position: "sticky",
            top: "40px",
            overflow: "auto",
          }}
        >
          <FilteredFlatsCategory />
        </Col>
        <Col md={7} sm={9} xs={"auto"}>
          <FlatLists />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
