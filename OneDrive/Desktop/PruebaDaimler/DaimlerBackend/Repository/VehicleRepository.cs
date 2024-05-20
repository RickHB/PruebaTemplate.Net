using DaimlerBackend.Dto;
using DaimlerBackend.IRepository;
using System.Linq;

namespace DaimlerBackend.Repository
{
    public class VehicleRepository : IVehicles
    {
        private readonly IVehicleOracle vehicleOracle;
        private readonly IVehicleSql vehicleSql;

        public VehicleRepository( IVehicleOracle _vehicleOracle, IVehicleSql _vehicleSql)
        {
            vehicleOracle = _vehicleOracle;
            vehicleSql = _vehicleSql;
        }
        public ICollection<VehiclesDto> GetVehicles()
        {
            var collectionOracle = vehicleOracle.GetVehiclesOracle();
            var collectionSql = vehicleSql.GetVehicles();

            var vehicles = collectionOracle
                .Join(
                    collectionSql,
                    oracle => oracle.Serial,
                    sql => sql.Serial,
                    (oracle, sql) => new VehiclesDto
                    {
                        Id = sql.Id,
                        Serial = sql.Serial,
                        Customer = sql.Customer,
                        Model = sql.Model,
                        Line = sql.Line,
                        Color = sql.Color,
                        Rines = sql.Rines,
                        Ventanas = sql.Ventanas,
                        Version = sql.Version,
                        VehicleID = sql.VehicleID,
                        IdVehicle = oracle.IdVehicle,
                        Price = oracle.Price,
                        ChasisDate = oracle.ChasisDate,
                        NameOwner = oracle.NameOwner,
                        Description = oracle.Description,
                        Cost = oracle.Cost
                    })
                .ToList();

            return vehicles;
        }
    }
}
