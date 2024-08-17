import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

const PropertyCondition = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const propertyConditionOptions = ["Ready To Move", "Under Construction"];
  const { searchResultsData, setSearchResultData } = useAppContext();
  //console.log(searchResultsData.propertyCondition);

  const handleCheckboxChange = (propertyCondition) => {
    setSearchResultData((prev) => {
      const propertyConditionArray = prev.propertyCondition || [];
      if (propertyConditionArray.includes(propertyCondition)) {
        return {
          ...prev,
          propertyCondition: propertyConditionArray.filter(
            (type) => type !== propertyCondition
          ),
        };
      } else {
        return {
          ...prev,
          propertyCondition: [...propertyConditionArray, propertyCondition],
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
        Property Condition{" "}
        <span>{showPropertyTypes ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </p>

      {showPropertyTypes && (
        <Stack direction="vertical" gap={2} className="px-1">
          {propertyConditionOptions.map((propertyType) => {
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
                    checked={searchResultsData.propertyCondition?.includes(
                      propertyType
                    )}
                    onChange={() => handleCheckboxChange(propertyType)}
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

export default PropertyCondition;
