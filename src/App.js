import Home from "./pages/Home";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";
import { AuthProvider } from "./contexts/AuthContext";

function App() {

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <AuthProvider>
      <Home></Home>
    </AuthProvider>


  );
}

export default App;
