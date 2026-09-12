import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({status:'ok',cerebras:process.env.CEREBRAS_API_KEY?'configured':'missing',scrapingbee:process.env.SCRAPINGBEE_API_KEY?'configured':'missing',image_generation:process.env.IMAGE_GENERATION_API_KEY?'configured':'missing'});}
