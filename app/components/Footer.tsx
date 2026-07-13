// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-white text-center p-4 mt-10">
//       <p>Developed by Varsha Swapnil Somvanshi</p>

//       <div className="mt-2 space-x-4">
//         <a
//           href="https://github.com/varshasomvanshi1107-oss"
//           target="_blank"
//           className="text-blue-400"
//         >
//           GitHub
//         </a>

//         <a
//           href="https://www.linkedin.com/in/varsha-somvanshi"
//           target="_blank"
//           className="text-blue-400"
//         >
//           LinkedIn
//         </a>
//       </div>
//     </footer>
//   );
// }   


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>
        © {new Date().getFullYear()} House of EdTech. All rights reserved.
      </p>
    </footer>
  );
}