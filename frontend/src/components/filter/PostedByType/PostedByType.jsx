import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

const PostedByType = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const propertyTypeOptions = ["Owner", "Dealer", "Builder"];

  const { searchResultsData, setSearchResultData } = useAppContext();
  console.log(searchResultsData.postedByType);

  const handleCheckBoxChange = (postedByType) => {
    setSearchResultData((prev) => {
      const postedByTypeArray = prev.postedByType || [];
      if (postedByTypeArray?.includes(postedByType)) {
        return {
          ...prev,
          postedByType: postedByTypeArray.filter(
            (item) => item !== postedByType
          ),
        };
      } else {
        return {
          ...prev,
          postedByType: [...postedByTypeArray, postedByType],
        };
      }
    });
  };

  return (
    <Container fluid className="border-bottom p-3">
      <p
        style={{ cursor: "pointer" }}
        onClick={() => setShowPropertyTypes((prev) => !prev)}
        className="fw-bold mb-2 d-flex justify-content-between"
      >
        Posted By{" "}
        <span>{showPropertyTypes ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </p>

      {showPropertyTypes && (
        <Stack direction="vertical" gap={2} className="px-1">
          {propertyTypeOptions.map((propertyType) => {
            return (
              <div key={propertyType} className="form-check">
                <label
                  style={{ cursor: "pointer" }}
                  className="form-check-label"
                >
                  {" "}
                  <input
                    type="checkbox"
                    id="option1"
                    className="form-check-input"
                    checked={searchResultsData?.postedByType?.includes(
                      propertyType
                    )}
                    onChange={() => handleCheckBoxChange(propertyType)}
                  />
                  {propertyType}
                </label>
              </div>
            );
          })}
        </Stack>
      )}
    </Container>
  );
};

export default PostedByType;
