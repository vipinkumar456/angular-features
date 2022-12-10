import { NullTemplateVisitor } from "@angular/compiler";
import { AbstractControl,ValidationErrors } from "@angular/forms";

export class UsernameValidators
{
    static    cannotContainSpace(control:AbstractControl) : ValidationErrors | null
    {
   
        if((control.value as string).indexOf(' ')>=0)
        
            return {cannotContainSpace:true};
            return null;
    }
    static    ShouldBeUnique(control:AbstractControl) : ValidationErrors | null
    {
   
        if(control.value==="vipin")
        
            return {ShouldBeUnique:true};
            return null;
    }
    // static    ShouldBeUnique(control:AbstractControl) : Promise<ValidationErrors | null> 
    // {
    //     return new Promise((resolve,reject)=>
    //     { 
    //          setTimeout(()=>{                           // <<<---using ()=> syntax
    //         if(control.value === 'vipin')
    //     resolve({ShouldBeUnique:true});
            
    //        else  resolve(null);
    //     }, 2000);

    //     });
   
      
     
    // }
}