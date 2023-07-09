import React from 'react';

// UI
import { GlobalStyle } from './ui/components/Style';

// Pages
import LeaderBoard from './pages/leader-board';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<LeaderBoard />
		</>
	);
};

export default App;
