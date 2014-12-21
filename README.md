piano-led
=========

tl;dr, a web based piano that makes LEDs blink (in the server, through [Arduino](http://www.arduino.cc/))

I set this up, exposed my dev server through a localtunnel, and [tweeted](https://twitter.com/srikrishnaholla/status/546371120346062848) it

<blockquote class="twitter-tweet" lang="en"><p>Short term offer: go to <a href="http://t.co/07DgwEaz6p">http://t.co/07DgwEaz6p</a> and play the piano (keys a-k) and look at the notes making LEDs glow <a href="https://twitter.com/nodebots">@nodebots</a></p>&mdash; Shrikrishna Holla (@srikrishnaholla) <a href="https://twitter.com/srikrishnaholla/status/546371120346062848">December 20, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

And forgot about it after some time. I started taking a video and after some time, realized I wasn't the only guy playing it (starts at 0:58). You can see after 1:08 that it continues playing even after I stop. That's someone on the public internet lighting up the LEDs using the link I had tweeted.

[Video link](http://youtu.be/i91jCQa1jWQ)
<iframe width="560" height="315" src="//www.youtube.com/embed/i91jCQa1jWQ" frameborder="0" allowfullscreen></iframe>

Running it yourself
===================
- Prepare the circuit according to the [second exercise on node-ardx](http://node-ardx.org/exercises/2)
- Clone this repo
- Run ```npm install```
- Run the server ```DEBUG=piano-led* npm start```
- Download [ngrok](https://ngrok.com), start a tunnel on PORT 3000 (or whichever one you are using)
- Go to the URL, "Start broadcasting" will be disabled. Enable it using your epic JS skills, and start broadcasting
- Point your webcam to the circuit and share the URL with your friends, and wait for epicness to unfurl

Why? Because we can!

Thanks to
=========
- [node-ardx](http://node-ardx.com)
- [johnny-five](https://github.com/rwaldron/johnny-five)
- [javascript-piano](https://github.com/mrcoles/javascript-piano)
- [RTCMultiConnection demo](https://github.com/muaz-khan/RTCMultiConnection)
