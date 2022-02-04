# How to do this (semi-properly)

##### This is a quick write-up on how this should be done, because I don't want
to do the whole thing.

## 1. Soetup the Web server

This step is simple enough. All you need to do is install `NodeJS >= v14`.

Then clone the git repo with
```shell
git clone https://github.com/ShadowGoat128134/bad-vnc-site.git
cd bad-vnc-site
```

Then initialize the server and its dependencies
```shell
npm install
git clone https://github.com/novnc/noVNC.git static/public/lib/noVNC
cd static/public/lib/noVNC
cd noVNC
npm install
cd ../../../..
```

## 2. Setup a VNC Server

This step greatly depends on your OS (hopefully it's a linux distro). If you
already have a running VNC server that correctly forwards the display then you
can skip this step.

#### Note :
The [Arch Wiki](https://wiki.archlinux.org/) is a great resource for this 
project. Specifically the following pages:

- [TigerVNC](https://wiki.archlinux.org/title/TigerVNC)
- [vncserver](https://man.archlinux.org/man/vncserver.8)



### Install TigerVNC

On Arch this is as simple as running `sudo pacman -Sy tigervnc`. On Debian or
one of it's derivatives likely you'll use `apt get`, and `yum` if your on
Fedora or RHEL.

### 3. Setup TigerVNC

If you want to forward X directly using VNC (which you do), this is how you want
to set it up.

1. First create a password for the server with `vncpassword` which stores the
password in `~/.vnc/passwd`.

2. Next edit `/etc/tigervnc/vncserver.users` to define yourself as a user.
Assuming you're using X Display 1 (:1), with username *username*
```config
:1=username
```

3. Now create a `~/.vnc/config` file, and add the following. Assuming your
desktop environment is `kde`:
```config
session=kde
geometry=1920x1080
localhost
alwaysshared
```

4. Since **tigervnc** also includes **x0vncserver**, you can use this to 
directly control your xsession
```shell
x0vncserver -rfbauth ~/.vnc/passwd
```

Now that your VNC server is running, you can move on to the next step


### 4. Connect to the VNC Server
