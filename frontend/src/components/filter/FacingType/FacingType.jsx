import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

const FacingType = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const propertyTypeOptions = [
    "North",
    "South",
    "East",
    "West",
    "North East",
    "North West",
    "South East",
    "South West",
  ];

  const { searchResultsData, setSearchResultData } = useAppContext();
  //console.log(searchResultsData.facingType);

  const handleCheckBoxChange = (facingType) => {
    setSearchResultData((prev) => {
      const facingTypeArray = prev.facingType || [];
      if (facingTypeArray?.includes(facingType)) {
        return {
          ...prev,
          facingType: facingTypeArray.filter((item) => item !== facingType),
        };
      } else {
        return {
          ...prev,
          facingType: [...facingTypeArray, facingType],
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
        Facing Type{" "}
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
                    checked={searchResultsData?.facingType?.includes(
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

export default FacingType;
