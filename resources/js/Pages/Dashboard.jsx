import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news', data)
        setTitle('')
        setDescription('')
        setCategory('')
        setIsNotif(true)
    }

    useEffect(() => {
        if (!props.news) {
            Inertia.get('/news');
        }
        return;
    })

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        {isNotif && <div className="alert alert-info shadow-lg m-2">
                            <span>{props.flash.success}</span>
                        </div>
                        }
                        <input type="text" className="input input-bordered w-full m-2" placeholder='Judul' onChange={(title) => setTitle(title.target.value)} value={title} />
                        <input type="text" className="input input-bordered w-full m-2" placeholder='Deskripsi' onChange={(description) => setDescription(description.target.value)} value={description} />
                        <input type="text" className="input input-bordered w-full m-2" placeholder='Catgeory' onChange={(category) => setCategory(category.target.value)} value={category} />
                        <button type="submit" className='btn btn-primary m-2' onClick={() => handleSubmit()}>Submit</button>
                    </div>
                    <div className="py-4">
                        {props.news && props.news.length > 0 ? props.news.map((data, i) => {
                            return (
                                <div className="card w-full lg:w-96 bg-base-100 shadow-xl my-2" key={i}>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            <p>{data.title}</p>
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                        <p>{data.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-inline">{data.category}</div>
                                            <div className="badge badge-outline">
                                                <Link href={route('edit.news')} as="button" data={{ id: data.id }} method="get">Edit</Link>
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link href={route('delete.news')} as="button" data={{ id: data.id }} method="post">Hapus</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <p>Belum Ada Berita</p>}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
