let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name) {
  this.id = ++driverId;
  this.name = name; 
  if (passenger) {
    this.passengerId = passenger.id;
  }
  store.drivers.push(this);
}
setDriver(driver) {
  this.driverId = driver.id;
}
driver() {
  return store.drivers.find(
    function(driver) {
      return driver.id  === this.driverId;
    }.bind(this)
    );
  } 
}