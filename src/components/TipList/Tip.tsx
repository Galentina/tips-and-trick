/* Core */
import { FC } from 'react';
import { Link } from 'react-router-dom';

/* Other */
import { getTagIcon, formatDate } from '../../helpers';

interface ITipProps {
    id: string,
    tag: {
        id: string,
        name: string,
    }
    title: string,
    preview: string,
    author: string,
    created: string,
}
export const Tip: FC<ITipProps> = (props) => {
    const {
        id, tag, title, preview, author, created,
    } = props;

    const TagIcon = getTagIcon(tag.name);

    return (
        <article>
            <header>
                <TagIcon /> <h1>{ title }</h1>
            </header>
            <main>
                <time>
                    <TagIcon />
                    <div>
                        <span>🚀 { formatDate(created) }</span>
                        <span>👨🏼‍🚀 Автор: { author }</span>
                    </div>
                </time>
                <h2>{ title }</h2>
                <p>{ preview }</p>
            </main>
            <footer>
                <Link to = { id }>📖 &nbsp;Читать полностью &rarr;</Link>
            </footer>
        </article>
    );
};
