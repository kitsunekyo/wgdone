using AutoMapper;
using wgdone.webapi.Domain.Models;
using wgdone.webapi.Resources;

namespace wgdone.webapi.Mapping
{
  public class ModelToResourceProfile : Profile
  {
    public ModelToResourceProfile()
    {
      CreateMap<Room, RoomResource>();
    }
  }
}
