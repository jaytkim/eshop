import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Departments from '../db/departments.json';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: []
    };
  }

  componentDidMount() {
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // Todo::: Fetch Departments data from backend.
    // ex) fetch('[api url]')
    //      .then(res => res.json())
    //      .then(data => {this.setState({ departments: data })})
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    const departments = Departments.data; // This is temp data from json file.

    this.setState({ departments: departments });
  }

  render() {
    return (
      <div>
        <h3>Departments</h3>
        <ul>
          {this.state.departments.map((department, i) => {
            return (
              <Link to={`/departments/${department.id}`} key={i}>
                <li>{department.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideBar;
