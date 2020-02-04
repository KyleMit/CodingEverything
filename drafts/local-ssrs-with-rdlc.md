---
title: Guide to Local SSRS Development with RDLC
tags: ['post', SSRS, RDLC]
draft: true
---

Some SSRS reports are deployed directly to a Reporting Server and accessed directly or via a report viewer control pointed at the server.  In these cases, the report knows everything it needs to know about how to pull the data from the server via a stored procedure and render it.  However sometimes the data we want to feed into a report comes from the application code, instead of directly from the server.  In these instances, you want to [deploy an .rdl**c**][rdlc] file where C stands for Report Definition Language **Client**.



1. **Add the assembly to your project.**  
   Depending on whether your're building a web application or windows application the library will change.

 **Namespace**: `Microsoft.Reporting.WinForms`
 **Assembly**: `Microsoft.ReportViewer.WinForms.dll`

1. **Shipping the Report**
  You can do either of the following things:
	* *Embed the Report* - 
	If you embed the report, you should set its build action to "Embedded Resource".  Then specify the report to connect to [by passing the path to the resource][ReportEmbeddedResource example] like this:

        ```vb
        localReport.ReportEmbeddedResource = "AppName.FolderName.ReportName.rdlc"
        ```

	* *Identify By Path* - 
    If you want to deploy the physical report file, set it's build action to "Content" and then [pass the path on file][ReportPath example] like this:

        ```vb
        localReport.ReportPath =  Path.Combine(AppPath, "ReportName.rdlc")
        ```

	 If you go this route, you'll need to be able to obtain the path that the app is currently executing from.  This can differ based on the type of app you're deploying, but here are some of the basics:
	 
        ```vb
        Dim aspNetPath = Server.MapPath("~\Reports\ChangeReport.rdlc")
        Dim winFormsPath = Path.Combine(Application.StartupPath, "ReportName.rdlc")
        Dim consolePath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().CodeBase) + "\ReportName.rdlc"
        ```

1. **Deploying to a Server**
 You'll need to add the runtimes to your server
 You can download the [Microsoft Report Viewer 2010 SP1 Redistributable Package][runtime]


[runtime]: https://www.microsoft.com/en-us/download/details.aspx?id=6610
[ReportEmbeddedResource example]: http://stackoverflow.com/a/3334002/1366033
[ReportPath example]: http://stackoverflow.com/q/2702088/1366033
[rdlc]: https://msdn.microsoft.com/en-us/library/ms252067.aspx
