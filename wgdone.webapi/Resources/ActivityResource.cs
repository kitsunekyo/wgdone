using System;
using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Resources
{
  public class ActivityResource
  {
    public Guid Id { get; set; }
    public string User { get; set; }
    public Room Room { get; set; }
    public Chore Chore { get; set; }
  }
}
