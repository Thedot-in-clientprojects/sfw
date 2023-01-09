import Head from 'next/head';
import HeaderTwo from '../components/header/header-2';
import GoogleMap from '../components/contact/google-map';
import ContactForm from '../components/contact/contact-form';

function ContactPage() {


   


    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Send us your messages!" />
            </Head>
            <HeaderTwo />
            {/* <GoogleMap /> */}
            <ContactForm />
            <div />
        </>
    );
}

export default ContactPage;
