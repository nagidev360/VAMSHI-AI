'use client';
const colors=['Original Colors','Pastel','Bright','Dark','Luxury','Monochrome','Random','Auto Color'];
export default function ColorSelector({value,onChange}:{value:string;onChange:(v:string)=>void}){return <div className="option-group"><h3>Color direction</h3><div className="chips">{colors.map(c=><button key={c} className={`chip ${value===c?'active':''}`} onClick={()=>onChange(c)}>{c}</button>)}</div></div>}
