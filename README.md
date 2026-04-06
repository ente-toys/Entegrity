<p align="center">
  <img src="data-breach/assets/d1.svg" alt="Ducky Knight" width="240" />
</p>

<h1 align="center">Entegrity</h1>

<p align="center">
  <b>Your secret is locked inside a game. Fight through 5 levels to unlock it.</b>
</p>

<p align="center">
  <a href="https://entegrity.gg">Play it live → entegrity.gg</a>
</p>

---

## What is this?

**Entegrity** is a secret messenger disguised as a 2D platformer.

You upload a photo or write a letter. We encrypt it and hand you a link. When your friend opens that link, they don't just *see* the secret — they have to **fight for it**. Five levels. A duck with a sword. Enemies inspired by everything wrong with the internet.

No accounts. No servers storing your stuff. The secret lives entirely in the URL. Wild, right?

---

## How It Works

<p align="center">
  <img src="data-breach/assets/readme image 2.svg" alt="How it works" width="600" />
</p>

**You (the sender):**
1. Upload a photo or type a secret letter
2. It gets encrypted instantly in your browser
3. You get a shareable link

**Them (the recipient):**
1. Click the link
2. Play 5 levels as a duck knight
3. Each level beaten = one piece of the decryption key
4. Beat all 5 = secret unlocked

That's it. No app downloads. No sign-ups. Just vibes and violence (the pixelated kind).

---

## The Levels

You play as a **duck knight** — sword, dash, parry, bad attitude — fighting through 5 levels themed around internet privacy nightmares.

| # | Level | You're Fighting | Why They're Evil |
|---|-------|-----------------|------------------|
| 1 | **Cookie Caves** | Cookie Monsters | They remember everything you do |
| 2 | **Tracker Tunnels** | Tracker Bots | Lasers. Because of course trackers have lasers. |
| 3 | **Ad Mines** | Ad Bots | Pop-ups but they literally fly at your face |
| 4 | **Phishing Depths** | Phishers | They mess with your controls. Rude. |
| 5 | **Algorithm Core** | The Algorithm | 3-phase boss fight. It knows your patterns. |

Each level ends at a **vault door**. Clear the enemies → door opens → grab your key fragment.

---

## Controls

| Do the thing | Press the button |
|-------------|-----------------|
| Move | `Arrow Keys` / `WASD` |
| Jump | `Up` / `W` |
| Stab | `Z` / `J` |
| Dash | `X` / `K` |
| Parry | `C` |

---

## The Nerdy Bit (for the curious)

<details>
<summary>How's the encryption work?</summary>

- Your secret is encrypted with **AES-256-GCM** (military-grade, not that the military is playing duck games)
- Key is derived using **PBKDF2** with 100k iterations
- A random seed generates a 5-character game key — one character revealed per level
- Everything happens in your browser. Zero servers involved. We literally cannot see your secret even if we wanted to.

</details>

<details>
<summary>What's the tech stack?</summary>

| What | With What |
|------|-----------|
| Game Engine | **Phaser 3** |
| Encryption | **Web Crypto API** |
| Frontend | Plain HTML / CSS / JS |
| Art | Hand-drawn SVGs |
| Hosting | Static files — works literally anywhere |

No build step. No bundler. No framework. Just HTML that goes hard.

</details>

<details>
<summary>Project structure</summary>

```
├── index.html              # The whole app (everything lives in the URL)
├── data-breach/            # Extended version with shorter links & auto-expiry
│   ├── index.html
│   ├── assets/             # 50+ hand-drawn sprites & backgrounds
│   └── server.js
├── server.js               # Simple local dev server
├── CNAME                   # entegrity.gg
└── package.json
```

</details>

---

## Run It Yourself

```bash
git clone https://github.com/ente-toys/Entegrity.git
cd Entegrity
open index.html
```

That's literally it. Or if you want the fancy version:

```bash
npm install
node server.js
# → http://localhost:3000
```

---

## Why?

Nobody reads privacy policies. But everybody plays games.

We thought: what if encryption wasn't boring? What if you had to *earn* your decryption key by defeating the very things that threaten your privacy online?

So we built a duck with a sword and called it security.

---

<h3 align="center">Built by</h3>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/heisenbergg-labs">
        <img src="https://github.com/heisenbergg-labs.png?size=80" width="80" height="80" style="border-radius:50%" alt="heisenbergg" />
        <br />
        <b>heisenbergg</b>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Antara-Paul04">
        <img src="https://github.com/Antara-Paul04.png?size=80" width="80" height="80" style="border-radius:50%" alt="Antara" />
        <br />
        <b>Antara</b>
      </a>
    </td>
  </tr>
</table>
