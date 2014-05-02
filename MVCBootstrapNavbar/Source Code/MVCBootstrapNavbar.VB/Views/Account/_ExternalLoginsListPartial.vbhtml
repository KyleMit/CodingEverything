@Imports Microsoft.Owin.Security
@Code
    Dim loginProviders = Context.GetOwinContext().Authentication.GetExternalAuthenticationTypes()
End Code
<h4>Use another service to log in.</h4>
<hr />
@If loginProviders.Count() = 0 Then
    @<div>
        <p>
            There are no external authentication services configured. See <a href="http://go.microsoft.com/fwlink/?LinkId=313242">this article</a>
            for details on setting up this ASP.NET application to support logging in via external services.
        </p>
    </div>
Else
    Dim action As String = Model.Action
    Dim returnUrl As String = Model.ReturnUrl
    @Using Html.BeginForm(action, "Account", New With {.ReturnUrl = returnUrl}, FormMethod.Post, New With {.class = "form-horizontal", .role = "form"})
        @Html.AntiForgeryToken()
        @<div id="socialLoginList">
           <p>
               @For Each p As AuthenticationDescription In loginProviders
                   @<button type="submit" class="btn btn-default" id="@p.AuthenticationType" name="provider" value="@p.AuthenticationType" title="Log in using your @p.Caption account">@p.AuthenticationType</button>
               Next
           </p>
        </div>
    End Using
End If
