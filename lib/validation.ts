import { z } from 'zod';
export const designOptions=z.object({mode:z.string().default('Modern'),color:z.string().default('Original Colors'),repeat:z.string().default('Seamless Repeat'),highResolution:z.boolean().default(false)});
export const MAX_IMAGE_BYTES=8*1024*1024;
export function validateImage(file:File){if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw new Error('Please upload a JPG, PNG or WEBP image.');if(file.size>MAX_IMAGE_BYTES)throw new Error('Image is too large. Maximum size is 8 MB.');}
