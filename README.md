[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/agungtriyonode/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/agungtriyonode/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

# World News — Tuesday, 24 November 2026

A newspaper front page that sums up the world's news of Tuesday, 24 November 2026 in one image: Jensen Huang reinstated as Nvidia chief executive, sending the shares up 31% in a day; NATO sending an AWACS surveillance aircraft to Poland after three Russian missiles came down on its soil; Ukraine sinking a Russian warship in a Libyan port; and FIFA naming the hosts of the 2031 and 2035 Women's World Cups. Built for the [make.fun bounty "Sum up 24 November's world news in one image"](https://make.fun/bounty/news-image-20261124).

## Run

Node 22. The program copies `entry.png` to the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes the same bytes on every run, with no network access. The image is 1024×1024 and under 1 MiB.
