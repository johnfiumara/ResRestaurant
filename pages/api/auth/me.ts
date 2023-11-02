import { NextApiRequest, NextApiResponse } from "next";
import {createClient } from '@supabase/supabase-js'
import jwt from "jsonwebtoken";

import supabase from "../../../utils/supabaseConfig";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const { data: { user } } = await supabase.auth.getUser("jwt");
const { data, error } = await supabase
  .from('User')
  .select('id, first_name, last_name, email, city, phone')
  .eq('id', user?.id);

if (error) {
  return res.status(401).json({
    errorMessage: "User not found",
  });
}

const userData = data[0];

return res.json({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  phone: userData.phone,
  city: userData.city,
});}