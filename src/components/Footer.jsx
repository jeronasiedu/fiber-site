const Footer = () => {
  const footerItems = [
    {
      title: "Sitemap",
      items: ["Homepage", "Pricing", "Testimonials", "Features"],
    },
    {
      title: "Resources",
      items: ["Support", "Contact", "FAQ"],
    },
    {
      title: "Company",
      items: ["About", "Customers", "Blog"],
    },
    {
      title: "Portfolios",
      items: ["Sarah Andrews", "Matthew Higgins", "Janice Dave"],
    },
  ]
  return (
    <section className="flex flex-col gap-6 py-6 pb-10 md:flex-row">
      <div className="max-w-sm space-y-3 ">
        <h3 className="text-lg font-semibold">Fiber</h3>
        <p className="text-gray-600 ">
          With fiber, you can setup your own personal portfolio in minutes with
          dozens of pre-made, beautiful templates.
        </p>
        <p className="text-gray-600">Made with ❤ in Ghana.</p>
      </div>
      {footerItems.map((item, index) => (
        <div key={index}>
          <h5 className="text-lg font-semibold">{item.title}</h5>
          <ul>
            {item.items.map((subItem, index) => (
              <li key={index} className="text-gray-600">
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Footer
