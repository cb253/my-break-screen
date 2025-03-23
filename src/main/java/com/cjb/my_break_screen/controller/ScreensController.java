package com.cjb.my_break_screen.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ScreensController {
    @GetMapping("/firefly")
    public String about(Model model) {
        return "firefly";
    }

    @GetMapping("/electronic")
    public String electronic(Model model) {
        return "electronic";
    }

}
