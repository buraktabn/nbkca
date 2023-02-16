import { Grid } from "@nextui-org/react";
import WorkCard from "../ui-components/Cards/WorkCard";
import { ContainerTitle } from "../ui-components/Title";

interface Props {
    items: Type.Work[]
    title: string
}

export default function Works(props: Props) {

    let {items}:{items: Type.Work[]} = props;

    return (
        <div>
            <div className="primary-wrapper center">
                <div className="h-line"></div>
                <div><h3 className="primary-title">our work</h3></div>
            </div>
            <div className="margin-60px">
                <div className="w-dyn-list">
                    <div role="list" className="work-grid w-dyn-items">
                        {items?.map((item: Type.Work) => WorkCard(item))}
                    </div>
                </div>
            </div>
        </div>
    )

}