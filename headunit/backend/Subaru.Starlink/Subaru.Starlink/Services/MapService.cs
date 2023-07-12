using System.IO;
using System;
using Microsoft.Data.Sqlite;
using Microsoft.Extensions.Options;
using Subaru.Starlink.Models;
using static System.Net.Mime.MediaTypeNames;
using System.Diagnostics;

namespace Subaru.Starlink.Services
{
    public class MapService
    {
        private readonly IOptionsMonitor<MapConfiguration> mapConfiguration;
        //private readonly IHttpClientFactory httpClientFactory;

        public MapService(IOptionsMonitor<MapConfiguration> mapConfiguration
            /*IHttpClientFactory httpClientFactory*/)
        {
            this.mapConfiguration = mapConfiguration;
            //this.httpClientFactory = httpClientFactory;
        }

        public async Task<byte[]> GetMapTileAsync(int z, int x, int y, CancellationToken cancellationToken)
        {
            string basePath = "subaru-starlink\\android\\jars";
            string filename = string.Format("{0}.{1}.{2}.pbf", z, x, y);
            var pbfFile = Path.Combine(basePath, filename);
            if (!File.Exists(pbfFile))
            {
                var si = new ProcessStartInfo("java", string.Format("-jar app.jar {0} {1} {2}", z, x, y));
                si.WorkingDirectory = basePath;
                var p = Process.Start(si);
                p.WaitForExit();
            }

            if (File.Exists(pbfFile))
            {
                return await File.ReadAllBytesAsync(pbfFile, cancellationToken);
            }

            return Array.Empty<byte>();
        }
    }
}
