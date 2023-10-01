import NumInc from "../utils/NumInc";
import { achievements } from "../utils/data";

const Achievements = () => {
    return (
        <div className="grid grid-cols-2 p-12 md:grid-cols-4 gap-[15px] md:gap-[25px] 2xl:gap-[50px] mt-[75px] md:mt-[150px] relative">
            {achievements.map((item) => (
                <div
                    key={item.id}
                    className="w-full aspect-square flex justify-center items-center relative bg-[#1A1A1A] md:bg-transparent rounded-[10px]"
                >
                    <img
                        src='/illustrations/dashed-circle.svg'
                        className="hidden md:block absolute top-0 left-0"
                    />
                    <div className="flex items-center text-white relative">
                        {/* START */}
                        <div className="flex items-center justify-center text-center flex-col gap-3 lg:gap-6">
                            <div className="text-[34px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] font-light flex">
                                <NumInc num={item.year} />+
                            </div>
                            <div
                                className="text-[14px] lg:text-[18px] leading-[18px] lg:leading-[22px] text-[#AAAAAA] md:text-white"
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}
                            />
                        </div>
                        {/* END */}
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Achievements;