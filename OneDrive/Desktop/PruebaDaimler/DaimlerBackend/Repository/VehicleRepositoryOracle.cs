using System;
using System.Collections.Generic;
using System.Linq;
using DaimlerBackend.Context;
using DaimlerBackend.Dto;
using DaimlerBackend.IRepository;
using DaimlerBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DaimlerBackend.Repository
{
    public class VehicleRepositoryOracle : IVehicleOracle
    {
        private readonly OracleDbContext _context;

        public VehicleRepositoryOracle(OracleDbContext context)
        {
            _context = context;
        }

        public ICollection<VehicleDtoOracle> GetVehiclesOracle()
        {
            try
            {
                var vehicles = _context.Vehicle
                    .Join(
                        _context.Owner,
                        vehicle => vehicle.Id,
                        owner => owner.VehicleId,
                        (vehicle, owner) => new { Vehicle = vehicle, Owner = owner }
                    )
                    .Join(
                        _context.Maintenance,
                        vehicle => vehicle.Vehicle.Id,
                        maintenance => maintenance.VehicleId,
                        (result, Maintenance) => new { result.Vehicle, result.Owner, maintenance = Maintenance }
                    )
                    .Select(result => new VehicleDtoOracle
                    {
                        Id = result.Vehicle.Id,
                        IdVehicle = result.Vehicle.Id,
                        Serial = result.Vehicle.Serial,
                        Price = result.Vehicle.Price,
                        Model = result.Vehicle.Model,
                        ChasisDate = result.Vehicle.ChasisDate,
                        NameOwner = result.Owner.Name,
                        Description = result.maintenance.Description,
                        Cost = result.maintenance.Cost
                    })
                    .ToList();

                return vehicles;
            }
            catch (Exception ex)
            {
                throw new Exception("Error fetching vehicles from Oracle database", ex);
            }
        }
    }
}
