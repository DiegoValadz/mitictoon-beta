import { ActivatedRoute } from '@angular/router';
import {Component,ElementRef,ViewChild,inject,signal}from '@angular/core';
import {AbstractControl,FormBuilder,ReactiveFormsModule,Validators}from '@angular/forms';
import {CurrencyPipe}from '@angular/common';
import{CalendarComponent}from '../calendar/calendar.component';
import{COMMISSION_TYPES,dateAllowed,dateFromKey,estimate}from '../commission.model';
@Component({selector:'app-commission',imports:[ReactiveFormsModule,CalendarComponent,CurrencyPipe],templateUrl:'./commission.component.html',styleUrl:'./commission.component.scss'})
export class CommissionComponent {
 private fb=inject(FormBuilder);types=COMMISSION_TYPES;submitted=false;ready=false;copyStatus=signal('');summary='';
 @ViewChild('result') result?:ElementRef<HTMLElement>;
 form=this.fb.nonNullable.group({type:['iconos',Validators.required],characters:[1,[Validators.required,Validators.min(1),Validators.max(5)]],use:['Personal',Validators.required],background:['Sencillo',Validators.required],date:['',[Validators.required,(c:AbstractControl)=>dateAllowed(c.value)?null:{date:true}]],name:['',[Validators.required,Validators.pattern(/\S/),Validators.maxLength(80)]],email:['',[Validators.required,Validators.email,Validators.maxLength(254)]],idea:['',[Validators.required,Validators.minLength(20),Validators.maxLength(2000),Validators.pattern(/\S/)]],references:['',[Validators.maxLength(1000)]],acknowledge:[false,Validators.requiredTrue]});
 constructor(){const service=inject(ActivatedRoute).snapshot.queryParamMap.get('servicio');if(this.types.some(t=>t.id===service))this.form.controls.type.setValue(service!);}
 get selectedType(){return this.types.find(t=>t.id===this.form.controls.type.value)!;}
 get price(){return estimate(this.selectedType.basePrice,Number(this.form.controls.characters.value));}
 get dateLabel(){const value=this.form.controls.date.value;return value?dateFromKey(value).toLocaleDateString('es-MX',{day:'numeric',month:'long',year:'numeric'}):'Por elegir';}
 error(name:keyof typeof this.form.controls){const c=this.form.controls[name];return c.invalid&&(c.touched||this.submitted);}
 setDate(date:string){this.form.controls.date.setValue(date);this.form.controls.date.markAsTouched();}
 prepare(){this.submitted=true;this.form.markAllAsTouched();this.form.controls.date.updateValueAndValidity();if(this.form.invalid){setTimeout(()=>document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());return;}
 const v=this.form.getRawValue();this.summary=`SOLICITUD DE COMISIÓN · MITICTOON\n\nNombre: ${v.name.trim()}\nCorreo: ${v.email.trim()}\nTipo: ${this.selectedType.label}\nPersonajes: ${v.characters}\nUso: ${v.use}\nFondo: ${v.background}\nFecha preferida de inicio: ${this.dateLabel}\nPrecio: ${this.price===null?'Cotización personalizada pendiente':this.price+' MXN (estimación base)'}\n\nIdea:\n${v.idea.trim()}\n\nReferencias:\n${v.references.trim()||'Sin referencias'}\n\nSolicitud preparada, no enviada. Precio, alcance y fecha sujetos a confirmación de MiTictoon.`;
 this.ready=true;setTimeout(()=>{this.result?.nativeElement.focus();this.result?.nativeElement.scrollIntoView({behavior:'smooth',block:'center'});});}
 async copy(){try{await navigator.clipboard.writeText(this.summary);this.copyStatus.set('Resumen copiado. Ya puedes compartirlo con MiTictoon.');}catch{this.copyStatus.set('No se pudo copiar. Usa Descargar resumen.');}}
 download(){const url=URL.createObjectURL(new Blob([this.summary],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='solicitud-mitictoon.txt';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
}
