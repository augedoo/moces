import { CgArrowLongRight } from "react-icons/cg";
import Button from "@/components/ui/Button";
import ContainerLayout from "@/components/layout/ContainerLayout";

const causes = [
    {
        title: "Sponsorship Support",
        highlight:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a documen. Long publishing and graphic design,.",
        // link: "/about/sponsorship-support",
    },
    {},
   
    {
        title: "Voluntary Support",
        highlight:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a documen. Long publishing and graphic design,.",
        // link: "/about/voluntary-support",
    },
    {},
    {
        title: "Start Foundation",
        highlight:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a documen. Long publishing and graphic design,.",
        // link: "/about/start-foundation",
    },
    {},
];

const Causes = () => {
    const renderCauses = (cause) =>
        cause.map((causesList, index) => {
            const { title, highlight, link } = causesList;

            if (index == 1)
            return (
                <div className='items-center justify-center hidden w-full h-full p-2 lg:flex flex-col'>
                    <h1 className='text-4xl font-bold text-center capitalize lg:text-5xl text-white lg:text-center'>
                        Causes
                    </h1>
                    <h3 className="text-xl font-semibold text-gray-50">How can get involved</h3>
                </div>
            );

        // Render empty blocks to create shape on large screens
        if (!causesList.title) return <div className='hidden lg:block'></div>;

            return (
                <div
                    key={index}
                    className="flex-1 flex-col flex w-full px-4 2xl:px-6 py-4 border-2 border-white"
                >
                    <h3 className="mb-2 text-2xl font-semibold text-gray-50">
                        {title}
                    </h3>

                    <p className="line-clamp-4 text-lg font-normal text-white">{highlight}</p>
                    {/* <Button
                        url={link} 
                        type="nextLink"
                        textContent="Learn More"
                        bgClassName="!bg-transparent"
                        className="mt-2 !p-0 !text-sm text-secondary-500"
                    >
                        <CgArrowLongRight className="w-7 h-7" />
                    </Button> */}
                </div>
            );
        });

    return (
        <div className="bg-secondary-700 lg:py-14 div">
            <img src="" alt="" />
            <div className='items-center justify-center  w-full h-full p-2 flex flex-col lg:hidden'>
                    <h1 className='text-5xl text-white font-bold text-center capitalize'>
                        Causes
                    </h1>
                    <h3 className="text-xl font-semibold text-gray-50">How can get involved</h3>
                </div>
            <ContainerLayout className="mx-auto">
                <div className="grid gap-4 mt-8 lg:mt-0 sm:flex-col lg:grid lg:grid-cols-3 lg:gap-0">
                    {renderCauses(causes)}
                </div>
                <div className="grid gap-4 pt-8 sm:grid-cols-2 xl:grid-rows-4"></div>
            </ContainerLayout>
        </div>
    );
};

export default Causes;
