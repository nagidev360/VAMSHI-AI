import { NextResponse } from 'next/server';
import { getImageProvider } from '@/lib/image-generation';
export const runtime='nodejs';
export async function POST(req:Request){try{const body=await req.json();const provider=getImageProvider();const instruction=body.instruction||`Create a fresh professional textile variation inspired by the reference. Change motif arrangement and composition while preserving the overall design language. Variation seed ${Date.now()}.`;const image=await provider.generate(instruction,body.reference,Boolean(body.highResolution));return NextResponse.json({image});}catch(e){console.error(e);return NextResponse.json({error:e instanceof Error?e.message:'Could not regenerate this design.'},{status:500});}}
