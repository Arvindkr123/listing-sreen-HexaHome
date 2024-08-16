import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

const FurnishType = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const propertyTypeOptions = [
    "Unfurnished",
    "Semi Furnished",
    "Fully Furnished",
  ];

  const { searchResultsData, setSearchResultData } = useAppContext();
  //console.log(searchResultsData.furnishedType);

  const handleCheckBoxChange = (furnishedType) => {
    setSearchResultData((prev) => {
      const furnishedTypeArray = prev.furnishedType || [];
      if (furnishedTypeArray?.includes(furnishedType)) {
        return {
          ...prev,
          furnishedType: furnishedTypeArray.filter(
            (item) => item !== furnishedType
          ),
        };
      } else {
        return {
          ...prev,
          furnishedType: [...furnishedTypeArray, furnishedType],
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
        Furnish Type{" "}
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
                    checked={searchResultsData.furnishedType?.includes(
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

export default FurnishType;
