package fr.snasello.jardi.rs;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("resources")
public class JardiApp extends ResourceConfig{

    public JardiApp() {
        packages("fr.snasello.jardi.rs");
    }
}
