import React from "react";

function AddProduct() {
  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Add Product
      </h2>

      <div className="row g-3">

        <div className="col-12 col-md-6">
          <label className="form-label">Product Code</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Category</label>

          <select className="form-select">
            <option>Computer</option>
            <option>Mobile</option>
            <option>Market</option>
          </select>
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Brand</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Discount</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Stock Quantity</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Description</label>
          <textarea className="form-control"></textarea>
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Product Image URL</label>
          <input type="url" className="form-control" />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label">Rating</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col-12">
          <button className="btn btn-primary">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddProduct