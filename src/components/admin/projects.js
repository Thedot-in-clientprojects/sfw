import React, { useState, useEffect }  from 'react';
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
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import Alert from '@mui/material/Alert';


function Projects() {

    initFirebase();
    const [projectUnderCompany, setprojectUnderCompany] = useState('');
    const [projectName, setprojectName] = useState('');
    const [projectCategory, setprojectCategory] = useState('');
    const [projectMainImg, setprojectMainImg] = useState('');
    const [projectSubOne, setprojectSubOne] = useState('');
    const [projectSubTwo, setprojectSubTwo] = useState('');
    const [projectSubThree, setprojectSubThree] = useState('');
    const [projectSubFour, setprojectSubFour] = useState('');
    const [projectLocation, setprojectLocation] = useState('');
    const [projectFunHeading, setprojectFunHeading] = useState('');
    const [projectDesOne, setprojectDesOne] = useState('');
    const [projectDesTwwo, setprojectDesTwwo] = useState('');

    const [projectUploadSuccess, setprojectUploadSuccess] = useState(false);
    const [projectUploadError, setprojectUploadError] = useState(false);



    const createProject = (e) => {
        e.preventDefault();
        const db = getDatabase();
        let id = uuidv4();
        set(ref(db, `/project/${id}`), {
            company: projectUnderCompany,
            name: projectName,
            category: projectCategory,
            mainImg: projectMainImg,
            subImgOne: projectSubOne,
            subImgTwo: projectSubTwo,
            subImgThree: projectSubThree,
            subImgFour: projectSubFour,
            location: projectLocation,
            heading: projectFunHeading,
            descOne: projectDesOne,
            destwo: projectDesTwwo,
            status: 'Active',
            position: 'No-Front'
          }).then(res => {
            setprojectUploadSuccess(true)
            setprojectUnderCompany('')
            setprojectName('')
            setprojectCategory('')
            setprojectMainImg('')
            setprojectSubOne('')
            setprojectSubTwo('')
            setprojectSubThree('')
            setprojectSubFour('')
            setprojectLocation('')
            setprojectFunHeading('')
            setprojectDesOne('')
            setprojectDesTwwo('')
          }).catch(err => {
            setprojectUploadError(true)
          })
    }

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
      if(projectUploadSuccess){
        setTimeout(() => {
          setprojectUploadSuccess(false)
       }, 3000)
      }
      else if(projectUploadError){
        setTimeout(() => {
          setprojectUploadError(false)
       }, 3000)
      }

      getAllProjects()
    }, [projectUploadSuccess])
    


    // ** Project Edit Status
    const [projectEditStatus, setprojectEditStatus] = useState(false);
    const [projectEditStatusId, setprojectEditStatusId] = useState('');

    const editProject = (e, id) => {
      e.preventDefault();
      setprojectEditStatus(true);
      setprojectEditStatusId(id);
      const db = getDatabase();
      const project = ref(db, `project/${id}`);
      onValue(project, (snapshot) => {
          const data = snapshot.val();
          console.log("Project Data -> ", data);
          setprojectUnderCompany(data.company);
          setprojectCategory(data.category);
          setprojectName(data.name);
          setprojectMainImg(data.mainImg);
          setprojectSubOne(data.subImgOne);
          setprojectSubTwo(data.subImgTwo);
          setprojectSubThree(data.subImgThree);
          setprojectLocation(data.location);
          setprojectFunHeading(data.heading);
          setprojectDesOne(data.descOne);
          setprojectDesTwwo(data.destwo);
        });
    }



    const submitEditProject = (e) => {
        e.preventDefault();
        const db = getDatabase();
        set(ref(db, `/project/${projectEditStatusId}`), {
            company: projectUnderCompany,
            name: projectName,
            category: projectCategory,
            mainImg: projectMainImg,
            subImgOne: projectSubOne,
            subImgTwo: projectSubTwo,
            subImgThree: projectSubThree,
            subImgFour: projectSubFour,
            location: projectLocation,
            heading: projectFunHeading,
            descOne: projectDesOne,
            destwo: projectDesTwwo,
            status: 'Active'
          }).then(res => {
            setprojectUploadSuccess(true)
            setprojectUnderCompany('')
            setprojectName('')
            setprojectCategory('')
            setprojectMainImg('')
            setprojectSubOne('')
            setprojectSubTwo('')
            setprojectSubThree('')
            setprojectSubFour('')
            setprojectLocation('')
            setprojectFunHeading('')
            setprojectDesOne('')
            setprojectDesTwwo('')
          }).catch(err => {
            setprojectUploadError(true)
          })
    }


    const deleteProject = (e, id) => {
        e.preventDefault();
        const db = getDatabase();
        set(ref(db, `/project/${id}`), {
          
          }).then(res => {
            setprojectUploadSuccess(true)
            setprojectUnderCompany('')
            setprojectName('')
            setprojectCategory('')
            setprojectMainImg('')
            setprojectSubOne('')
            setprojectSubTwo('')
            setprojectSubThree('')
            setprojectSubFour('')
            setprojectLocation('')
            setprojectFunHeading('')
            setprojectDesOne('')
            setprojectDesTwwo('')
          }).catch(err => {
            setprojectUploadError(true)
          })
    }


  return (
    <div>
        <p
        style={{
            fontSize:18  
        }}
        >
            Projects
        </p>
          {projectUploadSuccess ? (
            <Alert severity="success">Project has been created Successfully</Alert>
          ) : (
              <>
              </>
          )
          }
          {projectUploadError ? (
            <Alert severity="error">Project Creation Error</Alert>
          ) : (
              <>
              </>
          )
          }
        <div
        style={{
            margin:5
        }}
        >
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          
                <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:8
                }}>
                        Select the Company's Name
                    </p>
  {/* <InputLabel id="demo-simple-select-label">Company Name</InputLabel> */}
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={projectUnderCompany}
    label="Company Name"
    onChange={(e) => setprojectUnderCompany(e.target.value)}
  >
    <MenuItem value={'sree-film-world'}>Sree Film World</MenuItem>
    <MenuItem value={'coimbatore-baby-props-and-studio'}>Coimbatore Baby Props And Studio</MenuItem>
    <MenuItem value={'coimbatore-editing-house'}>Coimbatore Editing House</MenuItem>
    <MenuItem value={'coimbatore-rental'}>Coimbatore Rental</MenuItem>
    <MenuItem value={'sm-drones'}>SM Drones</MenuItem>
  </Select>
</FormControl>
              <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Project Name
                    </p>
                <FormControl fullWidth style={{
                  marginTop:8
                }}>
                <TextField value={projectName} onChange={(e) => setprojectName(e.target.value)} label='Project Name' id='form1' type='text' />

                </FormControl>
                <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:8
                }}>
                        Select the Project's Category
                    </p>
  {/* <InputLabel id="demo-simple-select-label">Company Name</InputLabel> */}
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={projectCategory}
    label="Category"
    placeholder='Pick the Category'
    onChange={(e) => setprojectCategory(e.target.value)}
  >
    <MenuItem value={'Wedding Photography'}>Wedding Photography</MenuItem>
    <MenuItem value={'Maternity Photography'}>Maternity Photography</MenuItem>
    <MenuItem value={'Baby Photography'}>Baby Photography</MenuItem>
    <MenuItem value={'Newborn Photography'}>Newborn Photography</MenuItem>
    <MenuItem value={'Posed newborn photography'}>Posed newborn photography</MenuItem>
    <MenuItem value={'Birth Story'}>Birth Story</MenuItem>

    <MenuItem value={'Photo & Video Editing'}>Photo & Video Editing</MenuItem>
    <MenuItem value={'Color grading'}>Color Grading</MenuItem>
    <MenuItem value={'Video Editing'}>Video Editing</MenuItem>
    <MenuItem value={'Video Editing'}>Photo Editing</MenuItem>


    <MenuItem value={'Rental'}>Rental</MenuItem>
    <MenuItem value={'Animation'}>Animation</MenuItem>
  </Select>
</FormControl>
<Button
                  style={{
                      backgroundColor:'#00510E',
                      fontSize:18,
                      marginTop:25
                  }}
                  variant="contained" onClick={() => window.open('https://sfw-image-hosting.netlify.app/', '_blank', 'noopener,noreferrer')}>Image Hosting</Button>

<p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Paster the Main Image URL Here ( Main Image )
                    </p>
<FormControl fullWidth style={{
                  marginTop:8
                }}>
                <TextField value={projectMainImg} onChange={(e) => setprojectMainImg(e.target.value)} label='Project Main Image One' id='form1' type='text' />

                </FormControl>
