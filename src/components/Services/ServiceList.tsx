




export default function ServiceList({services}: any){


    let left = [...services];
    let right = [...services]


    return (
        <div className="container">
            <div className="grid-2-columns">
                <div className="service-list-left" >
                    {left.map((item: any, index: number) => Service({item}))}
                </div>
                <div className="service-list-right">
                    {right.map((item: any, index: number) => Service({item}))}
                </div>
            </div>
        </div>
    )
}


function Service({item}: any){
    return (
        <div className="service-list-item" >
            <h6 className="item-title">{item?.title}</h6>
            <div className="item-image">
                <img src={item?.image} />
            </div>
            <p>{item?.description}</p>
        </div>
    )
}