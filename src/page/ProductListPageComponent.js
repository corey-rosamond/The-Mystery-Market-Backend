import React from "react";
import styled from "styled-components";
import {
  connect
} from "react-redux";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure
} from "../redux/productSlice";

const Container = styled.div`
  flex: 7;
  padding: 10px 20px 10px 20px;
`;

class ProductListPageComponent extends React.Component
{
  render()
  {
    return (
      <Container>
        Product List
      </Container>
    );
  }
}

/**
 * Map the redux state to the props for the component
 * @param state
 * @returns {{}}
 */
const mapStateToProps = state => ({
  product: state.product
});

/**
 * Connect the component to redux and export
 */
export default connect(
  mapStateToProps,
  {
    getProductsStart,
    getProductsSuccess,
    getProductsFailure
  }
)(ProductListPageComponent);