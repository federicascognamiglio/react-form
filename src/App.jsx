import articles from "./data/articles";
import ArticlesForm from './components/AppArticles';
import AppArticles from './components/AppArticles';

function App() {

  return (
    <>
      {/* Header */}
      <header>
        <h1 className='text-center pt-4'>ARTICLES</h1>
      </header>
      {/* Main */}
      <main className='container'>
        {/* Form Section */}
        <section>
          <h3 className="pt-4">Add Article</h3>
          <AppArticles />
        </section>
      </main>
    </>
  )
}

export default App
