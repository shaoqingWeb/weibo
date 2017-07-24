import React,{Component} from 'react';
import {  Link } from 'react-router'
import Style from './Header.css';

const styles = {
    icons:{
        width:25,
        height:25
    }
}

export default class extends Component{
    render(){
        return (
            <div className={Style.head}>
                <div>{this.props.title}</div>
                <div>                   
                    <Link to="/edit">
                         <p style={styles.icons}></p>
                    </Link>                    
                    <p style={styles.icons}></p>
                    <p style={styles.icons}></p>
                </div>
            </div>
        )
    }
}