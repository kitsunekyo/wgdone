using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Services.Communication
{
  public class SaveRoomResponse : BaseResponse
  {
    public Room Room { get; set; }

    private SaveRoomResponse(bool success, string message, Room room) : base(success, message)
    {
      Room = room;
    }

    public SaveRoomResponse(Room room) : this(true, string.Empty, room) { }
    public SaveRoomResponse(string message) : this(false, message, null) { }

  }
}
