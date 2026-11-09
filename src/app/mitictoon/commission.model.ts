import { SERVICES } from './catalog.data';
export interface CommissionType {id:string; label:string; description:string; icon:string; basePrice:number|null;}
// Publish verified rates here. null deliberately means a personalized quotation.
export const COMMISSION_TYPES:CommissionType[]=SERVICES.map(s=>({id:s.id,label:s.title,description:s.description,icon:'✦',basePrice:null}));
export function localDate(date:Date):string {return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function dateFromKey(key:string):Date {const [y,m,d]=key.split('-').map(Number);return new Date(y,m-1,d);}
export function dateAllowed(key:string,today=new Date()):boolean {
 if(!/^\d{4}-\d{2}-\d{2}$/.test(key))return false;
 const date=dateFromKey(key); if(localDate(date)!==key)return false;
 const last=new Date(today.getFullYear(),today.getMonth()+6,0);
 return key>=localDate(today)&&key<=localDate(last);
}
export function calendarDays(year:number,month:number):(number|null)[]{
 const offset=(new Date(year,month,1).getDay()+6)%7;
 return [...Array<null>(offset).fill(null),...Array.from({length:new Date(year,month+1,0).getDate()},(_,i)=>i+1)];
}
export function estimate(base:number|null,characters:number):number|null {
 if(base===null)return null;
 if(!Number.isFinite(base)||base<0||!Number.isInteger(characters)||characters<1||characters>5)throw new Error('Invalid quote inputs');
 return base*characters;
}
