import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import ExpenseForm from '../../expense/expense-form/expense-form';
import ExpenseItem from '../../expense/expense-item/expense-item';
import {expenseCreate} from '../../../actions/expense-actions';
import CategoryForm from '../category-form/category-form';
import {categoryUpdate, categoryDelete} from '../../../actions/category-actions';
import ExpenseList from '../category-list/category-list';
import {combineReducers} from 'redux';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.category;
    this.state.edit = false;
    this.handleDelete = this.handleDelete.bind(this);
    // this.state = {
    //   category: this.props.category ? this.props.category : {},
    //   editing: true,
    // };

    this.handleEditing = this.handleEditing.bind(this);
  }

  handleDelete() {
    this.props.categoryItemCategoryDelete(this.state);
  }
  handleEditing() {
    this.setState({editing: this.state.editing});
  }

  render() {
    return (
      <div className="categoryItems" className="animated lightSpeedIn">
        <section className="category-item" onDoubleClick={() => this.setState({ edit: !this.state.edit })}>
          <h3>{this.props.category.title}</h3>
          <p>Budget: ${this.props.category.budget}</p>
          <button id={this.props.category._id} onClick={this.handleDelete}>Delete</button>
        </section>
        {renderIf(this.state.edit,
          <CategoryForm category={this.props.category}
            buttonText='Update'
            onComplete={this.props.categoryItemCategoryUpdate} />
        )}
        <h2>Add an expense</h2>
        <ExpenseList
          className="expense-list"
          categoryId={this.props.category._id}
        />
      </div>
    );
  }

  // render() {
  //   return(
  //     <div className="category-item" onDoubleClick={this.handleEditing}>
  //       <h3>{this.props.category.title}</h3>
  //       <p>{this.props.category.budget}</p>
  //       <p onClick={() => this.props.categoryItemCategoryDelete(this.state.category)}>x</p>
  //       <CategoryForm
  //         buttonText="update"
  //         onComplete={this.props.categoryItemExpenseCreate}/>

  //       <ExpenseForm
  //         buttonText="create"
  //         categoryId={this.props.category._id}
  //         onComplete={this.props.expenseCreate}/>

  //       {renderIf(this.props.expenses[this.props.category._id],
  //         this.props.expenses[this.props.category._id].map(expense => <expenseItem key={expense._id} expenses={expense}/>)
  //       )}
  //     </div>
  //   );
  // }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemExpenseCreate: expense => dispatch(expenseCreate(expense)),
  categoryItemCategoryDelete: category => dispatch(categoryDelete(category)),
  categoryItemCategoryUpdate: category => dispatch(categoryUpdate(category)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem); //i want to dispatch and attatch to these componenets
// export default CategoryItem;