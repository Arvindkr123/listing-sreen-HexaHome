import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

const BHKType = () => {
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const propertyTypeOptions = [
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "5 BHK",
    "5+ BHK",
  ];

  const { searchResultsData, setSearchResultData } = useAppContext();
  //console.log(searchResultsData.bhkType);

  const handleCheckboxChange = (bhkType) => {
    setSearchResultData((prev) => {
      const bhkTypeArray = prev.bhkType || [];
      if (bhkTypeArray.includes(bhkType)) {
        return {
          ...prev,
          bhkType: bhkTypeArray.filter((type) => type !== bhkType),
        };
      } else {
        return {
          ...prev,
          bhkType: [...bhkTypeArray, bhkType],
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
        BHK Type{" "}
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
                    checked={searchResultsData.bhkType?.includes(propertyType)}
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

export default BHKType;
