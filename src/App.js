import React, {Component} from 'react';
import MyAds from './components/MyAds';
import MyForm from './components/MyForm';
import MyHeader from './components/MyHeader';


class App extends Component{
  render(){
    return (
      <div className="App" >
        <MyHeader />
        
        
        <main style={styles.main}>
          {/* Sidebar*/}
          <div>
            <MyForm />
            {/* Feed */}
          </div> 
          <div>
            <MyAds cardTitle="New York Black Friday" cardDetail="Lorem Ipsum dolor amit set."/>
            <MyAds cardTitle="New York Best Deals" cardDetail="Lorem Ipsum dolor amit set."/>
          </div>         
          
        </main>
      
      </div>
    );
  }
}

export default App;


const styles= {
  main: {
    diplay: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}