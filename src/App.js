import React, {Component} from 'react';
import MyBtn from './components/buttons/MyBtn';
import MyHeader from './components/MyHeader';


class App extends Component{
  render(){
    return (
      <div className="App">
        <MyHeader />
        <MyBtn btnText={"test"} />
      
      </div>
    );
  }
}

export default App;
