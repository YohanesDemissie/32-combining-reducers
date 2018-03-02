import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.expense ?
      this.props.expense :
      {
        categoryId: this.props.categoryId,
        title: '',
        price: '',
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.onComplete(this.state);
    this.setState({title: '', price: '', categoryId: this.props.categoryId}); //communicates with state constructor above onComplete/this.state

    this.props.dashboard.setState({expenses: [...this.props.dashboard.state.expense]}); //NOT SURE IF NECESSARY
  }

  render() {
    return(
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="expense-form-expense"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          placeholder="price"/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;