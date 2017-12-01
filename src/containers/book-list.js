import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// ======== Redux =======
// allows container to show bits of state
// allows container to fire off (dispatch) actions
// aka getters & setters!

function mapStateToProps(state) {
  // takes in app state. whatever is returned will show up as this.props in BookList
  // links Redux and React - provides container access to correct part of state
  // if state ever changes, this component will re-render
  return {
    books: state.books
  };
}

// anything returned will end up as props on the BookList container
// so, we can now call this.props.selectBook to call the action creator
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// takes a function and a component, and produces a container
// needs to know about the new dispatch method selectBook, make available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
