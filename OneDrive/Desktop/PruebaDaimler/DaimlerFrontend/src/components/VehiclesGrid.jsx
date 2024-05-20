import { useEffect, useState } from "react";
import { VehiclesApi } from "../Api/Vehicles.js";
import DataGridComponent from "../utils/DataGridComponent.jsx";
import ErrorComponent from "../utils/ErrorComponent.jsx";
import Skeleton from "../utils/Skeleton.jsx";

export default function VehiclesGrid() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        setIsLoading(true);
        const vehiclesAPI = new VehiclesApi();
        const response = await vehiclesAPI.getVehicles();
        setVehicles(response);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchVehicles();
  }, []);

  const actions = [
    {label: "agregar"}
  ]
  return (
    <div>
      {error ? (
        <ErrorComponent />
      ) : isLoading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-800 text-center mt-6">
            VEHICLES
          </h1>
          <DataGridComponent
            data={vehicles}
            pageSize={5}
            rowsPerPageOptions={[5]}
            actions={actions}
          />
        </>
      )}
    </div>
  );
}
