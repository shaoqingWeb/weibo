import React,{Component} from 'react';

import Style from './infor.css';

export default class extends Component{
    render(){
        return(

                <div className={Style.infor}>
                    <div>
                        <p>
                            <img src={this.props.info.head_img}/>
                        </p>
                        <p style={{paddingTop:10,paddingBottom:10}}>{this.props.info.news}</p>
                        <p style={{width:"90%",margin:"0 auto",}}>
                            <img src={this.props.info.pic}/>
                        </p>
                    </div>               
                 </div>
            
        )
    }
}