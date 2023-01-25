import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {
  
  

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if(this.validacion()){
    //   return true;
    // }else{

    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Something went wrong!',
    //     footer: '<a href="">Why do I have this issue?</a>'
    //   })

    //   return false;
    // }
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');

    if(email=="AD" && password=="123456"){
      return true;
    } else{
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Debes iniciar sesión',
         footer: '<a href="">Why do I have this issue?</a>'
       })
    
       return false;
      
    }

  }
  
  

  // validacion():boolean{
    
  //   return false;

  // }

}
