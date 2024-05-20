namespace DaimlerBackend.Models
{
    public class MaintenanceOracle
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
        public int VehicleId { get; set; }
    }
}
