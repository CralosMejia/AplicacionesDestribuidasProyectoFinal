using MySql.Data.MySqlClient;
using System.Globalization;

namespace Login_apps.Context
{
    public class ConexionMySql
    {
        MySqlConnection cn = new MySqlConnection(@"Server=MYSQL8002.site4now.net;Database=db_a94161_dbapps;Uid=a94161_dbapps;Pwd=Arrugasbb248816*");
        public MySqlConnection getcn
        {
            get { return cn; }
        }

    }
}
