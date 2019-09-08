using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Services.Communication
{
  public class RoomResponse : BaseResponse
  {
    public Room Room { get; set; }

    private RoomResponse(bool success, string message, Room room) : base(success, message)
    {
      Room = room;
    }

    public RoomResponse(Room room) : this(true, string.Empty, room) { }
    public RoomResponse(string message) : this(false, message, null) { }

  }
}
