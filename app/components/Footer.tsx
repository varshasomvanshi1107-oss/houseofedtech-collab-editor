export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p className="font-semibold">
        Developed by Varsha Swapnil Somvanshi
      </p>

      <div className="mt-3 flex justify-center gap-6">
        <a
          href="https://github.com/varshasomvanshi1107-oss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/varsha-somvanshi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-3 text-sm text-gray-400">
        © {new Date().getFullYear()} House of EdTech Assignment
      </p>
    </footer>
  );
}