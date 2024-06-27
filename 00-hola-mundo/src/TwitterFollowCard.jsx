import PropTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({children, userName, initialIsFollowing }) {

    const [ isFollowing, setFollowing ] = useState(initialIsFollowing);

    const handleClick = () => {
        setFollowing(!isFollowing);
    }

    const imageSrc = `https://unavatar.io/${userName}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-folloWCard-userName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>                    
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

TwitterFollowCard.propTypes = {
    children: PropTypes.array,
    userName: PropTypes.string,
    formatUserName: PropTypes.string,
    initialIsFollowing: PropTypes.bool,
  };