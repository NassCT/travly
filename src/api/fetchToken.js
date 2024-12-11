const fetchToken = async () => {
  const tokenKey = 'amadeus_token';
  const tokenExpiryKey = 'amadeus_token_expiry';

  const storedToken = localStorage.getItem(tokenKey);
  const tokenExpiry = localStorage.getItem(tokenExpiryKey);

  if (storedToken && tokenExpiry && new Date() < new Date(tokenExpiry)) {
    console.log('Utilisation du token existant depuis le localStorage');
    return storedToken;
  }

  const tokenUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';
  const body = new URLSearchParams();
  body.append('client_id', 'RjPiJGDXLDGyJqcfrc3OQiQll0R2Cm6a');
  body.append('client_secret', 'RVayYnjwKmyTeCTK');
  body.append('grant_type', 'client_credentials');

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    if (!response.ok) {
      throw new Error('Échec de la récupération du token');
    }

    const data = await response.json();
    const { access_token, expires_in } = data;

    const expiryDate = new Date(new Date().getTime() + expires_in * 1000); // Date d'expiration
    localStorage.setItem(tokenKey, access_token);
    localStorage.setItem(tokenExpiryKey, expiryDate);

    return access_token;
  } catch (err) {
    throw err;
  }
};

export default fetchToken;