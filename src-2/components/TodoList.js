import React,{Component,PropTypes} from 'react';
//import Todo from './Todo.js';
class Todo extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}
       >
        {this.props.text}
      </li>
    );
  }
}
export default class TodoList extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo
                {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)}
                />
        )}
      </ul>
    )
  }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
