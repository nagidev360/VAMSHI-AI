'use client';
const repeats=['No Repeat','Half Drop','Full Drop','Mirror','Brick','Seamless Repeat'];
export default function RepeatSelector({value,onChange}:{value:string;onChange:(v:string)=>void}){return <div className="option-group"><h3>Repeat pattern</h3><div className="chips">{repeats.map(r=><button key={r} className={`chip ${value===r?'active':''}`} onClick={()=>onChange(r)}>{r}</button>)}</div></div>}
