namespace Login_apps.Models
{
    public class Usuarios
    {
        public int? Id { get; set; }
        public string Username { set; get; }
        public string Email { set; get; }
        public string Pass { set; get; }

        public string Rol { set; get; }
    }
}
