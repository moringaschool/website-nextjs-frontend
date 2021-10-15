

const Tabs = ( { items }) => {
    return (
        <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                    <div className="flex space-x-5">
                        {items.map((item, index) => {
                            return (
                                <div className="p-2 bg-white rounded-full shadow-lg h-32 w-32" key={`tab-title-${index}`}>
                                <div className="inline-flex items-center justify-center p-3 bg-primary focus:bg-secondary hover:bg-secondary cursor-pointer uppercase text-center text-white rounded-full h-full w-full text-xs">
                                    {item.title}
                                </div>
                                </div>
                            );
                        })}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">SSL Certificates</h3>
                    <p className="mt-5 text-base text-gray-500">
                        Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Tabs;