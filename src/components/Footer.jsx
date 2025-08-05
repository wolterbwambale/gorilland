import React from "react";

function Footer() {
  return (
    <div className="max-w-[1240px] my-16 px-4 mx-auto bg-black">
      <div className="w-full text-white grid md:grid-cols-4 gap-6 py-4 px-2 ">
        <div>
          <h2 className="text-2xl font-bold text-gray-600">Who we are</h2>
          <p>
            We are a tours and travel company based in Kampala Uganda that will
            give your safari experience to the detail making you a modern time
            explorer. With a vast Hospitality Business Consultancy Background,
            we make your African Safari experience a memorable.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-xl text-gray-600">Contact Info</h2>
          <p>LOCATION</p>
          <p className="py-2 border-b border-gray-600">
            3rd Floor Metropole House, Entebbe Road, Kampala Uganda{" "}
          </p>
          <p className="py-2 border-b border-gray-600">Email us</p>
          <p className="md:text-xl text-[#00df9a] font-bold text-xl py-2 border-b border-gray-600">
            info@gorillandtravelcare.com
          </p>
          <p>Phone</p>
          <p className="py-2">+256 772 642101 </p>
        </div>
        <div>
          <h2 className="text-xl text-gray-600 font-bold ">Quick Links</h2>
          <p className="font-bold py-2 border-b border-gray-600">Home</p>
          <p className="font-bold  py-2 border-b border-gray-600">About</p>
          <p className="font-bold py-2 border-b border-gray-600">Service</p>
          <p className="font-bold py-2 border-b border-gray-600">Contact</p>
          <p className="font-bold py-2 border-b border-gray-600">Resources</p>
          <p className="font-bold py-2">Career</p>
        </div>
        <div>
          <h2 className="text-2xl text-gray-600 font-bold">Destinations</h2>
          <p className="py-2 font-bold border-b border-gray-600">Uganda</p>
          <p className="py-2 font-bold border-b border-gray-600">Kenya</p>
          <p className="py-2 font-bold border-b border-gray-600">Rwanda</p>
          <p className="py-2 font-bold border-b border-gray-600">Tanzania</p>
          <p className="py-2 font-bold border-b border-gray-600">Zimbabwe</p>
          <p>Others</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
