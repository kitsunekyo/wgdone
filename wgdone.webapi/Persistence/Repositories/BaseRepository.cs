using wgdone.webapi.Persistence.Contexts;

namespace wgdone.webapi.Persistence.Repositories
{
  public abstract class BaseRepository
  {
    protected readonly AppDbContext _context;

    public BaseRepository(AppDbContext context)
    {
      _context = context;
    }
  }
}
