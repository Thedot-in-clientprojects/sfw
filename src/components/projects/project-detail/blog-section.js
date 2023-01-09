import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IoMdGrid } from 'react-icons/io';
import ProjectBanner from './project-banner';
import { useEffect } from 'react';

function BlogContent({ project }) {

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
                                Back to Blogs
                            </a>
                        </Link>
                    </div>
                
                </div>
            </div>
            <div className="project-description md:pt-[80px] pt-[40px]">
                <div className="container">
                    <div className="content">
                        <h2 className="text-[36px] leading-[58px] pb-10">
                        {project.heading}
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
                            src={project.mainImg}
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
                                __html: project.descOne,
                            }}
                        />
                    </div>
                  
                    <div className="content" style={{
                        marginTop:18
                    }}>
                             
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.descTwo,
                            }}
                        />
                    </div>
                    <div className="image md:pt-[85px] pt-[50px]">
                        <img
                            src={project.mainImgOne}
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
                                __html: project.descThree,
                            }}
                        />
                    </div>
                    <div className="content" style={{
                        marginTop:18
                    }}>
                             
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.descThree,
                            }}
                        />
                    </div>
                    <div className="content" style={{
                        marginTop:1
                    }}>
                             
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.descThree,
                            }}
                        />
                    </div>
                    <div className="image md:pt-[85px] pt-[50px]">
                        <img
                            src={project.mainImgThree}
                            alt={project.heading}
                            width={1170}
                            height={610} 
                            objectFit="cover"
                        />
                    </div>
                    <div className="image md:pt-[85px] pt-[50px]">
                        <img
                            src={project.mainImgFour}
                            alt={project.heading}
                            width={1170}
                            height={610} 
                            objectFit="cover"
                        />
                    </div>
                    <div className="content" style={{
                        marginTop:1
                    }}>
                             
                        <div
                            className="text-[18px] leading-8 text-secondary"
                            dangerouslySetInnerHTML={{
                                __html: project.descFour,
                            }}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}



export default BlogContent;
