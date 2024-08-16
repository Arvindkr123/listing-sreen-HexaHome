import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import flatsLists from "../../data/flats.data";
import FlatCard from "./FlatCard";
import Stack from "react-bootstrap/Stack";
import { useAppContext } from "../../context/AppContext";

const FlatLists = () => {
  const { searchResultsData, setSearchResultData } = useAppContext(); // Set default value
  //console.log(searchResultsData.sortOrder);
  const options = ["Relevance", "Newest First", "Low to High", "High to Low"];

  return (
    <Container fluid className="mt-5 my-5 p-2 ">
      {/* Search Results and sort dropdown goes here  */}
      <Container fluid>
        <Row>
          <Col sm={true} lg={true} md={true} xs={true}>
            {" "}
            <p className="">
              <b>{flatsLists.length} results |</b> Properties in{" "}
              {searchResultsData?.location[0]?.toUpperCase() +
                searchResultsData?.location.slice(1)}{" "}
              for Buy
            </p>
          </Col>
          <Col sm={true} lg={true} md={true} xs={true}>
            <select
              className="form-select"
              value={searchResultsData?.sortOrder} // Set the selected value
              onChange={(e) =>
                setSearchResultData((prev) => ({
                  ...prev,
                  sortOrder: e.target.value,
                }))
              }
            >
              <option
                value={searchResultsData?.sortOrder}
                className=""
              >{`Sort By:${searchResultsData?.sortOrder}`}</option>
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

      <Stack gap={2} className="mt-3">
        {flatsLists.map((flatData, index) => {
          return <FlatCard flat={flatData} key={index} />;
        })}
      </Stack>
    </Container>
  );
};

export default FlatLists;
