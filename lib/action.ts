"use server"

import { revalidatePath } from "next/cache"
import db from "./db"

export const addPost = async (formData : FormData) =>{
 
   
  // await new Promise((resolve)=>{
  //    return  setTimeout(resolve,2000)
  // })

   await  db.post.create({
    data:{
      title:formData.get("title") as string,
      content:formData.get("content") as string,
    }
   })
 revalidatePath('/posts')
}