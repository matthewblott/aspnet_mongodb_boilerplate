using Microsoft.AspNet.Builder;
using Microsoft.AspNet.StaticFiles;
using Microsoft.AspNet.Routing;
using Microsoft.Framework.DependencyInjection;

public class Startup
{
  public void Configure(IApplicationBuilder app)
  {
    app.UseStaticFiles();
    
    app.UseServices(services =>
    {
        services.AddMvc();
        
    });

    app.UseMvc(routes =>
    {
      routes.MapRoute(
        name: "Default",
        template: "{controller=Home}/{action=Index}/{id?}");


      routes.MapRoute("ApiRoute", "api/{controller}/{id?}");

    });

  }

}
