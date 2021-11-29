package com.project.cafe.ppt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import com.project.cafe.ppt.PiedraPapelTijeraApplication;

@SpringBootApplication
public class PiedraPapelTijeraApplication {

	public static void main(String[] args) {
		SpringApplication.run(PiedraPapelTijeraApplication.class, args);
	}

	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(PiedraPapelTijeraApplication.class);
	}

}
