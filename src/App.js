import "./App.css";
import Header from "./Components/Header/Header";
import Statistics from "./Components/Statistics/Statistics";
import Bill from "./Components/Bill/Bill";
import Card from "./Components/Card/Card";
import Comments from "./Components/Comments/Comments";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Statistics />
      <Bill />
      <Card />
      <Comments />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
