import React from 'react';
import {connect} from 'react-redux';
import {showItems} from '../../actions';

class ItemsList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this
      .props
      .showItems()
  }

  renderItemsList() {
    return this
      .props
      .items
      .map((item) => {
        return (
          <li key={item.id}>{item.title}
            - {item.category}
            - {item.price}
            - {item.quantity}
            - {item.currency}
            - {item.paymentOption}
            - {item.certificate}
            - {item.description}</li>
        )
      })
  }

  render() {
    return (
        <ul>
            {this.renderItemsList()}
        </ul>
    );
  }

}

function mapStateToProps(state) {
  return {items: state.items.list};
}

export default connect(mapStateToProps, {showItems})(ItemsList);