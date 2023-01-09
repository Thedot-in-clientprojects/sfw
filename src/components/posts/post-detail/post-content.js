import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import * as FaIcons from 'react-icons/fa';
import PostBanner from './post-banner';
import PostSidebar from '../post-sidebar';
import { useEffect } from 'react';

function PostContent({ post }) {


    useEffect(() => {
      
    }, [post])
    
    
    return (
        <article>
            
            <PostBanner title={post[1].heading} image={post[1].mainImg} />
            <div className="post-area pt-155">
                <div className="container">
                    <div className="lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]">
                        <div className="lg:col-span-12">
                            <h2 className="font-bold text-[24px] leading-[36px] max-w-[710px] mb-[20px]">
                                {post[1].company}
                            </h2>
                            <p className="text-secondary leading-[27px] mb-[15px]">
                                {post[1].category}
                            </p>
                            <p className="text-secondary leading-[27px] max-w-[680px]">
                                {post[1].descOne}
                            </p>
                            <div className="single-item pt-[50px]">
                                <div className="image">
                                    <Image
                                        src={post[1].mainImg}
                                        alt={post[1].heading}
                                        width={1170}
                                        height={610}
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="content pt-[45px]">
                                    <h2 className="font-bold text-[24px] leading-[38px] mb-[15px]">
                                        {post[1].descTwo}
                                    </h2>
                                    <p className="text-secondary leading-[27px]">
                                        {post[1].descThree}
                                    </p>
                                </div>
                            </div>
                            <blockquote className="flex sm:pt-[75px] sm:pl-[85px] fixed-xs:pt-[30px]">
                                <span className="quote mr-[5px]">
                                    <BlockQuoteIcon />
                                </span>
                                <p className="leading-9 text-[24px] max-w-[530px]">
                                    {post[1].headingTwo}
                                </p>
                            </blockquote>
                            <p className="textsecondary- leading-[27px] pt-[70px]">
                                {post[1].headingTwo}
                            </p>
                            {/* <ul className="post-share-tags pt-[65px]">
                                {post.postTags.map((item) => (
                                    <li key={item}>
                                        <Link href="#">
                                            <a>{item}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                        <div className="lg:col-span-4 max-md:pt-[50px]">
                            {/* <PostSidebar categories={categories} tags={tags} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default PostContent;