<p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Paster the Sub 1  Image URL Here ( Sub Image 1 )
                    </p>
<FormControl fullWidth style={{
                  marginTop:8
                }}>
                <TextField value={projectSubOne} onChange={(e) => setprojectSubOne(e.target.value)} label='Project Sub Image One' id='form1' type='text' />

                </FormControl>
<p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Paster the Sub Image URL 2 Here ( Sub Image 2 )
                    </p>
<FormControl fullWidth style={{
                  marginTop:8
                }}>
                <TextField value={projectSubTwo} onChange={(e) => setprojectSubTwo(e.target.value)} label='Project Sub Image Two' id='form1' type='text' />

                </FormControl>
<p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Paster the Sub Image URL 3 Here ( Sub Image 3 )
                    </p>
<FormControl fullWidth style={{
                  marginTop:8
                }}>
                <TextField value={projectSubThree} onChange={(e) => setprojectSubThree(e.target.value)} label='Project Sub Image Three' id='form1' type='text' />

                </FormControl>
<p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Paster the Sub Image URL 4 Here ( Sub Image 4 )
                    </p>
<FormControl fullWidth style={{
                  marginTop:8
                }}>
                <TextField value={projectSubFour} onChange={(e) => setprojectSubFour(e.target.value)} label='Project Sub Image Four' id='form1' type='text' />

                </FormControl>
                <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Location Of the Project
                    </p>
<FormControl fullWidth style={{
                  marginTop:8
                }}>
                <TextField value={projectLocation} onChange={(e) => setprojectLocation(e.target.value)} label='Project Location' id='form1' type='text' />

                </FormControl>
                <FormControl fullWidth style={{
                  marginTop:8
                }}>

<p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Project Heading
                    </p>
                <TextField value={projectFunHeading} onChange={(e) => setprojectFunHeading(e.target.value)} label='Project Heading' id='form1' type='text' />

                </FormControl>
                
<FormControl fullWidth style={{
                  marginTop:8
                }}>
                   <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Project Description One
                    </p>
               <TextareaAutosize
               style={{
                marginTop:15,
                backgroundColor:'#E1E1E1'
               }}
                type="textarea"
                minRows={5}
                placeholder='Enter Product Description ( Section One )'
                value={projectDesOne}
                onChange={(e) => setprojectDesOne(e.target.value)}
                />

                </FormControl>
<FormControl fullWidth style={{
                  marginTop:8
                }}>
                   <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Project Description Two
                    </p>
               <TextareaAutosize
               style={{
                marginTop:15,
                backgroundColor:'#E1E1E1'
               }}
                type="textarea"
                minRows={5}
                placeholder='Enter Product Description ( Section Two )'
                value={projectDesTwwo}
                onChange={(e) => setprojectDesTwwo(e.target.value)}
                />

                </FormControl>
                {projectEditStatus ? (
 <Button
 style={{
     backgroundColor:'#0700C6',
     fontSize:18,
     marginTop:25
 }}
 variant="contained" onClick={(e) => submitEditProject(e)}>Edit Project</Button>
                ) : (
                  <Button
                  style={{
                      backgroundColor:'#00510E',
                      fontSize:18,
                      marginTop:25
                  }}
                  variant="contained" onClick={createProject}>Create Project</Button>
                )

                }
               
        </Grid>
        <Grid item xs={4}>
          <div>
          <Grid container spacing={2}>
                {projectAllHere && Object.entries(projectAllHere).map((project, index) => {
                    return(
                          <Grid item xs={6} style={{
                            height:120,
                            width: 180,
                            backgroundColor: '#F0F0F0',
                            margin:8,
                            borderRadius:8
                          }}>
                          <div>
                                <p>
                                {project[1].name}
                                </p>
                                <p>
                                {project[1].company}
                                </p>
                                <p>
                                {project[1].location}
                                </p>
                                <div>
                                <Button variant="contained" style={{
                                  backgroundColor:'#3E20FF',
                                  marginRight:22
                                }}
                                onClick={(e) => editProject(e, project[0])}
                                >Edit</Button>
                                <Button variant="contained" style={{
                                  backgroundColor:'#FF1616'
                                }}
                                onClick={(e) => deleteProject(e, project[0])}
                                >Delete</Button>
                                </div>
                          </div>
                          </Grid>
                    )
                })}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
        </div>

    </div>
  )
}

export default Projects