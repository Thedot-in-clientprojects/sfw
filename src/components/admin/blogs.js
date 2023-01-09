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



function Blogs() {


    const [blogMainURL, setblogMainURL] = useState('');

    const [blogCompanyName, setblogCompanyName] = useState('');
    const [blogCategory, setblogCategory] = useState('');
    const [blogHeading, setblogHeading] = useState('');
    const [blogMainImage, setblogMainImage] = useState('');
    const [blogMainImageOne, setblogMainImageOne] = useState('');
    const [blogMainImageTwo, setblogMainImageTwo] = useState('');
    const [blogMainImageThree, setblogMainImageThree] = useState('');
    const [blogMainImageFour, setblogMainImageFour] = useState('');
    const [blogMainDescriptionOne, setblogMainDescriptionOne] = useState('');
    const [blogMainDescriptionTwo, setblogMainDescriptionTwo] = useState('');
    const [blogMainDescriptionThree, setblogMainDescriptionThree] = useState('');
    const [blogMainDescriptionFour, setblogMainDescriptionFour] = useState('');
    const [blogHeadingTwo, setblogHeadingTwo] = useState('');
    const [blogQuotes, setblogQuotes] = useState('');
    const [blogKeyworld, setblogKeyworld] = useState([]);


    const [blogUploadSuccess, setblogUploadSuccess] = useState(false);
    const [blogUploadError, setblogUploadError] = useState(false);




    const createBlogs = (e) => {
        e.preventDefault();
        const db = getDatabase();
        setblogUploadSuccess(true);
        let id = uuidv4();

        let mainURL = blogHeading.split(" ");
        mainURL = mainURL.join("-");
        mainURL = mainURL.toLowerCase();


        set(ref(db, `/blogs/${id}`), {
            mainURL: mainURL,
            company: blogCompanyName,
            category: blogCategory,
            heading: blogHeading,
            mainImg: blogMainImage,
            headingTwo: blogHeadingTwo,
            mainImgOne: blogMainImageOne,
            mainImgTwo: blogMainImageTwo,
            mainImgThree: blogMainImageThree,
            mainImgFour: blogMainImageFour,
            descOne: blogMainDescriptionOne,
            descTwo: blogMainDescriptionTwo,
            descThree: blogMainDescriptionThree,
            descFour: blogMainImageFour,
            keys: blogKeyworld
        }).then(res => {
            setblogCompanyName('')
            setblogCategory('')
            setblogHeading('')
            setblogMainImage('')
            setblogHeadingTwo('')
            setblogMainImageOne('')
            setblogMainImageTwo('')
            setblogMainImageThree('')
            setblogMainImageFour('')
            setblogMainDescriptionOne('')
            setblogMainDescriptionTwo('')
            setblogMainDescriptionThree('')
            setblogMainDescriptionFour('')
            setblogKeyworld('')
        }).catch(err => {
            setblogUploadError(true)
        })
    }

    const [allBlogs, setallBlogs] = useState([]);
    const getAllBlogs = () => {
      const db = getDatabase();
      const blogs = ref(db, 'blogs/');
      onValue(blogs, (snapshot) => {
          const data = snapshot.val();
          setallBlogs(data);
        });
    }

    useEffect(() => {
        if(blogUploadSuccess){
          setTimeout(() => {
            setblogUploadSuccess(false)
         }, 3000)
        }
        else if(blogUploadError){
          setTimeout(() => {
            setblogUploadError(false)
         }, 3000)
        }
  
        // getAllProjects()
        getAllBlogs();
      }, [blogUploadSuccess])
      

      const editBlog = (e, id) => {

      } 

      const deleteBlog = (e, id) => {

      }


  return (
<div>
    <p
    style={{
        fontSize:18  
    }}
    >
        Blogs
    </p>
    {blogUploadSuccess ? (
            <Alert severity="success">Blog has been created Successfully</Alert>
          ) : (
              <>
              </>
          )
          }
          {blogUploadError ? (
            <Alert severity="error">Blog Creation Error</Alert>
          ) : (
              <>
              </>
          )
          }
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <div>
    <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:8
                }}>
                        Select the Blog Company's Name
                    </p>
  {/* <InputLabel id="demo-simple-select-label">Company Name</InputLabel> */}
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={blogCompanyName}
    label="Company Name"
    onChange={(e) => setblogCompanyName(e.target.value)}
  >
    <MenuItem value={'Sree Film World'}>Sree Film World</MenuItem>
    <MenuItem value={'Coimbatore Baby Props And Studio'}>Coimbatore Baby Props And Studio</MenuItem>
    <MenuItem value={'Coimbatore Rental'}>Coimbatore Rental</MenuItem>
  </Select>
</FormControl>
    <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:8
                }}>
                        Select the Blog's Category
                    </p>
  {/* <InputLabel id="demo-simple-select-label">Company Name</InputLabel> */}
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={blogCategory}
    label="Blog Category"
    onChange={(e) => setblogCategory(e.target.value)}
  >
    <MenuItem value={'Wedding Photography'}>Wedding Photography</MenuItem>
    <MenuItem value={'Newborn Baby Photography'}>Newborn Baby Photography</MenuItem>
    <MenuItem value={'Maternity Photography'}>Maternity Photography</MenuItem>
    <MenuItem value={'News And Events'}>News And Events</MenuItem>
    <MenuItem value={'Best in Coimbatore'}>Best in Coimbatore</MenuItem>
    <MenuItem value={'Best in Mumbai'}>Best in Mumbai</MenuItem>
    <MenuItem value={'Why we are the Beat'}>Why we are the Beat</MenuItem>
    <MenuItem value={'Why Us?'}>Why Us?</MenuItem>
    <MenuItem value={'FAQs'}>FAQs</MenuItem>
  </Select>
