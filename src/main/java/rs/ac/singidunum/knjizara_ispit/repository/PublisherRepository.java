package rs.ac.singidunum.knjizara_ispit.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.knjizara_ispit.entity.Publisher;

import java.util.List;
import java.util.Optional;

@Repository
public interface PublisherRepository extends JpaRepository<Publisher, Integer> {

    List<Publisher> findAllByDeletedAtIsNull();

    Optional<Publisher> findByIdAndDeletedAtIsNull(Integer id);


}
