package rs.ac.singidunum.knjizara_ispit.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.knjizara_ispit.entity.Author;


import java.util.List;
import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer> {


    List<Author> findAllByDeletedAtIsNull();

    Optional<Author> findByIdAndDeletedAtIsNull(Integer id);
}
