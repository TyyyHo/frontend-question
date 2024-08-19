var SearchBox = React.createClass({
  state: { debounce: false },
  render: function () {
    return <input type="search" name="p" disabled={this.state.debounce} onChange={this.handleOnChange} />;
  },
  handleOnChange: function (event) {
    this.setState({ debounce: true });
    setTimeout(() => this.setState({ debounce: false }), 3000);
    // make ajax call
  },
});
