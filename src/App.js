import './App.css';
import Card from './components/Card.jsx'
import Counter from './components/Counter.jsx'
import NameForm from './components/NameForm.jsx';

function App() {

  return (
    <section>
      <NameForm />
      <Card title="Card 1" description="Description 1" />
      <Counter />
    </section>
  );
}

export default App;