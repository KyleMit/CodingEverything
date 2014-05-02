using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCBootstrapNavbar.CS.Startup))]
namespace MVCBootstrapNavbar.CS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
