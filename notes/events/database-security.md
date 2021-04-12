---
title: SQL Server Database Security Best Practices for the Vigilant DBA
date: 2015-06-22
---


[SQL Server Database Security Best Practices for the Vigilant DBA](http://www.meetup.com/VTCode/events/223946011/)

Hugo Shebbeare, SQL MVP 2010

http://www.sqlservercentral.com/blogs/hugo/
https://www.simple-talk.com/author/hugo-shebbeare/

[SQL PASS (Professional Association of SQL Server)](http://www.sqlpass.org/) chapter

2016 CTP - Features Frozen
CTP - Community Technology Preview
RTM - Release to Manufacturing

* SQL Server 2012
  * Fixed Server Roles
    * public
    * sysadmin
      * cannot deny any rights
* SQL Server 2014
  * CONNECT to ANY DATABASE (before needed a cursor)
  * Impersonate any login
  * Select all user securables
  * Alter any database event session
* SQL Server 2016
  * Flexible Server Roles (no longer fixed)
  * AlwaysEncrypted
    * Before: through Port 443 (SSL)
    * Now: done at schema level / column level
    * **How does this work with tools like RedGate's SQL Compare?**
    * Create
      * New Column Master Key Definition
      * Generate Self Signed Key

[Getting Started With Always Encrypted](http://blogs.msdn.com/b/sqlsecurity/archive/2015/06/04/getting-started-with-always-encrypted.aspx)

```sql
CREATE TABLE [dbo].[Patients](
  [PatientId] [int] IDENTITY(1,1),
  [SSN] [nvarchar](11)
   COLLATE Latin1_General_BIN2
   ENCRYPTED WITH (ENCRYPTION_TYPE = DETERMINISTIC,
   ALGORITHM = 'AEAD_AES_256_CBC_HMAC_SHA_256',
   COLUMN_ENCRYPTION_KEY = CEK1) NOT NULL,
  [FirstName] [nvarchar](50) NULL,
  [LastName] [nvarchar](50) NULL,
  [MiddleName] [nvarchar](50) NULL,
  [StreetAddress] [nvarchar](50) NULL,
  [City] [nvarchar](50) NULL,
  [ZipCode] [int] NULL,
  [State] [nvarchar](50) NULL
 )
 GO
```

![screenshot](http://i.imgur.com/UzkVB9q.png?1)


## Guidelines

* Create your internal hardening documentation, and have external confirmation
* Review privileged account reports, restrict to granular rights, DDL audit reports
* Isolate Service Accounts (Flexible Server Roles)
  * Types
    * MSA -
    * VSA - Virtual Service Account
    * AD - Active Directory
  * Permissions
    * full text
    * database services
    * analysis
* Encryption underutilised, even bitLocker can be leveraged for backups with little overhead


* Apply Granular Security at every level
* Disable SA - then rename (because someone will try to re-enable)
  * Disabled -> still has access (to internal engine), but you can't log on
  * Except on replication servers (can't disable)

```sql
-- Check for passwords that are null or the same name as account
SELECT name, type_desc, create_date, modify_date,
password_hash
FROM sys.sql_logins
WHERE PWDCOMPARE('',password_hash)=1;
--WHERE PWDCOMPARE(name,password_hash)=1;
```

## Flexible Server Roles

```sql
DENY IMPERSONATE ON SvcAccountName to DBAS
```

* New server role example:
  * **Name** - Monitoring
  * **Owner** - securityadmin
  * **Permissions**
    * Bulk Operations - Grant
    * Alter ... - Deny

## GUI - Create Script

[Million Dollar System From IBM - Guardium](https://www.ibm.com/security/data-security/guardium)

* Logs sit on separate server

* Remove all but two SA members

* Remove Built in Administrators

* Use TCP/IP only (named pipes usually not necessary)

Check which services are used and disable unnecessary or unused

```sql
SELECT * FROM sys.dm_server_services
```

Logon Auditing - BOTH failed and successful logins
Beware of space - can be <30-40GB for busy prod server (VM might be more easily scalable)

* Clean out logins and Users on a regular basis
  * Find logins that are matched to AD accounts that no longer exist (script)

```sql
-- see errors
xp_readerrorlog
-- see available logins (same as SSMS > db > Security > Logins, but you can do remotely)
xp_logininfo
```

> **Principle of Least Privilege**

* Group logically with schemas - don't want people stealing data and selling it
  * Sales
  * dbo

* More Info / Reading
  * [SQL Server Security Cookbook](http://www.amazon.com/dp/1849685886)
  * [Securing SQL Server by Denny Cherry](http://www.amazon.com/dp/1597499471)

```sql
GRANT SELECT On Object::dbo.Employee(FirstName, LastName) To HumanResourcesAssistant;
DENY SELECT On Object::dbo.Employee(SSN)
```

Allows you to grant elevated privileges temporarily through to objects via Stored Procs

```sql
EXECUTE AS caller/OWNER/SELF
REVERT
```

**Row-Level Security** (i.e. first three months of data / people without SSN) - without having to create a new object or a view

## **Business Case to Executives**

Fines for data vulnerability ($$)

[How to Avoid the 'Abuse' of SysAdmin by Applying User Defined Roles in SQL 2012 (and keep Exec.s and Auditors Happy)](http://dbhive.blogspot.com/2013/09/how-to-avoid-abuse-of-sysadmin-by.html)

### Patching

**GDR** - General Distribution Releases
**QFE** - Quick Fix Engineering

Takes down production - but if you're not ahead of "known" vulnerabilities - that's pretty bad

Activity Monitor

sp_who2

Right click on the instance - Activity Monitor

Learn what's normal activity - learn what's not normal
