package ma.sagim.pfe.controller;


import ma.sagim.pfe.model.Etagere;
import ma.sagim.pfe.services.EtagereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@RestController
@RequestMapping("/api/etageres")
public class EtagereController {
    @Autowired
    private EtagereService etagereService;

    @GetMapping
    public List<Etagere> getEtagere(){
        return etagereService.getEtageres();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Etagere> getEtagere(@PathVariable Long id){
        Etagere e = etagereService.getEtagere(id).getBody();
        return new ResponseEntity<>(e, HttpStatus.OK);
    }

    @PostMapping
    public Etagere createEtagere(@RequestBody Etagere etagere){
        return etagereService.createEtagere(etagere);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Etagere> updateEtagere(@RequestBody Etagere etagere, @PathVariable Long id){
        Etagere e = etagereService.updateEtagere(etagere, id).getBody();
        return new ResponseEntity<>(e, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEtagere(@PathVariable Long id){
        etagereService.deleteEtagere(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
