// import React from "react";

// function Contact() {
//   return (
//     <div className="bg-gray-300 w-full h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow-md md:w-1/2 w-full">
//         <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>

//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-sm font-medium">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
//               placeholder="Type your message here"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-primaryColor text-white py-2 px-4 rounded-md hover:bg-blue-800"
//           >
//             Submit
//           </button>
//       </div>
//     </div>
//   );
// }

// export default Contact;



import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="bg-gray-300 w-full h-screen flex items-center justify-center">
      
      <div className="bg-white p-6 rounded shadow-md md:w-1/2 w-full">
        <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            {/* Form input fields */}
            <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 outline-none rounded-md px-3 py-2"
              placeholder="Type your message here"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primaryColor text-white py-2 px-4 rounded-md hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
