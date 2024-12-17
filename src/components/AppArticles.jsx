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
                {articlesList.map(curArtcile =>
                    <div key={curArtcile.id} className="mb-3">
                        <div className="card">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title">{curArtcile.title}</h5>
                                <button className='btn btn-outline-danger'>Delete</button>
                            </div>
                        </div>
                    </div>)}
            </section>
        </>
    )
}

export default AppArticles;