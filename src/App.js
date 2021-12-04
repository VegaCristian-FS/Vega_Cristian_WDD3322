import React, {Component} from 'react';
import AvatarIcon from './images/Avatar200.png';
import TattooImg from './images/postimg_01.jpg';
import FeedPost from './components/FeedPost';
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
            <h2 style={styles.h2}>Navigation Links</h2>
            <nav>
              <ul style={styles.sideBarUl}>
                <li><a href=''>Newsfeed</a></li>
                <li><a href=''>Messages</a></li>
                <li><a href=''>Watch</a></li>
              </ul>
            </nav>
          </div>
          <div style={styles.wallFeed}>
            <MyForm />
            <FeedPost 
              avatarImg={AvatarIcon}
              username="GuestUser12345"
              postDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              postImg={TattooImg}/>
            <FeedPost 
              avatarImg={AvatarIcon}
              username="GuestUser12345"
              postDetail="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              postImg={TattooImg}/>
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
    justifyContent: 'center'
  },
  sideBar:{
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
    padding: '20px',
    width: '300px',
    backgroundColor: '#242526',
    borderRadius: '8px',
    lineHeight: '2'  
  },
  sideBarUl:{
    margin: '0',
    padding: '0',
    fontSize: '20px',
    listStyleType: 'none',
    color: '#f7f7f7'
  },
  wallFeed:{
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    maxWidth: '600px'
  },
  h2:{
    fontSize: '20px',
    color: '#f7f7f7'
  }
}