import './App.css'
import RegisterVehicle from "./components/RegisterVehicle.jsx";
import CheckVehicle from "./components/CheckVehicle.jsx";

function App() {

    return (
        <>
            <h1 className="font-black text-xl">APP CIRCULA O NO CIRCULA</h1>
            <div className="grid grid-cols-2">
                <RegisterVehicle/>
                <CheckVehicle/>
            </div>
        </>
    )
}

export default App
