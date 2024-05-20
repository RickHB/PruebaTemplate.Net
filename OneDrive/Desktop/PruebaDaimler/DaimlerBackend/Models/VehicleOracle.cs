using System;
using System.ComponentModel.DataAnnotations;

namespace DaimlerBackend.Models
{
    public class VehicleOracle
    {
        public int Id { get; set; }
        public string Serial { get; set; }
        public int Price { get; set; }
        public string Model { get; set; }
        public DateTime ChasisDate { get; set; }
    }
}