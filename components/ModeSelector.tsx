'use client';
const modes=['Floral','Traditional','Geometric','Ethnic','Luxury','Modern','Minimal','Paisley','Abstract','Kids','Saree Print','Dress Print','Dupatta Print','Home Textile'];
export default function ModeSelector({value,onChange}:{value:string;onChange:(v:string)=>void}){return <div className="option-group"><h3>Design mode</h3><div className="chips">{modes.map(m=><button key={m} className={`chip ${value===m?'active':''}`} onClick={()=>onChange(m)}>{m}</button>)}</div></div>}
