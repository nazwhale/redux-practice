import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// root reducer === application state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
