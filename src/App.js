// import logo from './logo.svg';
import './App.css';

import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/cook_mate" element={<Home />} />
        <Route path="/cook_mate/recipes" element={<Recipes />} />
        <Route path="/cook_mate/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
