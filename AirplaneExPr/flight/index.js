class Flight {
  constructor() {
    this._number = 0;
    this._origin = null;
    this._destination = null;
    this._update = "none";
    ++Flight.counter;
  }

  get number() {
    return this._number;
  }

  set number(newNumber) {
    this._number = newNumber;
  }

  get origin() {
    return this._origin;
  }

  set origin(newOrigin) {
    this._origin = newOrigin;
  }

  get destination() {
    return this._destination;
  }

  set destination(newDestination) {
    Flight.destinations.push(newDestination);
    this._destination = newDestination;
  }

  get flightInfo() {
    return {
      number: this.number,
      origin: this._origin,
      destination: this._destination,
      update: this._update
    };
  }

  get flightCount() {
    return Flight.counter;
  }

  get destinations() {
    return Flight.destinations;
  }

  update() {
    this._update = "done";
  }

  static create(newFlight) {
    const { number, destination, origin } = newFlight;
    const flightInstance = new Flight();
    flightInstance.number = number;
    flightInstance.destination = destination;
    flightInstance.origin = origin;
    return flightInstance;
  }
}

Flight.counter = 0;
Flight.destinations = [];

module.exports = Flight;
