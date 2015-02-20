# website-2015
That's my personal web site i will publish soon.

#How to install

Install Xcode

```
xcode-select --install
```

Install Homebrew

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Check installation

```
brew doctor
```

Make Homebrew visible globally on the system

```
export PATH="/usr/local/bin:$PATH"
```

Install NodeJS

```
brew install node
```

Install [GruntJS][gruntjs] globally

```
npm install -g grunt-cli
```

Install [Jekyll][jekyll]

```
gem install jekyll
```

#How to run Jekyll

Run this command from the root folder of the repo:

```
jekyll serve
```


#How to run Frontsize

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

[jekyll]: http://jekyllrb.com
[frontsize]: https://github.com/ideatosrl/frontsize-sass
[gruntjs]: http://gruntjs.com
