package ma.sagim.pfe.services;
import ma.sagim.pfe.model.Etagere;
import ma.sagim.pfe.repositories.EtagereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.*;

import java.util.List;

@Service
public class EtagereService {
    @Autowired
    private EtagereRepository etagereRepository;

    public List<Etagere> getEtageres(){
        return etagereRepository.findAll();
    }

    public Etagere createEtagere(Etagere etagere){
        return etagereRepository.save(etagere);
    }

    public ResponseEntity<Etagere> getEtagere(Long id){
        Etagere etagere = etagereRepository.findById(id).get();
        if (etagere == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(etagere, HttpStatus.OK);
    }

    public ResponseEntity<Etagere> updateEtagere(Etagere e, Long id){
        Etagere etagere = etagereRepository.findById(id).get();
        if (etagere == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        etagere.setCode(e.getCode());
        etagere.setLibelle(e.getLibelle());
        etagereRepository.save(etagere);
        return new ResponseEntity<>(etagere, HttpStatus.OK);
    }

    public ResponseEntity<Void> deleteEtagere(Long id){
        Etagere e = etagereRepository.findById(id).get();
        if (e == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        etagereRepository.delete(e);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
