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