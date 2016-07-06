import React,{Component,PropTypes} from 'react';

class AddTodo extends Component{
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
        <input type="text" ref='input' />
        <button onClick={(e)=> this._handerClick(e)}>
          Add
        </button>
      </div>
    );
  }
  _handerClick(e){
    e.preventDefault();
    const input = this.refs.input;
    const value = input.value;
    this.props.onAddClick(value);
    input.value = '';
  }
}
AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
export default AddTodo;
