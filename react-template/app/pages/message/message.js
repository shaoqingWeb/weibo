import React,{Component} from 'react';
import Header from '../../components/Header/Header'


export default class extends Component{
    render(){
        return (
            <div style={{paddingTop:"6.0rem"}}>
                <Header title="消息"/>
                message page
            </div>
        )
    }
}