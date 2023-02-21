const Header = () => {
	return (
		<div className="c-header">
			<h1>Budget Tracker 2</h1>
			
			<div className="c-header__balance-area">
				<h2 className="c-header__balance-current-label">Balance</h2>
				<h2 className="c-header__balance-current-title">$1,000.00</h2>
				
				<div className="c-header__balance-secondary">
					<div className="c-header__income-info">
						<h2 className="c-header__balance-secondary-label">Income</h2>
						<h2 className="c-header__balance-secondary-title text-green">$2,000.00</h2>
					</div>
					
					<div className="c-header__expense-info">
						<h2 className="c-header__balance-secondary-label">Expenses</h2>
						<h2 className="c-header__balance-secondary-title text-red">$1,000.00</h2>				
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header