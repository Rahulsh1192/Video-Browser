import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChangeHandler = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit= event =>{
      event.preventDefault();
      this.props.onFormSubmit(this.state.term)

  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
