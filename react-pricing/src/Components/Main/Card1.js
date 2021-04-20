import React, { Component } from "react";

class Card1 extends Component {
  render() {
    return (
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $0<small className="text-muted fw-light">/mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button
              type="button"
              className="w-100 btn btn-lg btn-outline-primary"
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Card1;
