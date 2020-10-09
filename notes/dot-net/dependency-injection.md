# Dependency Injection

* [Dependency injection in ASP.NET Core | Microsoft Docs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1)
* [.Net Core Dependency Injection](https://stackify.com/net-core-dependency-injection/)
* [Dependency Injection in ASP.NET Core](https://www.tutorialsteacher.com/core/dependency-injection-in-aspnet-core)
* [NuGet Gallery | Microsoft.Extensions.DependencyInjection 3.1.5](https://www.nuget.org/packages/Microsoft.Extensions.DependencyInjection/)

## Prior Art

* [AutoFac](https://autofac.org/)
* [Ninject](http://www.ninject.org/)
* [StructureMap](https://structuremap.github.io/)
* [Unity Container](http://unitycontainer.org/)

## Microsoft.Extensions.DependencyInjection

Add DI anywhere

```ps
Install-Package Microsoft.Extensions.DependencyInjection
```

```bash
dotnet add package Microsoft.Extensions.DependencyInjection
```

## `Startup.ConfigureServices`

## IoC Container

* **IoC** - Inversion of Control

```cs
public interface ILog
{
    void info(string str);
}

class MyConsoleLogger : ILog
{
    public void info(string str)
    {
        Console.WriteLine(str);
    }
}
```

```cs
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.Add(new ServiceDescriptor(typeof(ILog), new MyConsoleLogger()));
    }

    // other code removed for clarity..
}
```

### ServiceDescriptor

[`ServiceDescriptor`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.servicedescriptor?view=dotnet-plat-ext-3.1)

> Describes a service with its service type, implementation, and lifetime.

#### Properties

* `ImplementationFactory`
* `ImplementationInstance`
* `ImplementationType`
* `Lifetime`
  * `Scoped` - Specifies that a new instance of the service will be created for each scope. // default
  * `Singleton` - Specifies that a single instance of the service will be created.
  * `Transient` - Specifies that a new instance of the service will be created every time it is requested.
* `ServiceType`

### Extensions methods

```cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddSingleton<ILog, MyConsoleLogger>();
    services.AddSingleton(typeof(ILog), typeof(MyConsoleLogger));

    services.AddTransient<ILog, MyConsoleLogger>();
    services.AddTransient(typeof(ILog), typeof(MyConsoleLogger));

    services.AddScoped<ILog, MyConsoleLogger>();
    services.AddScoped(typeof(ILog), typeof(MyConsoleLogger));
}
```

## Constructor Injection


> Once we register a service, the IoC container automatically performs constructor injection if a service type is included as a parameter in a constructor

```cs
public class HomeController : Controller
{
    ILog _log;

    public HomeController(ILog log)
    {
        _log = log;
    }
}
```

### Action Method Injection

```cs
public IActionResult Index([FromServices] ILog log)
{
    log.info("Index method executing");

    return View();
}
```


## Get Services Manually

[`HttpContext`.`RequestServices`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httpcontext.requestservices?view=aspnetcore-3.1)

```cs
var services = this.HttpContext.RequestServices;
var log = (ILog)services.GetService(typeof(ILog));
```

## Custom Service Provider

Bring your own service provider as long as your register with `IServiceProvider`


## Configuration


[How to use the IOptions pattern for configuration in ASP.NET Core RC2](https://andrewlock.net/how-to-use-the-ioptions-pattern-for-configuration-in-asp-net-core-rc2/)
[Configuration in a .net core console application](https://pradeeploganathan.com/dotnet/configuration-in-a-net-core-console-application/)
[Easy Configuration Binding in ASP.NET Core - revisited](https://weblog.west-wind.com/posts/2017/dec/12/easy-configuration-binding-in-aspnet-core-revisited)
[How to take advantage of Dependency Injection in .Net Core 2.2 + Console Applications](https://medium.com/swlh/how-to-take-advantage-of-dependency-injection-in-net-core-2-2-console-applications-274e50a6c350)
[Binding configuration to an object in .NET Core](https://stackoverflow.com/a/47864369/1366033)


```cs
var config = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .Build();

// option 1
var auth1 = new AppInsightsAuth();
config.Bind("AppInsights", auth1);

// option2
var auth2 = new AppInsightsAuth();
config.GetSection("AppInsights").Bind(auth2);

// option 3
var auth3 = config.GetSection("AppInsights").Get<AppInsightsAuth>();
```

## DI in Console App

[Adding Dependency Injection to .NET Core Console Applications on Windows](https://dev.to/ballcapz/adding-dependency-injection-to-net-core-console-applications-on-windows-3pm0?signin=true)

```cs
static void Main(string[] args)
{
    var services = ConfigureServices();

    var serviceProvider = services.BuildServiceProvider();

    // calls the Run method in App, which is replacing Main
    serviceProvider.GetService<App>().Run();
}

private static IServiceCollection ConfigureServices()
{
    IServiceCollection services = new ServiceCollection();

    var config = LoadConfiguration();
    services.AddSingleton(config);

    // required to run the application
    services.AddTransient<App>();

    return services;
}

public static IConfiguration LoadConfiguration()
{
    var builder = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

    return builder.Build();
}
```

## Generic Host

[Startup.cs in a self-hosted .NET Core Console Application](https://stackoverflow.com/q/41407221/1366033)
[Using IHost .net core console applications](https://garywoodfine.com/ihost-net-core-console-applications/)
[Get started with .NET Generic Host](https://snede.net/get-started-with-net-generic-host/)
[.NET Generic Host](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/generic-host?view=aspnetcore-3.1)
