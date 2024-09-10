package rs.ac.singidunum.knjizara_ispit.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.knjizara_ispit.entity.Book;
import rs.ac.singidunum.knjizara_ispit.model.BookModel;
import rs.ac.singidunum.knjizara_ispit.service.BookService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/book")
@RequiredArgsConstructor
@CrossOrigin
public class BookController {

    private final BookService service;


    @GetMapping
    public List<Book> getAllBooks() {
        return service.getAllBooks();

    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getBooksById(id));
    }
    @GetMapping(path = "/title/{title}")
    public List<Book> getBookByTitle(@PathVariable String title) {
        return service.getBooksByTitle(title);
    }
    @PostMapping
    public Book createBook(@RequestBody BookModel book){
        return service.createBook(book);

    }
    @PutMapping(path = "/{id}")
    public Book updateBook(@PathVariable Integer id, @RequestBody BookModel book){
        return service.updateBook(id, book);
    }
    @DeleteMapping(path="/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deletedBook(@PathVariable Integer id){
        service.deletedBook(id);
    }
    }
