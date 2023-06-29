# Internet Information Services

## Questions

* [Website cannot be started another website may be using the same port](https://stackoverflow.com/q/31487313/1366033)

  Nuclear Approach - Delete and Re-Add The Site

* [HTTP Error 503. The service is unavailable.](https://stackoverflow.com/q/13322937/1366033)

  Restart App Pool

* [How to start and stop application pool in IIS using powershell script](https://stackoverflow.com/q/36599456/1366033)

  ```ps1
  Import-Module IISAdministration
  (Get-IISAppPool "name").Recycle()
  ```

* [HTTP error 404: The request resource is not found](https://stackoverflow.com/q/22611920/1366033)

  Restart Web Site

* [How can I stop and start individual websites in IIS using PowerShell?](https://stackoverflow.com/q/2710166/1366033)

  ```ps1
  Import-Module IISAdministration
  $site = Get-IISSite "Default Web Site"
  $site.Start()
  $site.Stop()
  ```

* [How to fix Firefox 59 no longer accepting my self signed SSL certificate on .dev virtualhost](https://superuser.com/q/1303396/180163)

  1. Go to `about:config`
  2. Set `security.enterprise_roots.enabled` to **`true`**


* [What's the difference between IISAdministration and WebAdministration](https://stackoverflow.com/q/75605271/1366033)

  Use the newer `IISAdministration` where possible

  * [`IISAdministration` Module](https://docs.microsoft.com/en-us/powershell/module/iisadministration/?view=windowsserver2022-ps)
  * [`WebAdministration` Module](https://docs.microsoft.com/en-us/powershell/module/webadministration/?view=windowsserver2022-ps)

* [Using Powershell to obtain an IIS Application Pool ProcessID](https://stackoverflow.com/a/76583052/1366033)

  Use [`appcmd.exe`](https://learn.microsoft.com/en-us/iis/get-started/getting-started-with-iis/getting-started-with-appcmdexe)

  ```ps1
  C:\Windows\System32\inetsrv\appcmd list wp /apppool.name:"testSite1" /text:WP.NAME
  ```
