import { useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
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
import { v4 as uuidv4 } from 'uuid';



function ContactForm() {

    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [message, setmessage] = useState('');


    const submitEnquery = (e) => {
            e.preventDefault();
            const db = getDatabase();
            let id = uuidv4();
            set(ref(db, `/contact/${id}`), {
                name: name,
                phone: phone,
                msg: message
            }).then((res) => {
                setname('');
                setphone('');
                setmessage('');
            })
    }

    

    return (
        <div className="contact-area md:pt-[145px] pt-[45px] border-[#595959] border-opacity-30 border-b md:pb-160 pb-[60px]">
            <div className="container">
                <div className="lg:grid lg:grid-cols-5">
                    <div className="contact-info lg:col-span-2 lg:pr-[15px]">
                        <h2 className="text-[48px] left-[58px] md:pb-[55px] pb-[35px]">
                            Contact
                        </h2>
                        <h3 className="text-3xl leading-9 font-semibold">
                            Coimbatore,
                            <span className="text-[#6F6969]">TamilNadu</span>
                        </h3>
                        <ul className="text-[14px] leading-[27px] text-secondary pt-6">
                            <li className="pb-[15px] max-w-[270px]">
                                No. 1002, Gandhipuram, Coimbatore - 641002
                            </li>
                            <li className="pb-[15px]">
                                <Link href="tel:+070-3689-56-56-56">
                                    <a>(+91) 9858542111</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:contact@nordicstudio.co">
                                    <a>sreefilmworld@gmail.com</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="button-wrap pt-[95px]">
                            {/* <Link href="/contact">
                                <a className="inline-flex items-center text-[14px] leading-[30px] p-[11px_32px] transition duration-[0.4s] border border-[#969696] uppercase hover:border-black hover:bg-black hover:text-white">
                                    Map Direction
                                    <div className="ml-[5px]">
                                        <AiOutlineRight />
                                    </div>
                                </a>
                            </Link> */}
                        </div>
                    </div>
                    <div className="contact-form lg:col-span-3 max-md:pt-[50px]">
                        <h2 className="text-[18px] leading-[22px] uppercase md:mb-[75px] mb-[35px]">
                            Send a message for us
                        </h2>
                        <form>
                            <div>
                                <div className="lm:flex">
                                    <input
                                        className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] lm:mr-[20px]"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        required
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                    <input
                                        className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px]"
                                        placeholder="Phone"
                                        type="number"
                                        id="number"
                                        required
                                        onChange={(e) => setphone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    className="w-full border-[#595959] border-opacity-30 border-b focus-visible:placeholder:text-black focus-visible:outline-0 focus-visible:border-black py-[15px] mt-[35px]"
                                    placeholder="Here goes your message"
                                    id="message"
                                    rows="6"
                                    required
                                    onChange={(e) => setmessage(e.target.value)}
                                />
                            </div>

                            <div className="mt-[55px]">
                                <button
                                    type="submit"
                                    className="boxed-btn text-[14px] leading-[30px]"
                                    onClick={submitEnquery}
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
