package FS_tst.com.example.demo.Controller;
// import org.springframework.*;
import org.springframework.web.bind.annotation.*;
// import org.springframework.web.bind.annotation.RestController;

@RestController

public class Controller {
   @CrossOrigin(origins = "http://localhost:3000")
   @GetMapping("/health")
   public String getHealthCheckString() {
   return "Endpoint hit";
 }
}