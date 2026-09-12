import './globals.css';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export const metadata = { title: 'TEXTILE DESIGN AI', description: 'Generate six professional textile design variations from one reference image.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><header className="site-header"><Link href="/" className="brand"><span className="brand-mark"><Sparkles size={16}/></span><span>TEXTILE DESIGN <i>AI</i></span></Link><nav><Link href="/">Home</Link><Link href="/create">Create Design</Link><Link href="/gallery">Gallery</Link><Link href="/#about">About</Link></nav><Link href="/create" className="header-cta">Upload Design</Link></header>{children}<footer><div><div className="brand footer-brand"><span className="brand-mark"><Sparkles size={16}/></span>TEXTILE DESIGN <i>AI</i></div><p>Professional textile exploration powered by image understanding and generative AI.</p></div><span>© 2026 Textile Design AI</span></footer></body></html>;
}
