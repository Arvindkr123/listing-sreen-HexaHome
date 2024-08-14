import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const PropertyType = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const propertyTypeOptions = [
    "Individual Floor",
    "Apartment",
    "Independent House",
    "Independent Villa",
    "Plot/Land",
  ];
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
                  {" "}
                  <input
                    type="checkbox"
                    id="option1"
                    className="form-check-input"
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
