import Logo from '../../assets/g82_Sx2WSDCB82jMDNd6DQ.jpeg'

export const Header = () => {
  return (
    <div className='place-items-center grid'>
        <div className="max-w-screen-lg w-full align-center  bg-black min-h-40 p-5 mt-9 ">
            <img src={Logo} alt="logo img" width={100} className='rounded-md '/>
            <Navbar/>
        </div>
    </div>
    
  )
}




const items = [
    
    {
        title: "About", 
        route : '/about'
    },
    {
        title: "Activity", 
        route : '/activity'
    },
    {
        title: "Problems", 
        route : '/problems'
    },
    {
        title: "Leaderboard", 
        route : '/leaderboard'
    },
]
function Navbar() {
  return (
    <div className='flex justify-between'>{
        items.map((item)=> <NavbarItem route= {item.route} title= {item.title}/>)
        }</div>
  )
}
function NavbarItem({title , route}:{
    title :string,
    route :string
}) {
    return(
        <div className="mx-10 text-slate-500 text-lg cursor-pointer">
            {title}
        </div>
    )
}