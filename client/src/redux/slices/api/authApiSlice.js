import { apiSlice } from "../apiSlice";

export const authApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login: builder.mutation({
            query:(data)=>({
                url:"/user/login",
                method:"POST",
                body:JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                credentials:"include",
            }),
        }),

        register: builder.mutation({
            query:(data)=>({
                url:"/user/register",
                method:"POST",
                body:JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            }),
        }),

        logout: builder.mutation({
            query:(data)=>({
                url:"/user/logout",
                method:"POST",
                headers: { "Content-Type": "application/json" },
                credentials:"include",
            }),
        }),
    }),
});

export const{useLoginMutation,useRegisterMutation,useLogoutMutation}=authApiSlice