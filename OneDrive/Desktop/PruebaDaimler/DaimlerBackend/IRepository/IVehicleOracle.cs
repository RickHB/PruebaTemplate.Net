using DaimlerBackend.Dto;
using DaimlerBackend.Models;

namespace DaimlerBackend.IRepository
{
    public interface IVehicleOracle
    {
        ICollection<VehicleDtoOracle> GetVehiclesOracle();

    }
}
