import { apiSlice } from "../apiSlice"

export const taskApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getDashboardStats: builder.query({
            query:()=>({
                url:`task/dashboard`,
                method:"GET",
                credentials:"include",
            }),
        }),

        getAlltask:builder.query({
            query:({strQuery,isTrashed,search})=>({
                url:`/task?stage=${strQuery}&isTrashed=${isTrashed}&serarch=${search}`,
                method:"GET",
                credentials:"include",
            })
        }),

        createTask: builder.mutation({
            query:(data)=>({
                url:"/task/create",
                method:"POST",
                body:JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                credentials:"include",
            }),
        }),

        updateTask: builder.mutation({
            query:(data)=>({
                url:`/task/update/${data._id}`,
                method:"PUT",
                body:JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                credentials:"include",
            }),
        }),

        duplicateTask: builder.mutation({
            query:(id)=>({
                url:`/task/duplicate/${id}`,
                method:"POST",
                body:{},
                headers: { "Content-Type": "application/json" },
                credentials:"include",
            }),
        }),

        trashTask: builder.mutation({
            query:({id})=>({
                url:`/task/${id}`,
                method:"PUT",
                credentials:"include",
            }),
            
        }),

        createSubTask: builder.mutation({
        query:({data,id})=>({
                url:`/task/create-subtask/${id}`,
                method:"PUT",
                body:JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                credentials:"include",
            }),
        }),

        getSingleTask: builder.query({
            query:({id})=>({
                url:`/task/${id}`,
                method:"GET",
                credentials:"include",
            }),
        }),

        postTaskActivity: builder.mutation({
            query:({data,id})=>({
                url:`/task/activity/${id}`,
                method:"POST",
                body:JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                credentials:"include",
            }),
        }),

        deleteRestoreTask: builder.mutation({
            query:({id,actionType})=>({
                    url:`/task/delete-restore/${id}?actionType=${actionType}`,
                    method:"DELETE",
                    credentials:"include",
                }),
            }),
    }),
});

export const{useGetDashboardStatsQuery,
    useGetAlltaskQuery,
    useCreateTaskMutation,
    useDuplicateTaskMutation,
    useUpdateTaskMutation,
    useTrashTaskMutation,
    useCreateSubTaskMutation,
    useGetSingleTaskQuery,
    usePostTaskActivityMutation,
    useDeleteRestoreTaskMutation
}=taskApiSlice