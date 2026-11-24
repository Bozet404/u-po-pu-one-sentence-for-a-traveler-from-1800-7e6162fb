// One Sentence for a Traveler from 1800.
//
// The program writes a single sentence, at most 200 characters, that
// explains the modern internet to someone who has just stepped out of
// the year 1800, using only things a person of that year already knows:
// a road, a post office, a library, a letter, a book.
//
// The sentence is written to /output/entry.txt, the path the sealed
// gate scorer reads. The output directory is created only when it is
// missing; it is never removed.

import { mkdirSync, writeFileSync } from "node:fs";

// One road, lined with every library and post office in the world: the
// traveller already knows all three things the judge names, a road, a
// post office, a library. Asking and receiving at once is the search;
// a letter delivered before the ink dries is the sending, and the
// whole of the internet fits in that one picture.
const SENTENCE =
  "Imagine one road lined with every library and post office in the world, where any book or letter you ask for is in your hands at once, and any letter you write is delivered before the ink dries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
