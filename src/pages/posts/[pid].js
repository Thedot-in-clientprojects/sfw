import Head from 'next/head';
import HeaderOne from '../../components/header/header-1';
import { useRouter } from 'next/router';
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
import ProjectContent from '../../components/projects/project-detail/project-content';
import BlogContent from '../../components/projects/project-detail/blog-section';

function PostDetailPage() {

    const router = useRouter()
    const Pid = router.query.pid;

    const [aBlogs, setaBlogs] = useState([]);
    const getABlog = (Pid) => {
        const db = getDatabase();
        const product = ref(db, `blogs/${Pid}`);
        onValue(product, (snapshot) => {
            const data = snapshot.val();    
            console.log("Data - Post Details ->>>>>>>>>>>>>>>>>>>>>>>>>>>>> : ", data);
            setaBlogs(data);
        });   
    }

    

    useEffect(() => {
        if(Pid){
            getABlog(Pid)
        }
    }, [Pid])



    return (
        <>
            <Head>
                <title>{aBlogs.heading}</title>
                <meta name="description" content={aBlogs.descOne} />
            </Head>
            <HeaderOne />
           
            {aBlogs ? (
                <BlogContent project={aBlogs} />
                    ) : (
                        null
                    )

                    }
        </>
    );
}


export default PostDetailPage;
