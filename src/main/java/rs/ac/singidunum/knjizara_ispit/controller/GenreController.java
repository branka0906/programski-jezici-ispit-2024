package rs.ac.singidunum.knjizara_ispit.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.knjizara_ispit.entity.Genre;
import rs.ac.singidunum.knjizara_ispit.model.GenreModel;
import rs.ac.singidunum.knjizara_ispit.service.GenreService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/genre")
@RequiredArgsConstructor
@CrossOrigin
public class GenreController {

    private final GenreService service;

    @GetMapping
    public List<Genre> getAll (){
        return service.getAllGenre();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Genre> getById(@PathVariable Integer id){
        return ResponseEntity.of(service.getGenreById(id));
    }

    @PostMapping
    public Genre create(@RequestBody GenreModel model){
        return service.saveGenre(model);
    }
    @PutMapping(path = "/{id}")
    public Genre update(@PathVariable Integer id, @RequestBody GenreModel model){
        return service.updateGenre(id, model);
    }
    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id){
        service.deleteGenre(id);
    }
}
