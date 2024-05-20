using DaimlerBackend.Context;
using DaimlerBackend.Dto;
using DaimlerBackend.IRepository;
using DaimlerBackend.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace DaimlerBackend.Repository
{
    public class VehicleRepositorySql : IVehicleSql
    {
        private readonly SqlDbContext Sql;

        public VehicleRepositorySql(SqlDbContext dbContext)
        {
            Sql = dbContext;
        }

        public ICollection<VehicleDtoSql> GetVehicles()
       {
        try
        {
                var vehicles = Sql.vehicles
                    .Join(
                       Sql.Specifications,
                       vehiclesSql => vehiclesSql.Id,
                       specification => specification.VehicleID,
                       (result, specifications) => new { Vehicle = result, Specification = specifications }
               )
                    .Select(Resultado => new VehicleDtoSql
                    {
                       Id = Resultado.Vehicle.Id,
                       Serial = Resultado.Vehicle.Serial,
                       Customer = Resultado.Vehicle.Customer,
                       Model = Resultado.Vehicle.Model,
                       Line = Resultado.Vehicle.Line,
                       Active = Resultado.Vehicle.Active,
                       Color = Resultado.Specification.Color,
                       Rines = Resultado.Specification.Rines,
                       Ventanas = Resultado.Specification.Ventanas,
                       Version = Resultado.Specification.Version,
                       VehicleID = Resultado.Specification.VehicleID

                    })
                    .ToList();

                return (vehicles);
        }
        catch(Exception ex)
        {
            throw new Exception(ex.Message);
        }

           
            
        }
    }
}
