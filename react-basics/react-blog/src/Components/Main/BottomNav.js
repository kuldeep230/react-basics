import React, { Component } from "react";

class BottomNav extends Component {
  render() {
    return (
      <nav className="blog-pagination" aria-label="Pagination">
        <a className="btn btn-outline-primary" href="/">
          Older
        </a>
        <a
          className="btn btn-outline-secondary disabled"
          href="/"
          tabindex="-1"
          aria-disabled="true"
        >
          Newer
        </a>
      </nav>
    );
  }
}
export default BottomNav;
