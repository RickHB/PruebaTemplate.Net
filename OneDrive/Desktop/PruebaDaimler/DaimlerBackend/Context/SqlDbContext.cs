using DaimlerBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DaimlerBackend.Context
{
    public class SqlDbContext: DbContext
    {
        public SqlDbContext(DbContextOptions<SqlDbContext> options) : base(options) { }
        public DbSet<VehiclesSql> vehicles { get; set; }
        public DbSet<SpecificationsSql> Specifications { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }


    }
}