</FormControl>

                <FormControl fullWidth style={{
                  marginTop:8
                }}>
                    <p className='mt-3' style={{
                  marginBottom:5,
                  marginTop:15
                }}>
                        Paste Main Image Here
                    </p>
                <TextField value={blogMainImage} onChange={(e) => setblogMainImage(e.target.value)} label='Project Main Image 1' id='form1' type='text' />

                </FormControl>
                
                <FormControl fullWidth style={{
                  marginTop:8
                }}>
                    <p className='mt-3' style={{
                  marginBottom:5,
                  marginTop:15
                }}>
                        Enter the Blog Heading
                    </p>
                <TextField value={blogHeading} onChange={(e) => setblogHeading(e.target.value)} label='Blog Heading' id='form1' type='text' />

                </FormControl>
                <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Blog Description One
                    </p>
               <TextareaAutosize
               style={{
                marginTop:15,
                backgroundColor:'#E1E1E1'
               }}
                type="textarea"
                minRows={5}
                placeholder='Enter Blog Description ( Section One )'
                value={blogMainDescriptionOne}
                onChange={(e) => setblogMainDescriptionOne(e.target.value)}
                />

                </FormControl>


                <FormControl fullWidth style={{
                  marginTop:8
                }}>
                    <p className='mt-3' style={{
                  marginBottom:5,
                  marginTop:15
                }}>
                        Paste Sub Image 1
                    </p>
                <TextField value={blogMainImageOne} onChange={(e) => setblogMainImageOne(e.target.value)} label='Project Main Sub Image 1' id='form1' type='text' />

                </FormControl>
                <FormControl fullWidth style={{
                  marginTop:8
                }}>
                    <p className='mt-3' style={{
                  marginBottom:5,
                  marginTop:15
                }}>
                        Enter the Blog Heading Two
                    </p>
                <TextField value={blogHeadingTwo} onChange={(e) => setblogHeadingTwo(e.target.value)} label='Blog Heading Section 2' id='form1' type='text' />

                </FormControl>
                <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Blog Description Two
                    </p>
               <TextareaAutosize
               style={{
                marginTop:15,
                backgroundColor:'#E1E1E1'
               }}
                type="textarea"
                minRows={5}
                placeholder='Enter Blog Description ( Section Two )'
                value={blogMainDescriptionTwo}
                onChange={(e) => setblogMainDescriptionTwo(e.target.value)}
                />

                </FormControl>  
                <FormControl fullWidth style={{
                  marginTop:8
                }}>
                    <p className='mt-3' style={{
                  marginBottom:5,
                  marginTop:15
                }}>
                        Paste Sub Image 2
                    </p>
                <TextField value={blogMainImageTwo} onChange={(e) =>setblogMainImageTwo(e.target.value)} label='Project Main Sub Image 2' id='form1' type='text' />

                </FormControl>
                <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Blog Description Quotes
                    </p>
               <TextareaAutosize
               style={{
                marginTop:15,
                backgroundColor:'#F6F6F6'
               }}
                type="textarea"
                minRows={5}
                placeholder='Enter Blog Quotes'
                value={blogQuotes}
                onChange={(e) => setblogQuotes(e.target.value)}
                />
                </FormControl>
                <FormControl fullWidth style={{
                  marginTop:8
                }}>
                    <p className='mt-3' style={{
                  marginBottom:5,
                  marginTop:15
                }}>
                        Paste Sub Image 3
                    </p>
                <TextField value={blogMainImageThree} onChange={(e) => setblogMainImageThree(e.target.value)} label='Project Main Sub Image 3' id='form1' type='text' />

                </FormControl>
                <FormControl fullWidth style={{
                  marginTop:8
                }}>
                    <p className='mt-3' style={{
                  marginBottom:5,
                  marginTop:15
                }}>
                        Paste Sub Image 4
                    </p>
                <TextField value={blogMainImageFour} onChange={(e) =>setblogMainImageFour(e.target.value)} label='Project Main Sub Image 3' id='form1' type='text' />

                </FormControl>
              
               
                <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Blog Description Three
                    </p>
               <TextareaAutosize
               style={{
                marginTop:15,
                backgroundColor:'#E1E1E1'
               }}
                type="textarea"
                minRows={5}
                placeholder='Enter Blog Description ( Section Three )'
                value={blogMainDescriptionThree}
                onChange={(e) => setblogMainDescriptionThree(e.target.value)}
                />

                </FormControl>
                <FormControl fullWidth>
                <p className='mt-3' style={{
                  marginBottom:1,
                  marginTop:15
                }}>
                        Enter the Blog Description Four
                    </p>
               <TextareaAutosize
               style={{
                marginTop:15,
                backgroundColor:'#E1E1E1'
               }}
                type="textarea"
                minRows={5}
                placeholder='Enter Blog Description ( Section Four )'
                value={blogMainDescriptionFour}
                onChange={(e) => setblogMainDescriptionFour(e.target.value)}
                />
                </FormControl>
                <Button
                  style={{
                      backgroundColor:'#00510E',
                      fontSize:18,
                      marginTop:25
                  }}
                  variant="contained" onClick={createBlogs}>Create Blogs</Button>
    </div>
        </Grid>
        <Grid item xs={4}>
        <div>
          <Grid container spacing={2}>
                {allBlogs && Object.entries(allBlogs).map((project, index) => {
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
                                {project[1].heading}
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
                                onClick={(e) => editBlog(e, project[0])}
                                >Edit</Button>
                                <Button variant="contained" style={{
                                  backgroundColor:'#FF1616'
                                }}
                                onClick={(e) => deleteBlog(e, project[0])}
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
  )
}

export default Blogs