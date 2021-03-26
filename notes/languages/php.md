# PHP

> PHP is a popular general-purpose scripting language that is especially suited to web development

[PHP: Hypertext Preprocessor](https://www.php.net/)


## Docs

* [Getting Started](https://www.php.net/manual/en/tutorial.firstpage.php)
* [Language Reference](https://www.php.net/manual/en/langref.php)

## Syntax

> A PHP script starts with `<?php` and ends with `?>`

```php
// tags
<?php echo 'hello world' ?>
// short echo tag
<?= 'hello world' ?>
```

## Server

[Run PHP Web Server from CLI](https://stackoverflow.com/a/66791368/1366033)

```bash
php -S localhost:2222
```

## VS Code

* [PHP Programming with Visual Studio Code](https://code.visualstudio.com/docs/languages/php)
* Extensions
  * [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
  * [PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)
  * [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug)
* Articles
  * [Setup VS Code for Efficient PHP development](https://blog.theodo.com/2019/07/vscode-php-development/)
  * [Setting up a PHP development environment using Visual Studio Code](https://medium.com/@MisterKevin_js/setting-up-a-php-development-environment-using-visual-studio-code-and-xampp-on-windows-66b6bcf1e566)

## Composer

[Composer](https://getcomposer.org/)

> A Dependency Manager for PHP


```bash
php composer.phar install
```



## XDebug

> Xdebug is an extension for PHP, and provides a range of features to improve the PHP development experience.

[Xdebug](https://xdebug.org/)

## Dinkly

[dinkly](https://github.com/lewsid/dinkly) - The biggest little PHP framework


## Questions

* [PHP, $this->{$var} — what does that mean?](https://stackoverflow.com/q/16408037/1366033)

  [Variable variables](https://www.php.net/manual/en/language.variables.variable.php)

    ```php
    $this->a = "hello";
    $this->b = "hi";
    $this->val = "howdy";

    $val = "a";
    echo $this->{$val};  // outputs "hello"

    $val = "b";
    echo $this->{$val};  // outputs "hi"

    echo $this->val;     // outputs "howdy"
    echo $this->{"val"}; // outputs "howdy"
    ```
