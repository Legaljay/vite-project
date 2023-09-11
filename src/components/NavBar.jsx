import logo from '../assets/pngwing.png'

export default function NavBar() {

    return(
        <div className="bg-sky-950 text-gray-50 flex justify-between p-1">
            <div className="text-[40px]">
                <img src={logo} alt="" className='w-20 hover:animate-bounce'/>
            </div>
            <div className="flex">
                <ul className="flex justify-between gap-2 text-[20px] items-center">
                    <li className="hover:bg-[red] p-[10px]">Resume</li>
                    <li className="hover:bg-[red] p-[10px]">About</li>
                    <li className="hover:bg-[red] p-[10px]">Experiences</li>
                    <li className="hover:bg-[red] p-[10px]">Tech Stack</li>
                    <li className="hover:bg-[red] p-[10px]">Projects</li>
                    <li className="hover:bg-[red] p-[10px]">Contact Me</li>
                </ul>
            </div>
        </div>
    )
}

