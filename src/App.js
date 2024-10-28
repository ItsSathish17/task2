import React, { useState } from 'react';
import { TextField, Select, MenuItem, Card, CardContent, Typography, Grid } from '@mui/material';

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 800 },
  { id: 2, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 3, name: 'Phone', category: 'Electronics', price: 600 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 100 },
];

const App = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    filterProducts(value, category);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    filterProducts(search, value);
  };

  const filterProducts = (searchText, category) => {
    let result = products.filter(p =>
      p.name.toLowerCase().includes(searchText) &&
      (category ? p.category === category : true)
    );
    setFilteredProducts(result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Product Dashboard</h2>
      <TextField label="Search" value={search} onChange={handleSearch} />
      <Select value={category} onChange={handleCategoryChange} displayEmpty>
        <MenuItem value="">All Categories</MenuItem>
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Apparel">Apparel</MenuItem>
      </Select>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Category: {product.category}</Typography>
                <Typography>Price: ${product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
