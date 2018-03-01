import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import CardForm from '../../card/card-form/card-form';
import CardItem from '../../card/card-item/card-item';
import {cardCreate} from '../../../actions/card-actions';
import CategoryForm from '../category-form/category-form';
import {categoryUpdate, categoryDelete} from '../../../actions/category-actions';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: this.props.category ? this.props.category : {},
      editing: false,
    };

    this.handleEditing = this.handleEditing.bind(this);
  }

  handleEditing() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    return(
      <div className="category-item" onDoubleClick={this.handleEditing}>
        <h3>{this.state.category.title}</h3>
        <p onClick={() => this.props.categoryDelete(this.state.category)}>x</p>
        <CategoryForm
          buttonText="update"
          onComplete={this.props.categoryUpdate}/>

        <CardForm
          buttonText="create"
          categoryId={this.props.category._id}
          onComplete={this.props.cardCreate}/>

        {renderIf(this.props.cards[this.props.category._id],
          this.props.cards[this.props.category._id].map(card => <CardItem key={card._id} cards={card}/>)
        )}
      </div>
    );
  }
}

export default CategoryItem;