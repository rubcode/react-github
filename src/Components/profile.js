import React from 'react';
import styled from 'styled-components'
//import props from './profile-data'
import Button from './button';
import Icon from './Icon'

const ProfileStyled = styled.div`
    grid-area: profile;
    .avatar{
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid var(--grey-1);
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }
    .name{
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: 0.5rem;
    }
    .username{
        margin-block:0.5rem;
        margin-block-end: 1.5rem;
        font: var(--headline2-ligth);
    }
   .info{
        color: var(--grey-1);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-block: 0.5rem;
        font: var(--body2-semi-bold);
   }
   a:hover{
        text-decoration: underline;
   }
   .buttons{
        display: flex;
        gap: 0.5rem;
        margin-block-end: 1.5rem;
   }
   
   @media screen and (prefers-color-scheme: light) {
        .info,.name,.username{
            color: var(--black);
        }
    }
`

function Profile(props) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let color = "white";
    if(!prefersDarkScheme){
        color = "black";
    }

    const {name,login,bio, avatar_url, location, twitter_username,blog,followers,following} = props;
    return (
        <ProfileStyled>
            <img className='avatar' src={avatar_url} alt={name}></img>
            <p className='name'>{name}</p>
            <p className='username'>{login}</p>
            <div className='buttons'>
                <Button
                    text="Follow"
                    link="#"
                />
                <Button
                    text="Sponsor"
                    Icon={<Icon
                        name="heart"
                        size={24}
                        color="var(--pink)"

                    />}
                />
            </div> 
            <p className='bio info'>{bio}</p>
            <p className='folowers info'>
                <Icon name="user" color={color}/> {followers} <span>Folowers</span> <Icon name="github" color={color}/> {following} <span>Folowing</span>
            </p>
            <p className='location info'><Icon  name="location" color={color}/> {location}</p>
            <a className='info' href={blog} target='_blank' rel='noreferrer'>{blog}</a>
            <a className='info' href={`http://www.twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>@{twitter_username}</a>
        </ProfileStyled>
    )
}

export default Profile
