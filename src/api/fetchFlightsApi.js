// Configuration flexible pour l'API de vols
export const FLIGHTS_API_CONFIG = {
  baseUrl: "https://test.api.amadeus.com/v2/shopping/flight-offers",
  defaultParams: {
    adults: 1,
    max: 15,
  },
};

import { getValidToken } from "./fetchToken";

const fetchFlightsApi = async (
  origin,
  destination,
  departureDate,
  options = {}
) => {
  try {
    let token = await getValidToken();
    const params = new URLSearchParams({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: departureDate,
      ...FLIGHTS_API_CONFIG.defaultParams,
      ...options,
    });

    // Ajouter la classe de voyage si elle est fournie
    if (options.returnDate) {
      params.append("returnDate", options.returnDate);
    }

    const url = `${FLIGHTS_API_CONFIG.baseUrl}?${params}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des vols:", error);
    throw error;
  }
};

export default fetchFlightsApi;
