import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
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
import Head from 'next/head';
import PropTypes from 'prop-types';
import HeaderOne from '../../components/header/header-1';
import ProjectContent from '../../components/projects/project-detail/project-content';
import ProjectForm from '../../components/projects/project-form';
import ProjectPageNavigation from '../../components/projects/project-page-navigation';


function ProjectDisplay({story}) {

    
    const router = useRouter()
    const Pid = router.query.pid;

    const [aProjects, setaProjects] = useState([]);
    const getAProject = (Pid) => {
        const db = getDatabase();
        const product = ref(db, `project/${Pid}`);
        onValue(product, (snapshot) => {
            const data = snapshot.val();    
            console.log("Data - Projects: ", data);
            setaProjects(data);
        });   
    }

    

    useEffect(() => {
        if(Pid){
            getAProject(Pid)
        }
    }, [Pid])



    


  return (
    <>
    <Head>
        <title>{aProjects.heading}</title>
        <meta name="description" content={aProjects.descOne} />
    </Head>
    <HeaderOne />
    {aProjects ? (
            <ProjectContent project={aProjects} />
    ) : (
        null
    )

    }
    {/* <ProjectForm />
    <ProjectPageNavigation
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
    /> */}
</>
  )
}



// export async function getStaticPaths() {
//        const db = getDatabase();
//     const projects = ref(db, `/project/`);
//     const data = await onValue(projects, (snapshot) => {
//         const data = snapshot.val();
//         console.log('PID -> ', data)
//         return data;
//       });
//     const paths = Object.keys(data).map((id, index) => {
//         params: { pid: id[0] }
//     })
//     return {
//         paths,
//         fallback: false
//     }
    

//   }
  


// export const getStaticProps = async (context) => {
//     const { pid } = context.query;  
    
//     const db = getDatabase();
//     const projects = ref(db, `/project/${pid}`);
//     const data = await onValue(projects, (snapshot) => {
//         const data = snapshot.val();
//         console.log('PID -> ', data)
//         return data;
//       })

//     return {
//         props: { story: data }
//     }
// }



export default ProjectDisplay