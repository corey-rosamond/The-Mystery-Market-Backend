import React from "react";
import styled from "styled-components";

const Row = styled.tr``;
const Cell = styled.td``;



class ProductListItemComponent extends React.Component
{

  render()
  {
    return (

      <Row>
        <Cell>a</Cell>
        <Cell>b</Cell>

      </Row>
    );
  }
}

export default ProductListItemComponent;