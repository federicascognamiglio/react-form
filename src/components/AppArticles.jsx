import { useState } from 'react'
import articles from '../data/articles';

function AppArticles() {
    const [title, setTitle] = useState("");
    const [articlesList, setArticlesList] = useState(articles);
    const handleSubmit = (event) => {
        event.preventDefault()
        const newList = [...articlesList, title];
        setArticlesList(newList);
        setTitle("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className='w-50'>
                    <label htmlFor="articleTitle" className='form-label'>Article Title</label>
                    <input className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} type="text" id='articleTitle' />
                </div>
                <button type='submit' className="btn btn-primary mt-3">Salva</button>
            </form>
            <section className='mt-5'>
                <h3 className='pb-3'>My Articles</h3>
                {articlesList.map(curArtcile =>
                    <div key={curArtcile.id} className="mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{curArtcile.title}</h5>
                            </div>
                        </div>
                    </div>)}
            </section>
        </>
    )
}

export default AppArticles;