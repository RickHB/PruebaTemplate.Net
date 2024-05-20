using System.ComponentModel.DataAnnotations;

namespace DaimlerBackend.Dto
{
    public class VehicleDtoSql
    {
        [Key]
        public int Id { get; set; }
        public  string Serial { get; set; }
        public  string Customer { get; set; }
        public  string Model { get; set; }
        public  string Line { get; set; }
        public bool Active { get; set; }
        public string Color { get; set; }
        public string Rines { get; set; }
        public string Ventanas { get; set; }
        public int Version { get; set; }
        public int VehicleID { get; set; }
    }
}
