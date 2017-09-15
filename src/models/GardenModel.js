import Moment from "moment";

class GardenModel {
  constructor(plantname, type, water, cost) {
    this.plantname = plantname;
    this.type = type;
    this.water = water;
    this.cost = cost;
    this.timeWatered = new Moment();
    this.timeSinceWatered = "a few seconds";
  }

  setTimeSinceWatered() {
    this.timeSinceWatered = this.timeWatered.fromNow(true);
  }
}

export default GardenModel
