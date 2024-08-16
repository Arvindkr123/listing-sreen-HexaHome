import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

const PropertyType = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const { searchResultsData, setSearchResultData } = useAppContext();
  //console.log(searchResultsData);
  const propertyTypeOptions = [
    "Individual Floor",
    "Apartment",
    "Independent House",
    "Independent Villa",
    "Plot/Land",
  ];

  const handleCheckboxChange = (propertyType) => {
    setSearchResultData((prev) => {
      const propertyTypes = prev.propertyType || [];
      if (propertyTypes.includes(propertyType)) {
        return {
          ...prev,
          propertyType: propertyTypes.filter((type) => type !== propertyType),
        };
      } else {
        return {
          ...prev,
          propertyType: [...propertyTypes, propertyType],
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
        Property Type{" "}
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
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={() => handleCheckboxChange(propertyType)}
                    checked={searchResultsData.propertyType?.includes(
                      propertyType
                    )}
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

export default PropertyType;
