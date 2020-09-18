// Library imports
import React, { FC, useContext, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import { Icon } from '@mdi/react';
import { mdiClose } from '@mdi/js';

// Context imports
import { PlayerSearchContext } from '../providers/PlayerSearchProvider';

interface Props {
    setShowSearch: Dispatch<SetStateAction<boolean>>;
}

const Wrapper = styled.div`
    font-size: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
`;

const SearchInput = styled.input`
    font-size: inherit;
    width: 100%;
    margin-right: 1rem;
    height: 100%;
    padding-left: 1rem;
`;

export const SearchBar: FC<Props> = ({ setShowSearch }: Props) => {
    const { setPlayerSearch } = useContext(PlayerSearchContext);

    return (
        <Wrapper>
            <SearchInput
                type="text"
                onChange={(e) => {
                    setPlayerSearch && setPlayerSearch(e.target.value);
                }}
            />
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setShowSearch(false);
                }}
            >
                <Icon path={mdiClose} size={1} />
            </a>
        </Wrapper>
    );
};
