import Head from 'next/head';
import PropTypes from 'prop-types';
import HeaderOne from '../components/header/header-1';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import Testimonial from '../components/home-page/testimonial';
import { getAllItems } from '../lib/items-util';
import Brand from '../components/home-page/brand';
import PageBanner from '../components/page-banner/index';
import Team from '../components/team';

function AboutPage({ services, testimonialItems, brandItems, teamItems }) {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <HeaderOne />
            <PageBanner />
            <About />
            <div>
                <div className="post-area pt-155">
                    <div className="container">
                        <div className="lg:grid lg:grid-cols-12 xl:gap-x-[50px] gap-x-[30px]">
                            <div className="lg:col-span-12">
                                <h2 className="font-bold text-[24px] leading-[36px] max-w-[710px] mb-[20px]">
                                    About SFW
                                </h2>
                                <p className="text-secondary leading-[27px] mb-[15px]">
                                    We offer you the highest quality and first
                                    rate photography of your special moments to
                                    frame them as your unforgettable beautiful
                                    memories. We people as a group make you feel
                                    comfortable and make sure that you have a
                                    wonderful experience.We offer you the
                                    highest quality and first rate photography
                                    of your special moments to frame them as
                                    your unforgettable beautiful memories. We
                                    people as a group make you feel comfortable
                                    and make sure that you have a wonderful
                                    experience.We offer you the highest quality
                                    and first rate photography of your special
                                    moments to frame them as your unforgettable
                                    beautiful memories. We people as a group
                                    make you feel comfortable and make sure that
                                    you have a wonderful experience.
                                </p>
                                <p className="text-secondary leading-[27px] mb-[15px]">
                                    Sree Film World Photography Started as a
                                    film making team since Sep 2015 We know that
                                    good photograpgy means good business We
                                    offer you the highest quality and first rate
                                    photography of your special moments to frame
                                    them as your unforgettable beautiful
                                    memories. We people as a group make you feel
                                    comfortable and make sure that you have a
                                    wonderful experience.
                                    
                                </p>
                                {/* <div className="single-item pt-[50px]">
                                <div className="image">
                                    <Image
                                        src={`/images/posts/${post.slug}/${post.descriptionImg}`}
                                        alt={post.alt}
                                        width={1170}
                                        height={610}
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="content pt-[45px]">
                                    <h2 className="font-bold text-[24px] leading-[38px] mb-[15px]">
                                        {post.singlePostTitle}
                                    </h2>
                                    <p className="text-secondary leading-[27px]">
                                        {post.singlePostDesc}
                                    </p>
                                </div>
                            </div> */}
                                {/* <blockquote className="flex sm:pt-[75px] sm:pl-[85px] fixed-xs:pt-[30px]">
                                <span className="quote mr-[5px]">
                                    <BlockQuoteIcon />
                                </span>
                                <p className="leading-9 text-[24px] max-w-[530px]">
                                    {post.blockquoteText}
                                </p>
                            </blockquote>
                            <p className="text-secondary leading-[27px] pt-[70px]">
                                {post.postExcerpt}
                            </p> */}
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
                            {/* <div className="lg:col-span-4 max-md:pt-[50px]">
                            <PostSidebar categories={categories} tags={tags} />
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <Services services={services} /> */}
            {/* <Testimonial testimonialItems={testimonialItems} />
            <Brand brandItems={brandItems} /> */}
            {/* <Team teamItems={teamItems} /> */}
        </>
    );
}

export function getStaticProps() {
    const services = getAllItems('services');
    const testimonialItems = getAllItems('testimonial');
    const brandItems = getAllItems('brands');
    const teamItems = getAllItems('teams');

    return {
        props: {
            services,
            testimonialItems,
            brandItems,
            teamItems,
        },
    };
}

AboutPage.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
