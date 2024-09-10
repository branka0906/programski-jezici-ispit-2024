package rs.ac.singidunum.knjizara_ispit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.knjizara_ispit.entity.Book;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

    List<Book> findAllByDeletedAtIsNull();

    Optional<Book> findByIdAndDeletedAtIsNull(Integer id);

    List<Book> findByTitleContainsAndDeletedAtIsNull(String title);




}
