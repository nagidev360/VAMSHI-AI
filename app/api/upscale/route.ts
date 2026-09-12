import { NextResponse } from 'next/server';
import { getImageProvider } from '@/lib/image-generation';
export const runtime='nodejs';
export async function POST(req:Request){try{const body=await req.json();if(!body.instruction&&!body.reference)return NextResponse.json({error:'An image is required.'},{status:400});const image=await getImageProvider().generate(body.instruction||'Upscale and refine this textile artwork while preserving the exact design language and composition.',body.reference,true);return NextResponse.json({image});}catch(e){console.error(e);return NextResponse.json({error:'High resolution processing failed. Please try again.'},{status:500});}}
