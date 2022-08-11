import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Home(props) {
    return (
        <>
            <Head title={props.title} />
            <div className="flex justify-center item-center">
                <div className="">
                    {props.news ? props.news.map((data, i) => {
                        return (
                            <div key={i}>
                                <p>{data.title}</p>
                                <p>{data.category}</p>
                                <p>{data.author}</p>
                            </div>
                        )
                    }) : <p>Data Kosong</p>}
                </div>
            </div>

        </>
    )
}