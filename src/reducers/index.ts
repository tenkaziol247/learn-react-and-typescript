import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todos';
import { Todo } from '../actions/index';

export interface StoreState {
    todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer,
});
