import NameAndPhoto from './components/NameAndPhoto.js';
import Buttons from './components/Buttons.js';
import MainInfo from './components/MainInfo.js';
import Footer from './components/Footer';


function App() {
	return (
		<div className='card-outer'>
			<div className='card'>
				<NameAndPhoto />
				<Buttons />
				<MainInfo />
				<Footer />
			</div>
		</div>
	)
}
	
export default App;
	