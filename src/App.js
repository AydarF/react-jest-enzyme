import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Button label="Click me"></Button>
    </div>
  );
}

export default App;
