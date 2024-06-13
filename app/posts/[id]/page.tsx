import React from 'react'
import Back from '../_components/Back/Back';
import db from '@/lib/db';



export type PostPageProps = {
  params: {
    id: String;
  }
}

const PostPage = async({params}:PostPageProps) => {
  const posts = await db.post.findUnique({
    where:{
      id:params.id
    }
  });
  
  return (
    <div className='flex flex-col gap-3 px-7 pt-24 text-center'>
      <Back/>
    <div className='py-9'>
    <h1 className=' md:text-5xl text-3xl lg: font-semibold mb-7'>{posts?.title}</h1>
    <p className='max-w-[700px] mx-auto'>{posts?.content}</p>
    </div>
  </div>
  )
}

export default PostPage
