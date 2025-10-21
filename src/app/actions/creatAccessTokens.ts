"use server";


// Create an access token for the Auth0 management API, this is used to fetch user roles
export async function createAccessToken(): Promise<string> {
  const tokenUrl = `https://${process.env.AUTH0_DOMAIN}/oauth/token`;
  const audience = `https://${process.env.AUTH0_DOMAIN}/api/v2/`;
  
  console.log("Requesting Auth0 Management Token from:", tokenUrl);
  console.log("Audience:", audience);
  console.log("Client ID:", process.env.AUTH0_CLIENT_ID);
  
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.AUTH0_CLIENT_ID!,
      client_secret: process.env.AUTH0_CLIENT_SECRET!,
      audience: audience,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to get Auth0 management token: " + await response.text());
  }

  return (await response.json())?.access_token;
}