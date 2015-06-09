# website-2015
That's my personal web site i will publish soon.

#How to install

Install [Xcode][xcode]

I've used Xcode `6.3.2`

```
xcode-select --install
```

Install [Homebrew][brew]

I've used ruby `2.0.0` and brew `0.9.5`

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Check installation

```
brew doctor
```

Make [Homebrew][brew] visible globally on the system

```
export PATH="/usr/local/bin:$PATH"
```

Install [NodeJS][nodejs]

I've used node `0.12.0`

```
brew install node
```

Install [GruntJS][gruntjs] globally

I've used grunt `0.4.5` and grunt cli `0.1.13`

```
npm install -g grunt-cli
```

Install [Jekyll][jekyll]

I've used Jekyll version `2.4.0`

```
gem install jekyll
gem install jekyll-exiftag
```

#How to run Jekyll

Run this command from the root folder of the repo:

```
jekyll serve --watch
```


#How to run Frontsize

Install node modules from the project's root folder

```
npm install
```

If it has permission problems try

```
sudo npm install
```

Run one of these commands from the root folder of the repo:

```
grunt watch:assets
grunt watch:frontsize
grunt watch:frnAssets
grunt watch:autoprefix
grunt watch:autoAssets
grunt watch:all
grunt assets
grunt frontsize
grunt frnAssets
grunt autoprefix
grunt autoAssets
grunt all
```

To see more on what these scripts do checkout `Gruntfile.js` on the root folder of the repo.

[Jekyll][jekyll] and [Frontsize][frontsize] needs to run on different Terminal tabs to work at the same time.

[frontsize]: https://github.com/ideatosrl/frontsize-sass
[gruntjs]:   http://gruntjs.com
[jekyll]:    http://jekyllrb.com
[nodejs]:    http://nodejs.org
[xcode]:     https://developer.apple.com/xcode/
[brew]:      http://brew.sh
