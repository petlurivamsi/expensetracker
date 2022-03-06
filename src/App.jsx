import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddExpense from "./pages/add-expense";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-expense" exact element={<AddExpense />} />
        </Routes>

        <div>Footer</div>
      </Router>
    </div>
  );
}

export default App;
