import { ItemType, ProjectType } from './Types';

type Props = {
    item: ProjectType;
}

const Project = ({ item }: Props) => {
    return (
        <div
            className='flex flex-col items-center text-center'
            key={item.id}
            >
                <div className='mb-8'>

                </div>

        </div>
    );
};

export default Project;