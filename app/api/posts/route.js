import { NextResponse } from 'next/server';
import db from '../../../lib/db'

export async function GET(request) {
    try {
       const posting = await db.post.findMany({
        orderBy: {
          title: "desc",
        },
      });
  
      return NextResponse.json(posting);
    } catch (error) {
    
      return NextResponse.json(
        {
          message: "post failed",
          error,
        },
        {
          status: 500,
        }
      );
    }
  }