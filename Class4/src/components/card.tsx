import { useState } from "react";

interface CardProps {
    userName: string;
    name: string;
    initialIsFollowing: boolean;
}

const CardX = ({userName, name, initialIsFollowing}: CardProps) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-follow is-following' : 'tw-follow';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                    className='tw-img-user' 
                    src={`https://unavatar.io/x/${userName}`} 
                    alt="Avatar" 
                />
                <div className='tw-user-name'>
                    <strong className='tw-name'>{name}</strong>
                    <span className='tw-account'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-button-text'>{text}</span>
                    <span className='unfollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

export default CardX;