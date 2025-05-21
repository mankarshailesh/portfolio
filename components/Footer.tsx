export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>&copy; {new Date().getFullYear()} Shailesh Mankar</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="mailto:mankarshailesh@yahoo.com" className="hover:underline">
            Email
          </a>
          <a href="tel:+919028333382" className="hover:underline">
            Call
          </a>
          <a
            href="https://linkedin.com/in/shailesh-mankar-86a9577a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
