import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';

  const style = {
    backgroundColor:'black',
    color:'aqua',
    fondSize:'48px',
    fontWeight:'bold',
    padding:16
  };

  // return (
  //   <div style={style}>{name}</div>
  // );
  return (
    <div style={{
          backgroundColor:'black',
          color:'aqua',
          fondSize:'48px',
          fontWeight:'bold',
          padding:16
        }}>
    </div>
  );
}

export default App;
