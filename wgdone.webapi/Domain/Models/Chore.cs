using System;

namespace wgdone.webapi.Domain.Models
{
  public class Chore
  {
    public Guid Id { get; set; }
    public string Name { get; set; }

    public Guid RoomId { get; set; }
    public Room Room { get; set; }
  }
}
