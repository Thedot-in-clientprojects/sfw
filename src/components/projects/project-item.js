import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
function ProjectItem({ project }) {

    useEffect(() => {
        
    }, [project])
    
    const imagePath = `/images/projects/${project?.slug}/${project?.image}`;
    const linkPath = `/projects/${project?.slug}`;

    return (
        <div className={`project-item gallery-item group ${project[1].category}`}>
           
            <Link href={`/projects/${project[0]}`}>
                <a>
                    <div className="project-img relative before:absolute before:bg-black before:opacity-20 before:w-full before:h-full before:z-[1]">
                        {project[1].mainImg ? (<>
                                                    <img
                                                    src={project[1].mainImg}
                                                    alt={project[1].heading}
                                                    width={472}
                                                    height={665}
                                                    layout="responsive"
                                                    objectFit="cover"
                                                    quality={60}
                                                    priority
                                                />
                                                </> 
                        ) : (
                                <>
                                </>
                        )
                        }
                    </div>
                    <div className="project-content">
                        <span className="project-category">
                            {project[1].category}
                        </span>
                        <h2 className="project-title">{project[1].heading}</h2>
                    </div>
                </a>
            </Link>
        </div>
    );
}

ProjectItem.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectItem;
