using wgdone.webapi.Domain.Models;

namespace wgdone.webapi.Domain.Services.Communication
{
  public class ActivityResponse : BaseResponse
  {
    public Activity Activity { get; set; }

    private ActivityResponse(bool success, string message, Activity activity) : base(success, message)
    {
      Activity = activity;
    }

    public ActivityResponse(Activity activity) : this(true, string.Empty, activity) { }
    public ActivityResponse(string message) : this(false, message, null) { }

  }
}
