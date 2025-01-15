const fetchToken = async () => {
  const tokenUrl = import.meta.env.VITE_TOKEN_URL;
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  // Vérification des variables d'environnement
  const requiredEnvVars = { tokenUrl, clientId, clientSecret };
  const missingVars = Object.entries(requiredEnvVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(
      `Variables d'environnement manquantes : ${missingVars.join(", ")}`
    );
  }

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }).toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Échec de la requête (${response.status}): ${errorText}`);
    }

    const { access_token, expires_in } = await response.json();

    // Sauvegarde du token et de sa date d'expiration
    const expirationTime = Date.now() + expires_in * 1000;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("token_expiration", expirationTime.toString());

    return access_token;
  } catch (error) {
    console.error("Erreur lors de la récupération du token :", error);
    throw new Error(`Échec de l'authentification : ${error.message}`);
  }
};

export const getValidToken = async () => {
  const token = localStorage.getItem("access_token");
  const expiration = localStorage.getItem("token_expiration");

  // Si pas de token ou expiration, on en génère un nouveau
  if (!token || !expiration) {
    return await fetchToken();
  }

  // Si le token expire dans moins de 30 secondes, on en génère un nouveau
  if (Date.now() + 30000 > parseInt(expiration)) {
    return await fetchToken();
  }

  return token;
};

export { fetchToken };
