import Head from 'next/head';
import Breadcrumb from '../../components/breadcrumb';
import HeaderTwo from '../../components/header/header-2';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProjectContent from '../../components/projects/project-detail/project-content';
import AllProjects from '../../components/projects/all-projects';
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

function CompanyScreen() {
    
    const router = useRouter();
    const Cid = router.query.cid;
    const [projectsFromCompany, setprojectsFromCompany] = useState([]);
    const getAProjectFromCompanies = (Cid) => {
        console.log("***Project - ", Cid);
        let product_list = [];
        const db = getDatabase();
        const product = ref(db, `project/`);
        onValue(product, (snapshot) => {
            const data = snapshot.val();    
            Object.entries(data).forEach((element) => {
                console.log('List -> ',element[1].company)
                if(element[1].company === Cid)
                    product_list.push(element);
            });
            console.log("Data - Projects: ", data);
            console.log("Data - Projects New: ", product_list);
            setprojectsFromCompany(product_list);
        });
    }

    useEffect(() => {
      if(Cid){
            getAProjectFromCompanies(Cid);
      }
    }, [])
    
    return (
        <>
            <Head>
                <title>All Projects: {Cid}</title>
                <meta
                    name="description"
                    content={"All Projects : " + Cid}
                />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage="Projects" pageTitle={"Our Projects: " + Cid} />
            <div style={{
                margin:32
            }}
            >
            {projectsFromCompany ? (
                <AllProjects projectName={Cid} projectsFromCompany={projectsFromCompany}/>
            ) : (
                null
            )

            }
            </div>
            

        </>
    );
}



export default CompanyScreen;
