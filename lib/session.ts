import { getServerSession } from "next-auth";
import { NextAuthOptions, User } from "next-auth";
import { Adapter, AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { log } from "console";
import { SessionInterface } from "@/common.type";

export const authOptions : NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    // jwt: {
    //     endcode:(secret, token) => {

    //     },
    //     decode: async (secret, token) => {

    //     }
    // },
    theme: {
        colorScheme: "light",
        logo: "/logo.png",
    },
    callbacks: {
        async session({session}){
            return session;
        },
        async signIn({user}: {user: AdapterUser | User}){
            try {
                //get the user if exists 
                
                //if not create a new user

                //return the user
                return true;
            } catch (error: any) {
                console.log(error.message);
                return false;
                
            }
        }
    }
};

export async function getCurrentUser(){
    const session = await getServerSession(authOptions) as SessionInterface;
    return session;
}