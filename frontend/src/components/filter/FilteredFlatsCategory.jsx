import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropertyType from "./PropertyType/PropertyType";
import PropertyCondition from "./PropertyCondition/PropertyCondition.jsx";
import BHKType from "./BHKType/BHKType.jsx";
import BudgetType from "./BudgetType/BudgetType.jsx";
import BuiltUpAreaType from "./BuiltUpAreaType/BuiltUpAreaType.jsx";
import FurnishType from "./FurnishType/FurnishType.jsx";
import FacingType from "./FacingType/FacingType.jsx";
import PostedByType from "./PostedByType/PostedByType.jsx";
import Container from "react-bootstrap/Container";

const FilteredFlatsCategory = () => {
  return (
    <Container className="mt-5 my-5" fluid>
      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between bg-body p-4">
          <Card.Title>
            <h3>Filters</h3>
          </Card.Title>
          <Button variant="light" size="sm">
            Clear All
          </Button>
        </Card.Header>
        <Card.Body className="p-0">
          <PropertyType />
          <PropertyCondition />
          <BHKType />
          <BudgetType />
          <BuiltUpAreaType />
          <FurnishType />
          <FacingType />
          <PostedByType />
        </Card.Body>
      </Card>
    </Container>
  );
};
export default FilteredFlatsCategory;
