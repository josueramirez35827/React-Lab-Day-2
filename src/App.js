import './App.css';

import Header from './Components/header';
import Book from './Components/book';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Book
        title="Lord of the Flies"
        author="William Golding"
        description="At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate. This far from civilization they can do anything they want. Anything. But as order collapses, as strange howls echo in the night, as terror begins its reign, the hope of adventure seems as far removed from reality as the hope of being rescued."
        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340919381l/84943._SY475_.jpg" />


      <Book
        title="All Quiet on the Western Front"
        author="Erich Maria Remarque"
        description="I am young, I am twenty years old; yet I know nothing of life but despair, death, fear, and fatuous superficiality cast over an abyss of sorrow. . . .

        This is the testament of Paul Bäumer, who enlists with his classmates in the German army during World War I. They become soldiers with youthful enthusiasm. But the world of duty, culture, and progress they had been taught breaks in pieces under the first bombardment in the trenches.
        
        Through years of vivid horror, Paul holds fast to a single vow: to fight against the principle of hate that meaninglessly pits young men of the same generation but different uniforms against one another . . .  if only he can come out of the war alive.
        "
        image="https://images-na.ssl-images-amazon.com/images/I/51UVVOhk1sL._SX302_BO1,204,203,200_.jpg" />

      <Book
        title="Aristotle and Dante Discover the Secrets of the Universe"
        author="Benjamin Alire Sáenz"
        description="Aristotle is an angry teen with a brother in prison. Dante is a know-it-all who has an unusual way of looking at the world. When the two meet at the swimming pool, they seem to have nothing in common. But as the loners start spending time together, they discover that they share a special friendship—the kind that changes lives and lasts a lifetime. And it is through this friendship that Ari and Dante will learn the most important truths about themselves and the kind of people they want to be."
        image="https://images-na.ssl-images-amazon.com/images/I/51ACA9AgQhL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
      <Footer />
    </div>
  );
}

export default App;
