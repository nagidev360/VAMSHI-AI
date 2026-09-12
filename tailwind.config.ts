import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#211d1a', cream:'#f8f3eb', clay:'#9b735d', rose:'#c69b8a', line:'#e6ddd2' }, boxShadow: { soft:'0 18px 50px rgba(58,42,32,.08)' } } }, plugins: [] };
export default config;
