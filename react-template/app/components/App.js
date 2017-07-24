import React,{Component} from 'react';
import {  Link } from 'react-router'

import Style from './nav.css';

const ACTIVE = {
  color:'#FEA709',
  borderBottom:"2px solid #FEA709"
}
export default class extends Component{

  render(){
    return(
      <div>
        <div className={Style.nav}>
           <Link to="/" activeStyle={ACTIVE} >首页</Link>
          <Link to="/message" activeStyle={ACTIVE} >消息</Link>
          <Link to="/find" activeStyle={ACTIVE} >发现</Link>
          <Link to="/mine" activeStyle={ACTIVE} >我的</Link>
        </div>
         
        {this.props.children}
      </div>
    )
  }
}
