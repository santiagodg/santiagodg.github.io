August 4th, 2020.
11:47 AM.

Hello,

This is my first devlog.
I'm currently working on a single page web app called Color 257.
The technologies used include MongoDB, Express, React and Node.

The objective of this series of documents is to verbalize my thoughts during
the process of development of the applicaction.

Some work has already been done on Color 257, including UI mock-ups, some
implementation of the backend API (excluding security), static React
components that currently display hardcoded data, user registration and
log in, and handling sessions with cookies (still buggy).

The past days I've tried to make progress on the main feature of the app:
to create colors and gradients in order to name and publish them.

Based on work done in the past, I had already developed a random color
generator in JavaScript which I started using in this project to speed up
development. My module proved to be unreliable and lacked some important
features needed so I decided to fallback on an npm package called `color`,
which seems to be up to the task.

For some reason I decided to implement a `linearGradient` function in
JavaScript which basically replicates the same CSS API for the
`linear-gradient` function, taking reference from the w3 docs. This task
was way too big for what I needed, so a couple hours were wasted on that,
I didn't finish it either.

To try and prevent this sort of mistakes happening because of poor planning,
I decided to start planning and writing this devlog, to learn from mistakes,
document progress and verbalize ideas.

I hope readers enjoy this series, learn from it and share any thoughts
to improve it.

See ya,

Santiago Díaz Guevar

