import './App.css';
// import Card from './components/Card.jsx'
import Card from './components/Card/Card.jsx'
import Counter from './components/Counter.jsx'
import CounterWithEffect from './components/CounterWIthEffect.jsx';
import NameForm from './components/NameForm.jsx';

function App() {

  return (
    <section>
      <NameForm />
      <Card title="Card 1" description="Description 1" />
      <Counter />
      <CounterWithEffect />
    </section>
  );
}

export default App;