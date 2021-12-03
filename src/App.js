import React, {Component} from 'react';
import MyAds from './components/MyAds';
import MyForm from './components/MyForm';
import MyHeader from './components/MyHeader';


class App extends Component{
  render(){
    return (
      <div className="App" >
        <MyHeader />
        
        
        <main style={styles.mainStyle}>
          <div style={styles.sideBar}>
            <nav style={styles.sideBarNav}>
              <li><a href=''>Test</a></li>
              <li><a href=''>Test</a></li>
              <li><a href=''>Test</a></li>
              <li><a href=''>Test</a></li>
              <li><a href=''>Test</a></li>
            </nav>
          </div>
          {/* Sidebar*/}
          <div style={styles.wallFeed}>
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
  mainStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sideBar:{
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
    padding: '20px',
    width: '300px',
    color: "#f7f7f7",
    backgroundColor: '#242526',
    borderRadius: '8px',
    lineHeight: '2',
    
  },
  sideBarNav:{
    fontSize: '20px',
    listStyleType: 'none',
    color: '#f7f7f7'
  },
  wallFeed:{
    display: 'flex',
    flexDirection: 'column',
    flex: 2
  }
}