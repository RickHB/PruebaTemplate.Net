using System.ComponentModel.DataAnnotations;

namespace DaimlerBackend.Dto
{
    public class VehiclesDto
    {
        [Key]
        public int Id { get; set; }
        public string Serial { get; set; }
        public string Customer { get; set; }
        public string Model { get; set; }
        public string Line { get; set; }
        public string Color { get; set; }
        public string Rines { get; set; }
        public string Ventanas { get; set; }
        public int Version { get; set; }
        public int VehicleID { get; set; }
        public int IdVehicle { get; set; }
        public int Price { get; set; }
        public DateTime ChasisDate { get; set; }
        public string NameOwner { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
    }
}
