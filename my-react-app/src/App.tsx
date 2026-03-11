import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css"
import Reporting from "./pages/Reporting"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/reporting" component={Reporting} />
      </Switch>
    </Router>
  )
}

export default App