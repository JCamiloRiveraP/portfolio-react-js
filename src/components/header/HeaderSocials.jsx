import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {SiLinktree} from 'react-icons/si';

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="http://linkedin.com " target="_blank" rel="noreferrer" ><AiFillLinkedin/></a>
        <a href="http://instagram.com " target="_blank" rel="noreferrer"><AiOutlineInstagram/></a>
        <a href="http://twitter.com " target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
        <a href="http://github.com " target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
        <a href="http://linktree.com " target="_blank" rel="noreferrer"><SiLinktree/></a>

    </div>
  )
}
export default HeaderSocials