import axios from "axios";

export async function fetchFlights({departureAirportCode, arrivalAirportCode, departureDateTime}) {
    const response = await axios.get(`https://65aabe87081bd82e1d97b179.mockapi.io/api/v1/flights?departureAirportCode=${departureAirportCode}&arrivalAirportCode=${arrivalAirportCode}&departureDateTime=${departureDateTime}`);
    return response.data;
}