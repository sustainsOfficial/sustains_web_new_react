import React from "react";
import "./NotesBoard.css";

/**
 * NotesBoard — a corkboard of sticky paper notes, each with a handwritten
 * quote and an author. Fully reusable: pass your own notes via the `notes` prop.
 *
 * Usage:
 *   <NotesBoard />                       // uses default sample notes
 *   <NotesBoard notes={myNotes} />       // pass your own
 *   <NotesBoard notes={...} columns={4} /> // force a specific column count
 */

const DEFAULT_NOTES = [
  { quote: "The clocks only whisper when the wallpaper blinks.", author: "Eryx Valehart" },
  { quote: "I found a staircase folded neatly inside a thought.", author: "Isolde Marrowyn" },
  { quote: "Someone keeps rearranging the shadows before dawn.", author: "Thorne Halcyrix" },
  { quote: "The moon has been acting like it knows my name.", author: "Vesper Calderin" },
  { quote: "There is a door in the rain that only opens inward.", author: "Nyra Hollowmere" },
  { quote: "Last night, the silence wore expensive shoes.", author: "Lucan Morvane" },
  { quote: "I misplaced an hour and woke up older than expected.", author: "Elira Wrenfall" },
  { quote: "The hallway bent slightly when I told it the truth.", author: "Soren Duskmere" },
  { quote: "Even the dust seemed nervous around that envelope.", author: "Mirelle Ashwyn" },
  { quote: "A small gold key appeared where my doubt used to be.", author: "Caelum Thistledark" },
  { quote: "The mirror hesitated, which I did not appreciate.", author: "Zorren Valcroft" },
  { quote: "Some secrets arrive already half-remembered.", author: "Selene Briarvein" },
  { quote: "The garden grew quieter after the third question.", author: "Orin Blackmere" },
  { quote: "I saw the horizon flinch and decided not to mention it.", author: "Lysara Vexley" },
  { quote: "There's a language the chandeliers use after midnight.", author: "Tavian Crowhurst" },
  { quote: "The wind left a note, but the paper refused translation.", author: "Maelis Thornweave" },
  { quote: "Every locked drawer eventually opens to the ocean.", author: "Draven Quillmarsh" },
  { quote: "Something polite and ancient lives behind that blue light.", author: "Ione Raventhorn" },
  { quote: "The floorboards knew first, and they were smug about it.", author: "Alaric Noctwynd" },
  { quote: "I keep hearing thunder from completely reasonable objects.", author: "Seraphine Hollowveil" },
  { quote: "The lamplight pooled like it was hiding evidence.", author: "Kellan Frosthollow" },
  { quote: "A velvet kind of warning passed through the room.", author: "Odelia Runeweave" },
  { quote: "The stars looked arranged, not scattered, and that felt worse.", author: "Vaelin Mourngate" },
  { quote: "Whatever followed me home had excellent manners.", author: "Astris Wyrmwood" },
];

const NotesBoard = ({ notes = DEFAULT_NOTES, className = "" }) => {
  return (
    <div className={`notes-board ${className}`}>
      <section className="notes-board-grid">
        {notes.map((note, i) => (
          <article
            key={i}
            className="notes-board-note"
            style={{
              /* Stagger rotation for a hand-pinned feel */
              "--note-rotation": `${((i % 5) - 2) * 0.8}deg`,
            }}
          >
            <blockquote className="notes-board-quote">{note.quote}</blockquote>
            <cite className="notes-board-cite">— {note.author}</cite>
          </article>
        ))}
      </section>
    </div>
  );
};

export default NotesBoard;
