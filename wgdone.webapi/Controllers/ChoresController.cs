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
  public class ChoresController : Controller
  {
    private readonly IChoreService _choreService;
    private readonly IMapper _mapper;

    public ChoresController(IChoreService choreService, IMapper mapper)
    {
      _choreService = choreService;
      _mapper = mapper;
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutAsync(Guid id, [FromBody] SaveChoreResource resource)
    {
      if (!ModelState.IsValid)
        return BadRequest(ModelState.GetErrorMessages());

      var chore = _mapper.Map<SaveChoreResource, Chore>(resource);
      var result = await _choreService.UpdateAsync(id, chore);

      if (!result.Success)
        return BadRequest(result.Message);

      var choreResource = _mapper.Map<Chore, ChoreResource>(result.Chore);
      return Ok(choreResource);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAsync(Guid id)
    {
      var result = await _choreService.DeleteAsync(id);

      if (!result.Success)
        return BadRequest(result.Message);

      var choreResource = _mapper.Map<Chore, ChoreResource>(result.Chore);
      return Ok(choreResource);
    }
  }
}
