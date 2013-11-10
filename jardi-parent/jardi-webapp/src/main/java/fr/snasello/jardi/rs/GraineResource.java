package fr.snasello.jardi.rs;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/graine")
public class GraineResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public java.util.List<GraineDTO> getHello() {
		java.util.List<GraineDTO> graines = new java.util.ArrayList<GraineDTO>();
		GraineDTO graine1 = new GraineDTO();
		graine1.setId("1");
		graine1.setNom("tomate");
		graines.add(graine1);
		return graines;
	}
}
