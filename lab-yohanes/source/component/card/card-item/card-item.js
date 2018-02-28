import React from 'react';
import {connect} from 'react-redux';
import {cardUpdate} from '../../../actions/card-actions';
import {cardDelete} from '../../../actions/card-actions';

class CardItem extends React.Cmponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id={this.props.card._id}>
        <h2>{this.props.title}</h2>
        <span onClick={() => this.props.cardDelete(this.props.card)}>x</span>
        <CardForm
          buttonText="update"
          card={this.props.card}
          onComplete={this.props.cardUpdate}/>
      </section>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch, getState) => ({
  cardUpdate : card => dispatch(cardUpdate(card)),
  cardDelete: card => dispatch(cardDelete(card)),
});
export default connect(mapStateToProps, mapDispatchToProps(CardItem));