import { Link } from 'react-router-dom'



const ErrorPage = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl">SORRY THERE WAS AN ERROR OR THIS PAGE DOES NOT EXIST</h1>
        <p className="my-12 text-lg"> You can try to refresh or go back to the home page</p>
        <Link to="/" className="text-3xl underline text-blue-600 hover:text-primary-500 transition-all duration-300 ease-in-out">
          Go Back
        </Link>
      </div>
    </section>
  )
}

export default ErrorPage