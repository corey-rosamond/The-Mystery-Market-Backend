import React from "react";
import styled from "styled-components";
import {
  DataGrid
} from "@material-ui/data-grid";
import {
  DeleteOutline
} from "@material-ui/icons";
import {
  connect
} from "react-redux";
import {
  Link
} from "react-router-dom";

import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure
} from "../redux/productSlice";
import {
  PublicRequest,
  UserRequest
} from "../request";
import ProductListItemComponent from "../component/ProductListItemComponent";

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const TR = styled.tr`
  &:nth-child(even){
    background-color: #f2f2f2;
  }
  &:hover{
    background-color: #ddd;
  }
`;

const TH = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;

const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;


class ProductListPageComponent extends React.Component
{

  constructor(props)
  {
    super(props);
    this.getProducts();
  }

  async getProducts()
  {
    try
    {
      this.props.getProductsStart();
      let res = await PublicRequest.get("/products/get");
      if(res.data.success)
      {
        this.props.getProductsSuccess(res.data.data);
      } else
      {
        this.props.getProductsFailure();
      }

    } catch (error)
    {
      this.props.getProductsFailure();
    }
  }

  async deleteProduct()
  {

  }

  render()
  {

    return (
      <Table>
        <thead>
          <TR>
            <TH>Name</TH>
            <TH>Name</TH>
            <TH>Name</TH>
            <TH>Name</TH>
            <TH>Name</TH>
            <TH>Name</TH>
          </TR>
        </thead>
        <tbody>
        {this.props.product.products.map(function(item){
          return (
            <TR
              key={item._id}
              style={{cursor: "pointer"}}
              onClick={() => console.log("Stuff")}
            >
              <TD>Stuff</TD>
            </TR>
          );
        })}

        </tbody>
        <tfoot>
          <TR>

          </TR>
        </tfoot>
      </Table>
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
    getProductsFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure
  }
)(ProductListPageComponent);