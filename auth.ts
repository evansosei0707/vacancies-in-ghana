import NextAuth from "next-auth"
import authConfig from "./auth.config"

export const {
     handlers: { POST, GET}, 
     auth 
    } = NextAuth({
        ...authConfig
    })