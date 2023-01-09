import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ProjectsGrid from './projects-grid';
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

function AllProjects({
    projectsFromCompany,
    projectName
}) {
    const [projects, setProjects] = useState([]);
    const [currentFilter, setCurrentFilter] = useState('all');
    const [projectCategory, setprojectCategory] = useState('all');
    const [allProjects, setallProjects] = useState([]);
    const getAllProjects = () => {
        const db = getDatabase();
        const product = ref(db, `project/`);
        onValue(product, (snapshot) => {
            const data = snapshot.val();    
            let product_list = []
            console.log("Data - Projects: ", data);
            console.log('projectName - ', projectName);
            console.log('projectsFromCompany - ', projectsFromCompany);
            setallProjects(data);
            if(!projectName || !projectsFromCompany){
                console.log("if() Part");
                Object.entries(data).forEach((element) => {
                    console.log('List -> ',element[1].company)
                            product_list.push(element);
                    }); 
                    console.log("if() Data - Projects: ", data);
                    console.log("if() Data - Projects New: ", product_list);
                    setProjects(product_list);
            }
            else{
                console.log("else() Part");
                Object.entries(data).forEach((element) => {
                        if(element[1].company === projectName){
                            if(projectCategory &&  element[1].category === projectCategory){
                                product_list.push(element);
                                console.log('List -> ************* ',element[1].category === projectCategory)
                            }    
                            if(projectCategory === 'all')
                                product_list.push(element);
                           

                        }
                    });
                    console.log("Data - Projects: ", data);
                    console.log("Data - Projects New: ", product_list);
                    setProjects(product_list);
            }
    
        });   
    }
    

    useEffect(() => {
        getAllProjects();
    }, [projectCategory])
    
    return (
        <>
            <div className="container">
   
                {!projectName ? (
                      <div className="filter-tab flex xl:justify-end flex-wrap text-[#0080FF] uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]">
                      <button
                          className={`${
                              currentFilter === 'all' ? 'active' : ''
                          } ml-10`}
                          type="button"
                          // onClick={onFilterHandler}
                          data-filter="all"
                      >
                          All
                      </button>
                      </div>
                ) : (null)

                }
                {projectName === 'sree-film-world' ? (
                            <div className="filter-tab flex xl:justify-end flex-wrap text-[#30373E] uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]">
                            <button
                                className={`${
                                    currentFilter === 'all' ? 'active' : ''
                                } ml-10`}
                                type="button"
                                // onClick={onFilterHandler}
                                onClick={(e) => setprojectCategory("all")}
                                data-filter="all"
                            >
                                All
                            </button>
                            <button
                                className={`${
                                    currentFilter === 'Wedding Photography' ? 'active' : ''
                                } ml-10`}
                                type="button"
                                // onClick={onFilterHandler}
                                onClick={(e) => setprojectCategory("Wedding Photography")}
                                data-filter="Wedding Photography"
                            >
                                Wedding Photography
                            </button>
                            <button
                                className={`${
                                    currentFilter === 'Maternity Photography' ? 'active' : ''
                                } ml-10`}
                                type="button"
                                // onClick={onFilterHandler}
                                onClick={(e) => setprojectCategory("Maternity Photography")}
                                data-filter="Maternity Photography"
                            >
                               Maternity Photography
                            </button>
                            </div>
                ) : (null)
                }
                {projectName === 'coimbatore-baby-props-and-studio' ? (
                            <div className="filter-tab flex xl:justify-end flex-wrap text-[#30373E] uppercase md:pb-155 pb-[55px] max-lg:pt-[55px]">
                            <button
                                className={`${
                                    currentFilter === 'all' ? 'active' : ''
                                } ml-10`}
                                type="button"
                                // onClick={onFilterHandler}
                                onClick={(e) => setprojectCategory("all")}
                                data-filter="all"
                            >
                                All
                            </button>
                            <button
                                className={`${
                                    currentFilter === 'Baby Photography' ? 'active' : ''
                                } ml-10`}
                                type="button"
                                // onClick={onFilterHandler}
                                onClick={(e) => setprojectCategory("Baby Photography")}
                                data-filter="Baby Photography"
                            >
                                
                            </button>
                            <button
                                className={`${
                                    currentFilter === 'Newborn Photography' ? 'active' : ''
                                } ml-10`}
                                type="button"
                                // onClick={onFilterHandler}
                                onClick={(e) => setprojectCategory("Newborn Photography")}
                                data-filter="Newborn Photography"
                            >
                               Newborn Photography
                            </button>
                            </div>
                ) : (null)
                }
             
            </div>
            <div className="grid xl:grid-cols-4 fixed-lg:grid-cols-3 fixed-md:grid-cols-2 gap-[5px]">
                <ProjectsGrid projects={projects} />
            </div>
        </>
    );
}


export default AllProjects;
