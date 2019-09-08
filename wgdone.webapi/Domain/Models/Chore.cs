using System;
using System.Collections.Generic;

namespace wgdone.webapi.Domain.Models
{
  public class Chore
  {
    public Guid Id { get; set; }
    public string Name { get; set; }

    public IList<Room> Rooms { get; set; }
  }
}
