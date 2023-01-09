import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PostItem from './post-item';
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

function PostsGrid() {

    const [allBlogs, setallBlogs] = useState([]);
    const getAllBlogs = () => {
        const db = getDatabase();
        const blog = ref(db, `blogs/`);
        onValue(blog, (snapshot) => {
            const data = snapshot.val();    
            console.log("Blogs ******************************** -> ", data)
            setallBlogs(data);
        });   
    }

    useEffect(() => {
        getAllBlogs();
    }, [])
    

    return (
        <div className="lg:col-span-12">
            <div className="grid lm:grid-cols-2 gap-x-[25px] gap-y-[55px]">
                {allBlogs && Object.entries(allBlogs).map((posts, index) => (
                    <PostItem key={index} posts={posts} />
                ))}
            </div>
        </div>
    );
}



export default PostsGrid;
