# PHP

> PHP is a popular general-purpose scripting language that is especially suited to web development

[PHP: Hypertext Preprocessor](https://www.php.net/)


## Docs

* [Getting Started](https://www.php.net/manual/en/tutorial.firstpage.php)
* [Language Reference](https://www.php.net/manual/en/langref.php)

* **Types**
  * [Type declarations](https://www.php.net/manual/en/language.types.declarations.php)

* **Classes and Objects**
  * [Visibility](https://www.php.net/manual/en/language.oop5.visibility.php)

* **Functions**
  * [Returning values](https://www.php.net/manual/en/functions.returning-values.php)

* **Variable Handling Functions**
  * [`var_dump`](https://www.php.net/manual/en/function.var-dump.php) - Dumps information about a variable

* **Error Handling Functions**
  * [`error_log`](https://www.php.net/manual/en/function.error-log.php) - Send an error message to the defined error handling routines

* **Control Structures**
  * [`include`](https://www.php.net/manual/en/function.include.php)
  * [`require`](https://www.php.net/manual/en/function.require.php)

* **Function Reference**

  * Array Functions

    * [`array_filter`](https://www.php.net/manual/en/function.array-filter.php)

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
    * [bmewburn/vscode-intelephense](https://github.com/bmewburn/vscode-intelephense)
  * [PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense)
    * [felixfbecker/vscode-php-intellisense](https://github.com/felixfbecker/vscode-php-intellisense)
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


* Difference between `isset` vs `array_key_exists`

  * [What's the difference between isset() and array_key_exists()?](https://stackoverflow.com/q/3210935/1366033)
  * [What's quicker and better to determine if an array key exists in PHP?](https://stackoverflow.com/q/700227/1366033)


* [Difference between "elseif" vs "else if"](https://stackoverflow.com/q/3662412/1366033)

  They're pretty much the same


* [Difference between require vs include vs use](https://stackoverflow.com/q/2418473/1366033)

  * Use `require_once()` to load ***dependencies*** (classes, functions, constants).
  * Use `require()` to load ***template-like files***.
  * Use `include_once()` to load ***optional dependencies*** (classes, functions, constants).
  * Use `include()` to load ***optional template-like files***.

* [Difference between public, private, and protected?](https://stackoverflow.com/q/4361553/1366033)

  * `public` scope to make that property/method available from anywhere, other classes and instances of the object.
  * `private` scope when you want your property/method to be visible in its own class only.
  * `protected` scope when you want to make your property/method visible in all classes that extend current class including the parent class.

* [Nullable return types in PHP7](https://stackoverflow.com/q/33608821/1366033)

  ```php
  function nullOrString(int $foo) : ?string
  {
      return $foo%2 ? "odd" : null;
  }
  ``


* [How to select the whole variable name including `$` in Visual Studio Code in PHP?](https://stackoverflow.com/q/55931937/1366033)

  ```json
  "[php]": {
    "editor.wordSeparators": "`~!@#%^&*()-=+[{]}\\|;:'\",.<>/?"
  },
  ```


* [Class Constructor `__construct`](https://stackoverflow.com/q/455910/1366033)

  ```php
  class Database {
    protected $dbName;

    public function __construct ($DbName) {
      $this->dbName = $DbName;
    }
  }

  $db = new Database ('database_name');
  ```

* [PHP return type](https://stackoverflow.com/q/5104564/1366033)

  * [Type declarations](https://www.php.net/manual/en/language.types.declarations.php)
  * [Returning values](https://www.php.net/manual/en/functions.returning-values.php)

  ```php
  function function_name(): return_type {
      // some code
      return $var // Has to be of type `return_type`
  }
  ```


* [Array of PHP Objects](https://stackoverflow.com/q/8612190/1366033)

  ```php
  class Car
  {
      public $color;
      public $type;
  }

  $myCar = new Car();
  $myCar->color = 'red';
  $myCar->type = 'sedan';

  $yourCar = new Car();
  $yourCar->color = 'blue';
  $yourCar->type = 'suv';

  $cars = array($myCar, $yourCar);

  foreach ($cars as $car) {
      echo 'This car is a ' . $car->color . ' ' . $car->type . "\n";
  }
  ```

* [Add type to Class Property](https://stackoverflow.com/q/37254695/1366033)

  * 7.4+

    ```php
    class Person
    {
        public string $name;
    }
    ```

  * 7.3

    ```php
    class Person
    {
        /**
          * @var string
          */
        public $name;
    }
    ```

* [Find entry by object property from an array of objects](https://stackoverflow.com/q/4742903/1366033)


  ```php
  $neededObject = array_filter(
      $arrayOfObjects,
      function ($e) use ($searchedValue) {
          return $e->id == $searchedValue;
      }
  );
  ```

