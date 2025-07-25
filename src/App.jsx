import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  const location = useLocation();

  function handlePathname() {
    return location.pathname === "/" ? "home" : location.pathname.slice(1);
  }
  return (
    <div className="App">
    <Header />
    <main className="container" id={handlePathname()}>
      <AppRoutes />
    </main>
    <Footer />
  </div>
  )
}

export default App
