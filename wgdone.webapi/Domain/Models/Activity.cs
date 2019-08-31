using System;

namespace wgdone.api.Domain.Models
{
  public class Activity
  {
    public Guid Id { get; set; }
    public Guid ChoreId { get; set; }
    public Guid RoomId { get; set; }
    public DateTime Timestamp { get; set; }
  }
}
