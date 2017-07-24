import React,{Component} from 'react';

import Header from '../../components/Header/Header';
import Infor from '../../components/infor/infor';
import Styles from './Home.css';
import 'whatwg-fetch';

export default class extends Component{

    constructor(){
        super();
        this.state = {
            con:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/getnews')
        .then(function(res){
            return res.json()
        }).then(function(json){
            this.buildRenderList(json);
        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }

    buildRenderList(json){
        console.log(json);
        var arr = json.data;
        arr = arr.map(function(i){
            return <Infor key={i.id} info={i}/>
        })

         this.setState({
            con:arr
        })
        console.log(this.state.con)
    }


   


    render(){
        return(
            <div>
                <Header title="秦少青"/>
                <div className={Styles.homecon}>
                    {this.state.con}
                </div>
            </div>
        )
    }
}