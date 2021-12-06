import React, {Component} from 'react';
import AvatarIcon from './images/Avatar200.png';
import TattooImg from './images/postimg_01.jpg';
import TattooImg2 from './images/postimg_02.jpg';
import FeedPost from './components/FeedPost';
import MyAds from './components/MyAds';
import MyForm from './components/MyForm';
import MyHeader from './components/MyHeader';


class App extends Component{
  state = {
    wallPosts: [{
      avatarImg: AvatarIcon,
      username: 'GuestUser12345',
      postDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      postImg: TattooImg,
      postAlt: 'Black and white image of a tattoo artist working'
    },
    {
      avatarImg: AvatarIcon,
      username: 'GuestUser12345',
      postDetail: '(No picture) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      postImg: '',
      postAlt: ''
    },
    {
      avatarImg: AvatarIcon,
      username: 'GuestUser12345',
      postDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      postImg: TattooImg2,
      postAlt: 'Tattoo model posing showing tattoos.'
    }]
  }
  
  getInput = e =>{
    this.setState({postDetail: e.target.value});
  }
  
  //Spread Method
  addItem = e => {
    e.preventDefault();
    this.setState({
      wallPosts: [...this.state.wallPosts,{avatarImg:AvatarIcon, username:'GuestUser12345',postDetail:this.state.postDetail }]
    });
    //clear form
    e.target.reset();
  }

  removeItem(){     
    // console.log(key);
    // const newFeedList = [...this.state.wallPosts];
    // newFeedList.splice(key, 1);
    // this.setState(() => ({
    //   wallPosts: newFeedList
    // }));
  }

  // removeItem(key){
  //   console.log(key);
  //   const newFeedList = [...this.state.wallPosts.filter(post => post.key !== key)];
  //   this.setState(() => ({
  //     wallPosts: newFeedList
  //   }));
  // }

  render(){
    

    let wallPosts = this.state.wallPosts.map((e, i) => {
      return <FeedPost key={i} val={e}/>
    })
    
    let deleteBtn = document.querySelectorAll('.deleteBtn');
    deleteBtn.forEach((btn) => { 
      btn.addEventListener("click", (e) => {
        // this.removeItem();
        console.log("click");
      });
    })

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
            <MyForm getInput={this.getInput} addItem={this.addItem} />
            {wallPosts}
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