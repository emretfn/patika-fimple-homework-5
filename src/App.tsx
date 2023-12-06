import AirConditions from "./components/AirConditions";
import MainWeather from "./components/MainWeather";
import SearchInput from "./components/SearchInput";
import SevenDayForecast from "./components/SevenDayForecast";
// import TodaysForecast from "./components/TodaysForecast";
import { useWeather } from "./contexts/useWeather";

function App() {
  const { weather, forecast } = useWeather();

  return (
    <main className="main">
      <SearchInput />
      <div className="app">
        {weather && <MainWeather />}
        {weather && <AirConditions />}
        {forecast && <SevenDayForecast />}
      </div>
    </main>
  );
}

export default App;
