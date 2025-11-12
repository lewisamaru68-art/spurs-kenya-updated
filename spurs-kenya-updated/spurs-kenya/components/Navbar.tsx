export default function Navbar() {
  return (
    <nav className="bg-spursBlue text-spursWhite w-full shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Spurs Kenya</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-spursSilver">Home</a>
          <a href="#" className="hover:text-spursSilver">News</a>
          <a href="#" className="hover:text-spursSilver">Matches</a>
          <a href="#" className="hover:text-spursSilver">About</a>
        </div>
      </div>
    </nav>
  )
}