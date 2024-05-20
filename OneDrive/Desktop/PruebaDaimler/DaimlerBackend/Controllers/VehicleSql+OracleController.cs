using DaimlerBackend.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace DaimlerBackend.Controllers
{
    [ApiController]
    public class VehicleSql_OracleController : ControllerBase
    {
        private readonly IVehicles vehicles;
        public VehicleSql_OracleController(IVehicles _vehicles)
        {
            vehicles = _vehicles; 
        }


        [HttpGet("VehicleSql+Oracle")]
        public IActionResult GetAllInformation()
        {
            try
            {
                var vehiclescollection = vehicles.GetVehicles();
                return Ok(vehiclescollection);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
           
        }
    }
}
