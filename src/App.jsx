import { Sidebar, Header, MainContent } from './components/layout';

export default function App() {
	return (
		<div className="app">
			<Sidebar />
			<Header />
			<MainContent />
		</div>
	);
}
