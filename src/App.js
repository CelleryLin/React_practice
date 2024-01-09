import logo from './logo.svg';
import './App.css';

// 從 components import 進來
import Header from './components/Header'
import Test from './components/Test';
import StateEx from './components/StateEx'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello World!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='App'>
      <Header title="大家好" subtitles='Hi' body="我是內文我是內文"/>
      <Test />
      <StateEx title="Click number to add"/>
    </div>
  );
}

export default App;
