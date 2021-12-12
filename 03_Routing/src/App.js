import { Route, Routes } from 'react-router';
import './App.css';
import MyHeader from './components/MyHeader';
import MyNav from './components/MyNav';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Reports from './pages/Reports';
import Spending from './pages/Spending';

function App() {
    return (
    <div className="App">
      
      <section style={styles.displays}>
        <MyNav/>
        <MyHeader />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Reports' element={<Reports/>} />
          <Route path='/Income' element={<Income/>} />
          <Route path='/Spending' element={<Spending/>} />
          <Route path='/Savings' element={<Reports/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;

const styles = {
  displays:{
    display: 'flex',
    flexDirection: 'column'
  }
}