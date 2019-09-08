using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace wgdone.webapi.Resources
{
  public class SaveActivityResource
  {
    [Required]
    public Guid RoomId { get; set; }
    [Required]
    public Guid ChoreId { get; set; }
    [Required]
    public string User { get; set; }
  }
}
