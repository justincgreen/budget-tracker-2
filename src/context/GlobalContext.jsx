import { useState, createContext } from 'react';

const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {
	const [addExpenseForm, setAddExpenseForm] = useState(false);
	
	return (
		<GlobalContext.Provider value={{
			addExpenseForm,
			setAddExpenseForm
		}}>
		{props.children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;