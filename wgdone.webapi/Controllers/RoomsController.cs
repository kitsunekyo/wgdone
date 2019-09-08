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
using wgdone.webapi.Extensions;

namespace wgdone.webapi.Controllers
{
  [Route("/api/[controller]")]
  public class RoomsController : Controller
  {
    private readonly IRoomService _roomService;
    private readonly IChoreService _choreService;
    private readonly IMapper _mapper;

    public RoomsController(IRoomService roomService, IChoreService choreService, IMapper mapper)
    {
      _roomService = roomService;
      _choreService = choreService;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<IEnumerable<RoomResource>> GetAllAsync()
    {
      var rooms = await _roomService.ListAsync();
      var resources = _mapper.Map<IEnumerable<Room>, IEnumerable<RoomResource>>(rooms);

      return resources;
    }

    [HttpPost]
    public async Task<IActionResult> PostAsync([FromBody] SaveRoomResource resource)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState.GetErrorMessages());

      var room = _mapper.Map<SaveRoomResource, Room>(resource);
      var result = await _roomService.SaveAsync(room);

      if (!result.Success)
        return BadRequest(result.Message);

      var roomResource = _mapper.Map<Room, RoomResource>(result.Room);
      return Ok(roomResource);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutAsync(Guid id, [FromBody] SaveRoomResource resource)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState.GetErrorMessages());

      var room = _mapper.Map<SaveRoomResource, Room>(resource);
      var result = await _roomService.UpdateAsync(id, room);

      if (!result.Success)
        return BadRequest(result.Message);

      var roomResource = _mapper.Map<Room, RoomResource>(result.Room);
      return Ok(roomResource);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAsync(Guid id)
    {
      var result = await _roomService.DeleteAsync(id);

      if (!result.Success)
        return BadRequest(result.Message);

      var roomResource = _mapper.Map<Room, RoomResource>(result.Room);
      return Ok(roomResource);
    }
  }
}

//   [HttpPost("{id}/Chores")]
//   public async Task<IActionResult> AddChoreAsync(Guid id, [FromBody] SaveChoreResource resource)
//   {
//     if (!ModelState.IsValid)
//       return BadRequest(ModelState.GetErrorMessages());

//     var chore = _mapper.Map<SaveChoreResource, Chore>(resource);
//     chore.RoomId = id;
//     var result = await _choreService.SaveAsync(chore);

//     if (!result.Success)
//       return BadRequest(result.Message);

//     return Ok(result.Chore);

//   }

//   [HttpGet("{id}/Chores")]
//   public async Task<IEnumerable<Chore>> GetAllChoresAsync(Guid id)
//   {
//     var chores = await _choreService.ListAsync(id);
//     return chores;
//   }
// }
