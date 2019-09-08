using System;

namespace wgdone.webapi.Domain.Models
{
  public class Activity
  {
    public Guid Id { get; set; }
    public string User { get; set; }
    public DateTime Timestamp { get; set; }

    public Guid ChoreId { get; set; }
    public Chore Chore { get; set; }

    public Guid? RoomId { get; set; }
    public Room Room { get; set; }

  }
}
