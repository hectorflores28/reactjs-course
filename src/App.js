import './App.css';
import Card from './components/Card.jsx'
import Counter from './components/Counter.jsx'

function App() {

  return (
    <section>
      <Card title="Card 1" description="Description 1" />
      <Card title="Card 2" description="Description 2" />
      <Counter />
    </section>
  );
}

export default App;
