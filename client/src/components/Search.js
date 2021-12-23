import React from 'react';

const Search = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="search"
          value={props.value}
          placeholder="Search by benefits"
          onChange={props.onChange}
        ></input>
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
