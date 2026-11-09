import {Component, input, output} from '@angular/core';
import{calendarDays,dateAllowed,localDate}from '../commission.model';
@Component({selector:'app-calendar',templateUrl:'./calendar.component.html',styleUrl:'./calendar.component.scss'})
export class CalendarComponent {value=input('');dateChange=output<string>();today=new Date();todayKey=localDate(this.today);offset=0;
 get month(){return new Date(this.today.getFullYear(),this.today.getMonth()+this.offset,1);}
 get label(){return this.month.toLocaleDateString('es-MX',{month:'long',year:'numeric'});}
 get days(){return calendarDays(this.month.getFullYear(),this.month.getMonth());}
 key(day:number){return localDate(new Date(this.month.getFullYear(),this.month.getMonth(),day));}
 allowed(day:number){return dateAllowed(this.key(day),new Date());}
 navigate(delta:number){this.offset=Math.min(5,Math.max(0,this.offset+delta));}
}
