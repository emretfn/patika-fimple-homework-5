import AirConditions from "./components/AirConditions";
import MainWeather from "./components/MainWeather";
import SearchInput from "./components/SearchInput";
import SevenDayForecast from "./components/SevenDayForecast";
import TodaysForecast from "./components/TodaysForecast";

function App() {
  return (
    <main className="main">
      <SearchInput />
      <div className="app">
        <MainWeather />
        <TodaysForecast />
        <AirConditions />
        <SevenDayForecast />
      </div>
    </main>
  );
}

export default App;
