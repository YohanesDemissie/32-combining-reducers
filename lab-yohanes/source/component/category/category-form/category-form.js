import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    //  this.state = {
    //    title: props.category ? props.category.title : '',
    //  }
    this.state = this.props.category ?
      this.props.category :
      {
        title: '',
        budget: '',
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.onComplete(Object.assign({}, this.state))
    // this.setState({title: ''})
    this.props.onComplete(this.state); //this is sent to our wrapper created in dashboard.js
    this.setState({title: '', budget: ''});
    if(this.props.buttonText === 'update') this.props.toggleEdit();
  }
  render() {
    return(
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}


export default CategoryForm;