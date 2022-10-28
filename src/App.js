import logo from './logo.svg';
import './App.css';

const introduce = (user) => {
  return `${user.firstName} ${user.lastName}`
}
const user = {
  firstName: "Butter",
  lastName: "Biscuits"
}

const name = "Blue Jones"
function App() {
  return (
    <h1>Hello {introduce(user)}</h1>
  );
}

export default App;
