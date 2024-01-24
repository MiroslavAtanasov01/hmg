import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { UserProvider } from "./context/user-context";
import Dashboard from "./layouts/dashboard/dashboard";

function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Dashboard>
            <AppRoutes />
          </Dashboard>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
