import React, {Component} from 'react';
import MyHeader from './components/MyHeader';
// import AvatarIcon from './images/Avatar200.png'
// import MyAvatar from './components/MyAvatar';

class App extends Component{
  render(){
    return (
      <div className="App">
        
        <MyHeader />
        
        {/* <h1>Testing Avatar</h1>
        <MyAvatar AvatarIcon={AvatarIcon}/> */}
      </div>
    );
  }
}

export default App;
