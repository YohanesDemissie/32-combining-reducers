import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import CategoryForm from '../category/category-form/category-form';
import CategoryItem from '../category/category-item/category-item';
import {categoryCreate, categoryUpdate, categoryDelete } from '../../actions/category-actions';

class Dashboard extends React.Component {
  render() {
    return(
      <section>
        <h1>Welcome to Redux</h1>
        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate}/>

        {this.props.categories ?
          this.props.categories.map(cat =>
            <CategoryItem key={cat._id}
              category={cat}
              cards={this.props.cards}
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
  categories: state.categories, //state is complete store in redux with a .cards and .categories
  cards: state.cards,
});

const mapDispatchToProps = (dispatch, getState) => ({ //maps to update state of the props of this component
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state
  dashboardCategoryDelete: category => dispatch(categoryDelete(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state
  dashboardCategoryUpdate: category => dispatch(categoryUpdate(category)), //create a function passing category(passed in on our forms) as the arg. pass through our action of category create(thats gonna give us an ID and time stamp). the type and payload is passed to dispatch which handles that to a reducer which then updates to the store and this.props.category gives us updates on the state

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); //i want to dispatch and attatch to these componenets