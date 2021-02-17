import React from 'react';
import './Sidebar.css';
import SiderbarOptions from './SiderbarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ playlists }, dispach] = useStateValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" srcset="" />
            <SiderbarOptions Icon={HomeIcon} title="Home" />
            <SiderbarOptions Icon={SearchIcon} title="Search" />
            <SiderbarOptions Icon={LibraryMusicIcon} title="Your Liberary" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SiderbarOptions title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
