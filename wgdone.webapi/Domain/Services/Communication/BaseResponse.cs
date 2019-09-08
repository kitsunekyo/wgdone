using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace wgdone.webapi.Domain.Services.Communication
{
  public class BaseResponse
  {
    public bool Success { get; set; }
    public string Message { get; set; }

    public BaseResponse(bool success, string message)
    {
      Success = success;
      Message = message;
    }
  }
}
