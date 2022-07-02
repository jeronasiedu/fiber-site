const Why = () => {
  const cards = [
    {
      icon: "/assets/time.svg",
      title: "Build in minutes",
      desc: "Wit a selection of pre-made templates, you can build out a portfolio in less than 10 minutes",
    },
    {
      icon: "/assets/code.svg",
      title: "Add custom CSS",
      desc: "Customize your personal portfolio even more with the ability to add your own custom CSS styles",
    },
    {
      icon: "/assets/allSizes.svg",
      title: "Responsive",
      desc: "All Fiber templates are fully responsive to ensure the experience is seamless across all devices",
    },
  ]
  return (
    <section className="py-10 space-y-3">
      <h4 className="font-semibold text-primary">Why Fiber?</h4>
      <h2 className="max-w-md pb-6 text-3xl font-medium">
        A good portfolio means good employability.
      </h2>
      <div className="grid gap-4 lg:gap-6 grid-cols-responsive ">
        {cards.map((card, index) => (
          <div className="space-y-2" key={index}>
            <img src={card.icon} alt={card.title} />
            <h5 className="font-medium">{card.title}</h5>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Why
