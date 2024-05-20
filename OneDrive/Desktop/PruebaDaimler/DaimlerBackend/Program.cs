using DaimlerBackend.Context;
using DaimlerBackend.IRepository;
using DaimlerBackend.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IVehicleSql, VehicleRepositorySql>();
builder.Services.AddScoped<IVehicleOracle, VehicleRepositoryOracle>();
builder.Services.AddScoped<IVehicles, VehicleRepository>();

var connectionString = Environment.GetEnvironmentVariable("ConexionSQL");
builder.Services.AddDbContext<SqlDbContext>(options =>
    options.UseSqlServer(connectionString));

var connectionOracle = Environment.GetEnvironmentVariable("ConexionOracle");
builder.Services.AddDbContext<OracleDbContext>(options =>
    options.UseOracle(connectionOracle));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(); // Aplica la configuración CORS

app.UseAuthorization();
app.MapControllers();

app.Run();