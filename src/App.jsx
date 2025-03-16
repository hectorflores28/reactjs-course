import './App.css';
// import Card from './components/Card.jsx'
// import Card from './components/Card/Card.jsx'
import Button from './components/Button/Button.jsx'
import Counter from './components/Counter.jsx'
import CounterWithEffect from './components/CounterWithEffect.jsx';
import NameForm from './components/NameForm.jsx';

function App() {

  return (
    <section>
      <NameForm />
      <Button blue>Hola</Button>
      <Counter />
      <CounterWithEffect />
    </section>
  );
}

export default App;