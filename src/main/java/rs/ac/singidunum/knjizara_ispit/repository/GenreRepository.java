package rs.ac.singidunum.knjizara_ispit.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.knjizara_ispit.entity.Genre;


import java.util.List;
import java.util.Optional;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Integer> {


    List<Genre> findAllByDeletedAtIsNull();

    Optional<Genre> findByIdAndDeletedAtIsNull(Integer id);
}
