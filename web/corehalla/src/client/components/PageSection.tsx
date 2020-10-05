// Library imports
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiUnfoldLessHorizontal, mdiUnfoldMoreHorizontal } from '@mdi/js';
import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    title: string;
    initFoldState?: boolean;
}

const SectionTitle = styled(Link)`
    color: var(--text-2);
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    font-size: 0.75rem;
    cursor: pointer;

    svg {
        fill: var(--text-2);
    }

    &:hover {
        color: var(--accent);
        svg {
            fill: var(--accent);
        }
    }
`;

const PageSectionWrapper = styled(motion.section)`
    padding: 1rem;
`;

const PageSectionContent = styled.div`
    margin-top: 1rem;
`;

const FoldSectionIcon = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    cursor: pointer;

    svg {
        fill: var(--text-2);
    }

    &:hover {
        svg {
            fill: var(--accent);
        }
    }
`;

//TODO: Change foldState variable name

export const PageSection: FC<Props> = ({ children, title, initFoldState }: Props) => {
    const [foldState, setFoldState] = useState(initFoldState ?? false);
    return (
        <PageSectionWrapper>
            <SectionTitle
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setFoldState((oldState) => !oldState);
                }}
            >
                {title}
                {foldState ? (
                    <Icon path={mdiUnfoldLessHorizontal} size={1} />
                ) : (
                    <Icon path={mdiUnfoldMoreHorizontal} size={1} />
                )}
            </SectionTitle>
            <AnimatePresence>
                {foldState && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -50 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -50 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        <PageSectionContent>{children}</PageSectionContent>
                        <FoldSectionIcon onClick={() => setFoldState(false)}>
                            <Icon path={mdiChevronUp} size={0.75} color="var(--text)" />
                        </FoldSectionIcon>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageSectionWrapper>
    );
};

export const SectionSeparator = styled.hr`
    border-bottom: 1px solid var(--bg-2);
`;
