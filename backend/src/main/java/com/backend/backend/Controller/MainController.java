package com.backend.backend.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
    @GetMapping(value = "/")
    public @ResponseBody String main(){
        return "helloWorld!";
    }
}
