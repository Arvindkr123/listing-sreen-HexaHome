import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Sample data - in a real application, this would come from a database
const properties = [
  { id: 1, name: "Beach House", location: "Mumbai", price: "5000" },
  { id: 2, name: "TajMahel", location: "Agra", price: "5000" },
  { id: 3, name: "Red Fort", location: "Delhi", price: "5000" },
];

// Home route to render the search form
app.get("/", (req, res) => {
  res.render("search");
});

// Route to handle search and render results
app.get("/properties", (req, res) => {
  const { location, minPrice, maxPrice } = req.query;

  // Filter properties based on search criteria
  let filteredProperties = properties.filter((property) => {
    // console.log(property.price, minPrice, maxPrice);
    return (
      (!location ||
        property.location.toLowerCase().includes(location.toLowerCase())) &&
      (!minPrice || parseInt(property.price) >= parseInt(minPrice)) &&
      (!maxPrice || parseInt(property.price) <= parseInt(maxPrice))
    );
  });

  // Render the page with filtered properties
  res.render("properties", {
    properties: filteredProperties,
    search: req.query, // Pass the search query back to the view
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
