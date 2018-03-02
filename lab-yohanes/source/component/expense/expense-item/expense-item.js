import React from 'react';
import {renderIf} from '../../../lib/utils';
import {connect} from 'react-redux';
import expenseForm from '../expense-form/expense-form';
import {expenseUpdate, expenseDelete} from '../../../actions/expense-actions';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item ?
        this.props.item :
        {},
      editing: false,
    };

    this.handleEditing.bind(this);
  }

  handleEditing() {
    this.setState({editing: this.state.editing});
  }

  render() {
    return(
      <li className="expense-item"
        id={this.state.id}
        onDoubleClick={this.handleEditing}>
        <p>Name: {this.state.name}</p>
        <p>Price: {this.state.price}</p>
        {renderIf(this.state.editing,
          <ExpenseUpdate expense={this.state.item} close={this.handleEditing} dashboard={this.getOrSetState()}/>
        )}
      </li>
    );
  }
}

//   render() {
//     return(
//       <section id={this.props.expense._id}>
//         <h2>{this.props.title}</h2>
//         <span onClick={() => this.props.expenseDelete(this.props.expense)}>x</span>
//         <expenseForm
//           buttonText="update"
//           expense={this.props.expense}
//           onComplete={this.props.expenseUpdate}/>
//       </section>
//     );
//   }
//  }

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate : expense => dispatch(expenseUpdate(expense)),
  expenseDelete: expense => dispatch(expenseDelete(expense)),
});
//export default connect(mapStateToProps, mapDispatchToProps(expenseItem));
export default ExpenseItem;