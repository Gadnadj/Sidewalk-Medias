import { ItemType } from './Types';

type Props = {
    item: ItemType;
}

const Project = ({ item }: Props) => {
    return (
        <div
            className='flex flex-col items-center text-center'
            key={item.id}
        >
            <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
            <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
            <div className='mb-8'>
                <img className='rounded-2xl' src={item.image} alt="" />
            </div>


        </div>
    );
};

export default Project;