import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean;
  submitted = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.loading = false;
  }
  get form() { return this.loginForm.controls }

  ngOnInit(): void { }

  login() {
    this.loading = true
    this.submitted = true;
    if (!this.loginForm.touched) {
      this.toastr.warning("No se llenaron los datos", 'Por favor llene los datos para el inicio de sesion', { timeOut: 2000 });
      this.loginForm.markAllAsTouched();
      this.loading = false;
    } else if (this.form.email.errors || this.form.password.errors) {
      if (this.form.password.errors) {
        this.toastr.warning("Campo de correo incorrecto", 'El campo de correo es invalido', { timeOut: 2000 });
      } else if (this.form.email.errors.email) {
        this.toastr.warning("Campo de correo incorrecto", 'El campo de correo es invalido', { timeOut: 2000 });
      } else {
        this.toastr.warning("No se llenaron todos los datos", 'Por favor llene los datos para el inicio de sesion', { timeOut: 2000 });
      }
    } else {
      return this.log();
    }
    this.loading = false;
  }

  log() {
    let value = this.loginForm.value;
    value.displayName = '';
    this.auth.login(value).subscribe((value: any) => {
      this.return();
    }, (error: any) => {
      if (error.error.error.message === "EMAIL_NOT_FOUND") {
        this.toastr.error("Correo desconocido", 'El correo ingresado no es parte de una cuenta', { timeOut: 2000 });
        this.form.email.setErrors({incorrect: true});
      } else {
        this.toastr.error("Contraseña incorrecta", 'La contraseña ingresada es incorrecta', { timeOut: 2000 });
        this.form.password.setErrors({incorrect: true});
      }
      this.loading = false;
    })

  }

  return() {
    this.router.navigate(['/dashboard'])
  }

}
