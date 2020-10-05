// Library imports
import React, { FC } from 'react';
import Link from 'next/link';
// Components imports
import { StatSmall, StatMedium, StatDesc } from './TextStyles';

interface Props {
    name: string;
    level: number;
    xp: number;
    personalXp: number;
    xpPercentage: number;
    id: string | number; // TODO: ch.js
}

export const SectionClanOverviewSmallContent: FC<Props> = ({
    name,
    level,
    xp,
    personalXp,
    xpPercentage,
    id,
}: Props) => {
    return (
        <div>
            <Link href={`/stats/clan/${id}`}>
                <StatMedium>{name}</StatMedium>
            </Link>
            <div>
                <StatDesc>level</StatDesc>
                <StatSmall>{level}</StatSmall>
                <StatDesc>({xp} xp)</StatDesc>
            </div>
            <div>
                <StatDesc>personal xp</StatDesc>
                <StatSmall>{personalXp}</StatSmall>
                <StatDesc>({xpPercentage.toFixed(2)}%)</StatDesc>
            </div>
        </div>
    );
};
