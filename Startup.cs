using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJsMvcWebApi.Startup))]
namespace AngularJsMvcWebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
