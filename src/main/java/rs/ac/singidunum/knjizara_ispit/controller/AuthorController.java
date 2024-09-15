package rs.ac.singidunum.knjizara_ispit.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.knjizara_ispit.entity.Author;
import rs.ac.singidunum.knjizara_ispit.entity.Publisher;
import rs.ac.singidunum.knjizara_ispit.model.AuthorModel;
import rs.ac.singidunum.knjizara_ispit.model.PublisherModel;
import rs.ac.singidunum.knjizara_ispit.service.AuthorService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/author")
@RequiredArgsConstructor
@CrossOrigin
public class AuthorController {

    private final AuthorService service;

    @GetMapping
    public List<Author> getAll (){
        return service.getAllAuthor();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Author> getById(@PathVariable Integer id){
        return ResponseEntity.of(service.getAuthorById(id));
    }

    @PostMapping
    public Author create(@RequestBody AuthorModel model){
        return service.saveAuthor(model);
    }
    @PutMapping(path = "/{id}")
    public Author update(@PathVariable Integer id, @RequestBody AuthorModel model){
        return service.updateAuthor(id, model);
    }
    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id){
        service.deleteAuthor(id);
    }
}
