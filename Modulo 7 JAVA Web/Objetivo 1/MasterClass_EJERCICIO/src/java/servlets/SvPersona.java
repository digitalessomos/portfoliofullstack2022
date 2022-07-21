package servlets;

import java.io.IOException;
import java.util.List;
//import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import logica.Controladora;
import logica.Persona;
 
@WebServlet(name = "SvPersona", urlPatterns = {"/SvPersona"})
public class SvPersona extends HttpServlet {
 
    Controladora control = new  Controladora();
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
         
    }
 
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        
        List<Persona> listaPersonas = control.traerPersonas();
        
        HttpSession miSession = request.getSession();
        miSession.setAttribute("listaPersonas", listaPersonas);
        
        response.sendRedirect("verPersonas.jsp");
        
    }
 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        //valores que lee desde la intertfaz grafica
        String dni = request.getParameter("dni");
        String nombre = request.getParameter("nombre");
        String apellido = request.getParameter("apellido");
        String teléfono = request.getParameter("telefono");
        
        Persona pers = new Persona(0,dni,nombre,apellido,teléfono);
        control.crearPersona(pers);
        
        response.sendRedirect("index.jsp");
        //confrimacion de que nuestro JSP se c esta comnunicando conel servlet
       /* System.out.println("dni: " + dni);
        System.out.println("nombre: " + nombre);
        System.out.println("apellido: " + apellido);
        System.out.println("teléfono: " + teléfono);*/
    }
 
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
