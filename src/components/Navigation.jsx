const Navigation = () => {
  const links = ["community", "pricing", "features"]
  return (
    <nav className="flex items-center justify-between ">
      <a href="#" className="font-semibold p-1">
        Fiber
      </a>
      <ul className="space-x-4 hidden md:block">
        {links.map((link, index) => (
          <a href="#" className="p-1" key={index}>
            {link}
          </a>
        ))}
      </ul>
      <div className="space-x-4">
        <button className="p-1 font-semibold">sign in</button>
        <button className="button-solid">Sign up</button>
      </div>
    </nav>
  )
}

export default Navigation
