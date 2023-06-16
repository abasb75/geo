import './App.css';
import { useState , useEffect } from 'react';

function App() {
  const [location,setLocation] = useState(null);

  useEffect(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(
              ({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation({ lat:latitude, long:longitude });
              },
              error=>{
                alert('please allow to use your Location');
              }
            );
          }
    }, []);

  return (<>
    {location ? <h1>{`lat:${location?.lat} lng:${location?.long}`}</h1> : <h1>pending ...</h1>}
    <div className='footer'>
      
    </div>
  </>);
}

export default App;
