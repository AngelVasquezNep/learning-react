import Profile from './components/Profile'
import './App.css';

// var
// let
const scientists = [
  { name: 'Katherine Johnson', image: 'MK3eW3A' },
  { name: 'Gregorio Y. Zara', image: '7vQD0fP' },
  { name: 'Hedy Lamarr', image: 'yXOvdOS' },
]

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>

      {scientists.map(scientist => (
        <Profile
          key={scientist.name}
          name={scientist.name}
          image={scientist.image}
        />
      ))}
    </div>
  );
}

// function () {
//   return 'papitas'
// }

// () => 'papitas'

export default App;
