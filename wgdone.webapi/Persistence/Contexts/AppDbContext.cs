using Microsoft.EntityFrameworkCore;
using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Persistence.Contexts
{
  public class AppDbContext : DbContext
  {
    public DbSet<Room> Rooms { get; set; }
    public DbSet<Chore> Chores { get; set; }
    public DbSet<Activity> Activities { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);

      builder.Entity<Room>().ToTable("Rooms");
      builder.Entity<Room>().HasKey(p => p.Id);
      builder.Entity<Room>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
      builder.Entity<Room>().Property(p => p.Name).IsRequired().HasMaxLength(30);
      builder.Entity<Room>().HasMany(p => p.Chores);

      builder.Entity<Room>().HasData
      (
          new Room { Id = new System.Guid("cfbec692-f6f6-5785-9d21-033a2cdd514b"), Name = "Wohnzimmer" },
          new Room { Id = new System.Guid("191b27f0-6497-58f8-b90f-8199e2376b9e"), Name = "Schlafzimmer" }
      );

      builder.Entity<Chore>().ToTable("Chores");
      builder.Entity<Chore>().HasKey(p => p.Id);
      builder.Entity<Chore>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
      builder.Entity<Chore>().Property(p => p.Name).IsRequired().HasMaxLength(100);
      builder.Entity<Chore>().HasMany(p => p.Rooms);

      builder.Entity<Chore>().HasData
      (
          new Chore
          {
            Id = new System.Guid("836b5861-b067-5bee-8fd7-fab852491110"),
            Name = "Saugen"
          },
          new Chore
          {
            Id = new System.Guid("53f33d06-df6e-5550-929a-f9bbcc7169b7"),
            Name = "Wischen"
          },
          new Chore
          {
            Id = new System.Guid("82752504-b39d-5ee9-a750-9c01afa060a9"),
            Name = "Geschirrspüler ausräumen"
          }
      );

      builder.Entity<Activity>().ToTable("Activities");
      builder.Entity<Activity>().HasKey(p => p.Id);
      builder.Entity<Activity>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
      builder.Entity<Activity>().HasOne(p => p.Room);
      builder.Entity<Activity>().HasOne(p => p.Chore);

      builder.Entity<Activity>().HasData
      (
        new Activity
        {
          Id = new System.Guid("af9d3f13-d168-536d-a2f3-9e270fcbe252"),
          ChoreId = new System.Guid("53f33d06-df6e-5550-929a-f9bbcc7169b7"),
          User = "alex",
          Timestamp = System.DateTime.Now
        }
      );
    }
  }
}
