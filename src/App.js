mport React, {Component } from 'react';
import Rect from './Rect'
import './App.css';

class App extends Component {
 msgStyle1 = {
     fontSize: "24pt",
     color: "#900",
     margin: "20px 0px",
     padding: "5px",
     borderBottom: "2px solid #900"
     
 }
msgStyle2 = {
    fontsize: "20pt",
    color: "white",
    backgroundColor: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
}
btnStyle = {
    fontSize: "20pt",
    padding: "0px 10px"
}

constructor(props) {
    super(props);
    this.state= {
        counter: 0,
        msg:'count start',
        flg:true,
    };
   this.doAction = this.doAction.bind(this);
    }
doAction() {
//    stateの変更
    
    this.setState((state) => ({
       counter: state.counter +1,
       msg: state.counter,
    　　flg: !state.flg
    
     }));
    
}
render(){
    return <div>
        <h1>React</h1>
//    flgでボタン押されるたびに表示内容変える
    {this.state.flg ?
        <p style={this.msgStyle1}>count: {this.state.msg}</p>
     :
        <p style={this.msgStyle2}>count: {this.state.msg}です。</p>
    }
        <button style={this.btnStyle} onClick={this.doAction}>Click</button>
    </div>;
    
    
}

}

 export default App;

