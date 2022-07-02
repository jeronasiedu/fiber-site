const SocialProof = () => {
  const users = [
    {
      name: "Sarah Andrews",
      revenue: "100",
      profile: "/assets/user.svg",
      text: "Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.",
      short_name: "Sarah's",
    },
    {
      name: "Matthew Higgins",
      revenue: "20",
      profile: "/assets/user2.svg",
      text: "I have been getting a lot of leads ever since I used fiber's pre-made templates, now I just need to work on my case studies and I'll be ready to go!",
      short_name: "Matthew's",
    },
    {
      name: "Janice Dave",
      revenue: "30",
      profile: "/assets/user3.svg",
      text: "I only just started freelancing this year and I have already made more than in my full-time job. The templates are just so amazing",
      short_name: "Janice's",
    },
  ]
  return (
    <section className="grid gap-4 py-8 grid-cols-responsive lg:gap-6 ">
      {users.map((user, index) => (
        <div className="p-4 border rounded" key={index}>
          <div className="">
            <div className="flex pb-2 space-x-2">
              <img src={user.profile} alt={user.name} className="w-12" />
              <div className="">
                <p className="text-sm font-semibold text-primary">
                  {user.name}
                </p>
                <p className="text-sm font-medium text-slate-800">
                  ${user.revenue}k in revenue
                </p>
              </div>
            </div>
            <p className="">{user.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default SocialProof
