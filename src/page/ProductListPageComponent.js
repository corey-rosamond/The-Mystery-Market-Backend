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

const Container = styled.div`
  flex: 7;
  padding: 10px 20px 10px 20px;
`;

const List = styled.div``;

const ListItem = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`

`;

const EditButton = styled.button`

`;

const DeleteButton = styled.button`

`;

class ProductListPageComponent extends React.Component
{

  async getProducts()
  {
    try
    {


    } catch (error)
    {
      console.log(error);
      this.props.getProductsFailure();
    }
  }

  async deleteProduct()
  {

  }

  render()
  {
    let products = this.props.product.products;
    let columns = [
      { field: "_id", headerName: "ID", width: 220 },
      {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <ListItem>
              <Image src={params.row.img} alt="" />
              {params.row.title}
            </ListItem>
          );
        },
      },
      { field: "inStock", headerName: "Stock", width: 200 },
      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/product/" + params.row._id}>
                <EditButton>Edit</EditButton>
              </Link>
              <DeleteOutline
              />
            </>
          );
        },
      },
    ];
    return (
      <Container>
        <List>
          <DataGrid
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
          />
        </List>
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
    getProductsFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure
  }
)(ProductListPageComponent);