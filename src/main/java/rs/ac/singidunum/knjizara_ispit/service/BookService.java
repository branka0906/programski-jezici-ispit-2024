package rs.ac.singidunum.knjizara_ispit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.knjizara_ispit.entity.Book;
import rs.ac.singidunum.knjizara_ispit.entity.Publisher;
import rs.ac.singidunum.knjizara_ispit.model.BookModel;
import rs.ac.singidunum.knjizara_ispit.repository.BookRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository repository;
    private final PublisherService publisherService;

    public List<Book> getAllBooks (){
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Book> getBooksById(Integer id){
        return repository.findByIdAndDeletedAtIsNull(id);

    }
    public List<Book> getBooksByTitle(String title){
        return repository.findByTitleContainsAndDeletedAtIsNull(title);
    }

    public Book createBook(BookModel model){
        Publisher publisher = publisherService.getPublisherById(model.getPublisherId()).orElseThrow();
        Book book = new Book();
        book.setTitle(model.getTitle());
        book.setGenre(model.getGenre());
        book.setIsbn(model.getIsbn());
        book.setPublisher(publisher);
        book.setCreatedAt(LocalDateTime.now());
        return repository.save(book);
    }

    public Book updateBook(Integer id, BookModel model){
        Book book = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        Publisher publisher = publisherService.getPublisherById(model.getPublisherId()).orElseThrow();
        book.setTitle(model.getTitle());
        book.setGenre(model.getGenre());
        book.setIsbn(model.getIsbn());
        book.setPublisher(publisher);
        book.setUpdatedAt(LocalDateTime.now());
        return  repository.save(book);
    }
    public void deletedBook(Integer id){
        Book book = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        book.setDeletedAt(LocalDateTime.now());
        repository.save(book);
    }
}
