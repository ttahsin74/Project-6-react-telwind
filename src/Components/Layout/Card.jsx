import Img from "./Image";

function Card({src, alt="",title,define,firstItem,secondItem, thirdItem, fourthItem, fifthItem}) {
    return(
        <>
            <div className=" mb-[184px] card px-[62px] pt-[65px] pb-[49px] bg-[#fff]  rounded-[16px]">
                <div className="card-title text-center">
                <Img src={src} alt={alt} imgClassName="inline-block"/>
                <h2 className="mt-[29px] text-[25px] font-extrabold text-[#464558] font-raleway">{title}</h2>
                </div>
                <div className="card-content  mt-[40px]">
                    <p className="font-raleway text-[#7B7A8B] mb-[40px]">{define}</p>
                    <ul className="list-disc list-inside">
                      <li className="text-[#F95C19]"><h6 className=" inline-block text-[#7B7A8B]">{firstItem}</h6></li>
                      <li className="text-[#F95C19]"><h6 className=" inline-block text-[#7B7A8B]">{secondItem}</h6></li>
                      <li className="text-[#F95C19]"><h6 className=" inline-block text-[#7B7A8B]">{thirdItem}</h6></li>
                   </ul>
                </div>
                <a href="#" className="block py-[12px] mt-[60px] border-[2px] border-[#F95C19] text-[#f95c19] font-oxanium text-[20px] font-bold text-[#F95C19] text-center rounded-[5px]">Learn more</a>
            </div>
        </>
        )
}
export default Card;