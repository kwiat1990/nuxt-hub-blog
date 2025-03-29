import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Get current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const contentDir = join(__dirname, "../content");

function makeDir(name: string) {
  const dir = join(contentDir, name);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  return dir;
}

function makeJSON(collection: string[], path: string) {
  for (const item of collection) {
    const content = { name: item };
    writeFileSync(
      join(path, `${item.toLowerCase()}.json`),
      JSON.stringify(content, null, 2),
    );
  }
}

const categories = [
  "Programming",
  "Accessibility",
  "Languages",
  "Testing",
  "Security",
];
makeJSON(categories, makeDir("categories"));

const tags = ["Vue", "Nuxt", "Javascript", "Web", "CSS", "HTML"];
makeJSON(tags, makeDir("tags"));

for (let i = 1; i <= 10; i++) {
  const postContent = `---
title: Blog Post ${i}
description: This is blog post number ${i}
date: ${new Date(Date.now() - i * 86400000).toISOString().split("T")[0]}
tags: [${tags
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .join(", ")}]
category: ${categories[Math.floor(Math.random() * categories.length)]}
---

# Blog Post ${i}

This is the content of blog post ${i}.

## Saxa figuris causas

Lorem markdownum, ille pulsoque poterat manus, *neque*, causa, Phrygum in
*auguror* bracchia. Et [qui habent](http://robora.org/viro-ardesceret.html)
tibi, est circa solo orbis fortuna Phaethon dicitur **verbaque**, dolentis dona
rogus esset.

- Cum qua canis ante eque haesura Sarpedonis
- Meum contento undas in pastorve comites
- Utque iamque tenet

Mulcebat lapsus? Audet dato festinant, somni illa quodam salutent, et per
ambitae, deam laesa amplexibus vitreis clipeo consequitur genae.

## Ille casa sibi

Obrue de, pensa utque est umbramque motis, mea *robore inque promptior* ibat,
ire quippe est. Dum *an data*, nata quo commisisse Creten tu at taedia, vires?

See [inline link](/) for more information.

\`def fibonacci(n):\`

Sola coniuge; inclusit [virgo Tritona](http://potuissequisquis.com/) Euboicam,
Cumarum ipsum telluris! Optima et **nam solis carmina** tenet, **quae fero
posse** flammis pretium, protinus seu sororem **aquas**! Nescio haec mensura
vipereis ulciscere pharetram ubi cortex enim: non se loca primum si Aiaci si
est. Deposuit tuta morte, non, in cauda sanguine pallebant inter capillos.
Cruorem dum sic feruntur cinximus: factus datam: primis *columbae*.

Quid cum cum dicit ieiunia omnem laudavit cannis. Deo Pelion; mox [scit
sub](http://superas-pavefactaque.org/) minitantiaque **quod miles**, armis
Doridaque pauca.
`;

  writeFileSync(join(makeDir("articles"), `${i}.blog-${i}.md`), postContent);
}

console.log("Content files generated successfully!");
