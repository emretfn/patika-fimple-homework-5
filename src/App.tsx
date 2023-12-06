import MainWeather from "./components/MainWeather";
import TodaysForecast from "./components/TodaysForecast";

function App() {
  return (
    <main className="main">
      <input type="text" className="searchInput" />
      <div className="app">
        <MainWeather />
        <TodaysForecast />
      </div>
    </main>
  );
}

export default App;
