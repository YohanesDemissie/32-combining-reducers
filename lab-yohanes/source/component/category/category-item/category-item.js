import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import ExpenseForm from '../../expense/expense-form/expense-form';
import ExpenseItem from '../../expense/expense-item/expense-item';
import {ExpenseCreate, ExpenseUpdate} from '../../../actions/expense-actions';
import CategoryForm from '../category-form/category-form';
import {categoryUpdate, categoryDelete} from '../../../actions/category-actions';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: this.props.category ? this.props.category : {},
      editing: true,
    };

    this.handleEditing = this.handleEditing.bind(this);
  }

  handleEditing() {
    this.setState({editing: this.state.editing});
  }

  render() {
    return(
      <div className="category-item" onDoubleClick={this.handleEditing}>
        <h3>{this.state.category.title}</h3>
        <p onClick={() => this.props.categoryItemCategoryDelete(this.state.category)}>x</p>
        <CategoryForm
          buttonText="update"
          onComplete={this.props.categoryUpdate}/>

        <expenseForm
          buttonText="create"
          categoryId={this.props.category._id}
          onComplete={this.props.expenseCreate}/>

        {renderIf(this.props.expenses[this.props.category._id],
          this.props.expenses[this.props.category._id].map(expense => <expenseItem key={expense._id} expenses={expense}/>)
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchtToProps = (dispatch, getState) => ({
  categoryItemexpenseCreate: expense => dispatch(ExpenseCreate(expense)),
  categoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
  categoryItemUpdate: expense => dispatch(ExpenseUpdate(expense)),
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),

});

// const mapDispatchtToProps = (dispatch, getState) => ({

// })
export default CategoryItem;