import React from "react";
import { CartState } from "../context/context";
import Rating from "./Rating";
import { Button, Card } from "react-bootstrap";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.Image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> ${prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: prod })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => dispatch({ type: "ADD_TOCART", payload: prod })}
              disabled={!prod.instock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
