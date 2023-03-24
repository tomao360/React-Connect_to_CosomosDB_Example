import React, { useEffect, useState } from "react";

import { BounceLoader } from "react-spinners";

import { getProducts } from "../services/connectToCosomosDB.service";

export const ProductsTable = (props) => {
  const [productsArr, setProductsArr] = useState([]);
  console.log(productsArr, "productsArr");

  const initProductsData = async () => {
    let products = await getProducts();
    setProductsArr(products);
  };

  useEffect(() => {
    initProductsData();
  }, []);

  return (
    <div>
      <div>
        <h3>Northwind Products Table</h3>
      </div>
      <table className="table table-hover">
        <thead className="table-secondary">
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Supplier ID</th>
            <th scope="col">Category ID</th>
            <th scope="col">Quantity Per Unit</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Units In Stock</th>
            <th scope="col">Units On Order</th>
            <th scope="col">Reorder Level</th>
            <th scope="col">Discontinued</th>
          </tr>
        </thead>
        {productsArr && productsArr.length > 0 ? (
          productsArr.map((p) => {
            let {
              id,
              ProductName,
              SupplierID,
              CategoryID,
              QuantityPerUnit,
              UnitPrice,
              UnitsInStock,
              UnitsOnOrder,
              ReorderLevel,
              Discontinued,
            } = p;
            return (
              <tbody>
                <tr>
                  <td>{id}</td>
                  <td>{ProductName}</td>
                  <td>{SupplierID}</td>
                  <td>{CategoryID}</td>
                  <td>{QuantityPerUnit}</td>
                  <td>{UnitPrice}</td>
                  <td>{UnitsInStock}</td>
                  <td>{UnitsOnOrder}</td>
                  <td>{ReorderLevel}</td>
                  <td>{Discontinued.toString()}</td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <tbody>
            <tr>
              <td colSpan={10}>
                <BounceLoader color="#ed26b4" />
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};
