import axios from "axios";

export async function fetchAirports({query, page, limit}) {
    return await axios.get(`https://65aabe87081bd82e1d97b179.mockapi.io/api/v1/airports${query ? `?search=${query}&` : '?'}p=${page}&l=${limit}`)
}