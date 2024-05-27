import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: req.body.email,
      api_key: process.env.EMAIL_OCTOPUS_API_KEY,
    }),
  };
  const response = await fetch(
    `https://emailoctopus.com/api/1.6/lists/${process.env.EMAIL_LIST_ID}/contacts`,
    options
  );

  const data = await response.json();
  res.status(response.status).json(data);
}
