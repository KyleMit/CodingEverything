
# [Homebrew](http://brew.sh/)

[Homebrew Github](https://github.com/Homebrew/homebrew)

[homebrew totally broken on macOS Sierra](https://github.com/Homebrew/brew/issues/2659)

```bash
brew update-reset
brew update
```

[What is the difference between `brew` and `brew cask`?](https://apple.stackexchange.com/q/125468/74706)

[What does brew tap mean?](https://stackoverflow.com/q/34408147/1366033)

[Brew Tap](https://docs.brew.sh/Taps)

```bash
brew tap
```

* [azure/functions](https://github.com/Azure/homebrew-functions)
* [homebrew/cask](https://github.com/Homebrew/homebrew-cask)
* [homebrew/core](https://github.com/Homebrew/homebrew-core)
* [homebrew/cask-fonts](https://github.com/Homebrew/homebrew-cask-fonts)

[List of all packages installed using Homebrew](https://apple.stackexchange.com/q/101090/74706)

```bash
brew list
brew list --caskS
```

[Installing Fira Code on MacOS](https://github.com/tonsky/FiraCode/wiki/Installing#macos)
[Cask 'font-fira-code' is unavailable: No Cask with this name exists.](https://github.com/tonsky/FiraCode/issues/760#issuecomment-540860697)

```bash
brew tap homebrew/cask-fonts && brew cask install font-fira-code
```

* azure-functions-core-tools
* gdbm
* openssl
* readline
* brew-cask
* gmp
* pkg-config
* sqlite
* duti
* icu4c
* python
* xz

**Install**:
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

[**duti**](http://duti.org/)

```bash
# Install
brew install duti

# Add Duti File
touch ~/.duti

# Add rule
com.sublimetext.3 public.plain-text all
```
