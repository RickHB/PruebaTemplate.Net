using DaimlerBackend.Dto;
using DaimlerBackend.Models;

namespace DaimlerBackend.IRepository
{
    public interface IVehicleSql
    {
        ICollection<VehicleDtoSql> GetVehicles();
    }
}
