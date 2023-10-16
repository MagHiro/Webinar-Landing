import Image from "next/image"
import meetingIcon from "./assets/meeting-image.svg";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      {/* Sticky Navbar */}
      <div id="navbar" className="shadow-sm sticky">
        <div className="px-8 md:px-0 container mx-auto flex items-center justify-between py-5">
          <span className="font-semibold md:text-2xl "><span className="text-blue-600">ANZ</span> Migrate</span>
          <button className="bg-blue-600 rounded-md py-2 px-12 font-medium text-white md:text-lg">Register</button>
        </div>
      </div>

      <div className="md:container mx-auto ">
        <section className="pt-28">
          <div className=" md:px-0 container mx-auto">
            <h1 id="webinar-title" className="text-blue-600 text-6xl font-bold text-center">Migration Open Day</h1>
            <p className="pt-6 text-center font-bold">Thu, Oct 23, 2023<br></br>6:00 PM Singapore (GMT +7.00) </p>
            <section className="mt-28 py-16 bg-gray-100 px-10">
              <h2 id="webinar-about" className="text-blue-600 text-2xl font-bold text-left">About This Webinar</h2>
              <p className="pt-6 text-gray-500 font-semibold text-xl text-left">Join us LIVE for the DMI Open day!</p>
              <p className="pt-6 text-gray-500 font-semibold text-xl text-left">Talk to our team in real-time, and learn how Migrate has helped boost the careers of thousands of marketers around the world, with over 220,000 members around the world see why we're the global authority on migration.</p>
              <p className="pt-6 text-gray-500 font-semibold text-xl text-left">In this webinar, ANZ Migrate & MOOVAZ will walk you through your Migration experience. You'll experience the course interface, sample modules, and all the key features that increase your overall opportunity, as well as all the supports provided to you during your assistant.</p>
              
              <h2 id="webinar-agenda" className="pt-16 text-blue-600 text-2xl font-semibold text-left">Agenda</h2>
              <ul className="pt-3 font-semibold text-xl text-gray-500 list-disc list-inside">
                  <li>Migrating Visa</li>
                  <li>Migration overview & platform walkthrough</li>
                  <li>Supports & Migration information</li>
              </ul>
            </section>       
          </div>
        </section>

        <section className="py-10 mt-14 bg-gray-100">
          <div className="px-10">
            <h2 id="webinar-agenda" className="text-blue-600 text-2xl font-semibold text-left">Presenter</h2>
            <ul className="pt-3 text-left">
              <li className="font-bold text-2xl pb-5"><span className="text-blue-600">ANZ</span> Migrate</li  >
              <li className="font-bold text-2xl text-gray-600">MOOVAZ</li>
            </ul>
          </div>
        </section>

        <section className="py-10 mt-12 bg-gray-100 ">
          <div className="md:px-0 container mx-auto">
            <h2 id="webinar-agenda" className="text-blue-600 text-2xl font-semibold text-center">Register</h2>
            <form action="" method="post" className="flex flex-col">
              <div className="px-10 py-10 grid md:grid-cols-2 gap-8">
                <div id="email-form" className="flex flex-col pb-4">
                  <label htmlFor="email" className="text-lg text-blue-600 font-semibold pb-1">Email*</label>
                  <input type="email" id="email" name="email" className="py-2 px-2" required/>
                </div>
                <div id="fname-form" className="flex flex-col pb-4">
                  <label htmlFor="fname" className="text-lg text-blue-600 font-semibold pb-1">First Name*</label>
                  <input type="text" id="fname" name="fname" className="py-2 px-2" required/>
                </div>
                <div id="lname-form" className="flex flex-col pb-4">
                  <label htmlFor="lname" className="text-lg text-blue-600 font-semibold pb-1">Last Name*</label>
                  <input type="text" id="lname" name="lname" className="py-2 px-2" required/>
                </div>
                <div id="country-form" className="flex flex-col pb-6">
                  <label htmlFor="country" className="text-lg text-blue-600 font-semibold pb-1">Country*</label>
                  <input type="text" id="country" name="country" className="py-2 px-2" required/>
                </div>
              </div>

              <button className="bg-blue-600 rounded-md py-2 px-9 font-medium text-white text-center items-center max-w-fit mx-auto">Register</button>
            </form>
          </div>
          </section>
        </div>
    </div>
  )
}
