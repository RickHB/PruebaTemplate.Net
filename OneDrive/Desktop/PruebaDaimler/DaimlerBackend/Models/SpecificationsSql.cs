using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DaimlerBackend.Models
{
    public class SpecificationsSql
    {
        public int Id { get; set; }
        public string Color { get; set; }
        public string Rines { get; set; }
        public string Ventanas { get; set; }
        public int Version { get; set; }
        public int VehicleID { get; set; }
    }
}
