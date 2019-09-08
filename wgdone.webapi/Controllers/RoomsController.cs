using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;

using wgdone.webapi.Domain.Models;
using wgdone.webapi.Domain.Services;
using AutoMapper;
using wgdone.webapi.Resources;

namespace wgdone.webapi.Controllers
{
  [Route("/api/[controller]")]
  public class RoomsController : Controller
  {
    private readonly IRoomService _roomService;
    private readonly IMapper _mapper;

    public RoomsController(IRoomService roomService, IMapper mapper)
    {
      _roomService = roomService;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<IEnumerable<RoomResource>> GetAllAsync()
    {
      var rooms = await _roomService.ListAsync();
      var resources = _mapper.Map<IEnumerable<Room>, IEnumerable<RoomResource>>(rooms);

      return resources;
    }
  }
}
