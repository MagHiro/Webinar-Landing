import Image from "next/image"
import meetingIcon from "./assets/meeting-image.svg";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      {/* Sticky Navbar */}
      <div id="navbar" className="shadow-md sticky">
        <div className="px-8 md:px-0 container mx-auto flex items-center justify-between pt-4 pb-2">
          <span className="font-bold md:text-xl"><span className="text-blue-600">ANZ</span> Migrate</span>
          <button className="bg-blue-600 rounded-md py-2 px-9 font-medium text-white">Register</button>
        </div>
      </div>

      <section className="pt-12">
        <div className="px-8 md:px-0 container mx-auto">
          <h1 id="webinar-title" className="text-blue-600 text-3xl font-bold text-center">Webinar Conference</h1>
          <section className="pt-10 ">
            <h2 id="webinar-about" className="text-blue-600 text-2xl font-semibold text-center">About This Webinar</h2>
            <p className="pt-6 text-slate-900 font-semibold text-xl text-center">Elit irure ea sunt sit nostrud id sunt et veniam voluptate. Sint sint est labore ad. Elit et proident velit excepteur fugiat consequat et elit. Labore quis magna ut eiusmod exercitation dolor incididunt ex adipisicing nostrud sit incididunt. Adipisicing incididunt pariatur nisi in nulla Lorem ad excepteur exercitation sunt commodo anim in mollit.</p>
            <p className="pt-6 text-center font-bold">Thu, Oct 23, 2023<br></br>6:00 PM Singapore (GMT +7.00) </p  >
          </section>       
        </div>
      </section>

      <section className="py-10 mt-12 bg-gray-100">
        <div className="px-8 md:px-0 container mx-auto">
          <h2 id="webinar-agenda" className="text-blue-600 text-2xl font-semibold text-center">Agenda</h2>
          <ul className="list-disc px-2 pt-3 font-semibold text-xl">
              <li>House Keeping</li>
              <li>Course overview & platform walkthrough</li>
              <li>Supports & Exam information</li>
          </ul>
        </div>
      </section>

      <section className="py-10 mt-12 bg-gray-100">
        <div className="px-8 md:px-0 container mx-auto">
          <h2 id="webinar-agenda" className="text-blue-600 text-2xl font-semibold text-center">Presenter</h2>
          <ul className="pt-3 text-center">
            <li className="font-bold text-xl"><span className="text-blue-600">ANZ</span> Migrate</li  >
            <li className="font-bold text-xl text-gray-600">MOOVAZ</li>
          </ul>
        </div>
      </section>

      <section className="py-10 mt-12 bg-gray-100 ">
        <div className="px-8 md:px-0 container mx-auto">
          <h2 id="webinar-agenda" className="text-blue-600 text-2xl font-semibold text-center">Register</h2>
          <form action="" method="post" className="px-2 flex flex-col">
            <div id="email-form" className="flex flex-col pb-4">
              <label htmlFor="email" className="text-lg text-blue-600 font-semibold pb-1">Email*</label>
              <input type="email" id="email" name="email" className="py-2" required/>
            </div>
            <div id="fname-form" className="flex flex-col pb-4">
              <label htmlFor="fname" className="text-lg text-blue-600 font-semibold pb-1">First Name*</label>
              <input type="text" id="fname" name="fname" className="py-2" required/>
            </div>
            <div id="lname-form" className="flex flex-col pb-4">
              <label htmlFor="lname" className="text-lg text-blue-600 font-semibold pb-1">Last Name*</label>
              <input type="text" id="lname" name="lname" className="py-2" required/>
            </div>
            <div id="country-form" className="flex flex-col pb-6">
              <label htmlFor="country" className="text-lg text-blue-600 font-semibold pb-1">Country*</label>
              <input type="text" id="country" name="country" className="py-2" required/>
            </div>

            <button className="bg-blue-600 rounded-md py-2 px-9 font-medium text-white">Register</button>
          </form>
        </div>
        </section>
    </div>
  )
}
