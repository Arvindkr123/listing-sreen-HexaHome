import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "./BudgetType.css"; // Import custom CSS
import { useAppContext } from "../../../context/AppContext";

const formatCurrency = (value) => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)}Cr`;
  } else if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)}L`;
  } else if (value >= 1000) {
    return `₹${(value / 1000).toFixed(2)}K`;
  }
  return `₹${value}`;
};

const BudgetType = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const [minBudget, setMinBudget] = useState(1000); // Starting at ₹1K
  const maxBudget = 1000000000; // Fixed at ₹100Cr

  const { setSearchResultData } = useAppContext();

  //console.log(searchResultsData);

  const handleBudgetChange = (event) => {
    setMinBudget(Number(event.target.value));
    setSearchResultData((prev) => ({
      ...prev,
      bugetType: formatCurrency(Number(event.target.value)),
    }));
  };

  return (
    <Container fluid className="border-bottom p-3">
      <p
        style={{ cursor: "pointer" }}
        onClick={() => setShowPropertyTypes((prev) => !prev)}
        className="fw-bold mb-2 d-flex justify-content-between"
      >
        Budget Type{" "}
        <span>{showPropertyTypes ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </p>

      {showPropertyTypes && (
        <Stack direction="vertical" gap={2} className="px-1">
          <div className="form-group">
            <div className="d-flex justify-content-between mb-2">
              <span className="budget-value">{formatCurrency(minBudget)}</span>
              <span className="budget-value">{formatCurrency(maxBudget)}</span>
            </div>
            <input
              type="range"
              min="1000"
              max={maxBudget}
              value={minBudget}
              onChange={handleBudgetChange}
              className="form-range custom-range"
            />
          </div>
        </Stack>
      )}
    </Container>
  );
};

export default BudgetType;
