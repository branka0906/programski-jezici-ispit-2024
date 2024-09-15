package rs.ac.singidunum.knjizara_ispit.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.knjizara_ispit.entity.Publisher;
import rs.ac.singidunum.knjizara_ispit.model.PublisherModel;
import rs.ac.singidunum.knjizara_ispit.service.PublisherService;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping(path = "/api/publisher")
public class PublisherController {

    private final PublisherService service;

    @GetMapping
    public List<Publisher> getAll (){
        return service.getAllPublisher();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity <Publisher> getById(@PathVariable Integer id){
        return ResponseEntity.of(service.getPublisherById(id));
    }

    @PostMapping
    public Publisher create(@RequestBody PublisherModel model){
        return service.savePublisher(model);
    }
    @PutMapping(path = "/{id}")
    public Publisher update(@PathVariable Integer id, @RequestBody PublisherModel model){
        return service.updatePublisher(id, model);
    }
    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id){
        service.deletePublisher(id);
    }

}
