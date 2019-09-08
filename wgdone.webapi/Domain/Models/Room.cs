using System;
using System.Collections.Generic;

namespace wgdone.webapi.Domain.Models
{
  public class Room
  {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public IList<Chore> Chores { get; set; } = new List<Chore>();
  }
}
