import Head from 'next/head';
import HeaderTwo from '../../components/header/header-2';
import ProjectsGrid from '../../components/projects/projects-grid';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app'
import {
    getStorage,
    ref as sRef,
    uploadBytesResumable,
    uploadBytes,
    getDownloadURL 
} from "firebase/storage";
import { ref, runTransaction, getDatabase, set , onValue , get, onChildAdded, onChildChanged, onChildRemoved, orderByChild  } from 'firebase/database'
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { realDB, initFirebase } from '../../lib/initFirebase';
import Link from 'next/link'
import 'firebase/database'
import 'firebase/storage'

function allItemsPage() {

    const [allPosts, setallPosts] = useState([]);

    const getAllPosts = () => {
        const db = getDatabase();
        const product = ref(db, `blogs/`);
        onValue(product, (snapshot) => {
            const data = snapshot.val();    
            setallPosts(data)
        })
    }

    useEffect(() => {
        getAllPosts()
    }, [])
    


    return (
        <>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="SFW Coimbatore | Blogs" />
            </Head>
            <HeaderTwo />
            <div className="grid xl:grid-cols-4 fixed-lg:grid-cols-3 fixed-md:grid-cols-2 gap-[5px]">
                {Object.entries(allPosts).map((project, index) => {
                    return(
                        <div className={`project-item gallery-item group ${project[1].category}`}>
                        {
                            console.log("Project --------------------> ", project[1])
                        }
                        <Link href={`/posts/${project[0]}`}>
                            <a>
                                <div className="project-img relative before:absolute before:bg-black before:opacity-20 before:w-full before:h-full before:z-[1]">
                                    {project[1].mainImg ? (
                                                                <img
                                                                src={project[1].mainImg}
                                                                alt={project[1].heading}
                                                                width={472}
                                                                height={665}
                                                                layout="responsive"
                                                                objectFit="cover"
                                                                quality={60}
                                                                priority
                                                            /> 
                                    ) : (
                                            <>
                                            </>
                                    )
                                    }
                                </div>
                                <div className="project-content">
                                    <span className="project-category">
                                        {project[1].category}
                                    </span>
                                    <h2 className="project-title">{project[1].heading}</h2>
                                </div>
                            </a>
                        </Link>
                    </div>
                    )
                })

                }
            </div>
        </>
    );
}
export default allItemsPage;
