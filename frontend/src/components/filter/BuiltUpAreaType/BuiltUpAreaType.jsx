import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "./BudgetType.css"; // Import custom CSS

const formatSquareFeet = (value) => {
  return `${value.toLocaleString()} sqft`;
};

const BuiltUpAreaType = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const [minArea, setMinArea] = useState(100); // Starting at 100 sqft
  const maxArea = 4000; // Fixed at 4000 sqft

  const handleAreaChange = (event) => {
    setMinArea(Number(event.target.value));
  };

  return (
    <Container fluid className="border-bottom p-3">
      <p
        style={{ cursor: "pointer" }}
        onClick={() => setShowPropertyTypes((prev) => !prev)}
        className="fw-bold mb-2 d-flex justify-content-between"
      >
        Built up area{" "}
        <span>{showPropertyTypes ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </p>

      {showPropertyTypes && (
        <Stack direction="vertical" gap={2} className="px-1">
          <div className="form-group">
            <div className="d-flex justify-content-between mb-2">
              <span className="budget-value">{formatSquareFeet(minArea)}</span>
              <span className="budget-value">{formatSquareFeet(maxArea)}</span>
            </div>
            <input
              type="range"
              min="100"
              max={maxArea}
              value={minArea}
              onChange={handleAreaChange}
              className="form-range custom-range"
            />
          </div>
        </Stack>
      )}
    </Container>
  );
};

export default BuiltUpAreaType;
