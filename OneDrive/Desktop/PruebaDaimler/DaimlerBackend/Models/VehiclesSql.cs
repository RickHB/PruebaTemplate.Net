using System.ComponentModel.DataAnnotations;

namespace DaimlerBackend.Models
{
    public class VehiclesSql
    {
        [Key]
        public int Id { get; set; }
        public required string Serial { get; set; }
        public required string Customer { get; set; }
        public required string Model { get; set; }
        public required string Line { get; set; }
        public bool Active { get; set; }
    }
}
