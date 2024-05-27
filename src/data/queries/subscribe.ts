const { EMAIL_OCTOPUS_API_KEY, EMAIL_LIST_ID } = process.env;
const subscribe = (email: string) => {
  return fetch(
    `https://emailoctopus.com/api/1.6/lists/${EMAIL_LIST_ID}/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        api_key: EMAIL_OCTOPUS_API_KEY,
      }),
    }
  );
};
