import {useState} from "react"
import axios from "axios"
import { createClient } from "@supabase/supabase-js"
import supabase from "../config/supabaseClient";
import * from "@supabase/supabase-js";

export default function useAvailabilities()  {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState<{time: string; available: boolean}[] | null>(null)


    const fetchAvailabilities = async ({slug, partySize, day, time}: {slug: string; partySize: string; day: string; time: string}) => {
        setLoading(true)

        try {
            const {data} = await supabase 
            .from, {
                params: {
                    day,
                    time,
                    partySize
                }
            });
            console.log(error)
            setLoading(false)
            setData(response.data)
        } catch (error: any) {
            setLoading(false)
            setError(error.response.data.errorMessage)
        }

    }

    return {loading, data, error, fetchAvailabilities}

}