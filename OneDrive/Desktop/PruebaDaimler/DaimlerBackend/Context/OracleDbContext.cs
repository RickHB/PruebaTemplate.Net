using Microsoft.EntityFrameworkCore;
using DaimlerBackend.Models;

namespace DaimlerBackend.Context
{
    public class OracleDbContext : DbContext
    {
        public OracleDbContext(DbContextOptions<OracleDbContext> options)
            : base(options)
        {
        }

        public DbSet<VehicleOracle> Vehicle { get; set; }
        public DbSet<OwnerOracle> Owner { get; set; }
        public DbSet<MaintenanceOracle> Maintenance { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VehicleOracle>(entity =>
            {
                entity.ToTable("VEHICLE", "SYSTEM");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasColumnName("ID");
                entity.Property(e => e.Serial).HasColumnName("SERIAL");
                entity.Property(e => e.Price).HasColumnName("PRICE");
                entity.Property(e => e.Model).HasColumnName("MODEL");
                entity.Property(e => e.ChasisDate).HasColumnName("CHASISDATE");
            });

            modelBuilder.Entity<OwnerOracle>(entity =>
            {
                entity.ToTable("OWNER", "SYSTEM");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasColumnName("ID");
                entity.Property(e => e.Name).HasColumnName("NAME");
                entity.Property(e => e.VehicleId).HasColumnName("VEHICLEID");
            });

            modelBuilder.Entity<MaintenanceOracle>(entity =>
            {
                entity.ToTable("MAINTENANCE", "SYSTEM");
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasColumnName("ID");
                entity.Property(e => e.Description).HasColumnName("DESCRIPTION");
                entity.Property(e => e.Cost).HasColumnName("COST");
                entity.Property(e => e.VehicleId).HasColumnName("VEHICLEID");           
             });

        }
    }
}
