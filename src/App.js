import './App.css'
import {useState} from "react";
import tourData from "./tourData";

const Tour = () => {
    const [travelData, setTravelData] = useState(tourData);
    const handleEvent = ( id) => {
        setTravelData(
            travelData.filter(
                (item) => id != item.id
            )
        )
    }

    return(
        <div className="container">
            {travelData.map(({ id, tourDestination, description, imageUrl }) => (
                <div key={id} className="card m-4" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt={tourDestination} />
                    <div className="card-body">
                        <h5 className="card-title">{tourDestination}</h5>
                        <p className="card-text">{description}</p>
                        <button className="btn btn-primary" onClick={() => handleEvent(id)}>Not Interested</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const App = () => {
  return (
    <div className='App mt-5'>
      <Tour />
    </div>
  )
}

export default App;