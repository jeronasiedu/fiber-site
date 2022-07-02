import illustration from "/assets/hero-Illustration.png"
const Hero = () => {
  const stars = Array(5).fill("/assets/star.svg")
  return (
    <div className="flex flex-col items-center py-10 space-y-4 md:flex-row md:space-y-0">
      <div className="flex-1 space-y-5">
        <p className="flex items-center gap-2">
          <span className="inline-flex space-x-1">
            {stars.map((item, index) => (
              <img src={item} alt="star" key={index} />
            ))}
          </span>
          Rated 4.8/5 (243 reviews)
        </p>
        <h1 className="text-4xl font-bold lg:text-5xl">
          Create your portfolio in minutes
        </h1>
        <p className="text-gray-600">
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates
        </p>
        <div className="flex flex-col gap-3 md:flex-row ">
          <button className="py-4 button-solid md:py-2">
            Start Free Trial
          </button>
          <a
            href="#"
            className="font-semibold text-center underline rounded focus:ring focus:outline-none text-primary md:text-left "
          >
            View Examples
          </a>
        </div>
        <div className="flex flex-col gap-5 md:flex-row ">
          <p className="flex items-center space-x-2 text-gray-600">
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <span> No credit card Required</span>
          </p>
          <p className="flex items-center space-x-2 text-gray-600">
            <img src="/assets/checkmark.svg" alt="checkmark" />
            <span>10 free templates</span>
          </p>
        </div>
      </div>
      <div className="flex-1 ">
        <img src={illustration} alt="hero illustration" className="w-full" />
      </div>
    </div>
  )
}

export default Hero
