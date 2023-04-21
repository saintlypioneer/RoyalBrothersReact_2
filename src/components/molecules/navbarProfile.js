import { useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Icon,
    createIcon
} from '@chakra-ui/react'
import {
    AtSignIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    LockIcon
} from "@chakra-ui/icons"

function Profile(props) {

    const { name } = useSelector(state => state.user);
    console.log(name);
    const dispatch = useDispatch();

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<AtSignIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuItem>
                    {name}
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>
                    My Rides
                </MenuItem>
                <MenuItem icon={
                    <Icon fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </Icon>
                }>
                    My Profile
                </MenuItem>
                <MenuItem onClick={()=>{
                    dispatch(logout());
                }} icon={<LockIcon />}>
                    Logout
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default Profile;