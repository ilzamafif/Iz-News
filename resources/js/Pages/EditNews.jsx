import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';

export default function EdiNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            id: props.news.id, title, description, category
        }
        Inertia.post('/news/update', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.news.title} />
            <Navbar user={props.auth.user} />
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl my-2" >
                <div className="card-body">
                    <input type="text" className="input input-bordered w-full m-2" defaultValue={props.news.title} onChange={(title) => setTitle(title.target.value)} />
                    <input type="text" className="input input-bordered w-full m-2" defaultValue={props.news.description} onChange={(description) => setDescription(description.target.value)} />
                    <input type="text" className="input input-bordered w-full m-2" defaultValue={props.news.category} onChange={(category) => setCategory(category.target.value)} />
                    <button type="submit" className='btn btn-primary m-2' onClick={() => handleSubmit()}>Update</button>
                </div>
            </div>
        </div>
    )
}