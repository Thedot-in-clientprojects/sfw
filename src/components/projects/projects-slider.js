import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import ProjectItem from './project-item';
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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';



SwiperCore.use([Pagination, Autoplay]);

function ProjectSlider({ projects }) {

    const [projectAllHere, setprojectAllHere] = useState([]);
    const getAllProjects = () => {
        const db = getDatabase();
      const project = ref(db, 'project/');
      onValue(project, (snapshot) => {
          const data = snapshot.val();
          setprojectAllHere(data);
        });
    }

    useEffect(() => {
        getAllProjects();
    }, [])
    


    return (
        <Swiper
            pagination={{ clickable: true, type: 'bullets' }}
            spaceBetween={5}
            breakpoints={{
                1200: {
                    slidesPerView: 4,
                },
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
            {projectAllHere && Object.entries(projectAllHere).map((project, index) => {
                return(
                    <SwiperSlide key={index}>
                        <ProjectItem project={project} />
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    );
}

ProjectSlider.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSlider;
