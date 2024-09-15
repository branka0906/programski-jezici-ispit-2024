package rs.ac.singidunum.knjizara_ispit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.knjizara_ispit.entity.Author;
import rs.ac.singidunum.knjizara_ispit.model.AuthorModel;
import rs.ac.singidunum.knjizara_ispit.model.PublisherModel;
import rs.ac.singidunum.knjizara_ispit.repository.AuthorRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthorService {

    private final AuthorRepository authorRepository;

    public List<Author> getAllAuthor() {
        return authorRepository.findAllByDeletedAtIsNull();
    }

    public Optional<Author> getAuthorById(Integer id) {
        return authorRepository.findByIdAndDeletedAtIsNull(id);

    }

    public Author saveAuthor(AuthorModel model) {
        Author author = new Author();
        author.setName(model.getName());
        author.setSurname(model.getSurname());
        author.setCreatedAt(LocalDateTime.now());
        return authorRepository.save(author);

    }

    public Author updateAuthor(Integer id, AuthorModel model) {
        Author author = authorRepository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        author.setName(model.getName());
        author.setSurname(model.getSurname());
        author.setUpdatedAt(LocalDateTime.now());
        return authorRepository.save(author);

    }

    public void deleteAuthor(Integer id) {
        Author author = authorRepository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        author.setDeletedAt(LocalDateTime.now());
        authorRepository.save(author);
    }
}
