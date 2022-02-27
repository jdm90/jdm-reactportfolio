import React, { Component } from 'react';

export default class Footer extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer>
        &copy; {this.getYear()} Justin D Miles. All rights reserved.
      </footer>
    );
  }
}
