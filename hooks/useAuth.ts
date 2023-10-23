import axios from "axios";
import { getCookie, removeCookies } from "cookies-next";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";
import { createClient} from "@supabase/supabase-js";
import { error } from "console";
import supabase from "./../config/supabaseClient";


const useAuth = () => {
    const { setAuthState } = useContext(AuthenticationContext);

    const signin = async (
        {
            email,
            password,
        }: {
            email: string;
            password: string;
        },
        handleClose: () => void
    ) => {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        try {
            const response = await supabase
            .from('Users')
            .insert(
                {
                    email,
                    password,
                }
            );
            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
            handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            });
        }
    };
    const signup = async (
        {
            email,
            password,
            firstName,
            lastName,
            city,
            phone,
        }: {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            city: string;
            phone: string;
        },
        handleClose: () => void
    ) => {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        try {
            const res = await supabase
            .from('Users')
            .insert(
                {
                    email : email,
                    password : password,
                    firstName : firstName,
                    lastName :lastName,
                    city :city,
                    phone,
                },
                )
            setAuthState({
                data: res.data,
                error: null,
                loading: false,
            });
            handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            });
        }
    };

    const signout = () => {
        removeCookies("jwt");

        setAuthState({
            data: null,
            error: null,
            loading: false,
        });
    };

    return {
        signin,
        signup,
        signout,
    };
};

export default useAuth;
