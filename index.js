let store = {drivers: [], passengers: [], trips: []}

// can create a Driver with a name
// adds the driver to the store
// adds a numerical id to each driver
// adds a unique id to each driver
// can store drivers
let driverId = 0
class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name 
    // insert the driver to the store
    store.drivers.push(this)
  }
  // has trips
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  // has passengers
  passengers(){
    return store.passengers.filter(passenger => {
      return store.trips.filter(trip => {
        trip.driverId === this.id && trip.passengerId === passenger.id})
    })
  }
}
// can create a Passenger with a name
// adds the passenger to the store
// adds a numerical id to each passenger
// adds a unique id to each passenger
// can store passengers
let passengerId = 0
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    // insert the passenger to the store
    store.passengers.push(this)
  }
  // has trips
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  // has drivers
  drivers(){
    return store.drivers.filter(driver => {
      return store.trips.filter(trip => {
        trip.passengerId === this.id && trip.driverId === driver.id})
    })
  }
}
// adds the trip to the store
// adds a numerical id to each trip
// adds a unique id to each trip
// can store trips
let tripId = 0
class Trip {
  // has a driverId
  // has a passengerId
  constructor(driverId, passengerId){
    this.id = ++tripId
    this.driverId = driverId.id
    this.passengerId = passengerId.id
    // insert the trip to the store
    store.trips.push(this)
  }
  // has a driver
  driver(){
    return store.drivers.find(function(driver){
      return store.trips.filter(trip => {
        trip.driverId === driver.id})
    })
  }
  // has a passenger
  passenger(){
    return store.passengers.find(function(passenger){
      return store.trips.filter(trip => {
        trip.passengerId === passenger.id})
    })
  }
}
