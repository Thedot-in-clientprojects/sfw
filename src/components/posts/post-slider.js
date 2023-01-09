import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
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
import { useEffect, useState } from 'react';

SwiperCore.use([Pagination, Autoplay]);

function PostSlider({ posts }) {

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
        <Swiper
            pagination={false}
            spaceBetween={25}
            slidesPerView={3}
            draggable={false}
            simulateTouch={false}
            navigation={false}
            breakpoints={{
                992: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            }}
        >
            {allBlogs && Object.entries(allBlogs).map((blog, index) => {
                    return(
                    <SwiperSlide key={index}>
                        <PostItem posts={blog} />
                    </SwiperSlide>
                    )
            })
            }
        </Swiper>
    );
}

PostSlider.propTypes = {
    posts: PropTypes.instanceOf(Object).isRequired,
};

export default PostSlider;
