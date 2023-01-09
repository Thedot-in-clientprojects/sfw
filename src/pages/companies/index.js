import Head from 'next/head';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Breadcrumb from '../../components/breadcrumb';
import HeaderTwo from '../../components/header/header-2';
import AllProjects from '../../components/projects/all-projects';
import { getAllItems } from '../../lib/items-util';

function allItemsPage({ projects }) {
    return (
        <>
            <Head>
                <title>All Projects</title>
                <meta
                    name="description"
                    content="All Project Description"
                />
            </Head>
            <HeaderTwo />
            <Breadcrumb activePage="Projects" pageTitle="SFW" />
            <AllProjects projects={projects} />
            <div>
                <div className="post-area pt-155">
                    <div className="container">
                        <div className="lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]">
                            <div className="lg:col-span-12">
                                <h2 className="font-bold text-[24px] leading-[36px] max-w-[710px] mb-[20px]">
                                    Sree Film World Photography Started as a
                                    film making team since Sep 2015
                                </h2>
                                <p className="text-secondary leading-[27px] mb-[15px]">
                                    We know that good photograpgy means good
                                    business We offer you the highest quality
                                    and first rate photography of your special
                                    moments to frame them as your unforgettable
                                    beautiful memories. We people as a group
                                    make you feel comfortable and make sure that
                                    you have a wonderful experience.
                                </p>
                                <p className="text-secondary leading-[27px] mb-[15px]">
                                    Sree Film World Photography Started as a
                                    film making team since Sep 2015. As years
                                    passed gradually we got passionate on
                                    capturing the lively events. So later on, we
                                    established ourselves into wedding corporate
                                    field in 2019. Why Choose Sree Film World
                                    The Best Wedding and Baby Photography in
                                    Coimbatore. Our photographers are all
                                    trained professionals who will take
                                    extraordinary care with your childs photo
                                    shoot. Huge collection of props available,
                                    Depending on your specifications, the themes
                                    will be customised as per your wish. We
                                    offer you the highest quality and first rate
                                    photography of your special moments to frame
                                    them as your unforgettable beautiful
                                    memories. We people as a group make you feel
                                    comfortable and make sure that you have a
                                    wonderful experience.
                                </p>
                                <div className="single-item pt-[50px]">
                                    <div className="image">
                                        {/* <Image
                                        src='images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format'
                                        alt="SFW Main Img"
                                        width={1170}
                                        height={610}
                                        objectFit="cover"
                                    /> */}
                                    </div>
                                    <div className="content pt-[45px]">
                                        <h2 className="font-bold text-[24px] leading-[38px] mb-[15px]">
                                            SFW About the Services
                                        </h2>
                                        <p className="text-secondary leading-[27px]">
                                            Thanks note Thanks for considering
                                            us for the big day. It is our
                                            pleasure to be able to capture these
                                            Precious moments for you and help
                                            them create lasting memories of
                                            their little ones. Assurance We
                                            assure that the photos we capture
                                            are all highest quality and first
                                            class of your special moments to
                                            frame them as your beautiful
                                            memories. Our photographers are all
                                            trained professionals who will take
                                            extraordinary care with your childs
                                            photo shoot giving you a wonderful
                                            experience with us.
                                        </p>
                                    </div>
                                </div>
                                <blockquote className="flex sm:pt-[75px] sm:pl-[85px] fixed-xs:pt-[30px]">
                                    <span className="quote mr-[5px]">
                                        {/* <BlockQuoteIcon /> */}
                                    </span>
                                    <p className="leading-9 leading-[27px] mb-[15px]">
                                        We know that good photograpgy means good
                                        business We offer you the highest
                                        quality and first rate photography of
                                        your special moments to frame them as
                                        your unforgettable beautiful memories.
                                        We people as a group make you feel
                                        comfortable and make sure that you have
                                        a wonderful experience. Sree Film World
                                        Photography Started as a film making
                                        team since Sep 2015. As years passed
                                        gradually we got passionate on capturing
                                        the lively events. So later on, we
                                        established ourselves into wedding
                                        corporate field in 2019. Why Choose Sree
                                        Film World The Best Wedding and Baby
                                        Photography in Coimbatore. Our
                                        photographers are all trained
                                        professionals who will take
                                        extraordinary care with your childs
                                        photo shoot. Huge collection of props
                                        available, Depending on your
                                        specifications, the themes will be
                                        customised as per your wish. We offer
                                        you the highest quality and first rate
                                        photography of your special moments to
                                        frame them as your unforgettable
                                        beautiful memories. We people as a group
                                        make you feel comfortable and make sure
                                        that you have a wonderful experience.
                                    </p>
                                </blockquote>
                                <p className="text-secondary leading-[27px] pt-[70px]">
                                    We know that good photograpgy means good
                                    business We offer you the highest quality
                                    and first rate photography of your special
                                    moments to frame them as your unforgettable
                                    beautiful memories. We people as a group
                                    make you feel comfortable and make sure that
                                    you have a wonderful experience. Sree Film
                                    World Photography Started as a film making
                                    team since Sep 2015. As years passed
                                    gradually we got passionate on capturing the
                                    lively events. So later on, we established
                                    ourselves into wedding corporate field in
                                    2019. Why Choose Sree Film World The Best
                                    Wedding and Baby Photography in Coimbatore.
                                    Our photographers are all trained
                                    professionals who will take extraordinary
                                    care with your childs photo shoot. Huge
                                    collection of props available, Depending on
                                    your specifications, the themes will be
                                    customised as per your wish. We offer you
                                    the highest quality and first rate
                                    photography of your special moments to frame
                                    them as your unforgettable beautiful
                                    memories. We people as a group make you feel
                                    comfortable and make sure that you have a
                                    wonderful experience.
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
            </div>
        </>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('projects');

    return {
        props: {
            projects: allItems,
        },
    };
}

allItemsPage.propTypes = {
    projects: PropTypes.instanceOf(Object).isRequired,
};

export default allItemsPage;
