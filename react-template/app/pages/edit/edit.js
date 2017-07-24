import React,{Component} from 'react';
import {  Link } from 'react-router'
import style from './edit.css';
import 'whatwg-fetch';

export default class extends Component{


    send(){
        let text = this.refs.myInp.value;
        let pic = this.refs.myPic.value;
        console.log(pic)
        if(text == "" || text == null || text == undefined){
            return;
        }else{
            this.refs.myForm.submit();
            setTimeout(function(){
                // window.location.hash = '#/home'
               window.history.back()
            },500)
        }
        
        
    }





    render(){
        return (
            <div style={{backgroundColor:"#eee"}}>
               <div className={style.edithead}>
                   <p><Link to="/home">取消</Link></p>
                   <p>发微博</p>
                   <p onClick={this.send.bind(this)}>发送</p>
               </div>
               <form ref="myForm" action="http://localhost:3000/addMessage" method="post" encType="multipart/form-data">
                    <div className={style.inp}>
                         <textarea name="text"  cols="51" rows="10" placeholder="写点什么吧..." ref="myInp"></textarea>
                    </div>
                    <div className={style.pic}>
                        <p>
                        <input type="file" name="image" ref="myPic" style={{opacity:0}}/>
                        </p>
                        <p></p>
                     </div>
               </form>
               
            </div>
        )
    }
}