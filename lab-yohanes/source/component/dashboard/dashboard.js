import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryUpdate, categoryDelete} from '../../actions/category-actions';
import CategoryForm from '../category/category-form/category-form';

class Dashboard extends React.Component {
  render() {
    return(
      <section>
        <h1>Welcome to Redux</h1>
        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/> {/*this is basically a wrapper for dashboard categroy create*/}

        {this.props.categories ?
          this.props.categories.map(cat =>
            <CategoryItem key={cat._id}
              category={cat}
              handleDelete={this.props.dashboardCategoryDelete}
              handleUpdate={this.props.dashboardCategoryUpdate}
            />)
          // <div key={cat._id}>
          //   <h3>{cat.title}</h3>
          // </div>)
          :
          undefined
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({ //map redux to props of this component
  categories: state,
});

const mapDispatchToProps = (dispatch, getState) => ({ //maps to update state of the props of this component
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state
  dashboardCategoryDelete: category => dispatch(categoryDelete(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state
  dashboardCategoryUpdate: category => dispatch(categoryUpdate(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); //i want to dispatch and attatch to these componenets