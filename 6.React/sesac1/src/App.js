import './App.css';
import Counter from './Counter';
import Container from './Container';

function App() {
  const num = 5;
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>Hello</h1>
          <Counter num={num}/>
        </Container>
        <Container>
          <h1>Hello</h1>
          <Counter num={num}/>
        </Container>
      </header>
    </div>
  );
}

export default App;