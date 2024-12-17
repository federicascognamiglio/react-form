import { useState } from 'react'

function ArticlesForm() {
    const [title, setTitle] = useState("");

    return (
        <form className='mt-4'>
            <div className='w-50'>
                <label htmlFor="articleTitle" className='form-label'>Article Title</label>
                <input className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} type="text" id='articleTitle' />
                <p>{title}</p>
            </div>
            <button type='submit' className="btn btn-primary mt-3">Salva</button>
        </form>
    )
}

export default ArticlesForm;