// Global Variables
const vehiclesList = document.getElementById("vehicle");
let vehicles; // will contain "fetched" data

vehiclesList.addEventListener("change", newVehicleSelection);

function newVehicleSelection(event) {
  displayVehiclesInfo(event.target.value);
}

fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
  .then((res) => res.json())
  .then((data) => Brazilian(data))
  .catch((err) => console.log("Error:", err));

function Brazilian(vehiclesData) {
  vehicles = vehiclesData;
  let options = "";
  vehicles.forEach(
    (car) => (options += `<option value="${car.nome}">${car.codigo}</option>`)
  );
  vehiclesList.innerHTML = options;
  displayVehiclesInfo(vehiclesList[vehiclesList.selectedIndex].value);
}

function displayVehiclesInfo(carCode) {
  const vehiclesData = vehicles.find((car) => car.nome === carCode);
  document.getElementById("nome").innerHTML = vehiclesData.nome;
}