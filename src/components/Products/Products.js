import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";
import styles from "./Products.module.css";
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    name: "Laptop",
    description: "Apple Macbook",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 3,
    name: "Laptop",
    description: "Apple Macbook",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 4,
    name: "Laptop",
    description: "Apple Macbook",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 5,
    name: "Laptop",
    description: "Apple Macbook",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 6,
    name: "Laptop",
    description: "Apple Macbook",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 7,
    name: "Laptop",
    description: "Apple Macbook",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 8,
    name: "Laptop",
    description: "Apple Macbook",
    img: "https://picsum.photos/seed/picsum/200/300",
  },
];

const Products = () => {
  return (
    <div className={styles.products}>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.img}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
