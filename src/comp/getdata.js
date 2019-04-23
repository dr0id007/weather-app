import React, { Component } from "react";
import axios from "axios";
import Display from "./display";
import key from "../key";

export default class getdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      temp: [],
      text: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    const ss = "/current.json?key=" + key;
    e.preventDefault();
    const url = ss + "&q=" + this.state.name;
    axios
      .get(url)
      .then(res => res.data)
      .then(res => {
        // console.log("data:-", res.current);
        const text = res.current.condition.text;
        const temp = res.current.temp_c;
        const humid = res.current.humidity;
        const wind = res.current.wind_mph;
        const data = Display(temp, text, humid, wind);
        this.setState({
          data: data
        });
      });
  }

  render() {
    return (
      <div>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group active-cyan-4">
              <input
                className="form-control"
                placeholder="City"
                name="name"
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <span
                  className="input-group-text red lighten-3"
                  id="basic-text1"
                >
                  <button
                    className="text-grey btn btn-default get"
                    aria-hidden="true"
                  >
                    GET
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="display">{this.state.data}</div>
      </div>
    );
  }
}
