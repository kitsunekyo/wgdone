using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Resources;

namespace wgdone.webapi.Mapping
{
  public class ResourceToModelProfile : Profile
  {
    public ResourceToModelProfile()
    {
      CreateMap<SaveRoomResource, Room>();
      CreateMap<SaveChoreResource, Chore>();
    }
  }
}
