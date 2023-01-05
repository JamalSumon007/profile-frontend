import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ProfileForm from './components/profile/ProfileForm';
import ProfileList from "./components/profile/profileList";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/save-profile" element={<ProfileForm />} />
            <Route path="/list" element={<ProfileList />} />
        </Routes>
    </Router>
  );
}



export default App;
