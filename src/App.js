import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {Navbar,Exchanges,CryptoDetails,Cryptocurrencies,News,Homepage} from './components';
import './App.css';
function App() {
  return (
  <div className='app'>
    <div className='Navbar'>
     <Navbar/>
    </div>
    <div className='main'>
     <Layout>
      <div className='routes'>
   
     <Routes>
          <Route  path ="/" element={<Homepage/>} />
        

          <Route path ="/exchanges" element={<Exchanges/>} />
     
        

          <Route path ="/cryptocurrencies" element={<Cryptocurrencies/>} />
        
          <Route path ="/crypto/:coinId" element={<CryptoDetails/>} />
          
          <Route path ="/news" element={<News/>} />
          </Routes>
      </div>
     </Layout>

     <div className='fotter' level={5} style={{color:'white',backgroundColor:"rgb(0, 21, 41)",textAlign:'center'}}>
       <Typography.Title>
        Cryptoverse<br/>
        All rights reserved
       </Typography.Title>
       <Space className='ftbtm'>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
       </Space>
    </div>
    </div>


  </div>
  );
}

export default App;


