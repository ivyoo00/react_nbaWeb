import React from 'react';
import { Profile } from './Profile';
import { ShotChart } from './ShotChart';
import nba from 'nba';

window.nba = nba;

export class Main extends React.Component {
    state = {
        playerInfo: {
            playerId: nba.findPlayer('Lebron James').playerId
        }
    }

    componentDidMount() {
        const { playerId } = this.state.playerInfo;
        nba.stats
            .playerInfo({PlayerID: playerId})
            .then(({commonPlayerInfo, playerHeadlineStats}) => {
                const playerInfo = {
                    ...commonPlayerInfo[0],
                    ...playerHeadlineStats[0]
                };

                this.setState({
                    playerInfo
                });
            });
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo} />
                <ShotChart
                    playerId={this.state.playerInfo.playerId}
                    minCount={2}
                    displayToolTips={true}
                    chartType="hexbin"
                />
            </div>
        );
    }
}