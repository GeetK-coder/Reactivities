using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //public DbSet<Value> Values { get; set; }

        public DbSet<Activity>  Activities { get; set; }  //table name and columns in Activity.cs

        

    }
} 