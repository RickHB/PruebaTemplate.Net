namespace DaimlerBackend.Dto
{
    public class VehicleDtoOracle
    {
        public int Id { get; set; }
        public int IdVehicle { get; set; }
        public string Serial { get; set; }
        public int Price { get; set; }
        public string Model { get; set; }
        public DateTime ChasisDate { get; set; }
        public string NameOwner { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
    }
}
