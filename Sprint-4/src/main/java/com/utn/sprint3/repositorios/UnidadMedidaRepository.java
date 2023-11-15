package com.utn.sprint3.repositorios;

import com.utn.sprint3.entidades.ArticuloInsumo;
import com.utn.sprint3.entidades.UnidadMedida;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UnidadMedidaRepository extends BaseRepository<UnidadMedida, Long> {

    @Query(value = "SELECT u FROM UnidadMedida u WHERE u.denominacion LIKE %:filtro%")
    List<UnidadMedida> search(@Param("filtro") String filtro);

    @Query(value = "SELECT u FROM UnidadMedida u WHERE u.denominacion LIKE %:filtro%")
    Page<UnidadMedida> search(@Param("filtro") String filtro, Pageable pageable);
}
