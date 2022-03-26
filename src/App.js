import logo from './logo.svg';
import './App.css';

function App() {
  const name = "React";
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
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
    <div>
      {name==='리액트'?<h1>{name} 안녕</h1>:<h1>React 안녕?</h1>}
      {name=='리액트'&&<h1>안녕 2</h1>}
      <h2>잘 작동하니?</h2>
      <h2>test2</h2>
    </div>
  );
}

export default App;
