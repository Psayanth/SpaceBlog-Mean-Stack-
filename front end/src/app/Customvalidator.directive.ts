import {Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import{Directive, Input} from '@angular/core'



@Directive({
   selector: '[CustomPassword]',
   providers:[{
     provide:NG_VALIDATORS,
     useExisting:CustomValidatorDirective,
     multi:true
   }]
})

export class CustomValidatorDirective implements Validator{

@Input() CustomPassword:string;
validate(control:AbstractControl) :{[key:string]:any}|null{
   const controlToCompare = control.parent.get(this.CustomPassword);
   if(controlToCompare && controlToCompare.value !== control.value){
       return{'notEqual' : true};
   }
   return null;
}


}