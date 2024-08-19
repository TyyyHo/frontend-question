class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    // When click event triggered the state is 0.
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    // After three times setState, the state is 1, due to the setState is asynchronous, every setState set count to 0+1, so the state is 1

    // What if we want to make the result of state to be 3, we could update the code as below.
    // (state) => state.count + 1, the state in the function is the updated state, so we could update the count as expected.
    this.setState((state) => state.count + 1);
    this.setState((state) => state.count + 1);
    this.setState((state) => state.count + 1);
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>{" "}
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById("root"));
