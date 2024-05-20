CREATE TABLE Vehicle (
    Id INT PRIMARY KEY,
    Serial VARCHAR(30),
    Price INT,
    Model VARCHAR(255),
    ChasisDate DATE
);


CREATE TABLE Owner (
    Id INT PRIMARY KEY,
    Name VARCHAR(255),
    VehicleId INT,
    FOREIGN KEY (VehicleId) REFERENCES Vehicle(Id)
);

CREATE TABLE Maintenance (
    Id INT PRIMARY KEY,
    Description VARCHAR(255),
    Cost INT,
    VehicleId INT,
    FOREIGN KEY (VehicleId) REFERENCES Vehicle(Id)
);

SELECT * FROM Owner;
-- Insertar datos en la tabla Vehicle con fechas imaginarias


-- Insertar datos en la tabla Owner
INSERT INTO Owner (Id, Name, VehicleId) VALUES (1, 'John Doe', 1);
INSERT INTO Owner (Id, Name, VehicleId) VALUES (2, 'Jane Smith', 2);
INSERT INTO Owner (Id, Name, VehicleId) VALUES (3, 'Alice Johnson', 3);
INSERT INTO Owner (Id, Name, VehicleId) VALUES (4, 'Bob Brown', 4);
INSERT INTO Owner (Id, Name, VehicleId) VALUES (5, 'Emily Davis', 5);


SELECT * FROM Maintenance;

INSERT INTO Maintenance (Id, Description, Cost, VehicleId) VALUES (1, 'Routine checkup', 200, 1);
INSERT INTO Maintenance (Id, Description, Cost, VehicleId) VALUES (2, 'Oil change', 150, 2);
INSERT INTO Maintenance (Id, Description, Cost, VehicleId) VALUES (3, 'Brake inspection', 100, 3);
INSERT INTO Maintenance (Id, Description, Cost, VehicleId) VALUES (4, 'Tire rotation', 120, 4);
INSERT INTO Maintenance (Id, Description, Cost, VehicleId) VALUES (5, 'Fluid top-up', 80, 5);


SELECT 
    v.Id AS VehicleId,
    v.Serial,
    v.Price,
    v.Model,
    v.ChasisDate,
    o.Name AS OwnerName,
    m.Description AS MaintenanceDescription,
    m.Cost AS MaintenanceCost
FROM 
    Vehicle v
    INNER JOIN Owner o ON v.Id = o.VehicleId
    INNER JOIN Maintenance m ON v.Id = m.VehicleId;
    
    
    SELECT sys_context('USERENV', 'DB_NAME') AS db_name,
       sys_context('USERENV', 'INSTANCE_NAME') AS instance_name,
       sys_context('USERENV', 'HOST') AS host,
       sys_context('USERENV', 'IP_ADDRESS') AS ip_address,
       sys_context('USERENV', 'SESSION_USER') AS session_user,
       sys_context('USERENV', 'CURRENT_USER') AS current_user
FROM dual;


