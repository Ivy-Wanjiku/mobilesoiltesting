// "use client";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email address").required("Email is required"),
//   phone: Yup.string().required("Phone is required"),
//   message: Yup.string().required("Message is required"),
// });

// const ContactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit = async (data: any) => {
//     try {
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
// <div className="max-w-7xl mx-auto" id="form">
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950 mb-4">
//           Contact Us
//         </h2>
//         <div className="h-1 w-24 bg-green-800 mx-auto mb-12 rounded-full"></div>
//     <div className="bg-green-800 shadow-md p-6 rounded-md">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block font-medium mb-2">
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             {...register("name")}
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.name && <div className="text-red-500 text-sm">{errors.name.message}</div>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block font-medium mb-2">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             {...register("email")}
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="phone" className="block font-medium mb-2">
//             Phone
//           </label>
//           <input
//             id="phone"
//             type="tel"
//             {...register("phone")}
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.phone && <div className="text-red-500 text-sm">{errors.phone.message}</div>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block font-medium mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             {...register("message")}
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows={4}
//           ></textarea>
//           {errors.message && <div className="text-red-500 text-sm">{errors.message.message}</div>}
//         </div>
//         <button
//           type="submit"
//           className="bg-red-950 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Submitting..." : "Send Message"}
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ContactForm;

"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Define the Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  message: Yup.string().required("Message is required"),
});

// Define a TypeScript interface for form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto" id="form">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-950 mb-4">
        Contact Us
      </h2>
      <div className="h-1 w-24 bg-green-800 mx-auto mb-12 rounded-full"></div>
      <div className="bg-green-800 shadow-md p-6 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <div className="text-red-500 text-sm">{errors.name.message}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <div className="text-red-500 text-sm">{errors.phone.message}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            {errors.message && <div className="text-red-500 text-sm">{errors.message.message}</div>}
          </div>
          <button
            type="submit"
            className="bg-red-950 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
