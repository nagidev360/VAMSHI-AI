import DesignCard from './DesignCard';
export default function DesignGrid({images,onRegenerate}:{images:string[];onRegenerate:(i:number)=>void}){return <div className="design-grid">{images.map((img,i)=><DesignCard key={`${img}-${i}`} image={img} index={i} onRegenerate={()=>onRegenerate(i)}/>)}</div>}
