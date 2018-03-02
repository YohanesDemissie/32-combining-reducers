import React from 'react';
import CategoryForm from '../category-form/category-form';
import {connect} from 'react-redux';
import {categoriesUpdate, categoryDelete} from '../../../actions/category-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category ?
        this.props.category :
        {},
      editing: false,
    };

    this.handleEditing = this.handleEditing.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleEditing() {
    this.setState({editing: this.state.editing});
  }

  handleDelete() {
    this.props.handleDelete(this.state.category);
  }

  handleUpdate() {
    this.props.handleUpdate.bind(this);
  }

  render() {
    return(
      <li className='category-item'
        onDoubleClick={this.handleEditing}>
        <h1>{this.props.category.title}</h1>
        <p>{this.props.category.budget}</p>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.editing ?
          <CategoryForm
            buttonText="update"
            onComplete={this.props.handleUpdate}
            category={this.state.category}
            toggleEdit={this.handleEditing}
          />
          :undefined
        }
      </li>
    );
  }
}

export default CategoryItem;