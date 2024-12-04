import './styles.scss';

interface Props {
    title?: string;
    subtitle: string;
    className?: string;
}

function PageTitle(props: Props) {

    const {
        title = 'KVADRED',
        subtitle,
        className,
    } = props;

    return (
        <div className={`page-title ${className}`}>
            <div className='page-title__title'>
                {title}
            </div>
            <div className='page-title__subtitle'>
                {subtitle}
            </div>
        </div>
    );
}

export default PageTitle;
