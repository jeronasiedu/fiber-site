const Hero = () => {
  const stars = Array(5).fill("/assets/star.svg")
  return (
    <div className="flex flex-col md:flex-row py-12 items-center space-y-4 md:space-y-0">
      <div className="space-y-5 flex-1">
        <p className="flex items-center gap-2">
          <span className="inline-flex space-x-1">
            {stars.map((item, index) => (
              <img src={item} alt="star" key={index} />
            ))}
          </span>
          Rated 4.8/5 (243 reviews)
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold">
          Create your portfolio in minutes
        </h1>
        <p className="text-gray-600">
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates
        </p>
        <div className="flex flex-col md:flex-row gap-3 ">
          <button className="button-solid py-4 md:py-2">
            Start Free Trial
          </button>
          <a
            href="#"
            className="text-primary font-semibold underline text-center md:text-left "
          >
            View Examples
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-5 ">
          <p className="flex space-x-2 text-gray-600 items-center">
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <span> No credit card Required</span>
          </p>
          <p className="flex space-x-2 text-gray-600 items-center">
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <span>10 free templates</span>
          </p>
        </div>
      </div>
      <div className=" flex-1 ">
        <img
          src="/assets/hero-illustration.png"
          alt="hero illustration"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default Hero
