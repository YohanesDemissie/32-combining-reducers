import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import CardForm from '../../card/card-form/card-form';
import CardItem from '../../card/card-item/card-item';
import CategoryForm from '../category-form/category-form';
import {cardCreate} from '../../../actions/card-actions';
import {categoryUpdate, categoryDelete} from '../../../actions/category-actions';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: this.props.category ? this.props.category : {},
      editing: false,
    };

    this.handleEditing = this.handleEditing.bind(this);
  }

  handleEditing() {
    this.setState({editing: this.state.editing});
  }

  render(){
    return(
      <div className="category=item" onDoubleClick={this.handleEditing}>
        <h2>{this.state.category.title}</h2>
        <p onClick={() => this.props.categoryDelete(this.state.category)}>x</p>
        <CategoryForm
          buttonText="update"
          onComplete={this.props.categoryUpdate}/>
        
        <CardForm 
          buttonText="create"
          categoryId={this.props.category._id}
          onComplete={this.props.cardCreate}/>

        {this.renderIf(this.props.cards[this.props.category._id],
          this.props.cards[this.props.category._id].map(card => <CardItem key={card._id} card={card}/>)
        )}
        <button type="submit">{this.props.buttonText}</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  categoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);