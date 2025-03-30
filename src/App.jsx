import { useState } from 'react'
import reactLogo from './assets/laufey.jpeg'
import viteLogo from '/vite.svg'
import './App.css'


const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: true },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'red' : 'green'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}


const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/A_Farewell_to_Arms_%281929%29_cover.jpg/440px-A_Farewell_to_Arms_%281929%29_cover.jpg',
  width: '264',
  height: '378'
};

function Bookshelf() {
  return (
    <div>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

function MagicButton(){
  return(
    <div>
      <h3> This is a Magic Button</h3>
    <button>Magic</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ZineRack/>
      <Bookshelf/>
      <MagicButton/>
    </>
  )
}

export default App
