export default function Card({description, position, company,name, image}){
   

      return (
  
        <div className="w-fit bg-white border-2 flex justify-center items-center">
            <div className="">
                <p className="">{description}</p>
                <div className="flex justify-start">
                    <img src={image} alt="" className="w-auto rounded-[50%]"/>
                    <div className="flex flex-col">
                        <h4>{name}</h4>
                        <p>{position} @ {company}</p>
                    </div>
                </div>
            </div>
        </div>
      )
}