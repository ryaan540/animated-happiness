import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection/InfoSection";

function MainSection() {
    return (
        <div className="flex flex-row items-center gap-0.1">
            <ImageSection />
            <InfoSection />
        </div>
    );
}

export default MainSection;
