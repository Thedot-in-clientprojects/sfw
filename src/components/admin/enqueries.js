import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Enqueries() {

    const [allContacts, setallContacts] = useState([]);
    const getAllEnquries = () => {
        const db = getDatabase();
        const contact = ref(db, 'contact/');
        onValue(contact, (snapshot) => {
            const data = snapshot.val();
            setallContacts(data);
          });
    }

    useEffect(() => {
        getAllEnquries()
    }, [])
    


  return (
    <div>
        {allContacts && Object.entries(allContacts).map((contact, index) => {
            return(
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    Name: {contact[1].name}
                </CardContent>
                <CardContent>
                    Phone: {contact[1].phone}<br/>
                    Message: {contact[1].msg}
                </CardContent>
                </Card>
            )
        })
        }

    </div>
  )
}

export default Enqueries