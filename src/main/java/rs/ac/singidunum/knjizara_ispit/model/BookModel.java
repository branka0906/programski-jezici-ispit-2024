package rs.ac.singidunum.knjizara_ispit.model;
//Da bismo ucitali podatke


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class BookModel {

    private String title;
    private String genre;
    private String isbn;
}
