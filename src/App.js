import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import s from "./App.css"


const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
