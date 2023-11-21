function SectionHeader({title, subTitle}) {
  return (
    <div className="text-center pb-[85px]">
      <h3 className="text-[#F95C19] text-[31px] font-bold font-oxanium">{title}</h3>
      <h2 className="text-[#11111D] text-[40px] font-extrabold font-raleway">
        {subTitle}
      </h2>
    </div>
  );
}
export default SectionHeader;
