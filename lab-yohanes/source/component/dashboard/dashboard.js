import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryDelete, categoryUpdate} from '../../actions/category-actions';
import CategoryForm from '../category/category-form/category-form';
import CategoryItem from '../category/category-list/category-list';

class Dashboard extends React.Component {
  // componentWillReceiveProps(){
  //   console.log(this.props);
  // }
  render() {
    return (
      <section>
        <h1>Welcome To Redux</h1>

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate} />
        {console.log(this.props.categories)}
        {this.props.categories ?
          this.props.categories.map(cat =>
            <CategoryItem key={cat._id}
              category={cat}
              handleDelete={this.props.dashboardCategoryDelete}
              handleUpdate={this.props.dashboardCategoryUpdate}
            />)
          :
          undefined
        }
      </section>
    );
  }
}
const mapStateToProps = state => ({ //map redux to props of this component
  categories: state.categories, //state is complete store in redux with a .expenses and .categories
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state
  dashboardCategoryDelete: category => dispatch(categoryDelete(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state
  dashboardCategoryUpdate: category => dispatch(categoryUpdate(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); //i want to dispatch and attatch to these componenets