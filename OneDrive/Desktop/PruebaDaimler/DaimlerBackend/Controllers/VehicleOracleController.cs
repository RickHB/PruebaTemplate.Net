using DaimlerBackend.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace DaimlerBackend.Controllers
{
    [ApiController]
    public class VehicleOracleController : ControllerBase

    {
        private readonly IVehicleOracle Oracle;

        public VehicleOracleController(IVehicleOracle context)
        {
            Oracle = context;
        }
        [HttpGet("VehicleOracle")]
        public IActionResult Index()
        {
            try
            {
               var collection =  Oracle.GetVehiclesOracle();
               return Ok(collection);

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
