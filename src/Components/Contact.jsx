import { useState } from "react";
import Tbox from "./Contact2";

const Regi = () => {

    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)

    const [tday, setTday] = useState(null)
    const [thour, setThour] = useState(null)
    const [tmin, setTmin] = useState(null)
    const [tsec, setTsec] = useState(null)

    const nameHandler =  (e) => {
        setName(e.target.value)
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const submitHandler = () => {
        console.log("73")
       // Forward to db 
    }

    let Ddate = new Date("Aug 25, 2023 00:00:00").getTime()

    const setTime = () => {
        let getDate = new Date()
        let now = Ddate - getDate
        let TDay = Math.floor(now / (1000 * 60 * 60 * 24));
        let THour = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let TMin = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        let TSec = Math.floor((now % (1000 * 60)) / 1000);
        setTday(TDay)
        setThour(THour)
        setTmin(TMin)
        setTsec(TSec)
    }

    setInterval(setTime, 1000);

    return (
        <>
        <div className="h-[30rem] w-screen bg-gradient-to-r from-[#E94484] to-[#E68F5C] flex justify-center items-center text-white">
            <div className="h-80 w-screen mx-20  flex justify-center items-center">
                <div className="h-80 w-2/3  block ">
                    <div className="h-1/2 w-full">
                        <h1 className="text-6xl font-bold mx-52 pt-10">Register Now</h1>
                        <h1 className="text-xs mx-52 pt-4">Looking for bla-bla black sheep.... Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h1>
                    </div>
                    <div className="h-1/2 w-full flex px-52 gap-5">
                        <Tbox num={tday} unit="Days" />
                        <Tbox num={thour} unit="Hours" />
                        <Tbox num={tmin} unit="Mins" />
                        <Tbox num={tsec} unit="Sec" />
                    </div>
                </div>
                <div className="h-96 w-1/3 text-black">
                    <div className="h-96 w-2/3 bg-white rounded-2xl flex items-center justify-center p-16 shadow-md">
                        <div>
                            <form action="">
                                <div className="flex justify-center w-full">
                                    <h1 className="my-4 text-xl">For Courses Info</h1>
                                </div>
                                <input type="text" className="border-solid border-b-2 border-black outline-none w-full py-2 my-2" onChange={nameHandler} placeholder="Full Name" required />
                                <input type="tel" className="border-solid border-b-2 border-black outline-none w-full py-2 my-2" onChange={phoneHandler} placeholder="Phone Number" required />
                                <input type="email" className="border-solid border-b-2 border-black outline-none w-full py-2 my-2" onChange={emailHandler} placeholder="Email Address" required />
                                <input type="submit" className="border-none outline-none bg-gradient-to-r from-[#E94484] to-[#E68F5C] w-full p-4 text-white mt-5" onClick={submitHandler} value="SUBMIT" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Regi;
