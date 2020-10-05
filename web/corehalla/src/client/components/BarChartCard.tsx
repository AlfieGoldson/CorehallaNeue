// Library imports
import React, { FC } from 'react';
import styled from 'styled-components';

// Components imports
import { Card } from './Card';
import { BarChart } from './Charts';
import { StatDesc, StatSmall } from './TextStyles';

interface BarChartStat {
    title: string;
    amount: number;
    max: number;
}

interface Props {
    title: string;
    stats: BarChartStat[];
}

const BarChartStatWrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    & > div {
        margin-bottom: 0.25rem;
    }
`;

export const BarChartCard: FC<Props> = ({ title, stats }: Props) => {
    return (
        <Card title={title}>
            {stats.map(({ title: statTitle, amount, max }, i) => (
                <BarChartStatWrapper key={i}>
                    <div>
                        <StatSmall>{amount}</StatSmall>
                        <StatDesc>{statTitle}</StatDesc>
                    </div>
                    <BarChart width="100%" height="0.25rem" amount={(amount / max) * 100} />
                </BarChartStatWrapper>
            ))}
        </Card>
    );
};
