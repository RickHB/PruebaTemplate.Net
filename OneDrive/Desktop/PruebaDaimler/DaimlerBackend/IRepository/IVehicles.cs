using DaimlerBackend.Dto;

namespace DaimlerBackend.IRepository
{
    public interface IVehicles
    {
        ICollection<VehiclesDto> GetVehicles();

    }
}
