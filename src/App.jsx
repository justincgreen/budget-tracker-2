import { useContext } from 'react';
import GlobalContext from './context/GlobalContext';

// SCSS styles
import './styles/styles.js';

// Components
import Header from './components/Header';

function App() {
  const { addExpenseForm, setAddExpenseForm } = useContext(GlobalContext);
  const handleBtn = () => {
    setAddExpenseForm(!addExpenseForm);
  }
  return (
    <div className="App">
      <Header />
      
      <div className="button-group" style={{ 
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <button className="button" onClick={handleBtn}>Add Expenses</button>
        <button className="button">View Expenses</button>
        <button className="button">View Chart</button>
      </div>
      
      {
        addExpenseForm && <div>Add Expense form here</div>
      }
      
    </div>
  )
}

export default App
