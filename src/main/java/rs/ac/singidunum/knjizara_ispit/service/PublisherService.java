package rs.ac.singidunum.knjizara_ispit.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.knjizara_ispit.entity.Publisher;
import rs.ac.singidunum.knjizara_ispit.model.PublisherModel;
import rs.ac.singidunum.knjizara_ispit.repository.PublisherRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PublisherService {

    private final PublisherRepository repository;

    public List<Publisher> getAllPublisher() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Publisher> getPublisherById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);

    }

    public Publisher savePublisher(PublisherModel model) {
        Publisher publisher = new Publisher();
        publisher.setName(model.getName());
        publisher.setAddress(model.getAddress());
        publisher.setContact(model.getContact());
        publisher.setCreatedAt(LocalDateTime.now());
        return repository.save(publisher);

    }

    public Publisher updatePublisher(Integer id, PublisherModel model) {
        Publisher publisher = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        publisher.setName(model.getName());
        publisher.setAddress(model.getAddress());
        publisher.setContact(model.getContact());
        publisher.setUpdatedAt(LocalDateTime.now());
        return repository.save(publisher);

    }

    public void deletePublisher(Integer id) {
        Publisher publisher = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        publisher.setDeletedAt(LocalDateTime.now());
        repository.save(publisher);
    }
}
