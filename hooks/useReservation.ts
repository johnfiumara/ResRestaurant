import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import {createClient} from "@supabase/supabase-js"

const supabaseUrl = 'https://prnyckkpngvdhmvrsacd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBybnlja2twbmd2ZGhtdnJzYWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNTUyMTksImV4cCI6MjAwNjgzMTIxOX0.VK7btRaCoK8e2joB4XuhbkxgiL5isZuinK3ZzcLxqG4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function useReservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    bookerFirstName,
    bookerLastName,
    bookerPhone,
    bookerEmail,
    bookerOccasion,
    bookerRequest,
    setDidBook,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
    bookerFirstName: string;
    bookerLastName: string;
    bookerPhone: string;
    bookerEmail: string;
    bookerOccasion: string;
    bookerRequest: string;
    setDidBook: Dispatch<SetStateAction<boolean>>;
  }) => {
    setLoading(true);

    try {
     
const { data, error } = await supabase
.from('Booking')
.insert([
    {
          bookers_first_name:bookerFirstName,
          bookiers_last_name:bookerLastName,
          booker_phone:bookerPhone,
          booker_email:bookerEmail,
          booker_occasion:bookerOccasion,
          booker_request:bookerRequest,
          number_of_people:partySize,
        }],)

.select(); 
      
        
      

      setLoading(false);
      setDidBook(true);
      return data;
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, createReservation };
}
