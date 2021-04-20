import React, { Component } from "react";

class Form extends Component {
  state = {
    lname: "",
    fname: "",
    email: "",
    password: "",
    employed: "yes",
    gender: "",
    address: "",
    qualification: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <label for="fname">First Name: </label>
          <input
            id="fname"
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label for="lname">Last Name: </label>
          <input
            id="lname"
            name="lname"
            value={this.state.lname}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label for="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label for="password">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Employed : </label>
          <br />
          <br />
          <input
            type="radio"
            id="empYes"
            name="employed"
            value="yes"
            checked={this.state.employed === "yes"}
            onChange={this.handleChange}
          />
          <label for="empYes">Yes</label>
          <input
            type="radio"
            id="empNo"
            name="employed"
            value="no"
            checked={this.state.employed === "no"}
            onChange={this.handleChange}
          />
          <label for="empNo">No</label>
          <br />
          <br />
          <label>Gender : </label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          <label for="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          <label for="female">Female</label>
          <input
            type="radio"
            id="Others"
            name="gender"
            value="others"
            onChange={this.handleChange}
          />
          <label for="others">Others</label>
          <br />
          <br />
          <label for="address">Address</label>
          <br />
          <textarea
            id="address"
            rows="4"
            cols="40"
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
          ></textarea>
          <br />
          <br />
          <label for="qualification">Qualification: </label>
          <select
            id="qualification"
            name="qualification"
            value={this.state.qualification}
            onChange={this.handleChange}
          >
            <option value="SSC" selected={this.state.qualification === "SSC"}>
              SSC
            </option>
            <option value="grad" selected={this.state.qualification === "grad"}>
              Graduate
            </option>
            <option
              value="postgrad"
              selected={this.state.qualification === "postgrad"}
            >
              Post Graduate
            </option>
          </select>
        </form>
      </div>
    );
  }
}
export default Form;
