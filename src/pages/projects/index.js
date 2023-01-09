import Head from 'next/head';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/breadcrumb';
import HeaderTwo from '../../components/header/header-2';
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

function allItemsPage() {

    

    return (
        <>
            <Head>
                <title>All Projects</title>
                <meta
                    name="description"
                    content="SFW Coimbatore | All Projects"
                />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage="Projects" pageTitle="Our Projects" />
            <div style={{
                marginTop:32
            }}>
            <AllProjects projectName="projects"/>
            </div>
            
        </>
    )
}

export default allItemsPage;
