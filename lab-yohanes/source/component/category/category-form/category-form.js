import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.category ?
      this.props.category :
      {
        title: '',
        budget: '',
      };
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    // LAB 31 : this.setState({title: '', budget: ''});
    // this.props.onComplete(this.state); //this is sent to our wrapper created in dashboard.js
    // this.setState({title: '', budget: ''});
    if(this.props.buttonText === 'update') this.props.toggleEdit();
  }
  render() {
    //let totalSpend = this.state.expenses.reduce((a, b) => a + parseInt(b.price), 0);
    //let remainingBudget = this.state.budget - totalSpend;
    return(
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="budget"
          placeholder="budget"
          value={this.state.budget}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}


export default CategoryForm;