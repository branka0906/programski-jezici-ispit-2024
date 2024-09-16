package rs.ac.singidunum.knjizara_ispit.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.knjizara_ispit.entity.Genre;
import rs.ac.singidunum.knjizara_ispit.model.GenreModel;
import rs.ac.singidunum.knjizara_ispit.repository.GenreRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GenreService {

    private final GenreRepository genreRepository;

    public List<Genre> getAllGenre() {
        return genreRepository.findAllByDeletedAtIsNull();
    }

    public Optional<Genre> getGenreById(Integer id) {
        return genreRepository.findByIdAndDeletedAtIsNull(id);

    }

    public Genre saveGenre(GenreModel model) {
        Genre author = new Genre();
        author.setName(model.getName());
        author.setCreatedAt(LocalDateTime.now());
        return genreRepository.save(author);

    }

    public Genre updateGenre(Integer id, GenreModel model) {
        Genre genre = genreRepository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        genre.setName(model.getName());
        genre.setUpdatedAt(LocalDateTime.now());
        return genreRepository.save(genre);

    }

    public void deleteGenre(Integer id) {
        Genre genre = genreRepository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        genre.setDeletedAt(LocalDateTime.now());
        genreRepository.save(genre);
    }
}
