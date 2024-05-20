import axios from 'axios';
import config from '../Api/config';

const ENV = {
  LocalHost: config.REACT_APP_LOCAL_HOST,
  Vehicles: config.REACT_APP_VEHICLES,
  VehiclesOracle: config.REACT_APP_VEHICLESORACLE,
};

export class VehiclesApi {
  async getVehicles() {
    try {
      const url = `${ENV.LocalHost}/${ENV.Vehicles}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export class VehiclesOracle {
  async getVehiclesOracle() {
    try {
      const url = `${ENV.LocalHost}/${ENV.VehiclesOracle}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

