import Tabs from "../tabs";


const Courses = ({ homepage, courses }) => {
    return (
        <section className="bg-primary">
            <div className="max-w-7xl mx-auto py-16 sm:py-32 px-8 sm:px-0">
                <div className="space-y-6">
                    <h2 className="text-4xl text-secondary">{homepage.courses.title}</h2>
                    <p className="leading-relaxed text-white">
                        {homepage.courses.description}
                    </p>
                    <div>
                        <Tabs items={courses} />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Courses;