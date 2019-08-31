using Microsoft.EntityFrameworkCore;
using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Models
{
  public class WGContext : DbContext
  {
    public WGContext(DbContextOptions<WGContext> options) : base(options)
    {
    }
    public DbSet<Room> Rooms { get; set; }
    public DbSet<Chore> Chores { get; set; }
  }

}
