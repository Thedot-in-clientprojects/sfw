import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IoMdGrid } from 'react-icons/io';
import ProjectBanner from './project-banner';
import { useEffect } from 'react';

function ProjectContent({ project }) {
    const imagePath = `/images/projects/${project.slug}/${project.image}`;

    useEffect(() => {
   
    }, [project])
    

    return (
        <article>
           
            <ProjectBanner
                title={project.heading}
                excerpt={project.company}
                categoryName={project.category}
                image={project.mainImg}
            />
            <div className="project-upper-box md:pt-[150px] pt-[55px]">
                <div className="container">
                    <div className="navigation pb-[50px]">
                        <Link href="/projects">
                            <a className="flex items-center text-[14px] leading-6 uppercase">
                                <IoMdGrid className="text-[20px] mr-5" />
                                Back to Projects
                            </a>
                        </Link>
                    </div>
                    <ul className="info grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3">
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Location: {project.location}
                            </span>
                            {project.location}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Client:
                            </span>
                            {project.location}
                        </li>

                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Architect:
                            </span>
                            {project.position}
                        </li>
                        <li>
                            <span className="text-[#4D5660] mr-[5px]">
                                Area:
                            </span>
                            {project.heading}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="project-description md:pt-[80px] pt-[40px]">
                <div className="container">
                    <div className="content">
                        <h2 className="text-[36px] leading-[58px] pb-10">
                            Description
                        </h2>
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.descOne,
                            }}
                        />
                    </div>
                    <div className="image md:pt-[85px] pt-[50px]">
                        <img
                            src={project.subImgOne}
                            alt={project.heading}
                            width={1170}
                            height={610} 
                            objectFit="cover"
                        />
                    </div>
                    <div className="content" style={{
                        marginTop:18
                    }}>
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.destwo,
                            }}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

ProjectContent.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectContent;
