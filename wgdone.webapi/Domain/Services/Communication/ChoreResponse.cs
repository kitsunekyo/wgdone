using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Services.Communication
{
  public class ChoreResponse : BaseResponse
  {
    public Chore Chore { get; set; }

    private ChoreResponse(bool success, string message, Chore chore) : base(success, message)
    {
      Chore = chore;
    }

    public ChoreResponse(Chore chore) : this(true, string.Empty, chore) { }
    public ChoreResponse(string message) : this(false, message, null) { }

  }
}
