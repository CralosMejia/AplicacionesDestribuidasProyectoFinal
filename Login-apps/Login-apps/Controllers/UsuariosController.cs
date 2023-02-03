using Login_apps.Context;
using Microsoft.AspNetCore.Mvc;
using Login_apps.Models;
using Google.Protobuf.WellKnownTypes;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Login_apps.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        // GET: api/<UsuariosController>
        [HttpGet("Usuarios")]

        public async Task<IActionResult> GetUsuarios(string user, string pass)
        {
            try
            {
                var Usuarios = await Task.Run(() => new UsuariosContext().listado());
                if (user != null && pass != null)
                {
                    Usuarios = Usuarios.Where(s => s.Username == user && s.Pass == pass).ToList();

                    if (!Usuarios.Any())
                    {  
                        return BadRequest("Error");
                    }
                    return Ok(Usuarios);
                }
                else
                {

                    return Ok(Usuarios);
                }
            }
            catch
            {
                return BadRequest("Error");
            }


        }

        // GET api/<UsuariosController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UsuariosController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<UsuariosController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsuariosController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
