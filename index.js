class Driver{
  constructor(name, trip, passenger) {
  this.id = ++driverID;
  this.name = name; 
  this.trip = trip;
  if (passenger) {
    this.passengerId = passenger.id;
  }
  store.drivers.push(this);
}
setDriver(driver) {
  this.driverID = driver.id;
}
driver() {
  return store.drivers.find(
    function(driver) {
      return driver.id  === this.driverID
    })
}