package com.utn.sprint3.Auth;

import com.utn.sprint3.Enumeraciones.Rol;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    String username;
    String password;
    String nombre;
    String apellido;
    String telefono;
    String email;
    Date fechaNacimiento;
    Rol rol;

}
