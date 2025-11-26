import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TechnologyCard from './TechnologyCard';
import Photo_profile from './assets/photo_profile.jpg';

function App() {
  return (
    <div className='App'>
      <Greeting />
      <UserCard 
        name="Оля Гузаирова"
        role="Глав админ или просто чел"
        avatarUrl={Photo_profile}
        isOnline={true} 
      />
      <TechnologyCard />
    </div>
  );
}

export default App;
