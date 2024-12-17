import articles from "./data/articles";
import ArticlesForm from './components/ArticlesForm';
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
          <ArticlesForm title={articles[0].title} />
        </section>
        {/* Articles Section */}
        <section>
          <h3 className="pt-5 pb-3">My Articles</h3>
          {articles.map(curArticle => <AppArticles
            key={curArticle.id}
            title={curArticle.title}
            author={curArticle.author}
            state={curArticle.state} />)}
        </section>
      </main>
    </>
  )
}

export default App
