Imports System.Runtime.CompilerServices

Namespace Utilities

    Public Module Utilities

        <Extension>
        Public Function IsActive(html As HtmlHelper, control As String, action As String) As String
            Dim routeData = html.ViewContext.RouteData

            Dim routeAction = CStr(routeData.Values("action"))
            Dim routeControl = CStr(routeData.Values("controller"))

            ' both must match
            Dim returnActive = control = routeControl AndAlso
                               action = routeAction

            Return If(returnActive, "active", "")
        End Function



    End Module
End Namespace