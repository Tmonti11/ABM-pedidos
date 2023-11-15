package com.utn.sprint3.entidades;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;


import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Estadistica_Articulo")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class EstadisticaArticulo extends Base {

    @NotNull
    @Column(name = "CantidadVendida")
    private Integer CantidadVendida;

    @NotNull
    @Column(name = "Detalle")
    private String Detalle;

    @NotNull
    @Column(name = "Fecha_Inicio")
    private Date Fecha_Inicio;

    @NotNull
    @Column(name = "Fecha_Fin")
    private Date Fecha_Fin;

    @NotNull
    @JoinTable(
            name = "EstadisticaArticuloPedido",
            joinColumns = @JoinColumn(name = "FK_EstadisticaArticulo", nullable = false),
            inverseJoinColumns = @JoinColumn(name="FK_Pedido", nullable = false)
    )

    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Pedido> Pedido = new HashSet<>();

}
