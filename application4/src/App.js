
import React,{Component} from 'react'
import './App.css';
import Counter from './Compteur';


class App extends Component{
  constructor(props) {
    super(props)
  this.state = {
    Person : { fullName:"REGAIG Islem",
    bio: <p>I'am a freshly graduated electrical engineer, looking for a job opportunity to start my professional career, with excellent ability to carry out several tasks. I am interested in the field of embedded development</p>,
    imgSrc:'./img.jpg' ,
    profession:" Web Developer"},
    show : true
  };
  } 
  render(){
    return (
    <div className="App">
      {
        this.state.show?
      <div className='card'>
        <h1 style={{fontFamily:'sans serif', color:'blue',fontSize:"20px"}}>{this.state.Person.fullName}</h1>
        <h2 style={{ color:'black',fontSize:"16px"}}>{this.state.Person.bio}</h2>
        <h3 style={{fontFamily:'Arial', color:'palevioletred',fontSize:"20px"}}>{this.state.Person.profession}</h3>
        <div><img className='img' src={this.state.Person.imgSrc} alt="img"></img></div>
        <h1 style={{color:"black",fontFamily:'sans serif',fontSize:"20px"}}>Time interval : <Counter/></h1>
        
      </div>
      :null
      }
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})} id="myButton" >{this.state.show? "Hide Data" : "Show data"}</button>
      
    </div>)
  }

}


export default App;
