import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="bg-spursWhite min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-spursBlue mb-4">
          Welcome to Spurs Kenya!
        </h1>
        <p className="text-lg text-spursBlue mb-8 max-w-xl">
          Your go-to site for Tottenham Hotspur fans in Kenya. Stay updated with the latest news, match schedules, and community events.
        </p>
        <a href="#" className="bg-spursBlue text-spursWhite px-6 py-3 rounded-md font-semibold hover:bg-spursSilver transition">
          Explore Now
        </a>
      </main>
    </div>
  )
}