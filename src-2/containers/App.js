import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo.js';
import TodoList from '../components/TodoList.js';
import Filter from '../components/Filter.js';




class App extends Component{
  constructor(props){
    super(props);
  }

  // static propTypes = {
  //   visibleTodos: PropTypes.arrayOf(PropTypes.shape({
  //     text: PropTypes.string.isRequired,
  //     completed: PropTypes.bool.isRequired
  //   }).isRequired).isRequired,
  //   visibilityFilter: PropTypes.oneOf([
  //     'SHOW_ALL',
  //     'SHOW_COMPLETED',
  //     'SHOW_ACTIVE'
  //   ]).isRequired
  // };

  render(){
    //由connect()函数注入
    const {dispatch, visibleTodos, visibilityFilter} = this.props;
    return(
      <div>
        <AddTodo
          onAddClick={text=>{
            dispatch(addTodo(text));
          }}
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={
            index=>{
              dispatch(completeTodo(index));
            }
          }
        />
        <Filter
          onFilterChange = {
            filter =>{
              dispatch(setVisibilityFilter(filter));
            }
          }
          filter = {visibilityFilter}
        />
      </div>
    );
  }
}


App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}


function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)
