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

  const filteredFlatListsData = flatsLists.filter((flat) => {
    // Convert location to lowercase for case-insensitive comparison
    const flatLocation = flat.location.toLowerCase();
    const searchLocation = searchResultsData.location.toLowerCase();

    // Check if location matches
    const isLocationMatch = flatLocation.includes(searchLocation);

    // console.log(isLocationMatch);

    // Check if postedByType includes "owner"
    const isPostedByOwner = searchResultsData.postedByType.includes("Owner");
    console.log(isPostedByOwner);

    // Check if any of the tags match the propertyType criteria
    const isPropertyTypeMatch = searchResultsData.propertyType.some((type) =>
      flat.tags.some((tag) => tag.toLowerCase().includes(type.toLowerCase()))
    );

    // console.log(isPropertyTypeMatch);

    // Check if any of the tags match the propertyCondition criteria
    const isPropertyConditionMatch = searchResultsData.propertyCondition.some(
      (condition) =>
        flat.tags.some((tag) =>
          tag.toLowerCase().includes(condition.toLowerCase())
        )
    );

    //console.log(isPropertyConditionMatch);

    // Check if any of the tags match the bhkType criteria
    const isBhkTypeMatch = searchResultsData.bhkType.some((bhk) =>
      flat.tags.some((tag) => tag.includes(bhk))
    );

    //console.log(isBhkTypeMatch);

    // Check if any of the tags match the furnishedType criteria
    const isFurnishedTypeMatch = searchResultsData.furnishedType.some(
      (furnished) => flat.tags.some((tag) => tag.includes(furnished))
    );

    // Check if any of the tags match the facingType criteria
    const isFacingTypeMatch = searchResultsData.facingType.some((facing) =>
      flat.tags.some((tag) => tag.toLowerCase().includes(facing.toLowerCase()))
    );

    // Combine conditions as per your requirements
    return (
      isLocationMatch ||
      isPostedByOwner ||
      isPropertyTypeMatch ||
      isPropertyConditionMatch ||
      isBhkTypeMatch ||
      isFurnishedTypeMatch ||
      isFacingTypeMatch
    );
  });

  // Example output to verify the filtered results
  console.log(filteredFlatListsData);

  return (
    <Container fluid className="mt-5 my-5 p-2 ">
      {/* Search Results and sort dropdown goes here  */}
      <Container fluid>
        <Row>
          <Col sm={true} lg={true} md={true} xs={true}>
            {" "}
            <p className="">
              <b>{filteredFlatListsData.length} results |</b> Properties in{" "}
              {(searchResultsData?.location &&
                searchResultsData?.location[0]?.toUpperCase() +
                  searchResultsData?.location.slice(1)) ||
                ""}{" "}
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
        {filteredFlatListsData?.map((flatData, index) => {
          return <FlatCard flat={flatData} key={index} />;
        })}
      </Stack>
    </Container>
  );
};

export default FlatLists;
