import { useState, useEffect } from 'react';

export function FetchData() {
  const [weatherData, setWeatherData] = useState([]);
  const [loding, setLoading] = useState(true);

  const getWeatherData = async () => {
    console.log('start fetching');

    const response = await fetch('weatherforecast');
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
    setLoading(false);
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  function renderForecastsTable(forecasts: any) {
    return (
      <table className='table table-striped' aria-labelledby='tabelLabel'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast: any) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (loding) {
    return (
      <p>
        <em>Loading...</em>
      </p>
    );
  } else {
    return (
      <div>
        <h1 id='tabelLabel'>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {renderForecastsTable(weatherData)}
      </div>
    );
  }
}
