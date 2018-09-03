import { Flight } from './Flight.class';
import { Hotel } from './Hotel.class';
import { Insurance } from './Insurance.class';

export class TravelFacade {
  private flight: Flight;
  private hotel: Hotel;
  private insurance: Insurance;

  constructor(flight: Flight, hotel: Hotel, insurance: Insurance) {
    this.flight = flight;
    this.hotel = hotel;
    this.insurance = insurance;
  }

  public bookTrip(flightId: string, hotelId: string, insuranceId: string): void {
    console.log('Booking a trip...');
    this.flight.book(flightId);
    this.hotel.book(hotelId);
    this.insurance.buy(insuranceId);
  }
}
