import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="col-6">
      <form id="search-form">
        <input
          type="text"
          class="form-control"
          placeholder="Type city"
          autofocus="on"
          shadow="small"
          id="search-text-input"
        />
      </form>
    </div>
  );
}
