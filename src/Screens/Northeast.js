const Northeast = ({ sendStoryToState }) => {

    return (
        <>
            <div id='northeast' className='content-main trans'>
                <h1 className='text-center'>Northeast</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a placerat nisi. Sed ut posuere lorem. Vestibulum lobortis fermentum vulputate. Integer viverra orci ut iaculis tincidunt. Morbi lorem tortor, laoreet non lectus mattis, fermentum laoreet tellus. Duis eu egestas arcu, eu laoreet velit.</p>
                                <button type="button" className="btn btn-outline-primary" onClick={() => sendStoryToState('northeast01')}>Primary</button>
                            </div>
                            <div className="col-4">
                                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tristique sagittis arcu vel laoreet. Nulla et tristique nibh. Proin vitae lectus faucibus, imperdiet urna id, interdum neque.</p>
                                <button type="button" className="btn btn-outline-primary" onClick={() => sendStoryToState('northeast02')}>Primary</button>
                                
                            </div>
                            <div className="col-4">
                                <p>Nullam ultrices enim neque, pellentesque blandit sapien tempus nec. Maecenas aliquet tellus urna, id fermentum lectus tempus et. Donec fermentum gravida turpis at blandit. Morbi varius, eros ac placerat rutrum, dolor mauris faucibus orci, at ultricies orci ligula laoreet augue. </p>
                                <button type="button" className="btn btn-outline-primary" onClick={() => sendStoryToState('northeast03')}>Primary</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Northeast;