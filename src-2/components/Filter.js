import React,{Component} from 'react';
export default class Filter extends Component{
  constructor(props){
    super(props)
  }
  _renderFiler(filter,name){
    if(filter === this.props.filter){
      return name
    }
    return (
      <a
        href="#"
        onClick={(e)=>{
          e.preventDefault();
          this.props.onFilterChange(filter)
        }}
      >
        {name}
      </a>);
  }
  render(){
    return(
      <div>
        SHOW:
        {this._renderFiler('SHOW_ALL','ALL')}
        {', '}
        {this._renderFiler('SHOW_COMPLETED','COMPLETED')}
        {', '}
        {this._renderFiler('SHOW_ACTIVE','ACTIVE')}
      </div>
    )
  }
}
Filter.propTypes = {
  onFilterChange: React.PropTypes.func.isRequired,
  filter: React.PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};
