import './App.css';
import Card from './components/Card.jsx'

function App() {
  const items=["React", "JavaScript","TypeScript"];

  return (
    <section>
      <h1>Hola Mundo!</h1>
      <Card title="Card 1" description="Description 1" />
      <Card title="Card 2" description="Description 2" />
      <Card title="Card 3" description="Description 3" />
      <ul>
      {
        items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      </ul>
    </section>
  );
}

export default App;
