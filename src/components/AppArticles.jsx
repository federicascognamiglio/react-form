import { useState } from 'react'
import articles from '../data/articles';

function AppArticles() {
    // Variabili
    const [newTitle, setTitle] = useState("");
    const [articlesList, setArticlesList] = useState(articles);

    // Submit Function
    const handleSubmit = (event) => {
        event.preventDefault()
        const newArticle = {
            id: Date.now(),
            title: newTitle 
        }
        setArticlesList([...articlesList, newArticle]);
        setTitle("");
    }

    // Delete Function
    const handleDelete = (articleToDelete) => {
        const filteredList = articlesList.filter(curArticle => curArticle !== articleToDelete)
        setArticlesList(filteredList);
    }

    return (
        <>
            {/* Form */}
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className='w-50'>
                    <label htmlFor="articleTitle" className='form-label'>Article Title</label>
                    <input className='form-control' value={newTitle} onChange={(event) => setTitle(event.target.value)} type="text" id='articleTitle' />
                </div>
                <button type='submit' className="btn btn-primary mt-3">Salva</button>
            </form>

            {/* Articles */}
            <section className='mt-5'>
                <h3 className='pb-3'>My Articles</h3>
                {articlesList.map(curArticle =>
                    <div key={curArticle.id} className="mb-3">
                        <div className="card">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title">{curArticle.title}</h5>
                                <button onClick={() => handleDelete(curArticle)} className='btn btn-outline-danger'>Delete</button>
                            </div>
                        </div>
                    </div>)}
            </section>
        </>
    )
}

export default AppArticles;