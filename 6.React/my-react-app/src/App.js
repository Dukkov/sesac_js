import './App.css';
import MyHeader from './myHeader';
import MyFooter from './myFooter';

function App() {
  let name = "sesac";

  const style = {
    h2: {
      color: "red",
    },
    my_text: {
      color: "green"
    }
  }

  return (
    <div className="App">
      <MyHeader />
        <header className="App-header">
          <h1>Hello, {name} React!</h1>
        </header>
        <h2 style = {style.h2}>헤더2</h2>
        <p style = {style.my_text}>본문내용</p>
      <MyFooter />
    </div>
  );
}

export default App;