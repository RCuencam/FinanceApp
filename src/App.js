import { OperationProvider } from "./context/OperationProvider";
import { UserProvider } from "./context/userProvider";
import { AppRouter } from "./routes/AppRouter";
import "./styles/styles.scss"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <OperationProvider>
          <AppRouter/>
        </OperationProvider>
      </UserProvider>
    </div>
  );
}

export default App;
