import { Flight } from './Flight.class';
import { Hotel } from './Hotel.class';
import { Insurance } from './Insurance.class';
import { TravelFacade } from './TravalFacade.class';

export default function() {
  const flight = new Flight();
  const hotel = new Hotel();
  const insurance = new Insurance();
  const travelFacade = new TravelFacade(flight, hotel, insurance);

  travelFacade.bookTrip('ASA123', 'DUBAI-212', 'TRAVEL/I55');
}
