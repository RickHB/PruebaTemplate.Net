using DaimlerBackend.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace DaimlerBackend.Controllers
{
    [ApiController]
    public class VehiclesSqlController : ControllerBase
    {
        private readonly IVehicleSql _vehicle;

        public VehiclesSqlController(IVehicleSql vehicle)
        {
            _vehicle = vehicle;   
        }

        [HttpGet("vehicleSql")]
        public IActionResult Vehicle()
        {
            try
            {
                var collection = _vehicle.GetVehicles();
                return Ok(collection);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
