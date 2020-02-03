---
title: Automatically Increment Minimum Required Version in a ClickOnce Application
tags: [post, ClickOnce, Deployment, "MS Build"]
date: 2013-05-07
postID: 7067085716005228928
---

### Introduction

ClickOnce deployments make publishing .NET applications simple and easy.  One nice feature is forcing the user to update to the latest available version.  This can be very important on sensitive applications that require any potential fixes or patches to be immediately sent to the users.

One way to do this is to set the minimum required version on the publish page to the current version.  ClickOnce then knows to automatically download the latest version whenever a user goes to run the application.  The problem with this can be that you have to remember to increment the value every time you do a publish.  This post will make life easier by automating the increase of the minimum required version every time you preform a publish. 

We'll do so by adding an [**MSBuild**][msbuild] event to the project.  This post assumes you don't have any experience with MS build and will introduce you to the relevant concepts; if you're already familiar with that, feel free to jump ahead to [Step 6][step6] and copy and paste the code into your .proj file.

### Introduction to Project Editor

1. First, in solution explorer, right click on your project and select unload project

  ![unload project](https://i.imgur.com/cIbF2UN.png)
    
2. Once the project has become unavailable, right click again and select edit `[project_name].csproj`  

  ![Edit csproj](https://i.imgur.com/AeFvWN8.png)  
  *Note*: This unlocks full set of IntelliSense of all the MSBuild features

### Introduction to MS Build

3. MS Build notation uses properties with key/value pairs to extract information.  We'll use the notation `$(key)` in the implementation section to reference the .proj elements in Step 4.

    *ex*. Using the property name as an alias, you can use `$(OutputPath)` to obtain the value for the element `<OutputPath>.\bin</OutputPath>`. So in this case `$(OutputPath) = .\bin`

4. We’ll use the following properties generated for a ClickOnce deployment

    ```xml
    <MinimumRequiredVersion>1.0.0.6</MinimumRequiredVersion>  
    <ApplicationRevision>7</ApplicationRevision>  
    <ApplicationVersion>1.0.0.%2a</ApplicationVersion>  
    ```

    The `ApplicationVersion` element specifies the build number.  The last value of `%2a` is set by Visual Studio when the option to "*Automatically increment revision with each publish*" is checked on.  In that case, it substitutes the `%2a` placeholder with whatever value is in the `ApplicationRevision` element
    
    The `MinimumRequiredVersion` element is what we'd like to set with each publish so that it automatically increments as well.

5. MSBuild Tasks can be specified in the .proj file and invoked during a build event.

    [`FormatVersion`][FormatVersion] is a built-in task for .NET 4.0 and later that formats the ApplicationVersion and ApplicationRevision into a single version number

### Implementation

6. Copy and Paste the following code into the opened project file as a child element to the root `<Project>` element: 

    ```xml
    <Target Name="AutoSetMinimumRequiredVersion"
            BeforeTargets="GenerateDeploymentManifest">
      <FormatVersion Version="$(ApplicationVersion)" 
                    Revision="$(ApplicationRevision)">
        <Output PropertyName="MinimumRequiredVersion" 
                TaskParameter="OutputVersion"  />
      </FormatVersion>
      <FormatVersion Version="$(ApplicationVersion)" 
                    Revision="$(ApplicationRevision)">
        <Output PropertyName="_DeploymentBuiltMinimumRequiredVersion"
                TaskParameter="OutputVersion"  />
      </FormatVersion>
    </Target>
    ``` 

    This code will take ApplicationVersion and ApplicationRevision as parameters in the Format Version task and will save the output by overwriting the MinimumRequiredVersion with the full publish version

7. Save and reload your project.  Every ClickOnce deployment will now automatically update without a prompt with the ability to skip.

[msbuild]: http://msdn.microsoft.com/en-us/library/wea2sca5(v=vs.90).aspx
[step6]: #implementation
[FormatVersion]: http://msdn.microsoft.com/en-us/library/ff595162.aspx
