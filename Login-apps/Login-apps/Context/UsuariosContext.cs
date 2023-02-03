using Login_apps.Models;
using MySql.Data.MySqlClient;
using System.Data;

namespace Login_apps.Context
{
    public class UsuariosContext
    {
        public IEnumerable<Usuarios> listado()
        {
            List<Usuarios> seller = new List<Usuarios>();
            using (MySqlConnection cn = new ConexionMySql().getcn)
            {
                cn.Open();
                MySqlCommand cmd = new MySqlCommand("listar_Usuarios", cn);
                cmd.CommandType = CommandType.StoredProcedure;
                MySqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    seller.Add(new Usuarios()
                    {
                        Id = dr.GetInt32(0),
                        Username = dr.GetString(1),
                        Email = dr.GetString(2),
                        Pass = dr.GetString(3),
                        Rol = dr.GetString(4)
                    });
                }
            }
            return seller;
        }
    }
}
