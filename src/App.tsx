import MainWeather from "./components/MainWeather";

function App() {
  return (
    <main className="main">
      <input type="text" className="searchInput" />
      <div className="app">
        <MainWeather />
      </div>
    </main>
  );
}

export default App;
