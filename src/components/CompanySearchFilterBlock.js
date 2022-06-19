import React from "react";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";

export default function CompanySearchFilterBlock({ title, items }) {
  const rendersearchLocations = items.map((location, index) => (
    <li className="search-filters-item" key={index}>
      <input
        type="checkbox"
        name="refineSearchLocationItem"
        value={location}
        id={
          "recruter-search-" +
          title.replace("'", " ").split(" ").join("-") +
          "-" +
          index
        }
      />
      <label
        htmlFor={
          "recruter-search-" +
          title.replace("'", " ").split(" ").join("-") +
          "-" +
          index
        }
      >
        <i> {location.name}</i>
        <span>({location.count})</span>
      </label>
    </li>
  ));
  return (
    <>
      <div className="search-filter">
        <input
          type="checkbox"
          name="refineSearchLocation"
          id={"recruter-search-" + title.replace("'", " ").split(" ").join("-")}
        />
        <label
          className="search-filter-heading"
          htmlFor={
            "recruter-search-" + title.replace("'", " ").split(" ").join("-")
          }
        >
          <Icon path={mdiMenuDown} />
          <span>{title}</span>
        </label>
        <div className="search-filter-content">
          <ul className="search-filters-items">{rendersearchLocations}</ul>
        </div>
      </div>
    </>
  );
}
