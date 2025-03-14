import './App.css';
import Card from './components/Card.jsx'
import Counter from './components/Counter.jsx'

function App() {

  return (
    <section>
      <Card title="Card 1" description="Description 1" />
      <Card title="Card 2" description="Description 2" />
      <Card title="Card 3" description="Description 3" />
      <Counter />
    </section>
  );
}

export default App;
