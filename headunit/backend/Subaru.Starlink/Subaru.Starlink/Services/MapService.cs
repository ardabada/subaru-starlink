using Microsoft.Extensions.Options;
using Subaru.Starlink.Models;

namespace Subaru.Starlink.Services
{
    public class MapService
    {
        private readonly IOptionsMonitor<MapConfiguration> mapConfiguration;

        public MapService(IOptionsMonitor<MapConfiguration> mapConfiguration)
        {
            this.mapConfiguration = mapConfiguration;
        }

        public async Task<byte[]> GetMapTileAsync(int z, int x, int y, CancellationToken cancellationToken)
        {
            var file = Path.Combine(mapConfiguration.CurrentValue.BasePbfLocation, z.ToString(), x.ToString(), y.ToString() + ".pbf");
            if (File.Exists(file))
            {
                return await File.ReadAllBytesAsync(file, cancellationToken);
            }

            return Array.Empty<byte>();
        }
    }
}
