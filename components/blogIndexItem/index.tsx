import Link from 'next/link';
import { Styles } from './styles';

type ItemType = {
    id: string,
    date: string,
    title: string,
    tag: string
}

export default function BlogItem({ item }: { item: ItemType}) {
    return (
        <Styles.BlogItemContainer>
            <Link href={`/insights/${item.id}`}>
                <Styles.Wrapper>
                    <h2>{item.title}</h2>
                    <Styles.Subwrapper>
                        <h6>{item.date}</h6>
                        <h6>{item.tag}</h6>
                    </Styles.Subwrapper>
                </Styles.Wrapper>
            </Link>
        </Styles.BlogItemContainer>
    )
}