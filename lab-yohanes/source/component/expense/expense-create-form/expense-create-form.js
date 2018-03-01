import React from 'react';

class ExpenseCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hanldeSubmit(e) {
    e.preventDefault();
    let expense = { ...this.state };
    expense._id = Math.random().toString();

    this.props.dashboard.setState({ expenses: [...this.props.dashboard.state.expenses, expense] });
    // expenses: [...prevState.expenses, this.state]
    //pass data to dashboard state
  }

  render() {
    return (
      <form className="expense-create-form" onSubmit={this.hanldeSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="" />

        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          placeholder="" />

        <button type="submit">Spend</button>
      </form>
    );
  }
}

export default ExpenseCreateForm;