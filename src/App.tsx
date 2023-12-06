import AirConditions from "./components/AirConditions";
import MainWeather from "./components/MainWeather";
import SearchInput from "./components/SearchInput";
import SevenDayForecast from "./components/SevenDayForecast";
import { useWeather } from "./contexts/useWeather";

function App() {
  const { weather, forecast } = useWeather();

  return (
    <main className="main">
      {/* input for changing city */}
      <SearchInput />
      <div className="app">
        {/* Check data and render components */}
        {weather && <MainWeather />}
        {weather && <AirConditions />}
        {forecast && <SevenDayForecast />}
      </div>
    </main>
  );
}

export default App;
