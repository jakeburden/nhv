┌─────────────────────────┐
│                         │
│       Slack bots!       │███
│                         │███
│                         │███
│                         │███
│                         │███
└─────────────────────────┘███
   ███████████████████████████
   ███████████████████████████


# Jake Burden - Digital Surgeons

> @jekrb

> @o91tsjBgL0l0zs475aRWYSAXFxvirZS7VrXmirY/msI=.ed25519

   
---
┌─────────────────────────┐
│                         │
│   Bots are autonomous   │███
│   actors that do        │███
│   things on your behalf │███
│                         │███
│                         │███
└─────────────────────────┘███
   ███████████████████████████
   ███████████████████████████
   
---
┌─────────────────────────┐
│                         │
│   We can make           │███
│   bots that do things   │███
│   as you on Slack!      │███
│   (Using their API)     │███
│                         │███
└─────────────────────────┘███
   ███████████████████████████
   ███████████████████████████
   
---
┌─────────────────────────┐
│                         │
│   - It's JS!            │███
│   - It's data           │███
│   - It's fun            │███
│                         │███
└─────────────────────────┘███
   ███████████████████████████
   ███████████████████████████

---
┌─────────────────────────┐
│                         │
│  Websocket!             │███
│                         │███
│                         │███
│                         │███
│                         │███
└─────────────────────────┘███
   ███████████████████████████
   ███████████████████████████
   
---
┌─────────────────────────┐
│                         │
│  Streams!               │███
│                         │███
│                         │███
│                         │███
│                         │███
└─────────────────────────┘███
   ███████████████████████████
   ███████████████████████████
   
---
┌─────────────────────────┐
│                         │
│  Early days of Unix     │███
│                         │███
│                         │███
│                         │███
│                         │███
└─────────────────────────┘███
   ███████████████████████████
   ███████████████████████████
   
---
┌─────────────────────────────────┐
│                                 │
│  We should have some ways of    │███
│  connecting programs like       │███
│  garden hose--screw in another  │███
│  segment when it becomes        │███
│  necessary to massage data in   │███
│  another way. This is the way   │███
│  of IO also. Doug McIlroy. 1964 │███
└─────────────────────────────────┘███
   ███████████████████████████████████
   ███████████████████████████████████
   
---
  
There is a deeper, platonic abstraction,
where a streams is just an array in time,
instead of in space.
And all the various streaming "abstractions"
are just crude implementations of this abstract idea.

- https://github.com/pull-stream/pull-stream#design-goals--rationale

---

```bash
$ <tragedy.txt.gz gunzip | grep -i art | wc -l
```
---
```js
fs.createReadStream('tragedy.txt')
  .pipe(zlib.createGunzip())
  .pipe(filter(/art/i))
  .pipe(lineCount())
```
---

### in abstract

```js
slack.pipe(bot).pipe(slack)
```
