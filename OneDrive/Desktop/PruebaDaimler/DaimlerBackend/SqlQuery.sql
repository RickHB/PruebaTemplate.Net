CREATE TABLE Vehicles(
Id INT Identity(1,1) PRIMARY KEY,
Serial varchar(10) NOT NULL, 
Customer varchar(100) NOT NULL,
Model varchar(20) NOT NULL, 
Line varchar (10) NOT NULL,
Active bit NOT NULL
)
INSERT INTO Vehicles (Serial, Customer, Model, Line, Active) VALUES
('ABC123', 'John Doe', 'Toyota', 'Corolla', 1),
('DEF456', 'Jane Smith', 'Honda', 'Civic', 1),
('GHI789', 'Alice Johnson', 'Ford', 'Fiesta', 1),
('JKL012', 'Bob Brown', 'Chevrolet', 'Spark', 1),
('MNO345', 'Emily Davis', 'Hyundai', 'Accent', 1);

select * from Vehicles



CREATE TABLE  Specifications(
Id INT Identity(1,1) PRIMARY KEY,
Color varchar(20),
Rines varchar(30),
Ventanas varchar(30),
Version int,
VehicleId INT,
)

select v.Serial,v.Customer, v.Model,
		v.Line, sp.Rines, sp.Color,
		sp.Ventanas, sp.Version, v.Active  
from Vehicles v  
INNER JOIN Specifications sp ON sp.vehicleId = v.id