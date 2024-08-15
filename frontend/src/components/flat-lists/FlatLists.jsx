import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import flatsLists from "../../data/flats.data";
import FlatCard from "./FlatCard";
import Stack from "react-bootstrap/Stack";

const FlatLists = () => {
  const [sortOption, setSortOption] = useState(""); // Set default value
  const options = [
    "Relevance",
    "Newest First",
    "Price (Low to High)",
    "Price (High to Low)",
  ];

  const handleSelect = (option) => {
    setSortOption(option);
  };

  return (
    <Container fluid className="mt-5 my-5 p-2 ">
      {/* Search Results and sort dropdown goes here  */}
      <Container fluid>
        <Row>
          <Col sm={true} lg={true} md={true} xs={true}>
            {" "}
            <p className="">
              <b>{flatsLists.length} results |</b> Properties in Noida for Buy
            </p>
          </Col>
          <Col sm={true} lg={true} md={true} xs={true}>
            <select
              className="form-select"
              value={sortOption} // Set the selected value
              onChange={(e) => handleSelect(e.target.value)}
            >
              <option
                value={sortOption}
                className=""
              >{`Sort By:${sortOption}`}</option>
              {options.map((optionVal) => (
                <option key={optionVal} value={optionVal}>
                  {optionVal}
                </option>
              ))}
            </select>
          </Col>
        </Row>
      </Container>
      {/* Lists Of Flats goes here ....... */}

      <Stack gap={2} className="">
        {flatsLists.map((flatData) => {
          return <FlatCard flat={flatData} key={flatData.id} />;
        })}
      </Stack>
    </Container>
  );
};

export default FlatLists;
